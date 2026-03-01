/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserTokenResponse {
  /** User token. */
  token?: string;
  /**
   * Token expiry date (UTC).
   * @format date-time
   */
  token_expiry_date?: string;
  /** Allowed companies. */
  allowed_companies?: AllowedCompanyDetails[];
}

export interface AllowedCompanyDetails {
  /** Company code. */
  cmpy_code?: string | null;
  /** Company name. */
  name_text?: string | null;
}

export type ValidationExceptionDetails = ExceptionDetails & {
  errors?: Record<string, string[]>;
};

export interface ExceptionDetails {
  /** @format int32 */
  status?: number;
  title?: string;
  detail?: string;
}

export interface GetUserTokenRequest {
  /** Client key. */
  clientKey?: string;
  /** Client secret. */
  clientSecret?: string;
}
