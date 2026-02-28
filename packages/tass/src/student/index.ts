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

export interface AbsenceReasonOptionsResponse {
  /** Absence reason code. */
  code?: string;
  /** Absence reason description. */
  desc?: string;
  /** Is active. */
  is_active?: boolean;
  /** Acceptable reason indicator. */
  acceptable_reason?: boolean;
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

export interface StudentAttendanceResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Student Code */
  stud_code?: string;
  /**
   * Absent Date
   * @format date
   */
  absent_date?: string;
  /**
   * Absent Time
   * @format time
   */
  absent_time?: string | null;
  /** Absent Type */
  absent_type?: string;
  /** Absent Reason */
  reas_code?: string | null;
  /** Doctors Certificate Provided */
  dcert_flg?: boolean;
  /** Parent Acknowledgement Received */
  par_flg?: boolean;
  /**
   * Parent Acknowledgement Date
   * @format date-time
   */
  par_date?: string | null;
  /** Parent Notification Sent */
  corr_flg?: boolean;
  /**
   * Parent Notification Sent Date
   * @format date-time
   */
  corr_date?: string | null;
  /** Period */
  prd_code?: number | null;
  /** Source Reference */
  ref_num?: string | null;
  /**
   * Absent From Time
   * @format time
   */
  abs_from_time?: string | null;
  /**
   * Absent To Time
   * @format time
   */
  abs_to_time?: string | null;
  /**
   * Unique Absence Identifier
   * @format int32
   */
  key_num?: number;
  /** Unique Timetable Identifier */
  tt_id?: number | null;
  /** Comment */
  note_text?: string | null;
  /** Student Year Group */
  year_grp?: number | null;
  /** Student Is Boarder */
  boarder?: boolean;
  /** Student House */
  house?: string | null;
  /** Student PC/Tutor Group */
  pctut_grp?: string | null;
  /** Student Gender */
  gender?: string | null;
  /** Student Campus Code */
  campus_code?: string | null;
  /** Has Attachment */
  has_attachment?: boolean;
}

export interface StudentCommunicationRulesResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Student code. */
  stud_code?: string;
  comm_rules?: StudentCommunicationRulesParentDetailsResponse[];
}

export interface StudentCommunicationRulesParentDetailsResponse {
  /** Parent code. */
  par_code?: string;
  /** Parent names. */
  parent_names?: StudentCommunicationRulesParentNameResponse[];
  /** Parent addresses. */
  addresses?: StudentCommunicationRulesParentAddressResponse[];
}

export interface StudentCommunicationRulesParentNameResponse {
  /** Parent type. */
  parent_type?: string;
  /** Is deceased. */
  deceased_flg?: boolean;
  /** First name. */
  first_name?: string;
  /** Gender. */
  gender?: string | null;
  /** Initials. */
  initials?: string | null;
  /**
   * Person position.
   * @format int32
   */
  person_posn?: number;
  /** Preferred name. */
  preferred_name?: string;
  /** Suffix. */
  suffix?: string | null;
  /** Surname. */
  surname?: string;
  /** Title. */
  title?: string | null;
}

export interface StudentCommunicationRulesParentAddressResponse {
  /** Address number. */
  add_num?: number;
  /** Address line 1. */
  addr1?: string | null;
  addr2?: string | null;
  /** Address line 3. */
  addr3?: string | null;
  /** Address description. */
  addr_desc?: string | null;
  /** Addressee. */
  addressee?: string | null;
  /** Business phone. */
  bus_phone?: string | null;
  /** Call order. */
  call_order?: number | null;
  /** Country. */
  country?: string | null;
  /** Email address 1. */
  e_mail1?: string | null;
  /** Email address 2. */
  e_mail2?: string | null;
  /** Fascimile. */
  fax?: string | null;
  /** Home phone. */
  home_phone?: string | null;
  /** Mobile phone 1. */
  mobile1?: string | null;
  /** Mobile phone 2. */
  mobile2?: string | null;
  /**
   * Person position.
   * @format int32
   */
  person_posn?: number | null;
  /** Post code. */
  post_code?: string | null;
  /** Relationship. */
  relationship?: string | null;
  /** Salutation. */
  salutation?: string | null;
  /** SMS flag 1. */
  sms_flg1?: boolean;
  /** SMS flag 2. */
  sms_flg2?: boolean;
  /** State code. */
  state_code?: string | null;
  /** Town / suburb. */
  town_sub?: string | null;
  /** Communication types. */
  comm_types?: StudentCommunicationRulesCommunicationTypeResponse[];
}

export interface StudentCommunicationRulesCommunicationTypeResponse {
  /** Communication type. */
  commtype_code?: string;
}

