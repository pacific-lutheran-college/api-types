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

export interface OptionsResponseActive {
  /** Option code. */
  code?: string;
  /** Option description. */
  desc?: string;
  /** Is active. */
  is_active?: boolean;
}

export interface OptionsResponse {
  /** Option code. */
  code?: string;
  /** Option description. */
  desc?: string;
}

export type Operation = OperationBase & {
  value?: any;
};

export interface OperationBase {
  path?: string | null;
  op?: string | null;
  from?: string | null;
}

export interface YearPeriodOptionsResponse {
  /** Year Number */
  year_num?: number | null;
  /** Period Number */
  period_num?: number | null;
  /**
   * Start Date
   * @format date
   */
  start_date?: string | null;
  /**
   * End Date
   * @format date
   */
  end_date?: string | null;
}

export interface CodeFormatRulesResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Code Structure */
  code_structure?: CodeStructureResponse[];
}

export interface CodeStructureResponse {
  /** Start Position */
  start_num?: number;
  /** Length */
  length_num?: number;
  /** Description */
  desc_text?: string | null;
  /** Default Text */
  default_text?: string | null;
  /**
   * Type.
   *
   * When type = 'S' then valid values are contained in the segments list.
   *
   * When type = 'F' then the value must match exactly the default_text value.
   *
   * When type = 'C' then the value can be anything as long as it meets maximum length requirements.
   */
  type_ind?: string;
  /** Department Consolidation */
  dept_consol_flg?: boolean;
  /** Segments */
  segments?: SegmentResponse[];
}

export interface SegmentResponse {
  /** Flex Code */
  flex_code?: string;
  /** Description */
  desc_text?: string;
  /** Group Code */
  group_code?: string;
}

export interface ReportingCodeResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Reporting Code Fields */
  field_details?: ReportingCodeOptionsFieldDetails[];
}

export interface ReportingCodeOptionsFieldDetails {
  /** Field Name */
  field_name?: string;
  /** Field Description */
  field_desc?: string;
  /** Reference Field Values */
  reference_values?: ReportingCodeOptionsFieldReferenceValue[];
}

export interface ReportingCodeOptionsFieldReferenceValue {
  /** Reference Code */
  ref_code?: string;
  /** Reference Description */
  ref_desc?: string;
}

export interface GeneralLedgerAccountResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Account Code */
  acct_code?: string;
  /** Description */
  desc_text?: string;
  /** Start Year */
  start_year_num?: number;
  /** Start Period */
  start_period_num?: number;
  /** End Year */
  end_year_num?: number;
  /** End Period */
  end_period_num?: number;
  /** Group Code */
  group_code?: string | null;
  /** External Code */
  external_code?: string | null;
  /** Type */
  type_ind?: string;
  /** Default Tax Code */
  def_tax_code?: string | null;
}

export interface AddGeneralLedgerAccountRequest {
  /**
   * Account Code
   * @minLength 1
   * @maxLength 18
   */
  acct_code: string;
  /**
   * Description
   * @minLength 1
   * @maxLength 40
   */
  desc_text: string;
  /** Start Year */
  start_year_num: number;
  /** Start Period */
  start_period_num: number;
  /** End Year */
  end_year_num: number;
  /** End Period */
  end_period_num: number;
  /**
   * Group Code
   * @maxLength 7
   */
  group_code?: string | null;
  /**
   * External Code
   * @maxLength 20
   */
  external_code?: string | null;
  /**
   * Type
   * @minLength 1
   * @maxLength 1
   */
  type_ind: string;
  /**
   * Default Tax Code
   * @maxLength 3
   */
  def_tax_code?: string | null;
}

