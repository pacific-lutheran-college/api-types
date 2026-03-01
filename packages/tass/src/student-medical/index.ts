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

export interface AsthmaManagementGetAsthmaManagementParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface AsthmaManagementUpdateAsthmaManagementParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export type AsthmaManagementPatchAsthmaManagementPayload = Operation[];

export interface AsthmaManagementPatchAsthmaManagementParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface ConditionsGetAllStudentMedicalConditionsParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface ConditionsAddStudentMedicalConditionParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface ConditionsGetStudentMedicalConditionByCodeParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition code. */
  mcondCode: string;
}

export interface ConditionsUpdateStudentMedicalConditionParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition code. */
  mcondCode: string;
}

export type ConditionsPatchStudentMedicalConditionPayload = Operation[];

export interface ConditionsPatchStudentMedicalConditionParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition code. */
  mcondCode: string;
}

export interface ConditionsDeleteStudentMedicalConditionParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition code. */
  mcondCode: string;
}

export interface ConditionsGetAllStudentMedicalConditionNotesParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
}

export interface ConditionsAddStudentMedicalConditionNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition code. */
  mcondCode: string;
}

export interface ConditionsGetStudentMedicalConditionNoteByCodeParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface ConditionsUpdateStudentMedicalConditionNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition code. */
  mcondCode: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export type ConditionsPatchStudentMedicalConditionNotePayload = Operation[];

export interface ConditionsPatchStudentMedicalConditionNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition code. */
  mcondCode: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface ConditionsDeleteStudentMedicalConditionNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition code. */
  mcondCode: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface ConditionsGetAllStudentMedicalConditionAttachmentsParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
}

export interface ConditionsAddStudentMedicalConditionAttachmentPayload {
  file_name?: string | null;
  /** @format binary */
  file_content?: File | null;
}

export interface ConditionsAddStudentMedicalConditionAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition code. */
  mcondCode: string;
}

export interface ConditionsDownloadStudentMedicalConditionAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /** Unique attachment identifier. */
  attachId: string;
}

export interface ConditionsDeleteStudentMedicalConditionAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition code. */
  mcondCode: string;
  /** Unique attachment identifier. */
  attachId: string;
}

export interface ConditionsGetAllMedicalConditionTypesOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface ImmunisationsGetAllImmunisationTypesOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface ImmunisationsGetAllStudentImmunisationsParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface ImmunisationsAddStudentImmunisationParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface ImmunisationsGetStudentImmunisationsParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Immunisation code */
  immCode: string;
}

export interface ImmunisationsDeleteStudentImmunisationParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Immunisation code. */
  immCode: string;
}

export interface ImmunisationsUpdateStudentImmunisationParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Immunisation code. */
  immCode: string;
}

export interface ImmunisationsGetAllImmunisationStatusesOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface ImmunisationsGetStudentImmunisationRegisterParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface ImmunisationsUpdateStudentImmunisationRegisterParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface ImmunisationsGetAllStudentImmunisationRegisterAttachmentsParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface ImmunisationsAddStudentImmunisationRegisterAttachmentPayload {
  /** @format date-time */
  air_state_date?: string | null;
  file_name?: string | null;
  /** @format binary */
  file_content?: File | null;
}

export interface ImmunisationsAddStudentImmunisationRegisterAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface ImmunisationsDownloadStudentImmunisationRegisterAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface ImmunisationsDeleteStudentImmunisationRegisterAttachmentsParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Attachment unique identifier. */
  attachId: string;
}

export interface MedicationsGetAllStudentMedicalMedicationsParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
}

export interface MedicationsAddStudentMedicalMedicationParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
}

export interface MedicationsGetStudentMedicalMedicationByCodeParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
}

export interface MedicationsUpdateStudentMedicalMedicationParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
}

/** JSON patch document. */
export type MedicationsPatchStudentMedicalMedicationPayload = Operation[];

export interface MedicationsPatchStudentMedicalMedicationParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
}

export interface MedicationsDeleteStudentMedicalMedicationParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
}

export interface MedicationsGetAllStudentMedicationNotesParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
}

export interface MedicationsAddStudentMedicationNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
}

export interface MedicationsGetStudentMedicationNoteByCodeParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface MedicationsUpdateStudentMedicationNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

/** JSON patch document. */
export type MedicationsPatchStudentMedicationNotePayload = Operation[];

export interface MedicationsPatchStudentMedicationNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface MedicationsDeleteStudentMedicationNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
  /**
   * Unique note identifier.
   * @format guid
   */
  noteUid: string;
}

export interface MedicationsGetAllStudentMedicationAttachmentsParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
}

export interface MedicationsAddStudentMedicationAttachmentPayload {
  file_name?: string | null;
  /** @format binary */
  file_content?: File | null;
}

export interface MedicationsAddStudentMedicationAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
}

export interface MedicationsDownloadStudentMedicationAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
  /** Unique attachment identifier. */
  attachId: string;
}

