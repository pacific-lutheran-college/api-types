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

export type ValidationExceptionDetails = ExceptionDetails & {
  errors?: Record<string, string[]>;
};

export interface ExceptionDetails {
  /** @format int32 */
  status?: number;
  title?: string;
  detail?: string;
}

export interface OptionsResponse {
  /** Option code. */
  code?: string;
  /** Option description. */
  desc?: string;
}

export interface EmployeeLeaveBalanceResponse {
  /** Accrual code. */
  acr_code?: string;
  /** Company code. */
  cmpy_code?: string;
  /** Employee code. */
  emp_code?: string;
  /**
   * Current entitlement.
   * @format decimal
   */
  ent_qty?: number | null;
  /**
   * Entitlement as at date.
   * @format date
   */
  lst_up_date?: string | null;
  /** Non-accrual days. */
  non_acr_day_qty?: number | null;
  /** Comment. */
  nts_code?: string | null;
  /**
   * Rate amount.
   * @format decimal
   */
  rate_amt?: number | null;
  /**
   * Commencement date.
   * @format date
   */
  str_ent_date?: string | null;
}

export interface LeaveEntitlementsGetAllEmployeeLeaveEntitlementsParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface LeaveEntitlementsGetAllAccrualCodeOptionsParams {
  /** Company code. */
  cmpyCode: string;
}
