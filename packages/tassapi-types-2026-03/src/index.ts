export type { paths, components, operations } from "./generated/tassapi";

import type { paths } from "./generated/tassapi";

type SuccessStatus = 200 | 201 | 202 | 203 | 204 | "2XX" | "default";

export type OperationFor<
  Path extends keyof paths,
  Method extends keyof paths[Path],
> = paths[Path][Method];

export type OperationResponses<
  Path extends keyof paths,
  Method extends keyof paths[Path],
> = OperationFor<Path, Method> extends { responses: infer R } ? R : never;

export type JsonResponseContent<Response> = Response extends {
  content: { "application/json": infer Body };
}
  ? Body
  : never;

export type SuccessResponseBody<
  Path extends keyof paths,
  Method extends keyof paths[Path],
> = JsonResponseContent<
  OperationResponses<Path, Method>[SuccessStatus &
    keyof OperationResponses<Path, Method>]
>;
