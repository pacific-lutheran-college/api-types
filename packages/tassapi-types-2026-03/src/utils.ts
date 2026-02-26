/**
 * Utility type for narrowing TASS API response types to only the fields
 * requested via the OData `$select` query parameter.
 *
 * @example
 * ```typescript
 * import type { components, SelectResponse } from 'tassapi-types-2026-03'
 *
 * type StudentResponse = components['schemas']['StudentResponse']
 *
 * // Type matches the fields you pass to ?$select=stud_code,first_name,year_grp
 * type Result = SelectResponse<StudentResponse, 'stud_code' | 'first_name' | 'year_grp'>
 * ```
 */
export type SelectResponse<T, K extends keyof T> = Pick<T, K>;
