import { generateApi } from "swagger-typescript-api";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Updated path to look inside packages/tass/
const specPath = path.resolve(process.cwd(), "packages/tass/openapi-spec.json");
const outputDir = path.resolve(process.cwd(), "packages/tass/src");

// Read the spec
const specOriginal = JSON.parse(fs.readFileSync(specPath, "utf-8"));

// Extract unique top-level tags
const uniqueTags = new Set<string>();

// Helper to get group name from tag string
const getGroupName = (tag: string) => tag.split(" - ")[0];

// Scan paths for tags
if (specOriginal.paths) {
  Object.values(specOriginal.paths).forEach((methods: any) => {
    Object.values(methods).forEach((op: any) => {
      if (op.tags) {
        op.tags.forEach((t: string) => uniqueTags.add(getGroupName(t)));
      }
    });
  });
}

const modules = Array.from(uniqueTags).sort();
console.log(`Found service modules: ${modules.join(", ")}`);

async function generate() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const generatedModules: string[] = [];

  for (const moduleName of modules) {
    const rawName = moduleName.toLowerCase().replace(/\s+/g, "-");
    const modulePath = path.resolve(outputDir, rawName);

    // Create module directory
    if (!fs.existsSync(modulePath)) {
      fs.mkdirSync(modulePath, { recursive: true });
    }

    console.log(`Generating types for: ${moduleName}...`);

    // Create a filtered spec for this module
    const filteredSpec = JSON.parse(JSON.stringify(specOriginal));
    filteredSpec.paths = {};

    // Only keep paths that have a tag starting with our module name
    for (const [pathUrl, methods] of Object.entries(specOriginal.paths)) {
      let keepPath = false;
      const keptMethods: any = {};
      const methodsObj = methods as any;

      for (const [method, op] of Object.entries(methodsObj)) {
        // Check if this operation belongs to the current module
        const opTags = (op as any).tags || [];
        if (opTags.some((t: string) => getGroupName(t) === moduleName)) {
          keptMethods[method] = op;
          keepPath = true;
        }
      }

      if (keepPath) {
        filteredSpec.paths[pathUrl] = keptMethods;
      }
    }

    try {
      await generateApi({
        // @ts-ignore
        name: "Api.ts", // Explicitly set it to what it seems to default to, just to be sure
        output: modulePath,
        spec: filteredSpec,
        generateClient: false,
        generateRouteTypes: false,
        extractRequestParams: true,
        extractRequestBody: true,
        extractEnums: true,
        apiClassName: moduleName.replace(/[^a-zA-Z]/g, "") + "Api",
      });

      // Rename Api.ts to index.ts
      if (fs.existsSync(path.join(modulePath, "Api.ts"))) {
        fs.renameSync(
          path.join(modulePath, "Api.ts"),
          path.join(modulePath, "index.ts"),
        );
      }

      generatedModules.push(rawName);
    } catch (e) {
      console.error(`Failed to generate ${moduleName}`, e);
    }
  }

  // Create root index.ts for the TASS package
  const exports = generatedModules
    .map((m) => `export * as ${m.replace(/-/g, "_")} from './${m}';`)
    .join("\n");

  fs.writeFileSync(path.resolve(outputDir, "index.ts"), exports);
  console.log(`Done! Generated modules: ${generatedModules.join(", ")}`);
}

generate().catch(console.error);
