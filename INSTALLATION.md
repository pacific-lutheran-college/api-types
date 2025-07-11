# Installation Guide for API Types

## Package Name Update

The package name has been changed from `API-Types` to `api-types` to follow npm naming conventions.

## Option 1: Local Package Installation (Recommended for Development)

If you want to use this package in another project on the same machine:

```bash
# In your target project directory
npm install file:/Users/tambrose/Code/API-Types
```

## Option 2: Git Repository Installation

1. First, push this package to a Git repository:

```bash
git init
git add .
git commit -m "Initial commit of PLC types package"
git remote add origin https://github.com/your-org/plc-types.git
git push -u origin main
```

2. Then install in other projects:

```bash
npm install git+https://github.com/pacific-lutheran-college/API-Types
```

**Note: The package will automatically build TypeScript files after installation thanks to the `prepare` script.**

## Option 3: NPM Registry (For Distribution)

1. Create an account on npmjs.com
2. Login to npm:

```bash
npm login
```

3. Publish the package:

```bash
npm publish
```

4. Install in other projects:

```bash
npm install api-types
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
