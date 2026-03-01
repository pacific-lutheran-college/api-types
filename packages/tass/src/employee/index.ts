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

export type Operation = OperationBase & {
  value?: any;
};

export interface OperationBase {
  path?: string | null;
  op?: string | null;
  from?: string | null;
}

export interface FileResponse {
  /** File Name. */
  file_name?: string | null;
  /**
   * File Size (bytes).
   * @format int64
   */
  file_size?: number | null;
  /**
   * Date Uploaded.
   * @format date-time
   */
  date_uploaded?: string | null;
  /** Unique Attachment Identifier. */
  attach_id?: string | null;
}

export interface NewAttachmentResponse {
  /** Attachment identifier. */
  attach_id?: string;
}

export interface UDAreaOptionsResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Area code. */
  area_code?: string;
  /** Area description. */
  area_desc?: string;
  /** UD fields. */
  ud_fields?: UDFieldTypes;
}

export interface UDFieldTypes {
  /** User defined flags. */
  ud_flags?: UDFieldDetails[];
  /** User defined codes. */
  ud_codes?: UDCodeFieldDetails[];
  /** User defined text. */
  ud_text?: UDFieldDetails[];
  /** User defined dates. */
  ud_dates?: UDFieldDetails[];
  /** User defined attachments. */
  ud_attachments?: UDAttachmentFieldDetails[];
}

export interface UDFieldDetails {
  /** UD field name. */
  field_name?: string;
  /** UD field description. */
  field_desc?: string | null;
  /**
   * Sort order.
   * @format int32
   */
  sort_order?: number;
}

export type UDCodeFieldDetails = UDFieldDetails & {
  /** UD reference field values. */
  reference_values?: UDFieldReferenceValue[];
};

export interface UDFieldReferenceValue {
  /** UD code. */
  ud_code?: string | null;
  /** UD description. */
  ud_desc?: string;
  /**
   * Sort order.
   * @format int32
   */
  sort_order?: number;
}

export type UDAttachmentFieldDetails = UDFieldDetails & {
  /**
   * Field number.
   * @format int32
   */
  field_number?: number;
};

export interface AttachmentDetails {
  /**
   * Field number.
   * @format int32
   */
  field_number?: number;
  /** File details. */
  files?: FileDetails[];
}

export interface FileDetails {
  /** File name. */
  file_name?: string | null;
  /**
   * File size (bytes).
   * @format int64
   */
  file_size?: number | null;
  /**
   * Date uploaded.
   * @format date-time
   */
  date_uploaded?: string | null;
  /** Attachment identifier. */
  attach_id?: string | null;
}

export interface EmployeeResponse {
  /** Address line 1. */
  add1_text?: string | null;
  /** Address line 2. */
  add2_text?: string | null;
  /** Alternate identifier. */
  alt_id?: string | null;
  /**
   * Date of birth.
   * @format date
   */
  birth_date?: string | null;
  /** Termination reason. */
  cessation_type?: string | null;
  /** Suburb/city. */
  city_text?: string | null;
  /** Company code. */
  cmpy_code?: string;
  /** Country code. */
  country_code?: string | null;
  /** Country text. */
  country_text?: string | null;
  /** Deceased. */
  deceased_flg?: boolean;
  /** Drivers license. */
  driv_lic_text?: string | null;
  /** Email address. */
  e_mail?: string | null;
  /** Employee code. */
  emp_code?: string;
  /** First name. */
  first_name?: string | null;
  /** Gender. */
  gender?: string | null;
  /** Indigenous status. */
  indig_status?: string | null;
  /** Initials. */
  initials?: string | null;
  /** Main role activity. */
  main_activity?: string | null;
  /** Marital status. */
  marital_stat_flag?: string | null;
  /** Mobile phone number. */
  mob_phone?: string | null;
  /** Next of kin - address line 1. */
  nok_add1_text?: string | null;
  /** Ntex of kin - address line 2. */
  nok_add2_text?: string | null;
  /** Next of kin - suburb/city. */
  nok_city_text?: string | null;
  /** Next of kin - country text. */
  nok_country_text?: string | null;
  /** Next of kin - full name. */
  nok_name_text?: string | null;
  /** Next of kin - home phone number. */
  nok_phone_h_text?: string | null;
  /** Next of kin - work phone number. */
  nok_phone_w_text?: string | null;
  /** Next of kin - post code. */
  nok_post_code?: string | null;
  /** Next of kin - relationship */
  nok_relat_text?: string | null;
  /** Next of kin - address state. */
  nok_state_text?: string | null;
  /** Other name/s. */
  other_name?: string | null;
  /** Home phone number. */
  phone_h_text?: string | null;
  /** Work phone number. */
  phone_w_text?: string | null;
  /** Position text. */
  position_text?: string | null;
  /** Position title. */
  position_title?: string | null;
  /** Address post code. */
  post_code?: string | null;
  /** Preferred name. */
  preferred_name?: string | null;
  /** Previous payroll identifier. */
  previous_payroll_id?: string | null;
  /** School email. */
  school_email?: string | null;
  /** SMS flag. */
  sms_flg?: boolean;
  /**
   * Employment start date.
   * @format date
   */
  start_date?: string | null;
  /** Address state. */
  state_text?: string | null;
  /** Employee status. */
  status_text?: string | null;
  /** Surname. */
  surname?: string | null;
  /** Suffix. */
  suffix?: string | null;
  /** Supervisor code. */
  supervisor_code?: string | null;
  /** Supervisor 2 code. */
  supervisor2_code?: string | null;
  /** Teacher Code, */
  tch_code?: string | null;
  /**
   * Termination date.
   * @format date
   */
  term_date?: string | null;
  /** Name title. */
  title?: string | null;
  /**
   * Date of last update.
   * @format date-time
   */
  update_on?: string;
  /** Supplier code. */
  vend_code?: string | null;
}

