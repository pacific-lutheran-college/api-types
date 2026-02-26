# api-types

Internal TypeScript type packages for company APIs. Consumed as git dependencies by other projects.

## Packages

| Package                                                     | Description                               |
| ----------------------------------------------------------- | ----------------------------------------- |
| [`tassapi-types-2026-03`](./packages/tassapi-types-2026-03) | TypeScript types for TASS API v2026.03    |
| [`tassapi-zod-2026-03`](./packages/tassapi-zod-2026-03)     | Zod runtime schemas for TASS API v2026.03 |

## Repository structure

```
api-types/
├── specs/                          # Source OpenAPI specifications
│   └── tassapi-2026-03.json
├── packages/
│   ├── tassapi-types-2026-03/      # Types-only package
│   └── tassapi-zod-2026-03/        # Zod schemas companion package
├── tsconfig.base.json              # Shared TypeScript config
└── package.json                    # npm workspaces root
```

## Development

### Prerequisites

- Node.js 18+
- npm 8+

### Install dependencies

```bash
npm install
```

### Build all packages

```bash
npm run build
```

### Type-check all packages

```bash
npm run typecheck
```

### Regenerate types from spec

Run from the relevant package directory, or from the root:

```bash
npm run generate --workspaces --if-present
```

## Adding a new API version or new API

1. Place the OpenAPI spec in `specs/` using the naming convention `<api>-<version>.json`.
2. Create a new package directory under `packages/` following the existing structure.
3. Run `npm install` from the root to link the new workspace.
4. Run `npm run generate` inside the new package to produce `src/generated.ts`.
5. Add hand-authored projections in `src/projections/` as needed.
6. Run `npm run build` and commit.

## Consuming packages

Add as a git dependency in the consuming project's `package.json`, scoping to the specific package subdirectory:

```json
{
  "dependencies": {
    "tassapi-types-2026-03": "git+https://github.com/your-org/api-types.git#workspace=tassapi-types-2026-03",
    "tassapi-zod-2026-03": "git+https://github.com/your-org/api-types.git#workspace=tassapi-zod-2026-03"
  }
}
```
