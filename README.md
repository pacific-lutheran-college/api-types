# PLC Types

TypeScript type definitions used at Pacific Lutheran College.

## Installation

### From npm (if published)
```bash
npm install plc-types
```

### From Git Repository
```bash
npm install git+https://github.com/your-org/plc-types.git
```

### Local Development
```bash
npm install /path/to/plc-types
```

## Usage

### Basic Import
```typescript
import { EPEligible, NavGroup } from 'plc-types';

// Use the types
const eligible: EPEligible = {
  code: "MATH",
  years: [7, 8, 9]
};
```

### Namespace Imports (for conflicting types)
```typescript
import { SchoolboxAssessment, TASSEmployeeHR } from 'plc-types';

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
import { Student } from 'plc-types/dist/Clipboard_API/getStudents';
import { DeviceLease } from 'plc-types/dist/Sharepoint/DeviceLease';
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

## License

ISC