export type AddEmployeeRequest = CommonEmployeeRequest & object;

export interface CommonEmployeeRequest {
  /**
   * Address line 1.
   * @maxLength 60
   */
  add1_text?: string | null;
  /**
   * Address line 2.
   * @maxLength 60
   */
  add2_text?: string | null;
  /**
   * Alternate identifier. Must be unique for the company.
   * @maxLength 40
   */
  alt_id?: string | null;
  /**
   * Date of birth. Must be a valid date in format (yyyy-mm-dd) and must be less than the current date.
   * @format date
   * @minLength 1
   */
  birth_date: string;
  /**
   * Termination reason. If provided, it must be a one of: C -> contract finished, D -> deceased, F -> dismissal, I -> Illness, R -> redundancy, T -> transfer, V -> voluntary. .
   * @maxLength 1
   */
  cessation_type?: string | null;
  /**
   * Suburb/city.
   * @maxLength 46
   */
  city_text?: string | null;
  /**
   * Country code.
   * @maxLength 2
   */
  country_code?: string | null;
  /**
   * Country text.
   * @maxLength 20
   */
  country_text?: string | null;
  /** Deceased. */
  deceased_flg?: boolean;
  /**
   * Drivers license.
   * @maxLength 10
   */
  driv_lic_text?: string | null;
  /**
   * Email address.
   * @format email
   * @maxLength 60
   */
  e_mail?: string | null;
  /**
   * Employee code. When adding a new employee, set this field to blank if using auto-numbering.
   * @minLength 1
   * @maxLength 7
   */
  emp_code: string;
  /**
   * First name.
   * @minLength 1
   * @maxLength 50
   */
  first_name: string;
  /**
   * Gender. If provided, it must be a valid value as per the gender options.
   * @minLength 1
   * @maxLength 3
   */
  gender: string;
  /**
   * Indigenous status. If provided, it must be one of: 1 -> Aboriginal, 2 -> Torres Strait Islander, 3 -> Aboriginal & Torres Strait Islander, 4 -> neither, 9 -> unknown.
   * @maxLength 1
   */
  indig_status?: string | null;
  /**
   * Initials.
   * @minLength 1
   * @maxLength 5
   */
  initials: string;
  /**
   * Main role activity. If provided, it must be a valid value as per the main activity options.
   * @maxLength 4
   */
  main_activity?: string | null;
  /**
   * Marital status. If provided, it must be a valid value as per the marital status options.
   * @maxLength 1
   */
  marital_stat_flag?: string | null;
  /**
   * Mobile phone number.
   * @maxLength 30
   */
  mob_phone?: string | null;
  /**
   * Next of kin - address line 1.
   * @maxLength 60
   */
  nok_add1_text?: string | null;
  /**
   * Next of kin - address line 2.
   * @maxLength 60
   */
  nok_add2_text?: string | null;
  /**
   * Next of kin - suburb/city.
   * @maxLength 46
   */
  nok_city_text?: string | null;
  /**
   * Next of kin - country text.
   * @maxLength 20
   */
  nok_country_text?: string | null;
  /**
   * Next of kin - full name.
   * @maxLength 30
   */
  nok_name_text?: string | null;
  /**
   * Next of kin - home phone number.
   * @maxLength 30
   */
  nok_phone_h_text?: string | null;
  /**
   * Next of kin - work phone number.
   * @maxLength 30
   */
  nok_phone_w_text?: string | null;
  /**
   * Next of kin - post code.
   * @maxLength 10
   */
  nok_post_code?: string | null;
  /**
   * Next of kin - relationship
   * @maxLength 20
   */
  nok_relat_text?: string | null;
  /**
   * Next of kin - address state.
   * @maxLength 3
   */
  nok_state_text?: string | null;
  /**
   * Other name/s.
   * @maxLength 50
   */
  other_name?: string | null;
  /**
   * Home phone number.
   * @maxLength 30
   */
  phone_h_text?: string | null;
  /**
   * Work phone number.
   * @maxLength 30
   */
  phone_w_text?: string | null;
  /**
   * Position text.
   * @maxLength 20
   */
  position_text?: string | null;
  /**
   * Position title.
   * @maxLength 100
   */
  position_title?: string | null;
  /**
   * Address post code.
   * @minLength 1
   * @maxLength 10
   */
  post_code: string;
  /**
   * Preferred name.
   * @minLength 1
   * @maxLength 50
   */
  preferred_name: string;
  /**
   * Previous payroll identifier.
   * @maxLength 200
   */
  previous_payroll_id?: string | null;
  /**
   * School email.
   * @format email
   * @maxLength 60
   */
  school_email?: string | null;
  /** SMS flag. */
  sms_flg?: boolean;
  /**
   * Employment start date. Must be a valid date in format (yyyy-mm-dd).
   * @format date
   * @minLength 1
   */
  start_date: string;
  /**
   * Address state.
   * @minLength 1
   * @maxLength 3
   */
  state_text: string;
  /**
   * Employment status. If provided, it must be a valid value as per the employment status options.
   * @minLength 1
   * @maxLength 1
   */
  status_text: string;
  /**
   * Surname.
   * @minLength 1
   * @maxLength 50
   */
  surname: string;
  /**
   * Suffix.
   * @maxLength 30
   */
  suffix?: string | null;
  /**
   * Supervisor code. Must be an existing employee and have a different emp_code to this employee.
   * @maxLength 7
   */
  supervisor_code?: string | null;
  /**
   * Supervisor 2 code. Must be an existing employee, be different to supervisor and have a different emp_code to this employee.
   * @maxLength 7
   */
  supervisor2_code?: string | null;
  /**
   * Termination date. Must be a valid date in (yyyy-mm-dd) and be greater than start_date.
   * @format date
   */
  term_date?: string | null;
  /**
   * Name title. If provided, it must be a valid value as per the name title options.
   * @minLength 1
   * @maxLength 15
   */
  title: string;
  /**
   * Supplier code. If provided, it must be a valid title as dictated by the company setup.
   * @maxLength 8
   */
  vend_code?: string | null;
}

