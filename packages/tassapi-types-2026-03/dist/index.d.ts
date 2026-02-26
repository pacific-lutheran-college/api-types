/**
 * TASS API types — v2026.03
 *
 * Generated types from the TASS OpenAPI specification, plus named projections
 * for common $select use cases and a utility type for ad-hoc field selection.
 *
 * @example Accessing a generated schema
 * ```typescript
 * import type { components } from 'tassapi-types-2026-03'
 * type StudentResponse = components['schemas']['StudentResponse']
 * ```
 *
 * @example Using a named projection
 * ```typescript
 * import type { StudentSummary } from 'tassapi-types-2026-03'
 * // Matches: GET /students?$select=stud_code,first_name,surname,preferred_name,year_grp,form_cls
 * ```
 *
 * @example Using SelectResponse for an ad-hoc projection
 * ```typescript
 * import type { components, SelectResponse } from 'tassapi-types-2026-03'
 * type StudentResponse = components['schemas']['StudentResponse']
 * type MyProjection = SelectResponse<StudentResponse, 'stud_code' | 'dob' | 'gender'>
 * ```
 */
export type { paths, components, operations } from './generated.js';
export type { SelectResponse } from './utils.js';
export type { StudentSummary, StudentCard, StudentContact, StudentEnrolment, EmployeeSummary, EmployeeCard, EmployeeContact, } from './projections/index.js';
//# sourceMappingURL=index.d.ts.map