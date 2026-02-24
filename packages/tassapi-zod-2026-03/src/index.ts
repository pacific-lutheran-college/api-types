import type { ZodTypeAny } from "zod";

export * from "./generated/tassapi-zod.js";

export const parseWithSchema = <TSchema extends ZodTypeAny>(
  schema: TSchema,
  payload: unknown,
) => schema.parse(payload);

export const safeParseWithSchema = <TSchema extends ZodTypeAny>(
  schema: TSchema,
  payload: unknown,
) => schema.safeParse(payload);