export type UpdateEmployeeRequest = CommonEmployeeRequest & object;

export interface EmployeeStandardNoteResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Employee code. */
  emp_code?: string;
  /** Note category code. */
  note_cat?: string | null;
  /**
   * Note date.
   * @format date-time
   */
  note_date?: string;
  /** Note text. */
  note_text?: string | null;
  /**
   * Unique note identifier.
   * @format guid
   */
  note_uid?: string;
  /** Has Attachment. */
  has_attachment?: boolean;
}

export type AddEmployeeStandardNoteRequest =
  CommonEmployeeStandardNoteUpdateRequest & object;

export interface CommonEmployeeStandardNoteUpdateRequest {
  /**
   * Note category code. If provided, it must be a valid value as per the note category options.
   * @minLength 1
   * @maxLength 3
   */
  note_cat: string;
  /**
   * Note date. Must be a valid date and time in format (yyyy-mm-ddTHH:mm:ss.fff).
   * @format date-time
   * @minLength 1
   */
  note_date: string;
  /**
   * Note text.
   * @minLength 1
   * @maxLength 4000
   */
  note_text: string;
}

export type UpdateEmployeeStandardNoteRequest =
  CommonEmployeeStandardNoteUpdateRequest & object;

export interface EmployeeConfidentialNoteResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Employee code. */
  emp_code?: string;
  /** Note category code. */
  note_cat?: string | null;
  /**
   * Note date.
   * @format date-time
   */
  note_date?: string;
  /** Note text. */
  note_text?: string | null;
  /**
   * Unique note identifier.
   * @format guid
   */
  note_uid?: string;
  /** Has Attachment. */
  has_attachment?: boolean;
}

export type AddEmployeeConfidentialNoteRequest =
  CommonEmployeeConfidentialNoteUpdateRequest & object;

export interface CommonEmployeeConfidentialNoteUpdateRequest {
  /**
   * Note category code. If provided, it must be a valid value as per the note category options.
   * @minLength 1
   * @maxLength 3
   */
  note_cat: string;
  /**
   * Note date. Must be a valid date and time in format (yyyy-mm-ddTHH:mm:ss.fff).
   * @format date-time
   * @minLength 1
   */
  note_date: string;
  /**
   * Note text.
   * @minLength 1
   * @maxLength 4000
   */
  note_text: string;
}

export type UpdateEmployeeConfidentialNoteRequest =
  CommonEmployeeConfidentialNoteUpdateRequest & object;

export interface EmployeePDActivityResponse {
  /** Company code. */
  cmpy_code?: string;
  /**
   * Cost amount.
   * @format decimal
   */
  cost_amt?: number | null;
  /**
   * Duration (hours).
   * @format decimal
   */
  duration?: number | null;
  /** Employee code. */
  emp_code?: string;
  /**
   * Finish date.
   * @format date
   */
  finish_date?: string | null;
  /**
   * Other amount.
   * @format decimal
   */
  other_amt?: number | null;
  /** Provider code. */
  pd_prov_code?: string | null;
  /** Status code. */
  pd_stat_code?: string | null;
  /** Activity type code. */
  pd_type_code?: string | null;
  /** Unique activity number. */
  pdact_num?: number;
  /** Activity details. */
  pdact_text?: string | null;
  /**
   * Start date.
   * @format date
   */
  start_date?: string | null;
  /**
   * Date of last update.
   * @format date-time
   */
  updated_on?: string | null;
  /** UD Fields */
  ud_fields?: PDUDFieldsResponse;
}

export interface PDUDFieldsResponse {
  /** User defined flags */
  ud_flags?: PDActivityUDFlagResponse;
  /** User defined code */
  ud_codes?: PDActivityUDCodeResponse;
  /** User defined text */
  ud_text?: PDActivityUDTextResponse;
  /** User defined attachments */
  ud_attachments?: PDActivityUDAttachmentResponse;
}

