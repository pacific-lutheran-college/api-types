# Pacific Lutheran College API Type Definitions

This repository contains TypeScript type definitions for various internal and external APIs (e.g., TASS, Schoolbox, Microsoft Graph) used by Pacific Lutheran College. It is structured as a monorepo to allow independent versioning and consumption of specific service types.

## 📦 Packages

Current available packages:

- **[@pacific-lutheran-college/api-types-tass](packages/tass)**: Type definitions for the TASS API.

## 🚀 Installation & Usage

These packages are hosted on **GitHub Packages**. You must configure your project to authenticate with the GitHub registry before installing.

### 1. Configure `.npmrc`

Create or update the `.npmrc` file in the root of your consumer project:

```properties
@pacific-lutheran-college:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

> **Note:** Ensure your local environment (or CI/CD pipeline) has the `GITHUB_TOKEN` environment variable set with `read:packages` permissions.

### 2. Install the Package

Install the specific package you need:

```bash
npm install @pacific-lutheran-college/api-types-tass
```

### 3. Usage in Code

You can import specific service modules to keep your bundle size optimal:

```typescript
import { Student } from "@pacific-lutheran-college/api-types-tass";
// or specifically
import { Attendance } from "@pacific-lutheran-college/api-types-tass/student";

// Usage
const studentDetails: Student.GetDetailsResponse = await fetchStudent(12345);
```

Or import everything:

```typescript
import * as Tass from "@pacific-lutheran-college/api-types-tass";
```

### Type-Safe OData Queries (`$select`)

The TASS API supports OData `$select` queries, which return partial objects. To maintain type safety, use the `Select` utility helper:

```typescript
import { StudentResponse } from "@pacific-lutheran-college/api-types-tass/student";
import { Select } from "@pacific-lutheran-college/api-types-tass";

// 1. Define your select string as a constant (Must be a const!)
const fields = "stud_code,surname,first_name,dob" as const;

// 2. Create the narrowed type
type StudentSubset = Select<StudentResponse, typeof fields>;

// 3. Use it in your API call
async function getStudents() {
  const result = await api.get({ $select: fields });
  const students = result.data as StudentSubset[];

  // Type Safe!
  console.log(students[0].first_name); // ✅ OK
  console.log(students[0].mobile_phone); // ❌ Error: Property 'mobile_phone' does not exist
}
```

## 🔄 Releasing New Versions

Publishing is automated via GitHub Actions whenever changes are pushed to the `main` branch.

1.  **Update Version:** Open the `package.json` of the package you want to release (e.g., `packages/tass/package.json`).
2.  **Bump Version Number:** Increment the `version` field (e.g., `0.0.1` -> `0.0.2`).
3.  **Commit & Push:**
    ```bash
    git add packages/tass/package.json
    git commit -m "chore: bump tass version to 0.0.2"
    git push origin main
    ```
4.  **Wait for CI:** The GitHub Action will automatically build and publish the new version to the registry.

## ➕ Adding New Services

To add a new API service (e.g., **Schoolbox**) to this monorepo:

### 1. Create Package Directory

Create a new folder in `packages/`:

```bash
mkdir -p packages/schoolbox/src
```

### 2. Initialize `package.json`

Create `packages/schoolbox/package.json`. Ensure the scope matches and `publishConfig` points to GitHub:

```json
{
  "name": "@pacific-lutheran-college/api-types-schoolbox",
  "version": "0.0.1",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### 3. Configure TypeScript

Add a `tsconfig.json` extending the base configuration:

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*"]
}
```

### 4. Add Type Generation (Optional)

If you have an OpenAPI spec, create a generation script in `scripts/` similar to `scripts/generate-tass.ts` and add a script to the root `package.json`.

### 5. Update CI/CD

Update `.github/workflows/publish.yml` to include your new package in the build and publish steps:

```yaml
- name: Build Schoolbox Package
  run: npm run build -w packages/schoolbox

- name: Publish Schoolbox Package
  run: npm publish -w packages/schoolbox
  env:
    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 🛠 Development

### Setup

```bash
npm install
```

### Generating Types (TASS)

If the TASS OpenAPI spec changes, update `packages/tass/openapi-spec.json` and run:

```bash
npm run generate:tass
```