export interface UpdateGeneralLedgerAccountRequest {
  /**
   * Account Code
   * @minLength 1
   * @maxLength 18
   */
  acct_code: string;
  /**
   * Description
   * @minLength 1
   * @maxLength 40
   */
  desc_text: string;
  /** Start Year */
  start_year_num: number;
  /** Start Period */
  start_period_num: number;
  /** End Year */
  end_year_num: number;
  /** End Period */
  end_period_num: number;
  /**
   * Group Code
   * @maxLength 7
   */
  group_code?: string | null;
  /**
   * External Code
   * @maxLength 20
   */
  external_code?: string | null;
  /**
   * Type
   * @minLength 1
   * @maxLength 1
   */
  type_ind: string;
  /**
   * Default Tax Code
   * @maxLength 3
   */
  def_tax_code?: string | null;
}

export interface AccountBudgetResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Account Code */
  acct_code?: string;
  /** Year */
  year_num?: number;
  /** Budget Number */
  budget_num?: number;
  /** Periods */
  periods?: PeriodBudgetResponse[];
}

export interface PeriodBudgetResponse {
  /** Period */
  period_num?: number;
  /**
   * Period Amount
   * @format decimal
   */
  period_amt?: number;
  /**
   * Year to Date Pre-Close Amount
   * @format decimal
   */
  ytd_pre_close_amt?: number;
  /**
   * Year to Date Budget
   * @format decimal
   */
  ytd_budget?: number;
  /**
   * Variance
   * @format decimal
   */
  variance?: number;
}

export interface AddAccountBudgetRequest {
  /** Year */
  year_num: number;
  /** Budget Number */
  budget_num: number;
  /** Periods */
  periods?: PeriodBudgetRequest[];
}

export interface PeriodBudgetRequest {
  /** Period Number */
  period_num: number;
  /**
   * Period Amount
   * @format decimal
   */
  period_amt: number;
}

export interface UpdateAccountBudgetRequest {
  /** Year number */
  year_num: number;
  /** Budget number */
  budget_num: number;
  /** Budget periods */
  periods: BudgetPeriod[];
}

export interface BudgetPeriod {
  /** Period number */
  period_num: number;
  /**
   * Period amount
   * @format decimal
   */
  period_amt: number;
}

export interface AccountBalanceResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Account Code */
  acct_code?: string;
  /** Year */
  year_num?: number;
  /** Period Balances */
  period_bals?: PeriodBalanceResponse[];
}

export interface PeriodBalanceResponse {
  /** Period */
  period_num?: number;
  /**
   * Opening Amount
   * @format decimal
   */
  open_amt?: number;
  /**
   * Debit Amount
   * @format decimal
   */
  debit_amt?: number;
  /**
   * Credit Amount
   * @format decimal
   */
  credit_amt?: number;
  /**
   * Close Amount
   * @format decimal
   */
  close_amt?: number;
  /**
   * Pre-Close Amount
   * @format decimal
   */
  pre_close_amt?: number;
}

export interface AccountTransactionResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Account Code */
  acct_code?: string;
  /** Year */
  year_num?: number;
  /** Period */
  period_num?: number;
  /** Journal Code */
  jour_code?: string | null;
  /**
   * Journal Number
   * @format int32
   */
  jour_num?: number;
  /**
   * Journal Sequence Number
   * @format int32
   */
  jour_seq_num?: number;
  /** Analysis */
  analysis_text?: string | null;
  /**
   * Transaction Date
   * @format date
   */
  tran_date?: string;
  /** Source */
  ref_text?: string | null;
  /**
   * Reference Number
   * @format int32
   */
  ref_num?: number;
  /** Description */
  desc_text?: string | null;
  /**
   * Debit Amount
   * @format decimal
   */
  debit_amt?: number | null;
  /**
   * Credit Amount
   * @format decimal
   */
  credit_amt?: number | null;
}

export interface AccountReportingCodesResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Account Code */
  acct_code?: string;
  /** Associated Account Code */
  assoc_acct_code?: string | null;
  /** Responsibility Name */
  resp_name?: string | null;
  /** Email Address */
  resp_e_mail?: string | null;
  /** Reporting Codes */
  rpt_codes?: RptCodes;
}