export interface PDActivityUDFlagResponse {
  /**
   * UD flag field 1.
   * @maxLength 1
   */
  ud1_flg?: string | null;
  /**
   * UD flag field 2.
   * @maxLength 1
   */
  ud2_flg?: string | null;
  /**
   * UD flag field 3.
   * @maxLength 1
   */
  ud3_flg?: string | null;
  /**
   * UD flag field 4.
   * @maxLength 1
   */
  ud4_flg?: string | null;
  /**
   * UD flag field 5.
   * @maxLength 1
   */
  ud5_flg?: string | null;
}

export interface PDActivityUDCodeResponse {
  /**
   * UD table reference field 1.
   * @maxLength 3
   */
  ud6_code?: string | null;
  /**
   * UD table reference field 2.
   * @maxLength 3
   */
  ud7_code?: string | null;
  /**
   * UD table reference field 3.
   * @maxLength 3
   */
  ud8_code?: string | null;
  /**
   * UD table reference field 4.
   * @maxLength 3
   */
  ud9_code?: string | null;
  /**
   * UD table reference field 5.
   * @maxLength 3
   */
  ud10_code?: string | null;
}

export interface PDActivityUDTextResponse {
  /**
   * UD text field 1.
   * @maxLength 100
   */
  ud11_text?: string | null;
  /**
   * UD text field 2.
   * @maxLength 100
   */
  ud12_text?: string | null;
  /**
   * UD text field 3.
   * @maxLength 100
   */
  ud13_text?: string | null;
  /**
   * UD text field 4.
   * @maxLength 100
   */
  ud14_text?: string | null;
  /**
   * UD text field 5.
   * @maxLength 100
   */
  ud15_text?: string | null;
}

export interface PDActivityUDAttachmentResponse {
  /** UD attachment field 1. */
  ud16_attachment_details?: AttachmentDetails;
  /** UD attachment field 2. */
  ud17_attachment_details?: AttachmentDetails;
  /** UD attachment field 3. */
  ud18_attachment_details?: AttachmentDetails;
  /** UD attachment field 4. */
  ud19_attachment_details?: AttachmentDetails;
  /** UD attachment field 5. */
  ud20_attachment_details?: AttachmentDetails;
}

export type AddEmployeePDActivityRequest =
  CommonEmployeePDActivityUpdateRequest & object;

export interface CommonEmployeePDActivityUpdateRequest {
  /**
   * Activity cost.
   * @format decimal
   */
  cost_amt?: number | null;
  /**
   * Hours duration.
   * @format decimal
   */
  duration: number;
  /**
   * Finish date.
   * @format date
   * @minLength 1
   */
  finish_date: string;
  /**
   * Other costs.
   * @format decimal
   */
  other_amt?: number | null;
  /**
   * Activity provider.
   * @maxLength 3
   */
  pd_prov_code?: string | null;
  /**
   * Status.
   * @minLength 1
   * @maxLength 3
   */
  pd_stat_code: string;
  /**
   * Activity type.
   * @maxLength 3
   */
  pd_type_code?: string | null;
  /**
   * Activity description.
   * @minLength 1
   * @maxLength 200
   */
  pdact_text: string;
  /**
   * Start date.
   * @format date
   * @minLength 1
   */
  start_date: string;
  /** User Defined Fields */
  ud_fields?: PDActivityUDFieldsRequest;
}

export interface PDActivityUDFieldsRequest {
  /** User Defined Flags */
  ud_flags?: PDActivityUDFlagUpdateRequest;
  /** User Defined Codes */
  ud_codes?: PDActivityUDCodeUpdateRequest;
  /** User Defined Flags */
  ud_text?: PDActivityUDTextUpdateRequest;
}

export interface PDActivityUDFlagUpdateRequest {
  /**
   * UD flag field 1.
   * @maxLength 1
   */
  ud1_flg?: string | null;
  /**
   * UD flag field 2.
   * @maxLength 1
   */
  ud2_flg?: string | null;
  /**
   * UD flag field 3.
   * @maxLength 1
   */
  ud3_flg?: string | null;
  /**
   * UD flag field 4.
   * @maxLength 1
   */
  ud4_flg?: string | null;
  /**
   * UD flag field 5.
   * @maxLength 1
   */
  ud5_flg?: string | null;
}

export interface PDActivityUDCodeUpdateRequest {
  /**
   * UD table reference field 1.
   * @maxLength 3
   */
  ud6_code?: string | null;
  /**
   * UD table reference field 2.
   * @maxLength 3
   */
  ud7_code?: string | null;
  /**
   * UD table reference field 3.
   * @maxLength 3
   */
  ud8_code?: string | null;
  /**
   * UD table reference field 4.
   * @maxLength 3
   */
  ud9_code?: string | null;
  /**
   * UD table reference field 5.
   * @maxLength 3
   */
  ud10_code?: string | null;
}

export interface PDActivityUDTextUpdateRequest {
  /**
   * UD text field 1.
   * @maxLength 100
   */
  ud11_text?: string | null;
  /**
   * UD text field  2.
   * @maxLength 100
   */
  ud12_text?: string | null;
  /**
   * UD text field 3.
   * @maxLength 100
   */
  ud13_text?: string | null;
  /**
   * UD text field 4.
   * @maxLength 100
   */
  ud14_text?: string | null;
  /**
   * UD text field 5.
   * @maxLength 100
   */
  ud15_text?: string | null;
}

