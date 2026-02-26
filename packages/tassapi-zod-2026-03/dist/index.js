"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
/**
 * TASS API Zod schemas — v2026.03
 *
 * Runtime-validatable Zod schemas for all TASS API response and request types.
 * Use alongside `tassapi-types-2026-03` when you need runtime validation at
 * integration boundaries (e.g. validating API responses before processing).
 *
 * @example Validating a response at runtime
 * ```typescript
 * import { schemas } from 'tassapi-zod-2026-03'
 *
 * const raw = await fetch('/students/00001').then(r => r.json())
 * const student = schemas.StudentResponse.parse(raw)
 * ```
 *
 * @example Deriving a TypeScript type from a schema
 * ```typescript
 * import { z } from 'zod'
 * import { schemas } from 'tassapi-zod-2026-03'
 *
 * type StudentResponse = z.infer<typeof schemas.StudentResponse>
 * ```
 *
 * @example Validating a $select-narrowed response
 * ```typescript
 * import { z } from 'zod'
 * import { schemas } from 'tassapi-zod-2026-03'
 *
 * const StudentSummarySchema = schemas.StudentResponse.pick({
 *   stud_code: true,
 *   first_name: true,
 *   surname: true,
 *   year_grp: true,
 * })
 * const students = StudentSummarySchema.array().parse(raw)
 * ```
 */
var generated_js_1 = require("./generated.js");
Object.defineProperty(exports, "schemas", { enumerable: true, get: function () { return generated_js_1.schemas; } });
//# sourceMappingURL=index.js.map