export interface StudentResponse {
  /** Alternate Identifier */
  alt_id?: string | null;
  /** Is Boarder */
  boarder?: boolean;
  /** Campus */
  campus_code?: string | null;
  /** CEIDER */
  ceider?: string | null;
  /** Company Code */
  cmpy_code?: string;
  /** Comparative Reporting */
  compare_flg?: string;
  /**
   * Date Of Arrival In Australia
   * @format date
   */
  date_arrival?: string | null;
  /** Distance Ed. */
  distance_ed?: boolean;
  /**
   * Date Of Birth
   * @format date
   */
  dob?: string | null;
  /**
   * Date Of Entry
   * @format date
   */
  doe?: string | null;
  /**
   * Date Of Leaving
   * @format date
   */
  dol?: string | null;
  /** Personal Email */
  e_mail?: string | null;
  /** Entry Year Group */
  entry_lev?: number | null;
  /** Full Fee Paying Overseas Student */
  ffpos?: boolean;
  /** First Name */
  first_name?: string | null;
  /** Form Class */
  form_cls?: string | null;
  /**
   * Full-Time Equivalent
   * @format decimal
   */
  fte?: number | null;
  /** Gender */
  gender?: string;
  /** House */
  house?: string | null;
  /** IDM */
  idm_id?: string | null;
  /** Mobile Phone */
  mob_phone?: string | null;
  /** Multi-Parenting Arrangements */
  multipar_flg?: boolean;
  /** Next Year Status */
  next_yr_ind?: string;
  /** Other Names */
  other_name?: string | null;
  /** Parent Code */
  par_code?: string | null;
  /** PC/Tutor Group */
  pctut_grp?: string | null;
  /** Preferred Name */
  preferred_name?: string | null;
  /** Preferred Surname */
  preferred_surname?: string | null;
  /** Previous School */
  prev_school?: string | null;
  /** Privacy Flag */
  privacy_flg?: boolean;
  /** Religion */
  religion?: string | null;
  /** Residency Status */
  resident_sts?: string | null;
  /** SMS */
  sms_flg?: boolean;
  /** Student Code */
  stud_code?: string;
  /** Student Government Identification Number */
  stud_govt_id?: string | null;
  /** Student Enterprise Identifier */
  stud_id?: string | null;
  /** Surname */
  surname?: string;
  /**
   * Date Of Last Update
   * @format date-time
   */
  update_on?: string | null;
  /** USI */
  usi?: string | null;
  /**
   * Visa Expiry Datae
   * @format date
   */
  visa_expiry?: string | null;
  /** Visa Sub-Class */
  visa_subclass?: string | null;
  /** Student Cafe Access */
  web_access_ind?: boolean;
  /** Year Group */
  year_grp?: number | null;
}

export type UpdateStudentRequest = CommonStudentUpdateRequest & object;

export interface CommonStudentUpdateRequest {
  /**
   * Alternate Identifier
   * @maxLength 40
   */
  alt_id?: string | null;
  /** Is Boarder */
  boarder?: boolean;
  /**
   * Campus
   * @maxLength 3
   */
  campus_code?: string | null;
  /**
   * CEIDER
   * @maxLength 9
   */
  ceider?: string | null;
  /**
   * Comparative Reporting
   * @minLength 1
   * @maxLength 1
   */
  compare_flg: string;
  /**
   * Date Of Arrival In Australia
   * @format date
   */
  date_arrival?: string | null;
  /** Distance Ed. */
  distance_ed?: boolean;
  /**
   * Date Of Birth
   * @format date
   */
  dob?: string | null;
  /**
   * Date Of Entry
   * @format date
   * @minLength 1
   */
  doe: string;
  /**
   * Date Of Leaving
   * @format date
   */
  dol?: string | null;
  /**
   * Personal Email
   * @maxLength 60
   */
  e_mail?: string | null;
  /** Entry Year Group */
  entry_lev?: number | null;
  /** Full Fee Paying Overseas Student */
  ffpos?: boolean;
  /**
   * First Name
   * @minLength 1
   * @maxLength 50
   */
  first_name: string;
  /**
   * Form Class
   * @maxLength 2
   */
  form_cls?: string | null;
  /**
   * Full-Time Equivalent
   * @format decimal
   */
  fte: number;
  /**
   * Gender
   * @minLength 1
   * @maxLength 3
   */
  gender: string;
  /**
   * House
   * @maxLength 2
   */
  house?: string | null;
  /**
   * IDM
   * @maxLength 100
   */
  idm_id?: string | null;
  /**
   * Mobile Phone
   * @maxLength 30
   */
  mob_phone?: string | null;
  /**
   * Next Year Status
   * @maxLength 1
   */
  next_yr_ind?: string;
  /**
   * Other Names
   * @maxLength 50
   */
  other_name?: string | null;
  /**
   * PC/Tutor Group
   * @maxLength 5
   */
  pctut_grp?: string | null;
  /**
   * Preferred Name
   * @minLength 1
   * @maxLength 20
   */
  preferred_name: string;
  /**
   * Preferred Surname
   * @minLength 1
   * @maxLength 50
   */
  preferred_surname: string;
  /**
   * Previous School
   * @maxLength 5
   */
  prev_school?: string | null;
  /** Privacy Flag */
  privacy_flg?: boolean;
  /**
   * Religion
   * @maxLength 2
   */
  religion?: string | null;
  /**
   * Residency Status
   * @maxLength 3
   */
  resident_sts?: string | null;
  /** SMS */
  sms_flg?: boolean;
  /**
   * Student Code
   * @maxLength 8
   */
  stud_code?: string;
  /**
   * Surname
   * @minLength 1
   * @maxLength 30
   */
  surname: string;
  /**
   * USI
   * @maxLength 10
   */
  usi?: string | null;
  /**
   * Visa Expiry Datae
   * @format date
   */
  visa_expiry?: string | null;
  /**
   * Visa Sub-Class
   * @maxLength 6
   */
  visa_subclass?: string | null;
  /** Student Cafe Access */
  web_access_ind?: boolean;
  /** Year Group */
  year_grp: number;
}

export type Operation = OperationBase & {
  value?: any;
};

export interface OperationBase {
  path?: string | null;
  op?: string | null;
  from?: string | null;
}

export interface StudentMceecdyaResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Student code. */
  stud_code?: string;
  /**
   * Arrival year.
   * @format int32
   */
  arrive_yr?: number | null;
  /** Parent / guardian 2 language at home. */
  flote_code?: string | null;
  /** Parent / guardian 2 non-school education level. */
  fnse_code?: string | null;
  /** Parent / guardian 2 occupation group. */
  focc_code?: string | null;
  /** Parent / guardian 2 school education level. */
  fse_code?: string | null;
  /** Parent / guardian 1 language at home. */
  mlote_code?: string | null;
  /** Parent / guardian 1 non-school education level. */
  mnse_code?: string | null;
  /** Parent / guardian 1 occupation group. */
  mocc_code?: string | null;
  /** Parent / guardian 1 school education level. */
  mse_code?: string | null;
  /** Student indigenous status. */
  s_indig_sts?: string | null;
  /** Student country of birth. */
  scob_code?: string | null;
  /** Student language at home. */
  slote_code?: string | null;
  /**
   * Date of last update.
   * @format date-time
   */
  update_on?: string | null;
}