export type UpdateEmployeePDActivityRequest =
  CommonEmployeePDActivityUpdateRequest & object;

export interface UDFieldOptionsResponse {
  /** UD fields. */
  ud_fields?: UDFieldTypes;
  /** Company code. */
  cmpy_code?: string;
}

export interface EmployeePhotoChangesResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Change key. */
  change_key?: string;
  /** Employee photo changes. */
  changes?: EmployeePhotoChange[];
}

export interface EmployeePhotoChange {
  /** Employee code. */
  emp_code?: string;
  /**
   * Photo update timestamp.
   * @format date-time
   */
  photo_update_on?: string;
}

export interface EmployeeQualificationResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Employee code. */
  emp_code?: string;
  /** Qualification institution code. */
  inst_code?: string | null;
  /** Qualification category code. */
  qual_cat?: string | null;
  /** Qualification description. */
  qual_text?: string | null;
  /**
   * Unique qualification identifier.
   * @format guid
   */
  qual_uid?: string;
  /** Reminder flag. */
  reminder_flg?: boolean;
  /**
   * Qualification date.
   * @format date
   */
  valid_date?: string | null;
  /** Has Attachment */
  has_attachment?: boolean;
}

export type AddEmployeeQualificationRequest =
  CommonEmployeeQualificationUpdateRequest & object;

export interface CommonEmployeeQualificationUpdateRequest {
  /**
   * Qualification institution code. If provided, it must be a valid value as per the qualification institution options.
   * @minLength 1
   * @maxLength 4
   */
  inst_code: string;
  /**
   * Qualification category code. If provided, it must be a valid value as per the qualification category options.
   * @minLength 1
   * @maxLength 4
   */
  qual_cat: string;
  /**
   * Qualification text.
   * @minLength 1
   * @maxLength 200
   */
  qual_text: string;
  /** Reminder flag. */
  reminder_flg: boolean;
  /**
   * Qualification date. Must be a valid date in format (yyyy-mm-dd).
   * @format date
   */
  valid_date?: string | null;
}

export type UpdateEmployeeQualificationRequest =
  CommonEmployeeQualificationUpdateRequest & object;

export interface EmployeeUDAreaResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Area code. */
  area_code?: string;
  /** Employee code. */
  emp_code?: string;
  /**
   * Date of last update.
   * @format date-time
   */
  update_on?: string | null;
  /** UD fields. */
  ud_fields?: UDAreaFieldsResponse;
}

export interface UDAreaFieldsResponse {
  /** User defined flags. */
  ud_flags?: UDAreaFlagResponse;
  /** User defined codes. */
  ud_codes?: UDAreaCodeResponse;
  /** User defined text. */
  ud_text?: UDAreaTextResponse;
  /** User defined dates. */
  ud_dates?: UDAreaDateResponse;
  /** User defined attachments. */
  ud_attachments?: UDAreaAttachmentResponse;
}

export interface UDAreaFlagResponse {
  /**
   * UD flag field 1.
   * @maxLength 1
   */
  ud1_flg?: string | null;
  /**
   * UD flag field 2.
   * @maxLength 1
   */
  ud2_flg?: string | null;
  /**
   * UD flag field 3.
   * @maxLength 1
   */
  ud3_flg?: string | null;
  /**
   * UD flag field 4.
   * @maxLength 1
   */
  ud4_flg?: string | null;
  /**
   * UD flag field 5.
   * @maxLength 1
   */
  ud5_flg?: string | null;
  /**
   * UD flag field 6.
   * @maxLength 1
   */
  ud6_flg?: string | null;
  /**
   * UD flag field 7.
   * @maxLength 1
   */
  ud7_flg?: string | null;
  /**
   * UD flag field 8.
   * @maxLength 1
   */
  ud8_flg?: string | null;
  /**
   * UD flag field 9.
   * @maxLength 1
   */
  ud9_flg?: string | null;
  /**
   * UD flag field 10.
   * @maxLength 1
   */
  ud10_flg?: string | null;
}

export interface UDAreaCodeResponse {
  /**
   * UD table reference field 1.
   * @maxLength 3
   */
  ud11_code?: string | null;
  /**
   * UD table reference field 2.
   * @maxLength 3
   */
  ud12_code?: string | null;
  /**
   * UD table reference field 3.
   * @maxLength 3
   */
  ud13_code?: string | null;
  /**
   * UD table reference field 4.
   * @maxLength 3
   */
  ud14_code?: string | null;
  /**
   * UD table reference field 5.
   * @maxLength 3
   */
  ud15_code?: string | null;
  /**
   * UD table reference field 6.
   * @maxLength 3
   */
  ud16_code?: string | null;
  /**
   * UD table reference field 7.
   * @maxLength 3
   */
  ud17_code?: string | null;
  /**
   * UD table reference field 8.
   * @maxLength 3
   */
  ud18_code?: string | null;
  /**
   * UD table reference field 9.
   * @maxLength 3
   */
  ud19_code?: string | null;
  /**
   * UD table reference field 10.
   * @maxLength 3
   */
  ud20_code?: string | null;
}

