# PLC Types

TypeScript type definitions used at Pacific Lutheran College.

## Installation

### From Git Repository

```bash
npm install git+https://github.com/pacific-lutheran-college/api-types
```

## Usage

### Basic Import

```typescript
import { EPEligible, NavGroup } from "api-types";

// Use the types
const eligible: EPEligible = {
  code: "MATH",
  years: [7, 8, 9],
};
```

### Namespace Imports (for conflicting types)

```typescript
import { SchoolboxAssessment, TASSEmployeeHR } from "api-types";

// Use namespaced types to avoid conflicts
const assessment: SchoolboxAssessment.Assessment = {
  // ... assessment data
};

const employee: TASSEmployeeHR.Employee = {
  // ... employee data
};
```

### Module-specific Imports

```typescript
// Import from specific modules
import { Student } from "api-types/dist/Clipboard_API/getStudents";
import { DeviceLease } from "api-types/dist/Sharepoint/DeviceLease";
```

## Available Type Categories

### Core Types

- **EducationPerfect**: `EPEligible`
- **Operoo**: Various operational types
- **Overdues**: Overdue tracking types
- **DocumentIntelligence**: Document processing types

### API Types

- **Clipboard API**: Student data, absences, pagination
- **Schoolbox**: Assessments, users, groups
- **TASS API**: Comprehensive school management system types
- **Sharepoint**: Device leasing and document management

### Namespace Exports

When types have naming conflicts, they're exported under namespaces:

- `SchoolboxAssessment.*`
- `SchoolboxUser.*`
- `TASSEmployeeHR.*`
- `TASSCommunicationRules.*`

## Development

### Building the Package

```bash
npm run build
```

### Monorepo Workspaces

The repository now includes npm workspaces for package-level builds and generation.

```bash
# Build every workspace package
npm run build:workspaces

# Generate types for TASS API 2026.03 package
npm run generate:tassapi-2026-03

# Build only the TASS API 2026.03 package
npm run build:tassapi-2026-03

# Generate Zod schemas for TASS API 2026.03 companion package
npm run generate:tassapi-zod-2026-03

# Build only the TASS API 2026.03 Zod companion package
npm run build:tassapi-zod-2026-03

# Run a safeParse consumer example
npm run example:zod

# Run a safeParse list payload example
npm run example:zod:list
```

### Publishing

```bash
npm run prepublishOnly  # Builds automatically
npm publish
```

## File Structure

```
types/
├── index.ts                    # Main export file
├── educationPerfect.ts         # Education Perfect types
├── operoo.ts                   # Operoo types
├── schoolbox.ts                # Core Schoolbox types
├── Clipboard_API/              # Clipboard API modules
├── Schoolbox/                  # Extended Schoolbox types
├── Sharepoint/                 # Sharepoint integration types
└── TASSAPI/                    # TASS API types
    ├── assessment/
    ├── employee-hr/
    ├── identity-management/
    ├── lms-integration/
    ├── online-enrolments/
    ├── student-academic-analytics/
    └── student-details/
```