export interface RptCodes {
  /** Reporting Code 1 */
  rpt1_code?: string | null;
  /** Reporting Code 2 */
  rpt2_code?: string | null;
  /** Reporting Code 3 */
  rpt3_code?: string | null;
  /** Reporting Code 4 */
  rpt4_code?: string | null;
  /** Reporting Code 5 */
  rpt5_code?: string | null;
  /** Reporting Code 6 */
  rpt6_code?: string | null;
  /** Reporting Code 7 */
  rpt7_code?: string | null;
  /** Reporting Code 8 */
  rpt8_code?: string | null;
  /** Reporting Code 9 */
  rpt9_code?: string | null;
  /** Reporting Code 10 */
  rpt10_code?: string | null;
  /** Reporting Code 11 */
  rpt11_code?: string | null;
  /** Reporting Code 12 */
  rpt12_code?: string | null;
  /** Reporting Code 13 */
  rpt13_code?: string | null;
  /** Reporting Code 14 */
  rpt14_code?: string | null;
  /** Reporting Code 15 */
  rpt15_code?: string | null;
  /** Reporting Code 16 */
  rpt16_code?: string | null;
  /** Reporting Code 17 */
  rpt17_code?: string | null;
  /** Reporting Code 18 */
  rpt18_code?: string | null;
  /** Reporting Code 19 */
  rpt19_code?: string | null;
  /** Reporting Code 20 */
  rpt20_code?: string | null;
}

export interface UpdateAccountReportingCodesRequest {
  /**
   * Associated Account Code
   * @maxLength 18
   */
  assoc_acct_code?: string | null;
  /**
   * Responsibility Name
   * @maxLength 40
   */
  resp_name?: string | null;
  /**
   * Email Address
   * @maxLength 60
   */
  resp_e_mail?: string | null;
  /** Reporting Codes */
  rpt_codes?: RptCodes2;
}

export interface RptCodes2 {
  /**
   * Reporting Code 1
   * @maxLength 4
   */
  rpt1_code?: string | null;
  /**
   * Reporting Code 2
   * @maxLength 4
   */
  rpt2_code?: string | null;
  /**
   * Reporting Code 3
   * @maxLength 4
   */
  rpt3_code?: string | null;
  /**
   * Reporting Code 4
   * @maxLength 4
   */
  rpt4_code?: string | null;
  /**
   * Reporting Code 5
   * @maxLength 4
   */
  rpt5_code?: string | null;
  /**
   * Reporting Code 6
   * @maxLength 4
   */
  rpt6_code?: string | null;
  /**
   * Reporting Code 7
   * @maxLength 4
   */
  rpt7_code?: string | null;
  /**
   * Reporting Code 8
   * @maxLength 4
   */
  rpt8_code?: string | null;
  /**
   * Reporting Code 9
   * @maxLength 4
   */
  rpt9_code?: string | null;
  /**
   * Reporting Code 10
   * @maxLength 4
   */
  rpt10_code?: string | null;
  /**
   * Reporting Code 11
   * @maxLength 4
   */
  rpt11_code?: string | null;
  /**
   * Reporting Code 12
   * @maxLength 4
   */
  rpt12_code?: string | null;
  /**
   * Reporting Code 13
   * @maxLength 4
   */
  rpt13_code?: string | null;
  /**
   * Reporting Code 14
   * @maxLength 4
   */
  rpt14_code?: string | null;
  /**
   * Reporting Code 15
   * @maxLength 4
   */
  rpt15_code?: string | null;
  /**
   * Reporting Code 16
   * @maxLength 4
   */
  rpt16_code?: string | null;
  /**
   * Reporting Code 17
   * @maxLength 4
   */
  rpt17_code?: string | null;
  /**
   * Reporting Code 18
   * @maxLength 4
   */
  rpt18_code?: string | null;
  /**
   * Reporting Code 19
   * @maxLength 4
   */
  rpt19_code?: string | null;
  /**
   * Reporting Code 20
   * @maxLength 4
   */
  rpt20_code?: string | null;
}