export interface MedicationsDeleteStudentMedicationAttachmentParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
  /** Unique attachment identifier. */
  attachId: string;
}

export interface MedicationsGetAllStudentMedicationSchedulesParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
}

export interface MedicationsAddStudentMedicationScheduleParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
}

export interface MedicationsGetStudentMedicationScheduleByCodeParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
  /**
   * Unique schedule identifier.
   * @format guid
   */
  schedUid: string;
}

export interface MedicationsUpdateStudentMedicationScheduleParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
  /**
   * Unique schedule identifier.
   * @format guid
   */
  schedUid: string;
}

/** JSON patch document. */
export type MedicationsPatchStudentMedicationSchedulePayload = Operation[];

export interface MedicationsPatchStudentMedicationScheduleParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
  /**
   * Unique schedule identifier.
   * @format guid
   */
  schedUid: string;
}

export interface MedicationsDeleteStudentMedicationScheduleParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Medical condition type. */
  mcondCode: string;
  /**
   * Unique medication identifier.
   * @format guid
   */
  medicationUid: string;
  /**
   * Unique schedule identifier.
   * @format guid
   */
  schedUid: string;
}

export interface NotesGetAllStudentStandardMedicalNotesParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface NotesAddStudentMedicalStandardNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface NotesGetStudentMedicalStandardNoteByIdParams {
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

export interface NotesUpdateStudentMedicalStandardNoteParams {
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

export type NotesPatchStudentMedicalStandardNotePayload = Operation[];

export interface NotesPatchStudentMedicalStandardNoteParams {
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

export interface NotesDeleteStudentMedicalStandardNoteParams {
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

export interface NotesGetAllStudentConfidentialMedicalNotesParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface NotesAddStudentMedicalConfidentialNoteParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface NotesGetStudentMedicalConfidentialNoteByIdParams {
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

export interface NotesUpdateStudentMedicalConfidentialNoteParams {
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

export type NotesPatchStudentMedicalConfidentialNotePayload = Operation[];

export interface NotesPatchStudentMedicalConfidentialNoteParams {
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

export interface NotesDeleteStudentMedicalConfidentialNoteParams {
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

export interface NotesGetAllStudentMedicalStandardNotesAttachmentParams {
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

export interface NotesAddStudentMedicalStandardNotesAttachmentPayload {
  file_name?: string | null;
  /** @format binary */
  file_content?: File | null;
}

export interface NotesAddStudentMedicalStandardNotesAttachmentParams {
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

export interface NotesDownloadStudentMedicalStandardNotesAttachmentParams {
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

export interface NotesDeleteStudentMedicalStandardNotesAttachmentParams {
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

export interface NotesGetAllStudentMedicalConfidentialNotesAttachmentParams {
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

export interface NotesAddStudentMedicalConfidentialNotesAttachmentPayload {
  file_name?: string | null;
  /** @format binary */
  file_content?: File | null;
}

export interface NotesAddStudentMedicalConfidentialNotesAttachmentParams {
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

export interface NotesDownloadStudentConfidentialMedicalNotesAttachmentParams {
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

export interface NotesDeleteStudentMedicalConfidentialNotesAttachmentParams {
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

export interface NotesGetAllStudentMedicalNoteCategoryOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface PractitionersGetAllPractitionerTypesOptionsParams {
  /** Company code. */
  cmpyCode: string;
}

export interface PractitionersGetAllStudentPractitionersParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface PractitionersAddStudentPractitionerParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface PractitionersGetStudentPractitionerByPracNumParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Practitioner number */
  pracNum: number;
}

export interface PractitionersDeleteStudentPractitionerParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Practitioner number. */
  pracNum: number;
}

export interface PractitionersUpdateStudentPractitionerParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Practitioner number. */
  pracNum: number;
}

export type PractitionersPatchStudentPractitionerPayload = Operation[];

export interface PractitionersPatchStudentPractitionerParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Practitioner number. */
  pracNum: number;
}

export interface SupplementariesGetAllStudentMedicalSupplementariesParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface SupplementariesCreateStudentMedicalSupplementaryParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
}

export interface SupplementariesGetStudentMedicalSupplementaryByCodeParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Supplementary code. */
  msuppCode: string;
}

export interface SupplementariesDeleteStudentMedicalSupplementaryParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Supplementary code. */
  msuppCode: string;
}

export interface SupplementariesUpdateStudentMedicalSupplementaryParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Supplementary code. */
  msuppCode: string;
}

/** JSON Patch document. */
export type SupplementariesPatchStudentMedicalSupplementaryPayload =
  Operation[];

export interface SupplementariesPatchStudentMedicalSupplementaryParams {
  /** Company code. */
  cmpyCode: string;
  /** Student code. */
  studCode: string;
  /** Supplementary code. */
  msuppCode: string;
}

export interface SupplementariesGetAllSupplementaryTypesOptionsParams {
  /** Company code. */
  cmpyCode: string;
}