export interface UpdateStudentMceecdyaRequest {
  /**
   * Arrival year.
   * @format int32
   */
  arrive_yr?: number | null;
  /** Parent / guardian 2 language at home. */
  flote_code?: string | null;
  /** Parent / guardian 2 non-school education level. */
  fnse_code?: string | null;
  /** Parent / guardian 2 occupation group. */
  focc_code?: string | null;
  /** Parent / guardian 2 school education level. */
  fse_code?: string | null;
  /** Parent / guardian 1 language at home. */
  mlote_code?: string | null;
  /** Parent / guardian 1 non-school education level. */
  mnse_code?: string | null;
  /** Parent / guardian 1 occupation group. */
  mocc_code?: string | null;
  /** Parent / guardian 1 school education level. */
  mse_code?: string | null;
  /** Student indigenous status. */
  s_indig_sts?: string | null;
  /** Student country of birth. */
  scob_code?: string | null;
  /** Student language at home. */
  slote_code?: string | null;
}

export interface StudentStandardNoteResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Student code. */
  stud_code?: string;
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
  /** Has Attachment */
  has_attachment?: boolean;
}

export type AddStudentStandardNoteRequest =
  CommonStudentStandardNoteUpdateRequest & object;

export interface CommonStudentStandardNoteUpdateRequest {
  /**
   * Note category code. If provided, it must be a valid value as per the note category options.
   * @minLength 1
   * @maxLength 3
   */
  note_cat: string;
  /**
   * Note date. Must be a valid date in format (yyyy-mm-dd).
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

export type UpdateStudentStandardNoteRequest =
  CommonStudentStandardNoteUpdateRequest & object;

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

export interface StudentConfidentialNoteResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Student code. */
  stud_code?: string;
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
  /** Has Attachment */
  has_attachment?: boolean;
}

export type AddStudentConfidentialNoteRequest =
  CommonStudentConfidentialNoteUpdateRequest & object;

export interface CommonStudentConfidentialNoteUpdateRequest {
  /**
   * Note category code. If provided, it must be a valid value as per the note category options.
   * @minLength 1
   * @maxLength 3
   */
  note_cat: string;
  /**
   * Note date. Must be a valid date in format (yyyy-mm-dd).
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

export type UpdateStudentConfidentialNoteRequest =
  CommonStudentConfidentialNoteUpdateRequest & object;

export interface StudentPhotoChangesResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Change key. */
  change_key?: string;
  /** Student photo changes. */
  changes?: StudentPhotoChange[];
}

export interface StudentPhotoChange {
  /** Student code. */
  stud_code?: string;
  /**
   * Photo update timestamp.
   * @format date-time
   */
  photo_update_on?: string;
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

export interface StudentUDAreaResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Area code. */
  area_code?: string;
  /** Student code. */
  stud_code?: string;
  /**
   * Date of last update.
   * @format date-time
   */
  update_on?: string | null;
  /** UD fields. */
  ud_fields?: StudentUDAreaFieldsResponse;
}

export interface StudentUDAreaFieldsResponse {
  /** User defined flags. */
  ud_flags?: StudentUDAreaFlagResponse;
  /** User defined codes. */
  ud_codes?: StudentUDAreaCodeResponse;
  /** User defined text. */
  ud_text?: StudentUDAreaTextResponse;
  /** User defined dates. */
  ud_dates?: StudentUDAreaDateResponse;
  /** User defined attachments. */
  ud_attachments?: StudentUDAreaAttachmentResponse;
}

