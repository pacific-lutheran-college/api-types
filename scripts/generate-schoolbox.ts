import { generateApi } from "swagger-typescript-api";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import yaml from "js-yaml";
import ts from "typescript";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const specPath = path.resolve(
  process.cwd(),
  "packages/schoolbox/openapi-spec.yaml",
);
const outputDir = path.resolve(process.cwd(), "packages/schoolbox/src");

// Read the spec
const specFileContent = fs.readFileSync(specPath, "utf-8");
const specOriginal = yaml.load(specFileContent) as any;

// Extract unique top-level tags
const uniqueTags = new Set<string>();

// Scan paths for tags
if (specOriginal.paths) {
  Object.values(specOriginal.paths).forEach((methods: any) => {
    Object.values(methods).forEach((op: any) => {
      if (op.tags) {
        op.tags.forEach((t: string) => uniqueTags.add(t));
      }
    });
  });
}

const modules = Array.from(uniqueTags).sort();
console.log(`Found service modules: ${modules.join(", ")}`);

/**
 * Prunes unused components from the OpenAPI spec based on the active paths.
 * Recursively traverses used paths to find all referenced components (schemas, responses, etc.)
 * quite aggressively to ensure the generated output is minimal.
 */
function pruneSpec(spec: any) {
  const usedRefs = new Set<string>();
  const visitedRefs = new Set<string>();

  function collectRefs(obj: any) {
    if (!obj || typeof obj !== "object") return;

    if (Array.isArray(obj)) {
      obj.forEach(collectRefs);
      return;
    }

    if (obj.$ref && typeof obj.$ref === "string") {
      const ref = obj.$ref;
      if (!visitedRefs.has(ref)) {
        visitedRefs.add(ref);
        usedRefs.add(ref);

        if (ref.startsWith("#/components/")) {
          const parts = ref.replace("#/components/", "").split("/");
          if (parts.length >= 2) {
            const section = parts[0];
            const name = parts.slice(1).join("/");

            if (
              spec.components &&
              spec.components[section] &&
              spec.components[section][name]
            ) {
              // Recurse into the referenced component
              collectRefs(spec.components[section][name]);
            }
          }
        }
      }
    }

    // Continue traversing current object
    Object.values(obj).forEach(collectRefs);
  }

  // Start collection from paths
  collectRefs(spec.paths);

  // Rebuild components
  if (spec.components) {
    const newComponents: any = {};

    if (spec.components.securitySchemes) {
      newComponents.securitySchemes = spec.components.securitySchemes;
    }

    for (const section of Object.keys(spec.components)) {
      if (section === "securitySchemes") continue;

      const componentGroup = spec.components[section];
      if (!componentGroup) continue;

      for (const name of Object.keys(componentGroup)) {
        // Construct the ref key that would point to this component
        const ref = `#/components/${section}/${name}`;
        if (usedRefs.has(ref)) {
          if (!newComponents[section]) newComponents[section] = {};
          newComponents[section][name] = componentGroup[name];
        }
      }
    }
    // Replace components with pruned version
    spec.components = newComponents;
  }
}

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

    // Reset paths
    filteredSpec.paths = {};

    // Only keep paths that have a tag matching our module name
    for (const [pathUrl, methods] of Object.entries(specOriginal.paths)) {
      let keepPath = false;
      const keptMethods: any = {};
      const methodsObj = methods as any;

      for (const [method, op] of Object.entries(methodsObj)) {
        // Check if this operation belongs to the current module
        const opTags = (op as any).tags || [];
        if (opTags.includes(moduleName)) {
          keptMethods[method] = op;
          keepPath = true;
        }
      }

      if (keepPath) {
        filteredSpec.paths[pathUrl] = keptMethods;
      }
    }

    // Prune unused schemas
    pruneSpec(filteredSpec);

    try {
      await generateApi({
        //@ts-ignore
        name: "Api.ts",
        output: modulePath,
        spec: filteredSpec,
        generateClient: false,
        generateRouteTypes: false,
        extractRequestParams: true,
        extractRequestBody: true,
        extractEnums: true,
        apiClassName: moduleName.replace(/[^a-zA-Z0-9]/g, "") + "Api",
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

  // Create root index.ts
  const exports = generatedModules
    .map((m) => `export * as ${m.replace(/-/g, "_")} from "./${m}";`)
    .join("\n");

  fs.writeFileSync(path.resolve(outputDir, "index.ts"), exports);
  console.log(`Done! Generated modules: ${generatedModules.join(", ")}`);
}

generate().catch(console.error);