export interface UDAreaTextResponse {
  /**
   * UD text field 1.
   * @maxLength 100
   */
  ud21_text?: string | null;
  /**
   * UD text field 2.
   * @maxLength 100
   */
  ud22_text?: string | null;
  /**
   * UD text field 3.
   * @maxLength 100
   */
  ud23_text?: string | null;
  /**
   * UD text field 4.
   * @maxLength 100
   */
  ud24_text?: string | null;
  /**
   * UD text field 5.
   * @maxLength 100
   */
  ud25_text?: string | null;
  /**
   * UD text field 6.
   * @maxLength 100
   */
  ud26_text?: string | null;
  /**
   * UD text field 7.
   * @maxLength 100
   */
  ud27_text?: string | null;
  /**
   * UD text field 8.
   * @maxLength 100
   */
  ud28_text?: string | null;
  /**
   * UD text field 9.
   * @maxLength 100
   */
  ud29_text?: string | null;
  /**
   * UD text field 10.
   * @maxLength 100
   */
  ud30_text?: string | null;
}

export interface UDAreaDateResponse {
  /**
   * UD date field 1.
   * @format date
   * @maxLength 100
   */
  ud31_date?: string | null;
  /**
   * UD date field 2.
   * @format date
   * @maxLength 100
   */
  ud32_date?: string | null;
  /**
   * UD date field 3.
   * @format date
   * @maxLength 100
   */
  ud33_date?: string | null;
  /**
   * UD date field 4.
   * @format date
   * @maxLength 100
   */
  ud34_date?: string | null;
  /**
   * UD date field 5.
   * @format date
   * @maxLength 100
   */
  ud35_date?: string | null;
  /**
   * UD date field 6.
   * @format date
   * @maxLength 100
   */
  ud36_date?: string | null;
  /**
   * UD date field 7.
   * @format date
   * @maxLength 100
   */
  ud37_date?: string | null;
  /**
   * UD date field 8.
   * @format date
   * @maxLength 100
   */
  ud38_date?: string | null;
  /**
   * UD date field 9.
   * @format date
   * @maxLength 100
   */
  ud39_date?: string | null;
  /**
   * UD date field 10.
   * @format date
   * @maxLength 100
   */
  ud40_date?: string | null;
}

export interface UDAreaAttachmentResponse {
  /** UD attachment field 1. */
  ud41_attachment_details?: AttachmentDetails;
  /** UD attachment field  2. */
  ud42_attachment_details?: AttachmentDetails;
  /** UD attachment field 3. */
  ud43_attachment_details?: AttachmentDetails;
  /** UD attachment field 4. */
  ud44_attachment_details?: AttachmentDetails;
  /** UD attachment field 5. */
  ud45_attachment_details?: AttachmentDetails;
  /** UD attachment field 6. */
  ud46_attachment_details?: AttachmentDetails;
  /** UD attachment field 7. */
  ud47_attachment_details?: AttachmentDetails;
  /** UD attachment field 8. */
  ud48_attachment_details?: AttachmentDetails;
  /** UD attachment field 9. */
  ud49_attachment_details?: AttachmentDetails;
  /** UD attachment field 10. */
  ud50_attachment_details?: AttachmentDetails;
}

export type AddEmployeeUDAreaRequest = CommonEmployeeUDAreaUpdateRequest &
  object;

export interface CommonEmployeeUDAreaUpdateRequest {
  /** UD fields. */
  ud_fields?: UDAreaFieldsRequest;
}

export interface UDAreaFieldsRequest {
  /** User defined flags. */
  ud_flags?: UDAreaFlagRequest;
  /** User defined codes. */
  ud_codes?: UDAreaCodeRequest;
  /** User defined text. */
  ud_text?: UDAreaTextRequest;
  /** User defined dates. */
  ud_dates?: UDAreaDateRequest;
}

export interface UDAreaFlagRequest {
  /**
   * UD flag field 1.
   * @maxLength 1
   */
  ud1_flg?: string | null;
  /**
   * UD flag field 2.
   * @maxLength 1
   */
  ud2_flg?: string | null;
  /**
   * UD flag field 3.
   * @maxLength 1
   */
  ud3_flg?: string | null;
  /**
   * UD flag field 4.
   * @maxLength 1
   */
  ud4_flg?: string | null;
  /**
   * UD flag field 5.
   * @maxLength 1
   */
  ud5_flg?: string | null;
  /**
   * UD flag field 6.
   * @maxLength 1
   */
  ud6_flg?: string | null;
  /**
   * UD flag field 7.
   * @maxLength 1
   */
  ud7_flg?: string | null;
  /**
   * UD flag field 8.
   * @maxLength 1
   */
  ud8_flg?: string | null;
  /**
   * UD flag field 9.
   * @maxLength 1
   */
  ud9_flg?: string | null;
  /**
   * UD flag field 10.
   * @maxLength 1
   */
  ud10_flg?: string | null;
}

