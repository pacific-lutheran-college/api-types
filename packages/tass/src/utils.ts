// Helper types for various API features

/**
 * Split a string literal type by a delimiter.
 * Example: Split<'a,b,c', ','> -> 'a' | 'b' | 'c'
 * Note: Returns a union, not a tuple, for easier use with Pick.
 */
export type Split<S extends string, D extends string> = string extends S
  ? string
  : S extends ""
    ? never
    : S extends `${infer T}${D}${infer U}`
      ? T | Split<U, D>
      : S;

/**
 * Select specific fields from an interface based on a comma-separated string.
 * This is useful for OData $select queries.
 *
 * @example
 * const columns = 'stud_code,surname,first_name';
 * type StudentSubset = Select<StudentResponse, typeof columns>;
 */
export type Select<T, K extends string> = Pick<
  T,
  Extract<keyof T, Split<K, ",">>
>;