export interface AccountResponsibilityResponse {
  /** Company Code. */
  cmpy_code?: string;
  /** Account Code. */
  acct_code?: string;
  /** User Code. */
  user_code?: string;
  /** User Type. E- employee, T - teacher. */
  source_flg?: string;
  /** Approval Level. */
  resp_flg?: number;
}

export interface AddAccountResponsibilityRequest {
  /**
   * User Code.
   * @maxLength 7
   */
  user_code?: string;
  /**
   * User Type. E- employee, T - teacher.
   * @maxLength 1
   */
  source_flg?: string;
  /** Approval Level. */
  resp_flg?: number;
}

export interface UpdateAccountResponsibilityRequest {
  /**
   * User Code.
   * @maxLength 7
   */
  user_code?: string;
  /**
   * User Type. E- employee, T - teacher.
   * @maxLength 1
   */
  source_flg?: string;
  /** Approval Level. */
  resp_flg?: number;
}

export interface JournalTypeOptionsResponse {
  /** Journal type code. */
  code?: string;
  /** Journal type description. */
  desc?: string | null;
  /** General ledger flag. */
  gl_flag?: boolean;
}

export interface GLAccountOptionsResponse {
  /** Account code. */
  code?: string;
  /** Account description. */
  desc?: string;
  /**
   * Start Year.
   * @format int32
   */
  start_year?: number;
  /**
   * End Year.
   * @format int32
   */
  end_year?: number;
  /**
   * Start Period.
   * @format int32
   */
  start_period?: number;
  /**
   * End Period.
   * @format int32
   */
  end_period?: number;
}

export interface JournalResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Journal Code */
  jour_code?: string;
  /**
   * Journal Number
   * @format int32
   */
  jour_num?: number;
  /**
   * Journal Date
   * @format date
   */
  jour_date?: string | null;
  /** Posted Flag */
  post_flag?: boolean;
  /**
   * Year Number
   * @format int32
   */
  year_num?: number;
  /**
   * Period Number
   * @format int32
   */
  period_num?: number;
  /** Comment 1 */
  com1_text?: string | null;
  /** Comment 2 */
  com2_text?: string | null;
  /**
   * Control Amount
   * @format decimal
   */
  control_amt?: number;
  /** Bank Code */
  bank_code?: string | null;
  /** Bank Description */
  bank_desc?: string | null;
  /** Bank GL Account */
  bank_gl_acct?: string | null;
  /** Warnings */
  warnings?: string[];
  /** GL Lines */
  gl_lines?: GLLineResponse[];
}

export interface GLLineResponse {
  /** Account Code */
  acct_code?: string;
  /**
   * Sequence Number
   * @format int32
   */
  seq_num?: number;
  /** Reference Text */
  ref_text?: string | null;
  /**
   * Reference Number
   * @format int32
   */
  ref_num?: number | null;
  /** Analysis Text */
  analysis_text?: string | null;
  /** Description */
  desc_text?: string | null;
  /**
   * Debit Amount
   * @format decimal
   */
  debit_amt?: number;
  /**
   * Credit Amount
   * @format decimal
   */
  credit_amt?: number;
  /** Tax Code */
  tax_code?: string | null;
  /** Tax Type */
  tax_type?: string | null;
  /**
   * Tax Amount
   * @format decimal
   */
  tax_amt?: number | null;
  /**
   * Tax Percentage
   * @format decimal
   */
  tax_per?: number | null;
  /**
   * Tax Net Amount
   * @format decimal
   */
  tax_net?: number | null;
  /** GL Account Description */
  gl_acct_desc?: string | null;
  /** Warnings */
  warnings?: string[];
}

export interface AddTaxJournalResponse {
  /** Company Code. */
  cmpy_code?: string;
  /**
   * Journal Number.
   * @format int32
   */
  jour_num?: number;
}