export interface UDAreaCodeRequest {
  /**
   * UD table reference field 1.
   * @maxLength 3
   */
  ud11_code?: string | null;
  /**
   * UD table reference field 2.
   * @maxLength 3
   */
  ud12_code?: string | null;
  /**
   * UD table reference field 3.
   * @maxLength 3
   */
  ud13_code?: string | null;
  /**
   * UD table reference field 4.
   * @maxLength 3
   */
  ud14_code?: string | null;
  /**
   * UD table reference field 5.
   * @maxLength 3
   */
  ud15_code?: string | null;
  /**
   * UD table reference field 6.
   * @maxLength 3
   */
  ud16_code?: string | null;
  /**
   * UD table reference field 7.
   * @maxLength 3
   */
  ud17_code?: string | null;
  /**
   * UD table reference field 8.
   * @maxLength 3
   */
  ud18_code?: string | null;
  /**
   * UD table reference field 9.
   * @maxLength 3
   */
  ud19_code?: string | null;
  /**
   * UD table reference field 10.
   * @maxLength 3
   */
  ud20_code?: string | null;
}

export interface UDAreaTextRequest {
  /**
   * UD text field 1.
   * @maxLength 100
   */
  ud21_text?: string | null;
  /**
   * UD text field 2.
   * @maxLength 100
   */
  ud22_text?: string | null;
  /**
   * UD text field 3.
   * @maxLength 100
   */
  ud23_text?: string | null;
  /**
   * UD text field 4.
   * @maxLength 100
   */
  ud24_text?: string | null;
  /**
   * UD text field 5.
   * @maxLength 100
   */
  ud25_text?: string | null;
  /**
   * UD text field 6.
   * @maxLength 100
   */
  ud26_text?: string | null;
  /**
   * UD text field 7.
   * @maxLength 100
   */
  ud27_text?: string | null;
  /**
   * UD text field 8.
   * @maxLength 100
   */
  ud28_text?: string | null;
  /**
   * UD text field 9.
   * @maxLength 100
   */
  ud29_text?: string | null;
  /**
   * UD text field 10.
   * @maxLength 100
   */
  ud30_text?: string | null;
}

export interface UDAreaDateRequest {
  /**
   * UD date field 1.
   * @format date
   */
  ud31_date?: string | null;
  /**
   * UD date field 2.
   * @format date
   */
  ud32_date?: string | null;
  /**
   * UD date field 3.
   * @format date
   */
  ud33_date?: string | null;
  /**
   * UD date field 4.
   * @format date
   */
  ud34_date?: string | null;
  /**
   * UD date field 5.
   * @format date
   */
  ud35_date?: string | null;
  /**
   * UD date field 6.
   * @format date
   */
  ud36_date?: string | null;
  /**
   * UD date field 7.
   * @format date
   */
  ud37_date?: string | null;
  /**
   * UD date field 8.
   * @format date
   */
  ud38_date?: string | null;
  /**
   * UD date field 9.
   * @format date
   */
  ud39_date?: string | null;
  /**
   * UD date field 10.
   * @format date
   */
  ud40_date?: string | null;
}

export type UpdateEmployeeUDAreaRequest = CommonEmployeeUDAreaUpdateRequest &
  object;

export interface InformationGetEmployeeByCodeParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface InformationUpdateEmployeeParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export type InformationPatchEmployeePayload = Operation[];

export interface InformationPatchEmployeeParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface InformationGetAllEmployeesParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationAddEmployeeParams {
  cmpyCode: string;
}

export interface InformationGetAllCountryOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllEmployeeStatusOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllGenderOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllIndigneousTypeOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllMainActivityOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllMaritalStatusOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllTerminationReasonOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllTitleOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllVendorOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface NotesGetAllEmployeeStandardNotesParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface NotesAddEmployeeStandardNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface NotesGetEmployeeStandardNoteByIdParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesUpdateEmployeeStandardNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export type NotesPatchEmployeeStandardNotePayload = Operation[];

export interface NotesPatchEmployeeStandardNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesDeleteEmployeeStandardNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesGetAllEmployeeStandardNotesAttachmentsParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesAddEmployeeStandardNotesAttachmentPayload {
  file_name?: string | null;
  /** @format binary */
  file_content?: File | null;
}

export interface NotesAddEmployeeStandardNotesAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesDownloadEmployeeStandardNotesAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface NotesDeleteEmployeeStandardNotesAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface NotesGetAllEmployeeConfidentialNotesParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface NotesAddEmployeeConfidentialNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface NotesGetEmployeeConfidentialNoteByIdParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesUpdateEmployeeConfidentialNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export type NotesPatchEmployeeConfidentialNotePayload = Operation[];

export interface NotesPatchEmployeeConfidentialNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesDeleteEmployeeConfidentialNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesGetAllEmployeeConfidentialNotesAttachmentsParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesAddEmployeeConfidentialNotesAttachmentPayload {
  file_name?: string | null;
  /** @format binary */
  file_content?: File | null;
}

export interface NotesAddEmployeeConfidentialNotesAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesDownloadEmployeeConfidentialNotesAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface NotesDeleteEmployeeConfidentialNotesAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface NotesGetAllEmployeeNoteCategoryOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface PdActivitiesGetAllEmployeePdActivitiesParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface PdActivitiesAddEmployeePdActivityParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface PdActivitiesGetEmployeePdActivityByIdParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** Unique PD activity number. */
  pdactNum: number;
}