export interface StudentUDAreaFlagResponse {
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

export interface StudentUDAreaCodeResponse {
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

export interface StudentUDAreaTextResponse {
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

export interface StudentUDAreaDateResponse {
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

export interface StudentUDAreaAttachmentResponse {
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

export type AddStudentUDAreaRequest = CommonStudentUDAreaUpdateRequest & object;

export interface CommonStudentUDAreaUpdateRequest {
  /** UD fields. */
  ud_fields?: StudentUDAreaFieldsRequest;
}

export interface StudentUDAreaFieldsRequest {
  /** User defined flags. */
  ud_flags?: StudentUDAreaFlagRequest;
  /** User defined codes. */
  ud_codes?: StudentUDAreaCodeRequest;
  /** User defined text. */
  ud_text?: StudentUDAreaTextRequest;
  /** User defined dates. */
  ud_dates?: StudentUDAreaDateRequest;
}

export interface StudentUDAreaFlagRequest {
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

export interface StudentUDAreaCodeRequest {
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

export interface StudentUDAreaTextRequest {
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

export interface StudentUDAreaDateRequest {
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

export type UpdateStudentUDAreaRequest = CommonStudentUDAreaUpdateRequest &
  object;

export interface StudentUDFieldsResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Student code. */
  stud_code?: string;
  /** UD fields. */
  ud_fields?: UDFieldsResponse;
}

export interface UDFieldsResponse {
  /** User defined flags. */
  ud_flags?: UDFlagResponse;
  /** User defined code. */
  ud_codes?: UDCodeResponse;
  /** User defined text. */
  ud_text?: UDTextResponse;
}

export interface UDFlagResponse {
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

export interface UDCodeResponse {
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

export interface UDTextResponse {
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
}

export interface UpdateStudentUDFieldsRequest {
  /** User Defined Fields */
  ud_fields?: UDFieldsRequest;
}

export interface UDFieldsRequest {
  /** User defined flags. */
  ud_flags?: UDFlagRequest;
  /** User defined code. */
  ud_codes?: UDCodeRequest;
  /** User defined text. */
  ud_text?: UDTextRequest;
}

export interface UDFlagRequest {
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

export interface UDCodeRequest {
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

export interface UDTextRequest {
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
}

export interface StudentUDFieldOptionResponse {
  /** UD fields. */
  ud_fields?: StudentUDFieldOptionTypes;
  /** Company code. */
  cmpy_code?: string;
}

export interface StudentUDFieldOptionTypes {
  /** User defined flags. */
  ud_flags?: StudentUDFieldOptionDetails[];
  /** User defined codes. */
  ud_codes?: StudentUDCodeFieldOptionDetails[];
  /** User defined text. */
  ud_text?: StudentUDFieldOptionDetails[];
}

export interface StudentUDFieldOptionDetails {
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

export type StudentUDCodeFieldOptionDetails = StudentUDFieldOptionDetails & {
  /** UD reference field values. */
  reference_values?: StudentUDFieldOptionReferenceValue[];
};

export interface StudentUDFieldOptionReferenceValue {
  /** UD code. */
  ud_code?: string | null;
  /** UD description. */
  ud_desc?: string | null;
  /**
   * Sort order.
   * @format int32
   */
  sort_order?: number;
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

export interface AsthmaManagementResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Student Code */
  stud_code?: string;
  /** Usual Signs */
  usual_signs?: UsualSigns;
  /** Worsening Signs */
  worsening_signs?: WorseningSigns;
  /** Triggers */
  triggers?: Triggers;
}

export interface UsualSigns {
  /** Wheezing */
  wheez_flg?: boolean;
  /** Tightness In Chest */
  tight_flg?: boolean;
  /** Coughing */
  cough_flg?: boolean;
  /** Difficulty In Breathing */
  breath_flg?: boolean;
  /** Difficulty In Speaking */
  speak_flg?: boolean;
  /** Other Usual Signs */
  comm_text?: string | null;
}

export interface WorseningSigns {
  /** Wheezing */
  wheez_flg?: boolean;
  /** Tightness In Chest */
  tight_flg?: boolean;
  /** Coughing */
  cough_flg?: boolean;
  /** Difficulty In Breathing */
  breath_flg?: boolean;
  /** Difficulty In Speaking */
  speak_flg?: boolean;
  /** Other Worsening Signs */
  comm_text?: string | null;
}

export interface Triggers {
  /** Exercise */
  exercise_flg?: boolean;
  /** Cold/Virus */
  cold_virus_flg?: boolean;
  /** Pollen */
  pollen_flg?: boolean;
  /** Dust */
  dust_flg?: boolean;
  /** Food */
  food_flg?: boolean;
  /** Which Foods? */
  food_text?: string | null;
  /** Other Triggers */
  comm_text?: string | null;
}

export interface UpdateAsthmaManagementRequest {
  /** Usual Signs */
  usual_signs?: UsualSigns2;
  /** Worsening Signs */
  worsening_signs?: WorseningSigns2;
  /** Triggers */
  triggers?: Triggers2;
}

export interface UsualSigns2 {
  /** Wheezing */
  wheez_flg?: boolean;
  /** Tightness In Chest */
  tight_flg?: boolean;
  /** Coughing */
  cough_flg?: boolean;
  /** Difficulty In Breathing */
  breath_flg?: boolean;
  /** Difficulty In Speaking */
  speak_flg?: boolean;
  /**
   * Other Usual Signs
   * @maxLength 200
   */
  comm_text?: string | null;
}

export interface WorseningSigns2 {
  /** Wheezing */
  wheez_flg?: boolean;
  /** Tightness In Chest */
  tight_flg?: boolean;
  /** Coughing */
  cough_flg?: boolean;
  /** Difficulty In Breathing */
  breath_flg?: boolean;
  /** Difficulty In Speaking */
  speak_flg?: boolean;
  /**
   * Other Worsening Signs
   * @maxLength 200
   */
  comm_text?: string | null;
}

export interface Triggers2 {
  /** Exercise */
  exercise_flg?: boolean;
  /** Cold/Virus */
  cold_virus_flg?: boolean;
  /** Pollen */
  pollen_flg?: boolean;
  /** Dust */
  dust_flg?: boolean;
  /** Food */
  food_flg?: boolean;
  /**
   * Which Foods?
   * @maxLength 200
   */
  food_text?: string | null;
  /**
   * Other Triggers
   * @maxLength 200
   */
  comm_text?: string | null;
}

export interface StudentMedicalConditionResponse {
  /** Company Code */
  cmpy_code?: string;
  /**
   * Date Of Last Occurence
   * @format date
   */
  last_occ_date?: string | null;
  /** Medical Condition Type */
  mcond_code?: string;
  /** Severe? */
  severe_ind?: boolean;
  /** Student Code */
  stud_code?: string;
  /** General Treatment Details */
  treat_text?: string | null;
  /** Is Active? */
  active_flg?: boolean;
  /** User Defined Fields */
  ud_fields?: UdFields;
  /** Has Attachment */
  has_attachment?: boolean;
  /** Has Note */
  has_note?: boolean;
}

export interface UdFields {
  /** User Defined Text Fields */
  ud_text?: UdText;
}

export interface UdText {
  /** User Defined Text Field 1 */
  ud1_text?: string | null;
  /** User Defined Text Field 2 */
  ud2_text?: string | null;
  /** User Defined Text Field 3 */
  ud3_text?: string | null;
  /** User Defined Text Field 4 */
  ud4_text?: string | null;
  /** User Defined Text Field 5 */
  ud5_text?: string | null;
  /** User Defined Text Field 6 */
  ud6_text?: string | null;
  /** User Defined Text Field 7 */
  ud7_text?: string | null;
  /** User Defined Text Field 8 */
  ud8_text?: string | null;
  /** User Defined Text Field 9 */
  ud9_text?: string | null;
  /** User Defined Text Field 10 */
  ud10_text?: string | null;
}

export interface AddStudentMedicalConditionRequest {
  /**
   * Date Of Last Occurence
   * @format date
   */
  last_occ_date?: string | null;
  /**
   * Medical Condition Type
   * @maxLength 3
   */
  mcond_code?: string;
  /** Severe? */
  severe_ind?: boolean;
  /**
   * General Treatment Details
   * @maxLength 4000
   */
  treat_text?: string | null;
  /** Is Active? */
  active_flg?: boolean;
  /** User Defined Fields */
  ud_fields?: UdFields2;
}

export interface UdFields2 {
  /** User Defined Text Fields */
  ud_text?: UdText2;
}

export interface UdText2 {
  /**
   * User Defined Text Field 1
   * @maxLength 200
   */
  ud1_text?: string | null;
  /**
   * User Defined Text Field 2
   * @maxLength 200
   */
  ud2_text?: string | null;
  /**
   * User Defined Text Field 3
   * @maxLength 200
   */
  ud3_text?: string | null;
  /**
   * User Defined Text Field 4
   * @maxLength 200
   */
  ud4_text?: string | null;
  /**
   * User Defined Text Field 5
   * @maxLength 200
   */
  ud5_text?: string | null;
  /**
   * User Defined Text Field 6
   * @maxLength 200
   */
  ud6_text?: string | null;
  /**
   * User Defined Text Field 7
   * @maxLength 200
   */
  ud7_text?: string | null;
  /**
   * User Defined Text Field 8
   * @maxLength 200
   */
  ud8_text?: string | null;
  /**
   * User Defined Text Field 9
   * @maxLength 200
   */
  ud9_text?: string | null;
  /**
   * User Defined Text Field 10
   * @maxLength 200
   */
  ud10_text?: string | null;
}

export interface UpdateStudentMedicalConditionRequest {
  /**
   * Date Of Last Occurence
   * @format date
   */
  last_occ_date?: string | null;
  /** Severe? */
  severe_ind?: boolean;
  /**
   * General Treatment Details
   * @maxLength 4000
   */
  treat_text?: string | null;
  /** Is Active? */
  active_flg?: boolean;
  /** User Defined Fields */
  ud_fields?: UdFields3;
}

export interface UdFields3 {
  /** User Defined Text Fields */
  ud_text?: UdText3;
}

export interface UdText3 {
  /**
   * User Defined Text Field 1
   * @maxLength 200
   */
  ud1_text?: string | null;
  /**
   * User Defined Text Field 2
   * @maxLength 200
   */
  ud2_text?: string | null;
  /**
   * User Defined Text Field 3
   * @maxLength 200
   */
  ud3_text?: string | null;
  /**
   * User Defined Text Field 4
   * @maxLength 200
   */
  ud4_text?: string | null;
  /**
   * User Defined Text Field 5
   * @maxLength 200
   */
  ud5_text?: string | null;
  /**
   * User Defined Text Field 6
   * @maxLength 200
   */
  ud6_text?: string | null;
  /**
   * User Defined Text Field 7
   * @maxLength 200
   */
  ud7_text?: string | null;
  /**
   * User Defined Text Field 8
   * @maxLength 200
   */
  ud8_text?: string | null;
  /**
   * User Defined Text Field 9
   * @maxLength 200
   */
  ud9_text?: string | null;
  /**
   * User Defined Text Field 10
   * @maxLength 200
   */
  ud10_text?: string | null;
}

export interface StudentMedicalConditionNoteResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Student Code */
  stud_code?: string;
  /** Medical Condition Type */
  mcond_code?: string;
  /**
   * Note Date
   * @format date
   */
  note_date?: string;
  /** Note Text */
  note_text?: string | null;
  /**
   * Unique Note Identifier
   * @format guid
   */
  note_uid?: string;
}

export interface AddStudentMedicalConditionNoteRequest {
  /**
   * Note Date
   * @format date
   * @minLength 1
   */
  note_date: string;
  /**
   * Note Text
   * @maxLength 4000
   */
  note_text?: string | null;
}

export interface UpdateStudentMedicalConditionNoteRequest {
  /**
   * Note Date
   * @format date
   * @minLength 1
   */
  note_date: string;
  /**
   * Note Text
   * @maxLength 4000
   */
  note_text?: string | null;
}

export interface StudentImmunisationResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Immunisation code. */
  imm_code?: string;
  /**
   * Immunisation year.
   * @format int32
   */
  imm_year?: number | null;
  /** Student code. */
  stud_code?: string;
}

export interface AddStudentImmunisationRequest {
  /**
   * Immunisation code. Must be a valid value as per the immunisation type options.
   * @minLength 1
   * @maxLength 2
   */
  imm_code: string;
  /**
   * Immunisation year
   * @format int32
   */
  imm_year: number;
}

export interface UpdateStudentImmunisationRequest {
  /**
   * Immunisation year
   * @format int32
   */
  imm_year: number;
}

export interface StudentImmunisationRegisterResponse {
  /** Company code. */
  cmpy_code?: string;
  /**
   * Immunisation statement as at date.
   * @format date
   */
  air_state_date?: string | null;
  /**
   * Next immunisation due date.
   * @format date
   */
  next_due_date?: string | null;
  /** Student code. */
  stud_code?: string;
  /** Immunisation status. */
  status_code?: string | null;
  /** Has Attachment */
  has_attachment?: boolean;
}

export interface UpdateStudentImmunisationRegisterRequest {
  /**
   * Next immunisation due date.
   * @format date
   */
  next_due_date?: string | null;
  /** Immunisation status. */
  status_code?: string | null;
}

export interface StudentMedicationResponse {
  /** Is Active? */
  active_flg?: boolean;
  /** Administration. (S) - self medicate, (A) - needs assistance */
  administer?: string | null;
  /** Company Code */
  cmpy_code?: string;
  /** Practitioner Phone */
  doc_phone?: string | null;
  /**
   * End Date
   * @format date
   */
  end_date?: string | null;
  /**
   * Expiry Date
   * @format date
   */
  expiry_date?: string | null;
  /** Medical Condition Type */
  mcond_code?: string;
  /** Further Details */
  med_detl?: string | null;
  /** Method Of Use */
  med_meth?: string | null;
  /** Medication Name */
  med_text?: string | null;
  /**
   * Unique Medication Identifier
   * @format guid
   */
  medication_uid?: string;
  /** Minimum Time Between Doses */
  min_time_between_doses?: number | null;
  /** Prescribing Practitioner Name */
  script_doc?: string | null;
  /**
   * Start Date
   * @format date
   */
  start_date?: string | null;
  /** Student Code */
  stud_code?: string;
  /** Staff Training Required */
  training?: boolean;
  /** Has Attachment */
  has_attachment?: boolean;
  /** Has Note */
  has_note?: boolean;
  /** Has Schedule */
  has_schedule?: boolean;
}

export interface AddStudentMedicationRequest {
  /** Is Active? */
  active_flg?: boolean;
  /**
   * Administration. (S) - self medicate, (A) - needs assistance
   * @maxLength 1
   */
  administer?: string;
  /**
   * Practitioner Phone
   * @maxLength 25
   */
  doc_phone?: string | null;
  /**
   * End Date
   * @format date
   */
  end_date?: string | null;
  /**
   * Expiry Date
   * @format date
   */
  expiry_date?: string | null;
  /**
   * Further Details
   * @maxLength 200
   */
  med_detl?: string | null;
  /**
   * Method Of Use
   * @maxLength 200
   */
  med_meth?: string | null;
  /**
   * Medication Name
   * @maxLength 200
   */
  med_text?: string;
  /** Minimum Time Between Doses */
  min_time_between_doses?: number | null;
  /**
   * Prescribing Practitioner Name
   * @maxLength 30
   */
  script_doc?: string | null;
  /**
   * Start Date
   * @format date
   */
  start_date?: string | null;
  /** Staff Training Required */
  training?: boolean;
}

export interface UpdateStudentMedicationRequest {
  /** Is Active? */
  active_flg?: boolean;
  /**
   * Administration. (S) - self medicate, (A) - needs assistance
   * @maxLength 1
   */
  administer?: string;
  /**
   * Practitioner Phone
   * @maxLength 25
   */
  doc_phone?: string | null;
  /**
   * End Date
   * @format date
   */
  end_date?: string | null;
  /**
   * Expiry Date
   * @format date
   */
  expiry_date?: string | null;
  /**
   * Further Details
   * @maxLength 200
   */
  med_detl?: string | null;
  /**
   * Method Of Use
   * @maxLength 200
   */
  med_meth?: string | null;
  /**
   * Medication Name
   * @maxLength 200
   */
  med_text?: string | null;
  /**
   * Unique Medication Identifier
   * @format guid
   */
  medication_uid?: string;
  /**
   * Prescribing Practitioner Name
   * @maxLength 30
   */
  script_doc?: string | null;
  /**
   * Start Date
   * @format date
   */
  start_date?: string | null;
  /** Student Code */
  stud_code?: string;
  /** Staff Training Required */
  training?: boolean;
}

export interface StudentMedicationNoteResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Student Code */
  stud_code?: string;
  /** Medical Condition Type */
  mcond_code?: string;
  /**
   * Unique Medication Identifier
   * @format guid
   */
  medication_uid?: string;
  /**
   * Note Date
   * @format date
   */
  note_date?: string;
  /** Note Text */
  note_text?: string | null;
  /**
   * Unique Note Identifier
   * @format guid
   */
  note_uid?: string;
}

export interface AddStudentMedicationNoteRequest {
  /**
   * Note Date
   * @format date
   */
  note_date?: string;
  /**
   * Note Text
   * @maxLength 4000
   */
  note_text?: string | null;
}

export interface UpdateStudentMedicationNoteRequest {
  /**
   * Note Date
   * @format date
   */
  note_date?: string;
  /**
   * Note Text
   * @maxLength 4000
   */
  note_text?: string | null;
}

export interface StudentMedicationScheduleResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Student Code */
  stud_code?: string;
  /** Medical Condition Type */
  mcond_code?: string;
  /**
   * Unique Medication Identifier
   * @format guid
   */
  medication_uid?: string;
  /**
   * Unique Schedule Identifier
   * @format guid
   */
  sched_uid?: string;
  /** Dosage */
  med_dose?: string | null;
  /**
   * Time
   * @format time
   */
  med_time?: string;
  /**
   * Start Date
   * @format date
   */
  shed_start_date?: string | null;
  /**
   * End Date
   * @format date
   */
  shed_end_date?: string | null;
  /** Days */
  days?: DaysResponse;
}

export interface DaysResponse {
  /** Monday */
  mon_flg?: boolean;
  /** Tuesday */
  tue_flg?: boolean;
  /** Wednesday */
  wed_flg?: boolean;
  /** Thursday */
  thu_flg?: boolean;
  /** Friday */
  fri_flg?: boolean;
  /** Saturday */
  sat_flg?: boolean;
  /** Sunday */
  sun_flg?: boolean;
}

export interface AddStudentMedicationScheduleRequest {
  /**
   * Dosage
   * @minLength 1
   * @maxLength 100
   */
  med_dose: string;
  /**
   * Time
   * @format time
   * @minLength 1
   */
  med_time: string;
  /**
   * Start Date
   * @format date
   * @minLength 1
   */
  shed_start_date: string;
  /**
   * End Date
   * @format date
   */
  shed_end_date?: string | null;
  /** Days */
  days?: DaysRequest;
}

export interface DaysRequest {
  /** Monday */
  mon_flg?: boolean;
  /** Tuesday */
  tue_flg?: boolean;
  /** Wednesday */
  wed_flg?: boolean;
  /** Thursday */
  thu_flg?: boolean;
  /** Friday */
  fri_flg?: boolean;
  /** Saturday */
  sat_flg?: boolean;
  /** Sunday */
  sun_flg?: boolean;
}

export interface UpdateStudentMedicationScheduleRequest {
  /**
   * Dosage
   * @minLength 1
   * @maxLength 100
   */
  med_dose: string;
  /**
   * Time
   * @format time
   * @minLength 1
   */
  med_time: string;
  /**
   * Start Date
   * @format date
   * @minLength 1
   */
  shed_start_date: string;
  /**
   * End Date
   * @format date
   */
  shed_end_date?: string | null;
  /** Days */
  days?: DaysRequest2;
}

export interface DaysRequest2 {
  /** Monday */
  mon_flg?: boolean;
  /** Tuesday */
  tue_flg?: boolean;
  /** Wednesday */
  wed_flg?: boolean;
  /** Thursday */
  thu_flg?: boolean;
  /** Friday */
  fri_flg?: boolean;
  /** Saturday */
  sat_flg?: boolean;
  /** Sunday */
  sun_flg?: boolean;
}

export interface StudentMedicalStandardNoteResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Student code. */
  stud_code?: string;
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
  /** Has Attachment */
  has_attachment?: boolean;
}

export type AddStudentMedicalStandardNoteRequest =
  CommonStudentMedicalStandardNoteUpdateRequest & object;

export interface CommonStudentMedicalStandardNoteUpdateRequest {
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

export type UpdateStudentMedicalStandardNoteRequest =
  CommonStudentMedicalStandardNoteUpdateRequest & object;

export interface StudentMedicalConfidentialNoteResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Student code. */
  stud_code?: string;
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
  /** Has Attachment */
  has_attachment?: boolean;
}

export type AddStudentMedicalConfidentialNoteRequest =
  CommonStudentMedicalConfidentialNoteUpdateRequest & object;

export interface CommonStudentMedicalConfidentialNoteUpdateRequest {
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

export type UpdateStudentMedicalConfidentialNoteRequest =
  CommonStudentMedicalConfidentialNoteUpdateRequest & object;

export interface StudentPractitionerResponse {
  /** Company code. */
  cmpy_code?: string;
  /** Doctor name. */
  doct_name?: string | null;
  /** Doctor phone. */
  doct_phone?: string | null;
  /** Practitioner number. */
  prac_num?: number;
  /** Practitioner type code. */
  ptype_code?: string | null;
  /** Student code. */
  stud_code?: string;
}

export interface AddStudentPractitionerRequest {
  /**
   * Doctor phone.
   * @maxLength 25
   */
  doct_phone?: string | null;
  /**
   * Doctor name.
   * @minLength 1
   * @maxLength 30
   */
  doct_name: string;
  /**
   * Practitioner type code.
   * @minLength 1
   * @maxLength 3
   */
  ptype_code: string;
}

export type UpdateStudentPractitionerRequest =
  CommonStudentPractitionerUpdateRequest & object;

export interface CommonStudentPractitionerUpdateRequest {
  /**
   * Doctor name.
   * @maxLength 50
   */
  doct_name?: string | null;
  /**
   * Doctor phone.
   * @maxLength 20
   */
  doct_phone?: string | null;
  /**
   * Practitioner type code.
   * @maxLength 10
   */
  ptype_code?: string | null;
}

export interface StudentMedicalSupplementaryResponse {
  /** Company Code */
  cmpy_code?: string;
  /** Student Code */
  stud_code?: string;
  /** Supplementary Code */
  msupp_code?: string;
  /** Additional Details */
  comm_text?: string | null;
}

export interface UpdateStudentMedicalSupplementaryRequest {
  /**
   * Additional Details
   * @maxLength 200
   */
  comm_text?: string | null;
}

export interface AddStudentMedicalSupplementaryRequest {
  /**
   * Supplementary Code
   * @maxLength 3
   */
  msupp_code?: string;
  /**
   * Additional Details
   * @maxLength 200
   */
  comm_text?: string | null;
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

export interface ActivityResponse {
  /** Company code */
  cmpy_code?: string;
  /**
   * Activity identifier
   * @format int32
   */
  activity_id?: number;
  /** Result year */
  year?: string | null;
  /** Result period */
  period?: string | null;
  /** Subject code */
  sub_code?: string | null;
  /** Year group */
  year_grp?: number | null;
  /** Activity name */
  activity_name?: string;
  /**
   * Topic identifier
   * @format int32
   */
  topic_id?: number;
  /** Topic name */
  topic_name?: string;
  /** Assessment criteria */
  assessment_criteria?: AssessmentCriteriaResponse[];
}

export interface AssessmentCriteriaResponse {
  /** Object code */
  obj_code?: string;
  /** Object description */
  obj_desc?: string;
  /** Maximum value */
  max_val?: number | null;
  /** Assessment method */
  assessment_method?: AssessmentMethodResponse | null;
}

export interface AssessmentMethodResponse {
  /** Assessment code */
  ass_code?: string;
  /** Assessment type */
  ass_type?: string;
  /** Assessment range */
  ass_range?: string;
  /** Description text */
  desc_text?: string;
  /** Validation type */
  val_type?: string;
  /** Validations */
  validations?: ValidationResponse[];
}

export interface ValidationResponse {
  /** Valid result */
  valid_result?: string;
  /** Minimum value */
  min_val?: number | null;
  /** Maximum value */
  max_val?: number | null;
}

export interface ActivityStudentResponse {
  /** Company code */
  cmpy_code?: string;
  /**
   * Activity identifier
   * @format int32
   */
  activity_id?: number;
  /** Student code */
  stud_code?: string;
  /** Class */
  class_code?: string | null;
  /** Year Group */
  year_grp?: number | null;
}

export interface ActivityStudentResultsResponse {
  /** Company code */
  cmpy_code?: string;
  /**
   * Activity identifier
   * @format int32
   */
  activity_id?: number;
  /** Student code */
  stud_code?: string;
  /** Objective results */
  objective_results?: ObjectiveResult[];
}

export interface ObjectiveResult {
  /** Objective code */
  obj_code?: string;
  /** Student result */
  stud_result?: string | null;
}

export interface UpdateActivityStudentResultsRequest {
  /** Objective results */
  objective_results?: ObjectiveResult2[];
}

export interface ObjectiveResult2 {
  /**
   * Objective code
   * @minLength 1
   * @maxLength 4
   */
  obj_code: string;
  /**
   * Student result
   * @minLength 1
   * @maxLength 7
   */
  stud_result: string;
}

export interface AttendanceGetAllAbsenceReasonOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AttendanceGetAllAbsenceTypeOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AttendanceGetAllCampusOptionsForAttendanceParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AttendanceGetAllHouseOptionsForAttendanceParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AttendanceGetAllYearGroupOptionsForAttendanceParams {
  /** Company code. */
  cmpyCode: string;
}

export interface AttendanceGetAllStudentAttendancesParams {
  /** Company code. */
  cmpyCode: string;
}

export interface CommunicationRulesGetStudentCommunicationRulesParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface CommunicationRulesGetStudentCommunicationRulesByCommTypeCodeParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Communication type code. */
  commtypeCode: string;
}

export interface CommunicationRulesGetAllStudentCommunicationRulesParams {
  /** Company code. */
  cmpyCode: string;
}

export interface CommunicationRulesGetAllStudentCommunicationRulesByCommTypeParams {
  /** Company code. */
  cmpyCode: string;
  /** Communication type code. */
  commtypeCode: string;
}

export interface CommunicationRulesGetAllCommunicationRuleGenderOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface CommunicationRulesGetAllCommunicationRuleTypeOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllStudentsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetStudentByIdParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface InformationUpdateStudentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export type InformationPatchStudentPayload = Operation[];

export interface InformationPatchStudentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface InformationGetAllReligionOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllResidencyStatusOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllCampusOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllFeederSchoolOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllHouseOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllYearGroupOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllNextYearIndicatorOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllComparativeReportingTypeOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface InformationGetAllPcTutorGroupOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface MceecdyaGetStudentMceecdyaParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface MceecdyaUpdateStudentMceecdyaParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export type MceecdyaPatchStudentMceecdyaPayload = Operation[];

export interface MceecdyaPatchStudentMceecdyaParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface MceecdyaGetAllStudentCountryOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface MceecdyaGetAllStudentLanguageOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface MceecdyaGetAllOccupationalGroupOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface MceecdyaGetAllStudentIndigenousTypeOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface MceecdyaGetAllSchoolEducationTypeOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface MceecdyaGetAllNonSchoolEducationTypeOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface NotesGetAllStudentStandardNotesParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface NotesAddStudentStandardNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface NotesGetStudentStandardNoteByIdParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesUpdateStudentStandardNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export type NotesPatchStudentStandardNotePayload = Operation[];

export interface NotesPatchStudentStandardNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesDeleteStudentStandardNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesGetAllStudentStandardNotesAttachmentsParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesAddStudentStandardNotesAttachmentPayload {
  file_name?: string | null;
  /** @format binary */
  file_content?: File | null;
}

export interface NotesAddStudentStandardNotesAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesDownloadStudentStandardNotesAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface NotesDeleteStudentStandardNotesAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface NotesGetAllStudentConfidentialNotesParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface NotesAddStudentConfidentialNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface NotesGetStudentConfidentialNoteByIdParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesUpdateStudentConfidentialNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export type NotesPatchStudentConfidentialNotePayload = Operation[];

export interface NotesPatchStudentConfidentialNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesDeleteStudentConfidentialNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesGetAllStudentConfidentialNotesAttachmentsParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesAddStudentConfidentialNotesAttachmentPayload {
  file_name?: string | null;
  /** @format binary */
  file_content?: File | null;
}

export interface NotesAddStudentConfidentialNotesAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
}

export interface NotesDownloadStudentConfidentialNotesAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface NotesDeleteStudentConfidentialNotesAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /**
   * Note unique identifier.
   * @format guid
   */
  noteUid: string;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface NotesGetAllStudentNoteCategoryOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface PhotoGetStudentPhotoChangesParams {
  /** Change key for filtering records from a specific point onwards. */
  change_key?: string | null;
  /** Company code. */
  cmpyCode: string;
}

export interface PhotoGetStudentPhotoParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface PhotoAddStudentPhotoPayload {
  /** @format binary */
  file_content?: File | null;
}

export interface PhotoAddStudentPhotoParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface UdAreasGetAllStudentUdAreaOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface UdAreasGetSingleStudentUdAreaOptionsParams {
  /** Company code. */
  cmpyCode: string;
  /** Area code. */
  areaCode: string;
}

export interface UdAreasGetAllStudentUdAreasParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface UdAreasGetStudentUdAreaByIdParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Area code. */
  areaCode: string;
}

export interface UdAreasAddStudentUdAreaParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Area code. */
  areaCode: string;
}

export interface UdAreasUpdateStudentUdAreaParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Area code. */
  areaCode: string;
}

export type UdAreasPatchStudentUdAreaPayload = Operation[];

export interface UdAreasPatchStudentUdAreaParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Area code. */
  areaCode: string;
}

export interface UdAreasDeleteStudentUdAreaParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Area code. */
  areaCode: string;
}

export interface UdAreasDownloadStudentUdAreaAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
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

export interface UdAreasDeleteStudentUdAreaAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
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

export interface UdAreasAddStudentUdAreaAttachmentPayload {
  file_name?: string | null;
  /** @format binary */
  file_content?: File | null;
}

export interface UdAreasAddStudentUdAreaAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Area code. */
  areaCode: string;
  /**
   * UD attachment field number. Must be in the range of 41-50 inclusive.
   * @format int32
   */
  fieldNumber: number;
}

export interface UdFieldsGetStudentUdFieldsParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface UdFieldsUpdateStudentUdFieldsParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export type UdFieldsPatchStudentUdFieldsPayload = Operation[];

export interface UdFieldsPatchStudentUdFieldsParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface UdFieldsGetAllStudentUdFieldOptionsParams {
  /** Company code. */
  cmpyCode: string;
}
