# TASS API Types (2026.03)

Generated TypeScript types for TASS API version `2026.3.0` from OpenAPI.

## Install

> **Note:** If your project already has this package installed via the private git repository, skip this step.

```bash
npm install git+ssh://git@github.com/pacific-lutheran-college/api-types.git
```

## Usage

```ts
import type {
  paths,
  components,
  SuccessResponseBody,
} from "@plc/tassapi-types-2026-03";

type GetStudentsResponse = SuccessResponseBody<"/students", "get">;
```

## Regenerate Types

1. Replace `spec/openapi-spec.json` with the latest TASS OpenAPI file.
2. Run:

```bash
npm run generate
npm run build
```

## Notes

TASS can conditionally omit fields by permission. Model consumer-level DTOs using optional properties or runtime validation if strict guarantees are needed.
