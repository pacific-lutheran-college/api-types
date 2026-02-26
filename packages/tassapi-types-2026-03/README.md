# tassapi-types-2026-03

TypeScript types for the TASS API v2026.03, generated from the official OpenAPI specification.

Exports:

- **Generated types** — `paths`, `components`, `operations` interfaces derived from the spec
- **Named projections** — pre-defined `Pick` types for common `$select` patterns
- **`SelectResponse<T, K>`** — utility type for ad-hoc field selection

> For runtime validation, see the companion package [`tassapi-zod-2026-03`](../tassapi-zod-2026-03).

## Installation

```json
{
  "dependencies": {
    "tassapi-types-2026-03": "git+https://github.com/your-org/api-types.git#workspace=tassapi-types-2026-03"
  }
}
```

## Usage

### Accessing a generated schema

All schema types live under `components['schemas']`. This is the source of truth — every field the API can return is typed here.

```typescript
import type { components } from "tassapi-types-2026-03";

type StudentResponse = components["schemas"]["StudentResponse"];
type EmployeeResponse = components["schemas"]["EmployeeResponse"];

// Request/response types are also available
type GetUserTokenRequest = components["schemas"]["GetUserTokenRequest"];
type UserTokenResponse = components["schemas"]["UserTokenResponse"];
```

### Using named projections

Named projections are `Pick` types representing the fields passed to a specific `$select` query. Use these for the most common access patterns.

```typescript
import type {
  StudentSummary,
  StudentCard,
  StudentContact,
  StudentEnrolment,
} from "tassapi-types-2026-03";

// $select=stud_code,first_name,surname,preferred_name,year_grp,form_cls
async function getStudentList(cmpyCode: string): Promise<StudentSummary[]> {
  const res = await fetch(
    `/${cmpyCode}/students?$select=stud_code,first_name,surname,preferred_name,year_grp,form_cls`,
  );
  return res.json() as Promise<StudentSummary[]>;
}

// $select=stud_code,first_name,surname,...
async function getStudentCard(
  cmpyCode: string,
  studCode: string,
): Promise<StudentCard> {
  const res = await fetch(
    `/${cmpyCode}/students/${studCode}?$select=stud_code,first_name,surname,preferred_name,preferred_surname,year_grp,form_cls,gender,dob,campus_code,pctut_grp,boarder`,
  );
  return res.json() as Promise<StudentCard>;
}
```

Available named projections:

| Type               | Fields                                                                                                | Description                    |
| ------------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------ |
| `StudentSummary`   | `stud_code`, `first_name`, `surname`, `preferred_name`, `year_grp`, `form_cls`                        | Minimal ID for lists/dropdowns |
| `StudentCard`      | + `preferred_surname`, `gender`, `dob`, `campus_code`, `pctut_grp`, `boarder`                         | Profile display                |
| `StudentContact`   | `stud_code`, `first_name`, `surname`, `e_mail`, `mob_phone`, `par_code`, `sms_flg`                    | Communication                  |
| `StudentEnrolment` | `stud_code`, `cmpy_code`, `doe`, `dol`, `next_yr_ind`, `year_grp`, `campus_code`                      | Enrolment status               |
| `EmployeeSummary`  | `emp_code`, `first_name`, `surname`, `tch_code`, `cmpy_code`                                          | Minimal ID for lists/dropdowns |
| `EmployeeCard`     | + `preferred_name`, `position_text`, `position_title`, `status_text`, `start_date`                    | Profile display                |
| `EmployeeContact`  | `emp_code`, `first_name`, `surname`, `e_mail`, `school_email`, `mob_phone`, `phone_w_text`, `sms_flg` | Communication                  |

### Using `SelectResponse` for ad-hoc projections

When no named projection fits, use `SelectResponse<T, K>` to construct a one-off type. The constraint `K extends keyof T` ensures the selected fields actually exist on the base type.

```typescript
import type { components, SelectResponse } from "tassapi-types-2026-03";

type StudentResponse = components["schemas"]["StudentResponse"];

// Type mirrors: ?$select=stud_code,dob,religion,visa_subclass
type StudentDemographics = SelectResponse<
  StudentResponse,
  "stud_code" | "dob" | "religion" | "visa_subclass"
>;

// Compile error — 'nonexistent_field' is not a key of StudentResponse
type Bad = SelectResponse<StudentResponse, "stud_code" | "nonexistent_field">;
//                                                         ^^^^^^^^^^^^^^^^^^
// Type '"nonexistent_field"' does not satisfy the constraint 'keyof StudentResponse'
```

### Accessing path and operation types

Use the `paths` interface to type request parameters and responses by endpoint.

```typescript
import type { paths } from "tassapi-types-2026-03";

// Path parameters for a specific endpoint
type GetStudentParams =
  paths["/{cmpy_code}/students/{stud_code}"]["get"]["parameters"]["path"];
// { cmpy_code: string; stud_code: string }

// Response type for a specific operation
type GetStudentResponse =
  paths["/{cmpy_code}/students/{stud_code}"]["get"]["responses"]["200"]["content"]["application/json"];
```

## Development

### Regenerate types

Run from the package directory or from the monorepo root with `--workspaces`:

```bash
npm run generate
```

This overwrites `src/generated.ts` from `../../specs/tassapi-2026-03.json`. Do not edit `src/generated.ts` by hand.

### Build

```bash
npm run build
```

### Adding projections

Add new projection types in `src/projections/`. Export them from `src/projections/index.ts` and re-export from `src/index.ts`. Each projection should include a JSDoc comment documenting the corresponding `$select` string.
