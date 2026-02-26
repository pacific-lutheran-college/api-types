# tassapi-zod-2026-03

Zod runtime schemas for the TASS API v2026.03, generated from the official OpenAPI specification.

Use this package when you need to **validate API responses at runtime** — for example, at integration boundaries, in background jobs, or anywhere a parse failure should be caught explicitly rather than silently producing wrong data.

For compile-time types without a runtime dependency, see the companion package [`tassapi-types-2026-03`](../tassapi-types-2026-03).

## Installation

```json
{
  "dependencies": {
    "zod": "^3.25.0",
    "tassapi-zod-2026-03": "git+https://github.com/your-org/api-types.git#workspace=tassapi-zod-2026-03"
  }
}
```

`zod` is a peer dependency — your project must provide it.

## Usage

### Validating a response

```typescript
import { schemas } from "tassapi-zod-2026-03";

const raw = await fetch(`/${cmpyCode}/students/${studCode}`).then((r) =>
  r.json(),
);

// Throws ZodError if the response doesn't match the schema
const student = schemas.StudentResponse.parse(raw);

// Or use safeParse to handle errors without throwing
const result = schemas.StudentResponse.safeParse(raw);
if (!result.success) {
  console.error("Unexpected response shape:", result.error.flatten());
} else {
  console.log(result.data.first_name);
}
```

### Validating an array response

```typescript
import { schemas } from "tassapi-zod-2026-03";

const raw = await fetch(`/${cmpyCode}/students`).then((r) => r.json());

const students = schemas.StudentResponse.array().parse(raw);
```

### Validating a `$select`-narrowed response

`$select` returns only a subset of fields. Use `.pick()` to create a schema that matches exactly what you requested, dropping the rest:

```typescript
import { z } from "zod";
import { schemas } from "tassapi-zod-2026-03";

// Matches: GET /students?$select=stud_code,first_name,surname,year_grp
const StudentSummarySchema = schemas.StudentResponse.pick({
  stud_code: true,
  first_name: true,
  surname: true,
  year_grp: true,
});

// Derive the TypeScript type from the schema — stays in sync automatically
type StudentSummary = z.infer<typeof StudentSummarySchema>;

const raw = await fetch(
  `/${cmpyCode}/students?$select=stud_code,first_name,surname,year_grp`,
).then((r) => r.json());
const students = StudentSummarySchema.array().parse(raw);
```

### Validating a request body before sending

```typescript
import { schemas } from "tassapi-zod-2026-03";

const payload = {
  clientKey: process.env.TASS_CLIENT_KEY,
  clientSecret: process.env.TASS_CLIENT_SECRET,
};

// Validate before sending — catches missing env vars early
const body = schemas.GetUserTokenRequest.parse(payload);

const res = await fetch("/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});
```

### Deriving types from schemas

You can derive TypeScript types directly from Zod schemas. This is useful if you want the type and schema to stay in sync and don't use `tassapi-types-2026-03`:

```typescript
import { z } from "zod";
import { schemas } from "tassapi-zod-2026-03";

type UserTokenResponse = z.infer<typeof schemas.UserTokenResponse>;
type StudentResponse = z.infer<typeof schemas.StudentResponse>;
```

### Available schemas

All schemas are exported as named properties of the `schemas` object. Each schema name corresponds directly to a component schema in the TASS OpenAPI spec (e.g. `schemas.StudentResponse` → `#/components/schemas/StudentResponse`).

Notable schemas:

| Schema                               | Use                           |
| ------------------------------------ | ----------------------------- |
| `schemas.StudentResponse`            | Full student record           |
| `schemas.EmployeeResponse`           | Full employee record          |
| `schemas.UserTokenResponse`          | Auth token response           |
| `schemas.GetUserTokenRequest`        | Auth request body             |
| `schemas.ExceptionDetails`           | Error response                |
| `schemas.ValidationExceptionDetails` | 400 validation error response |

## Development

### Regenerate schemas

Run from the package directory or from the monorepo root with `--workspaces`:

```bash
npm run generate
```

This overwrites `src/generated.ts` from `../../specs/tassapi-2026-03.json` using the `schemas-only` template. Do not edit `src/generated.ts` by hand.

### Build

```bash
npm run build
```