export type AddTaxJournalRequest = CommonTaxJournalRequest & object;

export interface CommonTaxJournalRequest {
  /**
   * Journal date
   * @format date
   * @minLength 1
   */
  jour_date: string;
  /** Year number */
  year_num: number;
  /** Period number */
  period_num: number;
  /**
   * Comment 1 text
   * @maxLength 40
   */
  com1_text?: string | null;
  /**
   * Comment 2 text
   * @maxLength 40
   */
  com2_text?: string | null;
  /**
   * Control amount
   * @format decimal
   */
  control_amt?: number | null;
  /** General ledger lines */
  gl_lines?: TaxJournalLine[];
}

export interface TaxJournalLine {
  /**
   * Account code
   * @minLength 1
   * @maxLength 18
   */
  acct_code: string;
  /**
   * Reference text
   * @maxLength 10
   */
  ref_text?: string | null;
  /**
   * Analysis text
   * @maxLength 16
   */
  analysis_text?: string | null;
  /**
   * Description text
   * @minLength 1
   * @maxLength 4000
   */
  desc_text: string;
  /**
   * Debit amount
   * @format decimal
   */
  debit_amt: number;
  /**
   * Credit amount
   * @format decimal
   */
  credit_amt: number;
  /**
   * Tax type
   * @minLength 1
   * @maxLength 1
   */
  tax_type: string;
  /**
   * Tax code
   * @minLength 1
   * @maxLength 3
   */
  tax_code: string;
  /**
   * Tax amount
   * @format decimal
   */
  tax_amt?: number;
}

export type UpdateTaxJournalRequest = CommonTaxJournalRequest & object;

export interface AddGeneralJournalResponse {
  /** Company Code. */
  cmpy_code?: string;
  /**
   * Journal Number.
   * @format int32
   */
  jour_num?: number;
}

export type AddGeneralJournalRequest = CommonGeneralJournalRequest & object;

export interface CommonGeneralJournalRequest {
  /**
   * Journal code
   * @minLength 1
   */
  jour_code: string;
  /**
   * Journal date
   * @format date
   * @minLength 1
   */
  jour_date: string;
  /** Year number */
  year_num: number;
  /** Period number */
  period_num: number;
  /**
   * Comment 1 text
   * @maxLength 40
   */
  com1_text?: string | null;
  /**
   * Comment 2 text
   * @maxLength 40
   */
  com2_text?: string | null;
  /**
   * Control amount
   * @format decimal
   */
  control_amt?: number | null;
  /** General ledger lines */
  gl_lines?: StandardJournalLine[];
}

export interface StandardJournalLine {
  /**
   * Account code
   * @minLength 1
   * @maxLength 18
   */
  acct_code: string;
  /**
   * Reference text
   * @maxLength 10
   */
  ref_text?: string | null;
  /**
   * Analysis text
   * @maxLength 16
   */
  analysis_text?: string | null;
  /**
   * Description text
   * @minLength 1
   * @maxLength 4000
   */
  desc_text: string;
  /**
   * Debit amount
   * @format decimal
   */
  debit_amt: number;
  /**
   * Credit amount
   * @format decimal
   */
  credit_amt: number;
}

export type UpdateGeneralJournalRequest = CommonGeneralJournalRequest & object;

export interface AccountsGetAllAccountYearPeriodOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AccountsGetAllAccountBudgetOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AccountsGetAllGroupCodesOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AccountsGetAllTaxCodesOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AccountsGetAllTypeCodesOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AccountsGetAccountCodeFormatRulesParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AccountsGetAllJournalTypesOptionsParams {
  /** Company Code. */
  cmpyCode: string;
}

export interface AccountsGetAllReportingCodeOptionsParams {
  /** Company Code. */
  cmpyCode: string;
}

export interface AccountsGetAllGeneralLedgerAccountsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AccountsAddGeneralLedgerAccountParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AccountsGetGeneralLedgerAccountByCodeParams {
  /** Company code. */
  cmpyCode: string;
  /** Account code. */
  acctCode: string;
}

