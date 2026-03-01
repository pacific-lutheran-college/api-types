import { generateApi } from "swagger-typescript-api";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

/**
 * Recursively collects every $ref string found anywhere in a JSON value.
 */
function collectRefs(
  value: unknown,
  refs: Set<string> = new Set(),
): Set<string> {
  if (Array.isArray(value)) {
    for (const item of value) collectRefs(item, refs);
  } else if (value !== null && typeof value === "object") {
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (k === "$ref" && typeof v === "string") {
        refs.add(v);
      } else {
        collectRefs(v, refs);
      }
    }
  }
  return refs;
}

/**
 * Given a set of directly-referenced component names, expand the set by
 * following $ref chains inside their schemas (handles nested/composed schemas).
 */
function resolveTransitiveRefs(
  rootRefs: Set<string>,
  components: Record<string, any>,
): Set<string> {
  const resolved = new Set<string>();
  const queue = Array.from(rootRefs);

  while (queue.length > 0) {
    const ref = queue.shift()!;
    // ref looks like "#/components/schemas/Foo" or "#/definitions/Foo"
    const name = ref.split("/").pop()!;
    if (resolved.has(name)) continue;
    resolved.add(name);

    // Find the schema in any top-level components bucket
    for (const bucket of Object.values(components)) {
      if (bucket && typeof bucket === "object" && name in (bucket as object)) {
        const nested = collectRefs((bucket as any)[name]);
        for (const nestedRef of nested) {
          const nestedName = nestedRef.split("/").pop()!;
          if (!resolved.has(nestedName)) queue.push(nestedRef);
        }
        break;
      }
    }
  }

  return resolved;
}

/**
 * Returns a copy of `components` containing only entries whose names appear
 * in `allowedNames`.
 */
function filterComponents(
  components: Record<string, any>,
  allowedNames: Set<string>,
): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [bucket, entries] of Object.entries(components)) {
    if (entries && typeof entries === "object") {
      const filtered: Record<string, any> = {};
      for (const [name, value] of Object.entries(
        entries as Record<string, unknown>,
      )) {
        if (allowedNames.has(name)) filtered[name] = value;
      }
      if (Object.keys(filtered).length > 0) result[bucket] = filtered;
    }
  }
  return result;
}

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

    // Prune components to only those referenced by the filtered paths
    if (specOriginal.components || specOriginal.definitions) {
      const directRefs = collectRefs(filteredSpec.paths);
      const allComponents: Record<string, any> = specOriginal.components ?? {
        schemas: specOriginal.definitions,
      };
      const allowedNames = resolveTransitiveRefs(directRefs, allComponents);
      if (specOriginal.components) {
        filteredSpec.components = filterComponents(
          specOriginal.components,
          allowedNames,
        );
      } else if (specOriginal.definitions) {
        const filtered = filterComponents(
          { schemas: specOriginal.definitions },
          allowedNames,
        );
        filteredSpec.definitions = filtered.schemas ?? {};
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
