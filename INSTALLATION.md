# Installation Guide for PLC Types

## Option 1: Local Package Installation (Recommended for Development)

If you want to use this package in another project on the same machine:

```bash
# In your target project directory
npm install file:/Users/tambrose/Code/plc-types
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
npm install git+https://github.com/your-org/plc-types.git
```

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
npm install plc-types
```

## Usage in Your Projects

Once installed, you can import types like this:

```typescript
// Import specific types
import { EPEligible, NavGroup } from 'plc-types';

// Import namespaced types (to avoid conflicts)
import { SchoolboxAssessment, TASSEmployeeHR } from 'plc-types';

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
