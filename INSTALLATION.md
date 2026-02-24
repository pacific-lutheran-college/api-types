# Installation Guide for API Types

## Package Name Update

The package name has been changed from `API-Types` to `api-types` to follow npm naming conventions.

## Option 1: Local Package Installation (Recommended for Development)

If you want to use this package in another project on the same machine:

```bash
# In your target project directory
npm install file:/Users/tambrose/Code/api-types
```

## Option 2: Private Git Repository Installation (Recommended)

Install directly from the private repo (no public npm registry required).

### HTTPS

```bash
npm install git+https://github.com/pacific-lutheran-college/api-types.git
```

### SSH

```bash
npm install git+ssh://git@github.com/pacific-lutheran-college/api-types.git
```

### Install a specific branch or tag

```bash
# Branch
npm install git+ssh://git@github.com/pacific-lutheran-college/api-types.git#2026.03

# Tag
npm install git+ssh://git@github.com/pacific-lutheran-college/api-types.git#v2026.03.0
```

**Note:** The package builds automatically on install via the `prepare` script.

## Release Checklist (Private Git Repo)

Use this checklist for each new TASS API release.

1. Update package version in `packages/tassapi-types-2026-03/package.json`.
2. Replace `packages/tassapi-types-2026-03/spec/openapi-spec.json` with the latest OpenAPI file.
3. Regenerate and build:

```bash
npm run generate:tassapi-2026-03
npm run build:tassapi-2026-03
```

4. Validate workspace build:

```bash
npm run build:workspaces
```

5. Commit changes and tag release:

```bash
git add .
git commit -m "Release TASS API types <version>"
git tag tassapi-types-<version>
```

6. Push branch and tag:

```bash
git push origin <branch-name>
git push origin tassapi-types-<version>
```

## Release Checklist (TASS Zod Package)

Use this checklist for each new TASS API Zod release.

1. Update package version in `packages/tassapi-zod-2026-03/package.json`.
2. Replace `packages/tassapi-zod-2026-03/spec/openapi-spec.json` with the latest OpenAPI file.
3. Regenerate and build:

```bash
npm run generate:tassapi-zod-2026-03
npm run build:tassapi-zod-2026-03
```

4. Validate workspace build:

```bash
npm run build:workspaces
```

5. Commit changes and tag release:

```bash
git add .
git commit -m "Release TASS API Zod package <version>"
git tag tassapi-zod-<version>
```

6. Push branch and tag:

```bash
git push origin <branch-name>
git push origin tassapi-zod-<version>
```

## Usage in Your Projects

Once installed, you can import types like this:

```typescript
// Import specific types
import { EPEligible, NavGroup } from "api-types";

// Import namespaced types (to avoid conflicts)
import { SchoolboxAssessment, TASSEmployeeHR } from "api-types";

// Use the types
const student: NavGroup = {
  // ... your data
};
```

## Development Workflow

1. Make changes to types in the `types/` directory
2. Run `npm run build` to compile
3. Test changes with `npm run example`
4. If using local installation, the changes will be reflected in dependent projects after rebuild

## Workspace Workflow (Monorepo)

This repository uses npm workspaces for package-level tasks.

```bash
# Build all workspace packages
npm run build:workspaces

# Generate TASS API 2026.03 types from OpenAPI
npm run generate:tassapi-2026-03

# Build only the TASS API 2026.03 package
npm run build:tassapi-2026-03

# Generate TASS API 2026.03 Zod schemas from OpenAPI
npm run generate:tassapi-zod-2026-03

# Build only the TASS API 2026.03 Zod package
npm run build:tassapi-zod-2026-03
```

TASS API 2026.03 package location:

`packages/tassapi-types-2026-03`

TASS API 2026.03 Zod package location:

`packages/tassapi-zod-2026-03`

## Troubleshooting

### Import Issues

If imports are not working after installation, try these steps:

1. **Clear npm cache and reinstall:**

   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Verify the package was built correctly:**

   ```bash
   # Check if dist folder exists in node_modules
   ls node_modules/api-types/dist/

   # Check if index.d.ts exists
   cat node_modules/api-types/dist/index.d.ts
   ```

3. **Manual build (if needed):**
   ```bash
   cd node_modules/api-types
   npm run build
   ```

### TypeScript Configuration

Make sure your project's `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

### Common Import Patterns

```typescript
// For specific types
import type { NavGroup, Student } from "api-types";

// For namespaced imports (recommended to avoid conflicts)
import { TASSEmployeeHR, SchoolboxAssessment } from "api-types";

// Example usage
const employee: TASSEmployeeHR.GetEmployeeDetailsResponse = {
  // ... your data
};
```
