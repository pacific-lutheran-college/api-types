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
