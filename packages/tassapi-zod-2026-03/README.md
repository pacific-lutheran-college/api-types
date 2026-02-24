# TASS API Zod Schemas (2026.03)

Companion runtime validation package for TASS API 2026.03.

## Install

```bash
npm install @plc/tassapi-zod-2026-03
```

## Usage

```ts
import { parseWithSchema, safeParseWithSchema } from "@plc/tassapi-zod-2026-03";
import { schemas } from "@plc/tassapi-zod-2026-03";

const validated = parseWithSchema(
  schemas.StudentCommunicationRulesResponse,
  payload,
);

const maybe = safeParseWithSchema(
  schemas.StudentCommunicationRulesResponse,
  payload,
);
if (!maybe.success) {
  console.error(maybe.error.issues);
}
```

## Regenerate

1. Replace `spec/openapi-spec.json`.
2. Run:

```bash
npm run generate
npm run build
```

## Notes

Because TASS responses are permission-driven, many fields are optional at runtime. Use app-level schema refinements where stricter guarantees are required.