export interface AccountsUpdateGeneralLedgerAccountParams {
  /** Company code. */
  cmpyCode: string;
  /** Account code. */
  acctCode: string;
}

export type AccountsPatchGeneralLedgerAccountPayload = Operation[];

export interface AccountsPatchGeneralLedgerAccountParams {
  /** Company code. */
  cmpyCode: string;
  /** Account code. */
  acctCode: string;
}

export interface AccountsGetAccountBudgetsByCodeParams {
  /** Company Code. */
  cmpyCode: string;
  /** Account Code. */
  acctCode: string;
}

export interface AccountsAddGeneralLedgerAccountBudgetParams {
  /** Company Code. */
  cmpyCode: string;
  /** Account Code. */
  acctCode: string;
}

export interface AccountsUpdateGeneralLedgerAccountBudgetParams {
  /** Company Code. */
  cmpyCode: string;
  /** Account Code. */
  acctCode: string;
}

export interface AccountsGetAccountBalancesByCodeParams {
  /** Company Code. */
  cmpyCode: string;
  /** Account Code. */
  acctCode: string;
}

export interface AccountsGetAccountTransactionsByCodeParams {
  /** Company Code. */
  cmpyCode: string;
  /** Account Code. */
  acctCode: string;
  /** Year. */
  yearNum: number;
  /** Period. */
  periodNum: number;
}

export interface AccountsGetAccountReportingCodesByCodeParams {
  /** Company Code. */
  cmpyCode: string;
  /** Account Code. */
  acctCode: string;
}

export interface AccountsUpdateAccountReportingCodesParams {
  /** Company Code. */
  cmpyCode: string;
  /** Account Code. */
  acctCode: string;
}

export type AccountsPatchAccountReportingCodesPayload = Operation[];

export interface AccountsPatchAccountReportingCodesParams {
  /** Company Code. */
  cmpyCode: string;
  /** Account Code. */
  acctCode: string;
}

export interface AccountsGetAccountResponsibilitiesByCodeParams {
  /** Company Code. */
  cmpyCode: string;
  /** Account Code. */
  acctCode: string;
}

export interface AccountsAddGeneralLedgerAccountResponsibilityParams {
  /** Company Code. */
  cmpyCode: string;
  /** Account Code. */
  acctCode: string;
}

export interface AccountsGetAllResponsibilityTeacherOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AccountsGetAllResponsibilityEmployeeOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AccountsGetAllResponsibilityApprovalLevelOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AccountsUpdateAccountResponsibilityParams {
  /** Company Code. */
  cmpyCode: string;
  /** Account Code. */
  acctCode: string;
  /** User Type. */
  sourceFlg: string;
  /** User Code. */
  userCode: string;
}

export interface AccountsDeleteAccountResponsibilityParams {
  /** Company Code. */
  cmpyCode: string;
  /** Account Code. */
  acctCode: string;
  /** User Type. */
  sourceFlg: string;
  /** User Code. */
  userCode: string;
}

export interface JournalsGetAllJournalTypeOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface JournalsGetAllGlAccountOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface JournalsGetAllTaxCodeOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface JournalsGetAllYearPeriodOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface JournalsGetAllJournalsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface JournalsAddGeneralLedgerTaxJournalParams {
  /** Company code. */
  cmpyCode: string;
}

export interface JournalsUpdateGeneralLedgerTaxJournalParams {
  /** Company code. */
  cmpyCode: string;
  /**
   * Journal number.
   * @format int32
   */
  jourNum: number;
}

export interface JournalsAddGeneralLedgerGeneralJournalParams {
  /** Company code. */
  cmpyCode: string;
}

export interface JournalsUpdateGeneralLedgerGeneralJournalParams {
  /** Company code. */
  cmpyCode: string;
  /**
   * Journal number.
   * @format int32
   */
  jourNum: number;
}