export interface PdActivitiesUpdateEmployeePdActivityParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** PD activity unique number. */
  pdactNum: number;
}

export type PdActivitiesPatchEmployeePdActivityPayload = Operation[];

export interface PdActivitiesPatchEmployeePdActivityParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** PD activity unique number. */
  pdactNum: number;
}

export interface PdActivitiesDeleteEmployeePdActivityParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** PD activity unique number. */
  pdactNum: number;
}

export interface PdActivitiesDownloadEmployeePdActivityAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** PD activity unique number. */
  pdactNum: number;
  /**
   * UD attachment field number. Must be in the range of 16-20 inclusive.
   * @format int32
   */
  fieldNumber: number;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface PdActivitiesDeleteEmployeePdActivityAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** PD activity unique number. */
  pdactNum: number;
  /**
   * UD attachment field number. Must be in the range of 16-20 inclusive.
   * @format int32
   */
  fieldNumber: number;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface PdActivitiesAddEmployeePdActivityAttachmentPayload {
  file_name?: string | null;
  /** @format binary */
  file_content?: File | null;
}

export interface PdActivitiesAddEmployeePdActivityAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** PD activity unique number. */
  pdactNum: number;
  /**
   * UD attachment field number. Must be in the range of 16-20 inclusive.
   * @format int32
   */
  fieldNumber: number;
}

export interface PdActivitiesGetAllPdProviderOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface PdActivitiesGetAllPdStatusOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface PdActivitiesGetAllPdTypeOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface PdActivitiesGetAllPdudFieldOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface PhotoGetEmployeePhotoChangesParams {
  /** Change key for filtering records from a specific point onwards. */
  change_key?: string | null;
  /** Company code. */
  cmpyCode: string;
}

export interface PhotoGetEmployeePhotoParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface PhotoAddEmployeePhotoPayload {
  /** @format binary */
  file_content?: File | null;
}

export interface PhotoAddEmployeePhotoParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface QualificationsGetAllEmployeeQualificationsParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface QualificationsAddEmployeeQualificationParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface QualificationsGetEmployeeQualificationByIdParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Qualification unique identifier.
   * @format guid
   */
  qualUid: string;
}

export interface QualificationsUpdateEmployeeQualificationParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Qualification unique identifier.
   * @format guid
   */
  qualUid: string;
}

export type QualificationsPatchEmployeeQualificationPayload = Operation[];

export interface QualificationsPatchEmployeeQualificationParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Qualification unique identifier.
   * @format guid
   */
  qualUid: string;
}

export interface QualificationsDeleteEmployeeQualificationParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Qualification unique identifier.
   * @format guid
   */
  qualUid: string;
}

export interface QualificationsGetAllEmployeeQualificationsAttachmentsParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Qualification unique identifier.
   * @format guid
   */
  qualUid: string;
}

export interface QualificationsAddEmployeeQualificationsAttachmentPayload {
  file_name?: string | null;
  /** @format binary */
  file_content?: File | null;
}

export interface QualificationsAddEmployeeQualificationsAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Qualification unique identifier.
   * @format guid
   */
  qualUid: string;
}

export interface QualificationsDownloadEmployeeQualificationsAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Qualification unique identifier.
   * @format guid
   */
  qualUid: string;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface QualificationsDeleteEmployeeQualificationsAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /**
   * Qualification unique identifier.
   * @format guid
   */
  qualUid: string;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface QualificationsGetAllQualificationCategoryOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface QualificationsGetAllQualificationInstitutionOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface UdAreasGetAllUdAreaOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface UdAreasGetSingleUdAreaOptionsParams {
  /** Company code. */
  cmpyCode: string;
  /** Area code. */
  areaCode: string;
}

export interface UdAreasGetAllEmployeeUdAreasParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
}

export interface UdAreasGetEmployeeUdAreaByIdParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** Area code. */
  areaCode: string;
}

export interface UdAreasAddEmployeeUdAreaParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** Area code. */
  areaCode: string;
}

export interface UdAreasUpdateEmployeeUdAreaParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** Area code. */
  areaCode: string;
}

export type UdAreasPatchEmployeeUdAreaPayload = Operation[];

export interface UdAreasPatchEmployeeUdAreaParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** Area code. */
  areaCode: string;
}

export interface UdAreasDeleteEmployeeUdAreaParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** Area code. */
  areaCode: string;
}

export interface UdAreasDownloadEmployeeUdAreaAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** Area code. */
  areaCode: string;
  /**
   * UD attachment field number. Must be in the range of 41-50 inclusive.
   * @format int32
   */
  fieldNumber: number;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface UdAreasDeleteEmployeeUdAreaAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** Area code. */
  areaCode: string;
  /**
   * UD attachment field number. Must be in the range of 41-50 inclusive.
   * @format int32
   */
  fieldNumber: number;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface UdAreasAddEmployeeUdAreaAttachmentPayload {
  file_name?: string | null;
  /** @format binary */
  file_content?: File | null;
}

export interface UdAreasAddEmployeeUdAreaAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Employee code. */
  empCode: string;
  /** Area code. */
  areaCode: string;
  /**
   * UD attachment field number. Must be in the range of 41-50 inclusive.
   * @format int32
   */
  fieldNumber: number;
}
