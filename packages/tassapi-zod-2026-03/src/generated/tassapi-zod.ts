import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

type UserTokenResponse = Partial<{
  token: string;
  token_expiry_date: string;
  allowed_companies: Array<AllowedCompanyDetails>;
}>;
type AllowedCompanyDetails = Partial<{
  cmpy_code: string | null;
  name_text: string | null;
}>;
type ValidationExceptionDetails = ExceptionDetails &
  Partial<{
    errors: {};
  }>;
type ExceptionDetails = Partial<{
  status: number;
  title: string;
  detail: string;
}>;
type StudentCommunicationRulesResponse = Partial<{
  cmpy_code: string;
  stud_code: string;
  comm_rules: Array<StudentCommunicationRulesParentDetailsResponse>;
}>;
type StudentCommunicationRulesParentDetailsResponse = Partial<{
  par_code: string;
  parent_names: Array<StudentCommunicationRulesParentNameResponse>;
  addresses: Array<StudentCommunicationRulesParentAddressResponse>;
}>;
type StudentCommunicationRulesParentNameResponse = Partial<{
  parent_type: string;
  deceased_flg: boolean;
  first_name: string;
  gender: string | null;
  initials: string | null;
  person_posn: number;
  preferred_name: string;
  suffix: string | null;
  surname: string;
  title: string | null;
}>;
type StudentCommunicationRulesParentAddressResponse = Partial<{
  add_num: number;
  addr1: string | null;
  addr2: string | null;
  addr3: string | null;
  addr_desc: string | null;
  addressee: string | null;
  bus_phone: string | null;
  call_order: number | null;
  country: string | null;
  e_mail1: string | null;
  e_mail2: string | null;
  fax: string | null;
  home_phone: string | null;
  mobile1: string | null;
  mobile2: string | null;
  person_posn: number | null;
  post_code: string | null;
  relationship: string | null;
  salutation: string | null;
  sms_flg1: boolean;
  sms_flg2: boolean;
  state_code: string | null;
  town_sub: string | null;
  comm_types: Array<StudentCommunicationRulesCommunicationTypeResponse>;
}>;
type StudentCommunicationRulesCommunicationTypeResponse = Partial<{
  commtype_code: string;
}>;
type UpdateStudentRequest = CommonStudentUpdateRequest & {};
type CommonStudentUpdateRequest = {
  alt_id?: (string | null) | undefined;
  boarder?: boolean | undefined;
  campus_code?: (string | null) | undefined;
  ceider?: (string | null) | undefined;
  compare_flg: string;
  date_arrival?: (string | null) | undefined;
  distance_ed?: boolean | undefined;
  dob?: (string | null) | undefined;
  doe: string;
  dol?: (string | null) | undefined;
  e_mail?: (string | null) | undefined;
  entry_lev?: (number | null) | undefined;
  ffpos?: boolean | undefined;
  first_name: string;
  form_cls?: (string | null) | undefined;
  fte: number;
  gender: string;
  house?: (string | null) | undefined;
  idm_id?: (string | null) | undefined;
  mob_phone?: (string | null) | undefined;
  next_yr_ind?: string | undefined;
  other_name?: (string | null) | undefined;
  pctut_grp?: (string | null) | undefined;
  preferred_name: string;
  preferred_surname: string;
  prev_school?: (string | null) | undefined;
  privacy_flg?: boolean | undefined;
  religion?: (string | null) | undefined;
  resident_sts?: (string | null) | undefined;
  sms_flg?: boolean | undefined;
  stud_code?: string | undefined;
  surname: string;
  usi?: (string | null) | undefined;
  visa_expiry?: (string | null) | undefined;
  visa_subclass?: (string | null) | undefined;
  web_access_ind?: boolean | undefined;
  year_grp: number;
};
type Operation = OperationBase &
  Partial<{
    value: unknown;
  }>;
type OperationBase = Partial<{
  path: string | null;
  op: string | null;
  from: string | null;
}>;
type AddStudentStandardNoteRequest =
  CommonStudentStandardNoteUpdateRequest & {};
type CommonStudentStandardNoteUpdateRequest = {
  note_cat: string;
  note_date: string;
  note_text: string;
};
type UpdateStudentStandardNoteRequest =
  CommonStudentStandardNoteUpdateRequest & {};
type AddStudentConfidentialNoteRequest =
  CommonStudentConfidentialNoteUpdateRequest & {};
type CommonStudentConfidentialNoteUpdateRequest = {
  note_cat: string;
  note_date: string;
  note_text: string;
};
type UpdateStudentConfidentialNoteRequest =
  CommonStudentConfidentialNoteUpdateRequest & {};
type StudentPhotoChangesResponse = Partial<{
  cmpy_code: string;
  change_key: string;
  changes: Array<StudentPhotoChange>;
}>;
type StudentPhotoChange = Partial<{
  stud_code: string;
  photo_update_on: string;
}>;
type UDAreaOptionsResponse = Partial<{
  cmpy_code: string;
  area_code: string;
  area_desc: string;
  ud_fields: UDFieldTypes;
}>;
type UDFieldTypes = Partial<{
  ud_flags: Array<UDFieldDetails>;
  ud_codes: Array<UDCodeFieldDetails>;
  ud_text: Array<UDFieldDetails>;
  ud_dates: Array<UDFieldDetails>;
  ud_attachments: Array<UDAttachmentFieldDetails>;
}>;
type UDFieldDetails = Partial<{
  field_name: string;
  field_desc: string | null;
  sort_order: number;
}>;
type UDCodeFieldDetails = UDFieldDetails &
  Partial<{
    reference_values: Array<UDFieldReferenceValue>;
  }>;
type UDFieldReferenceValue = Partial<{
  ud_code: string | null;
  ud_desc: string;
  sort_order: number;
}>;
type UDAttachmentFieldDetails = UDFieldDetails &
  Partial<{
    field_number: number;
  }>;
type StudentUDAreaResponse = Partial<{
  cmpy_code: string;
  area_code: string;
  stud_code: string;
  update_on: string | null;
  ud_fields: StudentUDAreaFieldsResponse;
}>;
type StudentUDAreaFieldsResponse = Partial<{
  ud_flags: StudentUDAreaFlagResponse;
  ud_codes: StudentUDAreaCodeResponse;
  ud_text: StudentUDAreaTextResponse;
  ud_dates: StudentUDAreaDateResponse;
  ud_attachments: StudentUDAreaAttachmentResponse;
}>;
type StudentUDAreaFlagResponse = Partial<{
  ud1_flg: string | null;
  ud2_flg: string | null;
  ud3_flg: string | null;
  ud4_flg: string | null;
  ud5_flg: string | null;
  ud6_flg: string | null;
  ud7_flg: string | null;
  ud8_flg: string | null;
  ud9_flg: string | null;
  ud10_flg: string | null;
}>;
type StudentUDAreaCodeResponse = Partial<{
  ud11_code: string | null;
  ud12_code: string | null;
  ud13_code: string | null;
  ud14_code: string | null;
  ud15_code: string | null;
  ud16_code: string | null;
  ud17_code: string | null;
  ud18_code: string | null;
  ud19_code: string | null;
  ud20_code: string | null;
}>;
type StudentUDAreaTextResponse = Partial<{
  ud21_text: string | null;
  ud22_text: string | null;
  ud23_text: string | null;
  ud24_text: string | null;
  ud25_text: string | null;
  ud26_text: string | null;
  ud27_text: string | null;
  ud28_text: string | null;
  ud29_text: string | null;
  ud30_text: string | null;
}>;
type StudentUDAreaDateResponse = Partial<{
  ud31_date: string | null;
  ud32_date: string | null;
  ud33_date: string | null;
  ud34_date: string | null;
  ud35_date: string | null;
  ud36_date: string | null;
  ud37_date: string | null;
  ud38_date: string | null;
  ud39_date: string | null;
  ud40_date: string | null;
}>;
type StudentUDAreaAttachmentResponse = Partial<{
  ud41_attachment_details: AttachmentDetails;
  ud42_attachment_details: AttachmentDetails;
  ud43_attachment_details: AttachmentDetails;
  ud44_attachment_details: AttachmentDetails;
  ud45_attachment_details: AttachmentDetails;
  ud46_attachment_details: AttachmentDetails;
  ud47_attachment_details: AttachmentDetails;
  ud48_attachment_details: AttachmentDetails;
  ud49_attachment_details: AttachmentDetails;
  ud50_attachment_details: AttachmentDetails;
}>;
type AttachmentDetails = Partial<{
  field_number: number;
  files: Array<FileDetails>;
}>;
type FileDetails = Partial<{
  file_name: string | null;
  file_size: number | null;
  date_uploaded: string | null;
  attach_id: string | null;
}>;
type AddStudentUDAreaRequest = CommonStudentUDAreaUpdateRequest & {};
type CommonStudentUDAreaUpdateRequest = Partial<{
  ud_fields: StudentUDAreaFieldsRequest;
}>;
type StudentUDAreaFieldsRequest = Partial<{
  ud_flags: StudentUDAreaFlagRequest;
  ud_codes: StudentUDAreaCodeRequest;
  ud_text: StudentUDAreaTextRequest;
  ud_dates: StudentUDAreaDateRequest;
}>;
type StudentUDAreaFlagRequest = Partial<{
  ud1_flg: string | null;
  ud2_flg: string | null;
  ud3_flg: string | null;
  ud4_flg: string | null;
  ud5_flg: string | null;
  ud6_flg: string | null;
  ud7_flg: string | null;
  ud8_flg: string | null;
  ud9_flg: string | null;
  ud10_flg: string | null;
}>;
type StudentUDAreaCodeRequest = Partial<{
  ud11_code: string | null;
  ud12_code: string | null;
  ud13_code: string | null;
  ud14_code: string | null;
  ud15_code: string | null;
  ud16_code: string | null;
  ud17_code: string | null;
  ud18_code: string | null;
  ud19_code: string | null;
  ud20_code: string | null;
}>;
type StudentUDAreaTextRequest = Partial<{
  ud21_text: string | null;
  ud22_text: string | null;
  ud23_text: string | null;
  ud24_text: string | null;
  ud25_text: string | null;
  ud26_text: string | null;
  ud27_text: string | null;
  ud28_text: string | null;
  ud29_text: string | null;
  ud30_text: string | null;
}>;
type StudentUDAreaDateRequest = Partial<{
  ud31_date: string | null;
  ud32_date: string | null;
  ud33_date: string | null;
  ud34_date: string | null;
  ud35_date: string | null;
  ud36_date: string | null;
  ud37_date: string | null;
  ud38_date: string | null;
  ud39_date: string | null;
  ud40_date: string | null;
}>;
type UpdateStudentUDAreaRequest = CommonStudentUDAreaUpdateRequest & {};
type StudentUDFieldsResponse = Partial<{
  cmpy_code: string;
  stud_code: string;
  ud_fields: UDFieldsResponse;
}>;
type UDFieldsResponse = Partial<{
  ud_flags: UDFlagResponse;
  ud_codes: UDCodeResponse;
  ud_text: UDTextResponse;
}>;
type UDFlagResponse = Partial<{
  ud1_flg: string | null;
  ud2_flg: string | null;
  ud3_flg: string | null;
  ud4_flg: string | null;
  ud5_flg: string | null;
  ud6_flg: string | null;
  ud7_flg: string | null;
  ud8_flg: string | null;
  ud9_flg: string | null;
  ud10_flg: string | null;
}>;
type UDCodeResponse = Partial<{
  ud11_code: string | null;
  ud12_code: string | null;
  ud13_code: string | null;
  ud14_code: string | null;
  ud15_code: string | null;
  ud16_code: string | null;
  ud17_code: string | null;
  ud18_code: string | null;
  ud19_code: string | null;
  ud20_code: string | null;
}>;
type UDTextResponse = Partial<{
  ud21_text: string | null;
  ud22_text: string | null;
  ud23_text: string | null;
  ud24_text: string | null;
  ud25_text: string | null;
}>;
type UpdateStudentUDFieldsRequest = Partial<{
  ud_fields: UDFieldsRequest;
}>;
type UDFieldsRequest = Partial<{
  ud_flags: UDFlagRequest;
  ud_codes: UDCodeRequest;
  ud_text: UDTextRequest;
}>;
type UDFlagRequest = Partial<{
  ud1_flg: string | null;
  ud2_flg: string | null;
  ud3_flg: string | null;
  ud4_flg: string | null;
  ud5_flg: string | null;
  ud6_flg: string | null;
  ud7_flg: string | null;
  ud8_flg: string | null;
  ud9_flg: string | null;
  ud10_flg: string | null;
}>;
type UDCodeRequest = Partial<{
  ud11_code: string | null;
  ud12_code: string | null;
  ud13_code: string | null;
  ud14_code: string | null;
  ud15_code: string | null;
  ud16_code: string | null;
  ud17_code: string | null;
  ud18_code: string | null;
  ud19_code: string | null;
  ud20_code: string | null;
}>;
type UDTextRequest = Partial<{
  ud21_text: string | null;
  ud22_text: string | null;
  ud23_text: string | null;
  ud24_text: string | null;
  ud25_text: string | null;
}>;
type StudentUDFieldOptionResponse = Partial<{
  ud_fields: StudentUDFieldOptionTypes;
  cmpy_code: string;
}>;
type StudentUDFieldOptionTypes = Partial<{
  ud_flags: Array<StudentUDFieldOptionDetails>;
  ud_codes: Array<StudentUDCodeFieldOptionDetails>;
  ud_text: Array<StudentUDFieldOptionDetails>;
}>;
type StudentUDFieldOptionDetails = Partial<{
  field_name: string;
  field_desc: string | null;
  sort_order: number;
}>;
type StudentUDCodeFieldOptionDetails = StudentUDFieldOptionDetails &
  Partial<{
    reference_values: Array<StudentUDFieldOptionReferenceValue>;
  }>;
type StudentUDFieldOptionReferenceValue = Partial<{
  ud_code: string | null;
  ud_desc: string | null;
  sort_order: number;
}>;
type AsthmaManagementResponse = Partial<{
  cmpy_code: string;
  stud_code: string;
  usual_signs: UsualSigns;
  worsening_signs: WorseningSigns;
  triggers: Triggers;
}>;
type UsualSigns = Partial<{
  wheez_flg: boolean;
  tight_flg: boolean;
  cough_flg: boolean;
  breath_flg: boolean;
  speak_flg: boolean;
  comm_text: string | null;
}>;
type WorseningSigns = Partial<{
  wheez_flg: boolean;
  tight_flg: boolean;
  cough_flg: boolean;
  breath_flg: boolean;
  speak_flg: boolean;
  comm_text: string | null;
}>;
type Triggers = Partial<{
  exercise_flg: boolean;
  cold_virus_flg: boolean;
  pollen_flg: boolean;
  dust_flg: boolean;
  food_flg: boolean;
  food_text: string | null;
  comm_text: string | null;
}>;
type UpdateAsthmaManagementRequest = Partial<{
  usual_signs: UsualSigns2;
  worsening_signs: WorseningSigns2;
  triggers: Triggers2;
}>;
type UsualSigns2 = Partial<{
  wheez_flg: boolean;
  tight_flg: boolean;
  cough_flg: boolean;
  breath_flg: boolean;
  speak_flg: boolean;
  comm_text: string | null;
}>;
type WorseningSigns2 = Partial<{
  wheez_flg: boolean;
  tight_flg: boolean;
  cough_flg: boolean;
  breath_flg: boolean;
  speak_flg: boolean;
  comm_text: string | null;
}>;
type Triggers2 = Partial<{
  exercise_flg: boolean;
  cold_virus_flg: boolean;
  pollen_flg: boolean;
  dust_flg: boolean;
  food_flg: boolean;
  food_text: string | null;
  comm_text: string | null;
}>;
type StudentMedicalConditionResponse = Partial<{
  cmpy_code: string;
  last_occ_date: string | null;
  mcond_code: string;
  severe_ind: boolean;
  stud_code: string;
  treat_text: string | null;
  active_flg: boolean;
  ud_fields: UdFields;
  has_attachment: boolean;
  has_note: boolean;
}>;
type UdFields = Partial<{
  ud_text: UdText;
}>;
type UdText = Partial<{
  ud1_text: string | null;
  ud2_text: string | null;
  ud3_text: string | null;
  ud4_text: string | null;
  ud5_text: string | null;
  ud6_text: string | null;
  ud7_text: string | null;
  ud8_text: string | null;
  ud9_text: string | null;
  ud10_text: string | null;
}>;
type AddStudentMedicalConditionRequest = Partial<{
  last_occ_date: string | null;
  mcond_code: string;
  severe_ind: boolean;
  treat_text: string | null;
  active_flg: boolean;
  ud_fields: UdFields2;
}>;
type UdFields2 = Partial<{
  ud_text: UdText2;
}>;
type UdText2 = Partial<{
  ud1_text: string | null;
  ud2_text: string | null;
  ud3_text: string | null;
  ud4_text: string | null;
  ud5_text: string | null;
  ud6_text: string | null;
  ud7_text: string | null;
  ud8_text: string | null;
  ud9_text: string | null;
  ud10_text: string | null;
}>;
type UpdateStudentMedicalConditionRequest = Partial<{
  last_occ_date: string | null;
  severe_ind: boolean;
  treat_text: string | null;
  active_flg: boolean;
  ud_fields: UdFields3;
}>;
type UdFields3 = Partial<{
  ud_text: UdText3;
}>;
type UdText3 = Partial<{
  ud1_text: string | null;
  ud2_text: string | null;
  ud3_text: string | null;
  ud4_text: string | null;
  ud5_text: string | null;
  ud6_text: string | null;
  ud7_text: string | null;
  ud8_text: string | null;
  ud9_text: string | null;
  ud10_text: string | null;
}>;
type StudentMedicationScheduleResponse = Partial<{
  cmpy_code: string;
  stud_code: string;
  mcond_code: string;
  medication_uid: string;
  sched_uid: string;
  med_dose: string | null;
  med_time: string;
  shed_start_date: string | null;
  shed_end_date: string | null;
  days: DaysResponse;
}>;
type DaysResponse = Partial<{
  mon_flg: boolean;
  tue_flg: boolean;
  wed_flg: boolean;
  thu_flg: boolean;
  fri_flg: boolean;
  sat_flg: boolean;
  sun_flg: boolean;
}>;
type AddStudentMedicationScheduleRequest = {
  med_dose: string;
  med_time: string;
  shed_start_date: string;
  shed_end_date?: (string | null) | undefined;
  days?: DaysRequest | undefined;
};
type DaysRequest = Partial<{
  mon_flg: boolean;
  tue_flg: boolean;
  wed_flg: boolean;
  thu_flg: boolean;
  fri_flg: boolean;
  sat_flg: boolean;
  sun_flg: boolean;
}>;
type UpdateStudentMedicationScheduleRequest = {
  med_dose: string;
  med_time: string;
  shed_start_date: string;
  shed_end_date?: (string | null) | undefined;
  days?: DaysRequest2 | undefined;
};
type DaysRequest2 = Partial<{
  mon_flg: boolean;
  tue_flg: boolean;
  wed_flg: boolean;
  thu_flg: boolean;
  fri_flg: boolean;
  sat_flg: boolean;
  sun_flg: boolean;
}>;
type AddStudentMedicalStandardNoteRequest =
  CommonStudentMedicalStandardNoteUpdateRequest & {};
type CommonStudentMedicalStandardNoteUpdateRequest = {
  note_cat: string;
  note_date: string;
  note_text: string;
};
type UpdateStudentMedicalStandardNoteRequest =
  CommonStudentMedicalStandardNoteUpdateRequest & {};
type AddStudentMedicalConfidentialNoteRequest =
  CommonStudentMedicalConfidentialNoteUpdateRequest & {};
type CommonStudentMedicalConfidentialNoteUpdateRequest = {
  note_cat: string;
  note_date: string;
  note_text: string;
};
type UpdateStudentMedicalConfidentialNoteRequest =
  CommonStudentMedicalConfidentialNoteUpdateRequest & {};
type UpdateStudentPractitionerRequest =
  CommonStudentPractitionerUpdateRequest & {};
type CommonStudentPractitionerUpdateRequest = Partial<{
  doct_name: string | null;
  doct_phone: string | null;
  ptype_code: string | null;
}>;
type CodeFormatRulesResponse = Partial<{
  cmpy_code: string;
  code_structure: Array<CodeStructureResponse>;
}>;
type CodeStructureResponse = Partial<{
  start_num: number;
  length_num: number;
  desc_text: string | null;
  default_text: string | null;
  type_ind: string;
  dept_consol_flg: boolean;
  segments: Array<SegmentResponse>;
}>;
type SegmentResponse = Partial<{
  flex_code: string;
  desc_text: string;
  group_code: string;
}>;
type ReportingCodeResponse = Partial<{
  cmpy_code: string;
  field_details: Array<ReportingCodeOptionsFieldDetails>;
}>;
type ReportingCodeOptionsFieldDetails = Partial<{
  field_name: string;
  field_desc: string;
  reference_values: Array<ReportingCodeOptionsFieldReferenceValue>;
}>;
type ReportingCodeOptionsFieldReferenceValue = Partial<{
  ref_code: string;
  ref_desc: string;
}>;
type AccountBudgetResponse = Partial<{
  cmpy_code: string;
  acct_code: string;
  year_num: number;
  budget_num: number;
  periods: Array<PeriodBudgetResponse>;
}>;
type PeriodBudgetResponse = Partial<{
  period_num: number;
  period_amt: number;
  ytd_pre_close_amt: number;
  ytd_budget: number;
  variance: number;
}>;
type AddAccountBudgetRequest = {
  year_num: number;
  budget_num: number;
  periods?: Array<PeriodBudgetRequest> | undefined;
};
type PeriodBudgetRequest = {
  period_num: number;
  period_amt: number;
};
type UpdateAccountBudgetRequest = {
  year_num: number;
  budget_num: number;
  periods: Array<BudgetPeriod>;
};
type BudgetPeriod = {
  period_num: number;
  period_amt: number;
};
type AccountBalanceResponse = Partial<{
  cmpy_code: string;
  acct_code: string;
  year_num: number;
  period_bals: Array<PeriodBalanceResponse>;
}>;
type PeriodBalanceResponse = Partial<{
  period_num: number;
  open_amt: number;
  debit_amt: number;
  credit_amt: number;
  close_amt: number;
  pre_close_amt: number;
}>;
type AccountReportingCodesResponse = Partial<{
  cmpy_code: string;
  acct_code: string;
  assoc_acct_code: string | null;
  resp_name: string | null;
  resp_e_mail: string | null;
  rpt_codes: RptCodes;
}>;
type RptCodes = Partial<{
  rpt1_code: string | null;
  rpt2_code: string | null;
  rpt3_code: string | null;
  rpt4_code: string | null;
  rpt5_code: string | null;
  rpt6_code: string | null;
  rpt7_code: string | null;
  rpt8_code: string | null;
  rpt9_code: string | null;
  rpt10_code: string | null;
  rpt11_code: string | null;
  rpt12_code: string | null;
  rpt13_code: string | null;
  rpt14_code: string | null;
  rpt15_code: string | null;
  rpt16_code: string | null;
  rpt17_code: string | null;
  rpt18_code: string | null;
  rpt19_code: string | null;
  rpt20_code: string | null;
}>;
type UpdateAccountReportingCodesRequest = Partial<{
  assoc_acct_code: string | null;
  resp_name: string | null;
  resp_e_mail: string | null;
  rpt_codes: RptCodes2;
}>;
type RptCodes2 = Partial<{
  rpt1_code: string | null;
  rpt2_code: string | null;
  rpt3_code: string | null;
  rpt4_code: string | null;
  rpt5_code: string | null;
  rpt6_code: string | null;
  rpt7_code: string | null;
  rpt8_code: string | null;
  rpt9_code: string | null;
  rpt10_code: string | null;
  rpt11_code: string | null;
  rpt12_code: string | null;
  rpt13_code: string | null;
  rpt14_code: string | null;
  rpt15_code: string | null;
  rpt16_code: string | null;
  rpt17_code: string | null;
  rpt18_code: string | null;
  rpt19_code: string | null;
  rpt20_code: string | null;
}>;
type JournalResponse = Partial<{
  cmpy_code: string;
  jour_code: string;
  jour_num: number;
  jour_date: string | null;
  post_flag: boolean;
  year_num: number;
  period_num: number;
  com1_text: string | null;
  com2_text: string | null;
  control_amt: number;
  bank_code: string | null;
  bank_desc: string | null;
  bank_gl_acct: string | null;
  warnings: Array<string>;
  gl_lines: Array<GLLineResponse>;
}>;
type GLLineResponse = Partial<{
  acct_code: string;
  seq_num: number;
  ref_text: string | null;
  ref_num: number | null;
  analysis_text: string | null;
  desc_text: string | null;
  debit_amt: number;
  credit_amt: number;
  tax_code: string | null;
  tax_type: string | null;
  tax_amt: number | null;
  tax_per: number | null;
  tax_net: number | null;
  gl_acct_desc: string | null;
  warnings: Array<string>;
}>;
type AddTaxJournalRequest = CommonTaxJournalRequest & {};
type CommonTaxJournalRequest = {
  jour_date: string;
  year_num: number;
  period_num: number;
  com1_text?: (string | null) | undefined;
  com2_text?: (string | null) | undefined;
  control_amt?: (number | null) | undefined;
  gl_lines?: Array<TaxJournalLine> | undefined;
};
type TaxJournalLine = {
  acct_code: string;
  ref_text?: (string | null) | undefined;
  analysis_text?: (string | null) | undefined;
  desc_text: string;
  debit_amt: number;
  credit_amt: number;
  tax_type: string;
  tax_code: string;
  tax_amt?: number | undefined;
};
type UpdateTaxJournalRequest = CommonTaxJournalRequest & {};
type AddGeneralJournalRequest = CommonGeneralJournalRequest & {};
type CommonGeneralJournalRequest = {
  jour_code: string;
  jour_date: string;
  year_num: number;
  period_num: number;
  com1_text?: (string | null) | undefined;
  com2_text?: (string | null) | undefined;
  control_amt?: (number | null) | undefined;
  gl_lines?: Array<StandardJournalLine> | undefined;
};
type StandardJournalLine = {
  acct_code: string;
  ref_text?: (string | null) | undefined;
  analysis_text?: (string | null) | undefined;
  desc_text: string;
  debit_amt: number;
  credit_amt: number;
};
type UpdateGeneralJournalRequest = CommonGeneralJournalRequest & {};
type AddEmployeeRequest = CommonEmployeeRequest & {};
type CommonEmployeeRequest = {
  add1_text?: (string | null) | undefined;
  add2_text?: (string | null) | undefined;
  alt_id?: (string | null) | undefined;
  birth_date: string;
  cessation_type?: (string | null) | undefined;
  city_text?: (string | null) | undefined;
  country_code?: (string | null) | undefined;
  country_text?: (string | null) | undefined;
  deceased_flg?: boolean | undefined;
  driv_lic_text?: (string | null) | undefined;
  e_mail?: (string | null) | undefined;
  emp_code: string;
  first_name: string;
  gender: string;
  indig_status?: (string | null) | undefined;
  initials: string;
  main_activity?: (string | null) | undefined;
  marital_stat_flag?: (string | null) | undefined;
  mob_phone?: (string | null) | undefined;
  nok_add1_text?: (string | null) | undefined;
  nok_add2_text?: (string | null) | undefined;
  nok_city_text?: (string | null) | undefined;
  nok_country_text?: (string | null) | undefined;
  nok_name_text?: (string | null) | undefined;
  nok_phone_h_text?: (string | null) | undefined;
  nok_phone_w_text?: (string | null) | undefined;
  nok_post_code?: (string | null) | undefined;
  nok_relat_text?: (string | null) | undefined;
  nok_state_text?: (string | null) | undefined;
  other_name?: (string | null) | undefined;
  phone_h_text?: (string | null) | undefined;
  phone_w_text?: (string | null) | undefined;
  position_text?: (string | null) | undefined;
  position_title?: (string | null) | undefined;
  post_code: string;
  preferred_name: string;
  previous_payroll_id?: (string | null) | undefined;
  school_email?: (string | null) | undefined;
  sms_flg?: boolean | undefined;
  start_date: string;
  state_text: string;
  status_text: string;
  surname: string;
  suffix?: (string | null) | undefined;
  supervisor_code?: (string | null) | undefined;
  supervisor2_code?: (string | null) | undefined;
  term_date?: (string | null) | undefined;
  title: string;
  vend_code?: (string | null) | undefined;
};
type UpdateEmployeeRequest = CommonEmployeeRequest & {};
type AddEmployeeStandardNoteRequest =
  CommonEmployeeStandardNoteUpdateRequest & {};
type CommonEmployeeStandardNoteUpdateRequest = {
  note_cat: string;
  note_date: string;
  note_text: string;
};
type UpdateEmployeeStandardNoteRequest =
  CommonEmployeeStandardNoteUpdateRequest & {};
type AddEmployeeConfidentialNoteRequest =
  CommonEmployeeConfidentialNoteUpdateRequest & {};
type CommonEmployeeConfidentialNoteUpdateRequest = {
  note_cat: string;
  note_date: string;
  note_text: string;
};
type UpdateEmployeeConfidentialNoteRequest =
  CommonEmployeeConfidentialNoteUpdateRequest & {};
type EmployeePDActivityResponse = Partial<{
  cmpy_code: string;
  cost_amt: number | null;
  duration: number | null;
  emp_code: string;
  finish_date: string | null;
  other_amt: number | null;
  pd_prov_code: string | null;
  pd_stat_code: string | null;
  pd_type_code: string | null;
  pdact_num: number;
  pdact_text: string | null;
  start_date: string | null;
  updated_on: string | null;
  ud_fields: PDUDFieldsResponse;
}>;
type PDUDFieldsResponse = Partial<{
  ud_flags: PDActivityUDFlagResponse;
  ud_codes: PDActivityUDCodeResponse;
  ud_text: PDActivityUDTextResponse;
  ud_attachments: PDActivityUDAttachmentResponse;
}>;
type PDActivityUDFlagResponse = Partial<{
  ud1_flg: string | null;
  ud2_flg: string | null;
  ud3_flg: string | null;
  ud4_flg: string | null;
  ud5_flg: string | null;
}>;
type PDActivityUDCodeResponse = Partial<{
  ud6_code: string | null;
  ud7_code: string | null;
  ud8_code: string | null;
  ud9_code: string | null;
  ud10_code: string | null;
}>;
type PDActivityUDTextResponse = Partial<{
  ud11_text: string | null;
  ud12_text: string | null;
  ud13_text: string | null;
  ud14_text: string | null;
  ud15_text: string | null;
}>;
type PDActivityUDAttachmentResponse = Partial<{
  ud16_attachment_details: AttachmentDetails;
  ud17_attachment_details: AttachmentDetails;
  ud18_attachment_details: AttachmentDetails;
  ud19_attachment_details: AttachmentDetails;
  ud20_attachment_details: AttachmentDetails;
}>;
type AddEmployeePDActivityRequest = CommonEmployeePDActivityUpdateRequest & {};
type CommonEmployeePDActivityUpdateRequest = {
  cost_amt?: (number | null) | undefined;
  duration: number;
  finish_date: string;
  other_amt?: (number | null) | undefined;
  pd_prov_code?: (string | null) | undefined;
  pd_stat_code: string;
  pd_type_code?: (string | null) | undefined;
  pdact_text: string;
  start_date: string;
  ud_fields?: PDActivityUDFieldsRequest | undefined;
};
type PDActivityUDFieldsRequest = Partial<{
  ud_flags: PDActivityUDFlagUpdateRequest;
  ud_codes: PDActivityUDCodeUpdateRequest;
  ud_text: PDActivityUDTextUpdateRequest;
}>;
type PDActivityUDFlagUpdateRequest = Partial<{
  ud1_flg: string | null;
  ud2_flg: string | null;
  ud3_flg: string | null;
  ud4_flg: string | null;
  ud5_flg: string | null;
}>;
type PDActivityUDCodeUpdateRequest = Partial<{
  ud6_code: string | null;
  ud7_code: string | null;
  ud8_code: string | null;
  ud9_code: string | null;
  ud10_code: string | null;
}>;
type PDActivityUDTextUpdateRequest = Partial<{
  ud11_text: string | null;
  ud12_text: string | null;
  ud13_text: string | null;
  ud14_text: string | null;
  ud15_text: string | null;
}>;
type UpdateEmployeePDActivityRequest =
  CommonEmployeePDActivityUpdateRequest & {};
type UDFieldOptionsResponse = Partial<{
  ud_fields: UDFieldTypes;
  cmpy_code: string;
}>;
type EmployeePhotoChangesResponse = Partial<{
  cmpy_code: string;
  change_key: string;
  changes: Array<EmployeePhotoChange>;
}>;
type EmployeePhotoChange = Partial<{
  emp_code: string;
  photo_update_on: string;
}>;
type AddEmployeeQualificationRequest =
  CommonEmployeeQualificationUpdateRequest & {};
type CommonEmployeeQualificationUpdateRequest = {
  inst_code: string;
  qual_cat: string;
  qual_text: string;
  reminder_flg: boolean;
  valid_date?: (string | null) | undefined;
};
type UpdateEmployeeQualificationRequest =
  CommonEmployeeQualificationUpdateRequest & {};
type EmployeeUDAreaResponse = Partial<{
  cmpy_code: string;
  area_code: string;
  emp_code: string;
  update_on: string | null;
  ud_fields: UDAreaFieldsResponse;
}>;
type UDAreaFieldsResponse = Partial<{
  ud_flags: UDAreaFlagResponse;
  ud_codes: UDAreaCodeResponse;
  ud_text: UDAreaTextResponse;
  ud_dates: UDAreaDateResponse;
  ud_attachments: UDAreaAttachmentResponse;
}>;
type UDAreaFlagResponse = Partial<{
  ud1_flg: string | null;
  ud2_flg: string | null;
  ud3_flg: string | null;
  ud4_flg: string | null;
  ud5_flg: string | null;
  ud6_flg: string | null;
  ud7_flg: string | null;
  ud8_flg: string | null;
  ud9_flg: string | null;
  ud10_flg: string | null;
}>;
type UDAreaCodeResponse = Partial<{
  ud11_code: string | null;
  ud12_code: string | null;
  ud13_code: string | null;
  ud14_code: string | null;
  ud15_code: string | null;
  ud16_code: string | null;
  ud17_code: string | null;
  ud18_code: string | null;
  ud19_code: string | null;
  ud20_code: string | null;
}>;
type UDAreaTextResponse = Partial<{
  ud21_text: string | null;
  ud22_text: string | null;
  ud23_text: string | null;
  ud24_text: string | null;
  ud25_text: string | null;
  ud26_text: string | null;
  ud27_text: string | null;
  ud28_text: string | null;
  ud29_text: string | null;
  ud30_text: string | null;
}>;
type UDAreaDateResponse = Partial<{
  ud31_date: string | null;
  ud32_date: string | null;
  ud33_date: string | null;
  ud34_date: string | null;
  ud35_date: string | null;
  ud36_date: string | null;
  ud37_date: string | null;
  ud38_date: string | null;
  ud39_date: string | null;
  ud40_date: string | null;
}>;
type UDAreaAttachmentResponse = Partial<{
  ud41_attachment_details: AttachmentDetails;
  ud42_attachment_details: AttachmentDetails;
  ud43_attachment_details: AttachmentDetails;
  ud44_attachment_details: AttachmentDetails;
  ud45_attachment_details: AttachmentDetails;
  ud46_attachment_details: AttachmentDetails;
  ud47_attachment_details: AttachmentDetails;
  ud48_attachment_details: AttachmentDetails;
  ud49_attachment_details: AttachmentDetails;
  ud50_attachment_details: AttachmentDetails;
}>;
type AddEmployeeUDAreaRequest = CommonEmployeeUDAreaUpdateRequest & {};
type CommonEmployeeUDAreaUpdateRequest = Partial<{
  ud_fields: UDAreaFieldsRequest;
}>;
type UDAreaFieldsRequest = Partial<{
  ud_flags: UDAreaFlagRequest;
  ud_codes: UDAreaCodeRequest;
  ud_text: UDAreaTextRequest;
  ud_dates: UDAreaDateRequest;
}>;
type UDAreaFlagRequest = Partial<{
  ud1_flg: string | null;
  ud2_flg: string | null;
  ud3_flg: string | null;
  ud4_flg: string | null;
  ud5_flg: string | null;
  ud6_flg: string | null;
  ud7_flg: string | null;
  ud8_flg: string | null;
  ud9_flg: string | null;
  ud10_flg: string | null;
}>;
type UDAreaCodeRequest = Partial<{
  ud11_code: string | null;
  ud12_code: string | null;
  ud13_code: string | null;
  ud14_code: string | null;
  ud15_code: string | null;
  ud16_code: string | null;
  ud17_code: string | null;
  ud18_code: string | null;
  ud19_code: string | null;
  ud20_code: string | null;
}>;
type UDAreaTextRequest = Partial<{
  ud21_text: string | null;
  ud22_text: string | null;
  ud23_text: string | null;
  ud24_text: string | null;
  ud25_text: string | null;
  ud26_text: string | null;
  ud27_text: string | null;
  ud28_text: string | null;
  ud29_text: string | null;
  ud30_text: string | null;
}>;
type UDAreaDateRequest = Partial<{
  ud31_date: string | null;
  ud32_date: string | null;
  ud33_date: string | null;
  ud34_date: string | null;
  ud35_date: string | null;
  ud36_date: string | null;
  ud37_date: string | null;
  ud38_date: string | null;
  ud39_date: string | null;
  ud40_date: string | null;
}>;
type UpdateEmployeeUDAreaRequest = CommonEmployeeUDAreaUpdateRequest & {};
type ActivityResponse = Partial<{
  cmpy_code: string;
  activity_id: number;
  year: string | null;
  period: string | null;
  sub_code: string | null;
  year_grp: number | null;
  activity_name: string;
  topic_id: number;
  topic_name: string;
  assessment_criteria: Array<AssessmentCriteriaResponse>;
}>;
type AssessmentCriteriaResponse = Partial<{
  obj_code: string;
  obj_desc: string;
  max_val: number | null;
  assessment_method: AssessmentMethodResponse | null;
}>;
type AssessmentMethodResponse = Partial<{
  ass_code: string;
  ass_type: string;
  ass_range: string;
  desc_text: string;
  val_type: string;
  validations: Array<ValidationResponse>;
}>;
type ValidationResponse = Partial<{
  valid_result: string;
  min_val: number | null;
  max_val: number | null;
}>;
type ActivityStudentResultsResponse = Partial<{
  cmpy_code: string;
  activity_id: number;
  stud_code: string;
  objective_results: Array<ObjectiveResult>;
}>;
type ObjectiveResult = Partial<{
  obj_code: string;
  stud_result: string | null;
}>;
type UpdateActivityStudentResultsRequest = Partial<{
  objective_results: Array<ObjectiveResult2>;
}>;
type ObjectiveResult2 = {
  obj_code: string;
  stud_result: string;
};

const GetUserTokenRequest = z
  .object({ clientKey: z.string(), clientSecret: z.string() })
  .partial();
const AllowedCompanyDetails: z.ZodType<AllowedCompanyDetails> = z
  .object({
    cmpy_code: z.string().nullable(),
    name_text: z.string().nullable(),
  })
  .partial();
const UserTokenResponse: z.ZodType<UserTokenResponse> = z
  .object({
    token: z.string(),
    token_expiry_date: z.string().datetime({ offset: true }),
    allowed_companies: z.array(AllowedCompanyDetails),
  })
  .partial();
const ExceptionDetails: z.ZodType<ExceptionDetails> = z
  .object({ status: z.number().int(), title: z.string(), detail: z.string() })
  .partial();
const ValidationExceptionDetails: z.ZodType<ValidationExceptionDetails> =
  ExceptionDetails.and(
    z.object({ errors: z.record(z.array(z.string())) }).partial(),
  );
const cmpy_code = z.string();
const AbsenceReasonOptionsResponse = z
  .object({
    code: z.string(),
    desc: z.string(),
    is_active: z.boolean(),
    acceptable_reason: z.boolean(),
  })
  .partial();
const OptionsResponseActive = z
  .object({ code: z.string(), desc: z.string(), is_active: z.boolean() })
  .partial();
const OptionsResponse = z
  .object({ code: z.string(), desc: z.string() })
  .partial();
const StudentAttendanceResponse = z
  .object({
    cmpy_code: z.string(),
    stud_code: z.string(),
    absent_date: z.string(),
    absent_time: z.string().nullable(),
    absent_type: z.string(),
    reas_code: z.string().nullable(),
    dcert_flg: z.boolean(),
    par_flg: z.boolean(),
    par_date: z.string().datetime({ offset: true }).nullable(),
    corr_flg: z.boolean(),
    corr_date: z.string().datetime({ offset: true }).nullable(),
    prd_code: z.number().int().nullable(),
    ref_num: z.string().nullable(),
    abs_from_time: z.string().nullable(),
    abs_to_time: z.string().nullable(),
    key_num: z.number().int(),
    tt_id: z.number().int().nullable(),
    note_text: z.string().nullable(),
    year_grp: z.number().int().nullable(),
    boarder: z.boolean(),
    house: z.string().nullable(),
    pctut_grp: z.string().nullable(),
    gender: z.string().nullable(),
    campus_code: z.string().nullable(),
    has_attachment: z.boolean(),
  })
  .partial();
const StudentCommunicationRulesParentNameResponse: z.ZodType<StudentCommunicationRulesParentNameResponse> =
  z
    .object({
      parent_type: z.string(),
      deceased_flg: z.boolean(),
      first_name: z.string(),
      gender: z.string().nullable(),
      initials: z.string().nullable(),
      person_posn: z.number().int(),
      preferred_name: z.string(),
      suffix: z.string().nullable(),
      surname: z.string(),
      title: z.string().nullable(),
    })
    .partial();
const StudentCommunicationRulesCommunicationTypeResponse: z.ZodType<StudentCommunicationRulesCommunicationTypeResponse> =
  z.object({ commtype_code: z.string() }).partial();
const StudentCommunicationRulesParentAddressResponse: z.ZodType<StudentCommunicationRulesParentAddressResponse> =
  z
    .object({
      add_num: z.number().int(),
      addr1: z.string().nullable(),
      addr2: z.string().nullable(),
      addr3: z.string().nullable(),
      addr_desc: z.string().nullable(),
      addressee: z.string().nullable(),
      bus_phone: z.string().nullable(),
      call_order: z.number().int().nullable(),
      country: z.string().nullable(),
      e_mail1: z.string().nullable(),
      e_mail2: z.string().nullable(),
      fax: z.string().nullable(),
      home_phone: z.string().nullable(),
      mobile1: z.string().nullable(),
      mobile2: z.string().nullable(),
      person_posn: z.number().int().nullable(),
      post_code: z.string().nullable(),
      relationship: z.string().nullable(),
      salutation: z.string().nullable(),
      sms_flg1: z.boolean(),
      sms_flg2: z.boolean(),
      state_code: z.string().nullable(),
      town_sub: z.string().nullable(),
      comm_types: z.array(StudentCommunicationRulesCommunicationTypeResponse),
    })
    .partial();
const StudentCommunicationRulesParentDetailsResponse: z.ZodType<StudentCommunicationRulesParentDetailsResponse> =
  z
    .object({
      par_code: z.string(),
      parent_names: z.array(StudentCommunicationRulesParentNameResponse),
      addresses: z.array(StudentCommunicationRulesParentAddressResponse),
    })
    .partial();
const StudentCommunicationRulesResponse: z.ZodType<StudentCommunicationRulesResponse> =
  z
    .object({
      cmpy_code: z.string(),
      stud_code: z.string(),
      comm_rules: z.array(StudentCommunicationRulesParentDetailsResponse),
    })
    .partial();
const StudentResponse = z
  .object({
    alt_id: z.string().nullable(),
    boarder: z.boolean(),
    campus_code: z.string().nullable(),
    ceider: z.string().nullable(),
    cmpy_code: z.string(),
    compare_flg: z.string(),
    date_arrival: z.string().nullable(),
    distance_ed: z.boolean(),
    dob: z.string().nullable(),
    doe: z.string().nullable(),
    dol: z.string().nullable(),
    e_mail: z.string().nullable(),
    entry_lev: z.number().int().nullable(),
    ffpos: z.boolean(),
    first_name: z.string().nullable(),
    form_cls: z.string().nullable(),
    fte: z.number().nullable(),
    gender: z.string(),
    house: z.string().nullable(),
    idm_id: z.string().nullable(),
    mob_phone: z.string().nullable(),
    multipar_flg: z.boolean(),
    next_yr_ind: z.string(),
    other_name: z.string().nullable(),
    par_code: z.string().nullable(),
    pctut_grp: z.string().nullable(),
    preferred_name: z.string().nullable(),
    preferred_surname: z.string().nullable(),
    prev_school: z.string().nullable(),
    privacy_flg: z.boolean(),
    religion: z.string().nullable(),
    resident_sts: z.string().nullable(),
    sms_flg: z.boolean(),
    stud_code: z.string(),
    stud_govt_id: z.string().nullable(),
    stud_id: z.string().nullable(),
    surname: z.string(),
    update_on: z.string().datetime({ offset: true }).nullable(),
    usi: z.string().nullable(),
    visa_expiry: z.string().nullable(),
    visa_subclass: z.string().nullable(),
    web_access_ind: z.boolean(),
    year_grp: z.number().int().nullable(),
  })
  .partial();
const CommonStudentUpdateRequest: z.ZodType<CommonStudentUpdateRequest> =
  z.object({
    alt_id: z.string().max(40).nullish(),
    boarder: z.boolean().optional(),
    campus_code: z.string().max(3).nullish(),
    ceider: z.string().max(9).nullish(),
    compare_flg: z.string().min(1).max(1),
    date_arrival: z.string().nullish(),
    distance_ed: z.boolean().optional(),
    dob: z.string().nullish(),
    doe: z.string().min(1),
    dol: z.string().nullish(),
    e_mail: z.string().max(60).nullish(),
    entry_lev: z.number().int().nullish(),
    ffpos: z.boolean().optional(),
    first_name: z.string().min(1).max(50),
    form_cls: z.string().max(2).nullish(),
    fte: z.number(),
    gender: z.string().min(1).max(3),
    house: z.string().max(2).nullish(),
    idm_id: z.string().max(100).nullish(),
    mob_phone: z.string().max(30).nullish(),
    next_yr_ind: z.string().max(1).optional(),
    other_name: z.string().max(50).nullish(),
    pctut_grp: z.string().max(5).nullish(),
    preferred_name: z.string().min(1).max(20),
    preferred_surname: z.string().min(1).max(50),
    prev_school: z.string().max(5).nullish(),
    privacy_flg: z.boolean().optional(),
    religion: z.string().max(2).nullish(),
    resident_sts: z.string().max(3).nullish(),
    sms_flg: z.boolean().optional(),
    stud_code: z.string().max(8).optional(),
    surname: z.string().min(1).max(30),
    usi: z.string().max(10).nullish(),
    visa_expiry: z.string().nullish(),
    visa_subclass: z.string().max(6).nullish(),
    web_access_ind: z.boolean().optional(),
    year_grp: z.number().int(),
  });
const UpdateStudentRequest: z.ZodType<UpdateStudentRequest> =
  CommonStudentUpdateRequest.and(z.object({}).partial());
const OperationBase: z.ZodType<OperationBase> = z
  .object({
    path: z.string().nullable(),
    op: z.string().nullable(),
    from: z.string().nullable(),
  })
  .partial();
const Operation: z.ZodType<Operation> = OperationBase.and(
  z.object({ value: z.unknown().nullable() }).partial(),
);
const Information_PatchStudent_Body = z.array(Operation);
const StudentMceecdyaResponse = z
  .object({
    cmpy_code: z.string(),
    stud_code: z.string(),
    arrive_yr: z.number().int().nullable(),
    flote_code: z.string().nullable(),
    fnse_code: z.string().nullable(),
    focc_code: z.string().nullable(),
    fse_code: z.string().nullable(),
    mlote_code: z.string().nullable(),
    mnse_code: z.string().nullable(),
    mocc_code: z.string().nullable(),
    mse_code: z.string().nullable(),
    s_indig_sts: z.string().nullable(),
    scob_code: z.string().nullable(),
    slote_code: z.string().nullable(),
    update_on: z.string().datetime({ offset: true }).nullable(),
  })
  .partial();
const UpdateStudentMceecdyaRequest = z
  .object({
    arrive_yr: z.number().int().nullable(),
    flote_code: z.string().nullable(),
    fnse_code: z.string().nullable(),
    focc_code: z.string().nullable(),
    fse_code: z.string().nullable(),
    mlote_code: z.string().nullable(),
    mnse_code: z.string().nullable(),
    mocc_code: z.string().nullable(),
    mse_code: z.string().nullable(),
    s_indig_sts: z.string().nullable(),
    scob_code: z.string().nullable(),
    slote_code: z.string().nullable(),
  })
  .partial();
const StudentStandardNoteResponse = z
  .object({
    cmpy_code: z.string(),
    stud_code: z.string(),
    note_cat: z.string().nullable(),
    note_date: z.string().datetime({ offset: true }),
    note_text: z.string().nullable(),
    note_uid: z.string(),
    has_attachment: z.boolean(),
  })
  .partial();
const CommonStudentStandardNoteUpdateRequest: z.ZodType<CommonStudentStandardNoteUpdateRequest> =
  z.object({
    note_cat: z.string().min(1).max(3),
    note_date: z.string().min(1).datetime({ offset: true }),
    note_text: z.string().min(1).max(4000),
  });
const AddStudentStandardNoteRequest: z.ZodType<AddStudentStandardNoteRequest> =
  CommonStudentStandardNoteUpdateRequest.and(z.object({}).partial());
const UpdateStudentStandardNoteRequest: z.ZodType<UpdateStudentStandardNoteRequest> =
  CommonStudentStandardNoteUpdateRequest.and(z.object({}).partial());
const FileResponse = z
  .object({
    file_name: z.string().nullable(),
    file_size: z.number().int().nullable(),
    date_uploaded: z.string().datetime({ offset: true }).nullable(),
    attach_id: z.string().nullable(),
  })
  .partial();
const Notes_AddStudentStandardNotesAttachment_Body = z
  .object({
    file_name: z.string().nullable(),
    file_content: z.instanceof(File).nullable(),
  })
  .partial()
  .passthrough();
const NewAttachmentResponse = z.object({ attach_id: z.string() }).partial();
const StudentConfidentialNoteResponse = z
  .object({
    cmpy_code: z.string(),
    stud_code: z.string(),
    note_cat: z.string().nullable(),
    note_date: z.string().datetime({ offset: true }),
    note_text: z.string().nullable(),
    note_uid: z.string(),
    has_attachment: z.boolean(),
  })
  .partial();
const CommonStudentConfidentialNoteUpdateRequest: z.ZodType<CommonStudentConfidentialNoteUpdateRequest> =
  z.object({
    note_cat: z.string().min(1).max(3),
    note_date: z.string().min(1).datetime({ offset: true }),
    note_text: z.string().min(1).max(4000),
  });
const AddStudentConfidentialNoteRequest: z.ZodType<AddStudentConfidentialNoteRequest> =
  CommonStudentConfidentialNoteUpdateRequest.and(z.object({}).partial());
const UpdateStudentConfidentialNoteRequest: z.ZodType<UpdateStudentConfidentialNoteRequest> =
  CommonStudentConfidentialNoteUpdateRequest.and(z.object({}).partial());
const change_key = z.string().nullish();
const StudentPhotoChange: z.ZodType<StudentPhotoChange> = z
  .object({
    stud_code: z.string(),
    photo_update_on: z.string().datetime({ offset: true }),
  })
  .partial();
const StudentPhotoChangesResponse: z.ZodType<StudentPhotoChangesResponse> = z
  .object({
    cmpy_code: z.string(),
    change_key: z.string(),
    changes: z.array(StudentPhotoChange),
  })
  .partial();
const Photo_AddStudentPhoto_Body = z
  .object({ file_content: z.instanceof(File).nullable() })
  .partial()
  .passthrough();
const UDFieldDetails: z.ZodType<UDFieldDetails> = z
  .object({
    field_name: z.string(),
    field_desc: z.string().nullable(),
    sort_order: z.number().int(),
  })
  .partial();
const UDFieldReferenceValue: z.ZodType<UDFieldReferenceValue> = z
  .object({
    ud_code: z.string().nullable(),
    ud_desc: z.string(),
    sort_order: z.number().int(),
  })
  .partial();
const UDCodeFieldDetails = UDFieldDetails.and(
  z.object({ reference_values: z.array(UDFieldReferenceValue) }).partial(),
);
const UDAttachmentFieldDetails = UDFieldDetails.and(
  z.object({ field_number: z.number().int() }).partial(),
);
const UDFieldTypes: z.ZodType<UDFieldTypes> = z
  .object({
    ud_flags: z.array(UDFieldDetails),
    ud_codes: z.array(UDCodeFieldDetails),
    ud_text: z.array(UDFieldDetails),
    ud_dates: z.array(UDFieldDetails),
    ud_attachments: z.array(UDAttachmentFieldDetails),
  })
  .partial();
const UDAreaOptionsResponse: z.ZodType<UDAreaOptionsResponse> = z
  .object({
    cmpy_code: z.string(),
    area_code: z.string(),
    area_desc: z.string(),
    ud_fields: UDFieldTypes,
  })
  .partial();
const StudentUDAreaFlagResponse: z.ZodType<StudentUDAreaFlagResponse> = z
  .object({
    ud1_flg: z.string().max(1).nullable(),
    ud2_flg: z.string().max(1).nullable(),
    ud3_flg: z.string().max(1).nullable(),
    ud4_flg: z.string().max(1).nullable(),
    ud5_flg: z.string().max(1).nullable(),
    ud6_flg: z.string().max(1).nullable(),
    ud7_flg: z.string().max(1).nullable(),
    ud8_flg: z.string().max(1).nullable(),
    ud9_flg: z.string().max(1).nullable(),
    ud10_flg: z.string().max(1).nullable(),
  })
  .partial();
const StudentUDAreaCodeResponse: z.ZodType<StudentUDAreaCodeResponse> = z
  .object({
    ud11_code: z.string().max(3).nullable(),
    ud12_code: z.string().max(3).nullable(),
    ud13_code: z.string().max(3).nullable(),
    ud14_code: z.string().max(3).nullable(),
    ud15_code: z.string().max(3).nullable(),
    ud16_code: z.string().max(3).nullable(),
    ud17_code: z.string().max(3).nullable(),
    ud18_code: z.string().max(3).nullable(),
    ud19_code: z.string().max(3).nullable(),
    ud20_code: z.string().max(3).nullable(),
  })
  .partial();
const StudentUDAreaTextResponse: z.ZodType<StudentUDAreaTextResponse> = z
  .object({
    ud21_text: z.string().max(100).nullable(),
    ud22_text: z.string().max(100).nullable(),
    ud23_text: z.string().max(100).nullable(),
    ud24_text: z.string().max(100).nullable(),
    ud25_text: z.string().max(100).nullable(),
    ud26_text: z.string().max(100).nullable(),
    ud27_text: z.string().max(100).nullable(),
    ud28_text: z.string().max(100).nullable(),
    ud29_text: z.string().max(100).nullable(),
    ud30_text: z.string().max(100).nullable(),
  })
  .partial();
const StudentUDAreaDateResponse: z.ZodType<StudentUDAreaDateResponse> = z
  .object({
    ud31_date: z.string().max(100).nullable(),
    ud32_date: z.string().max(100).nullable(),
    ud33_date: z.string().max(100).nullable(),
    ud34_date: z.string().max(100).nullable(),
    ud35_date: z.string().max(100).nullable(),
    ud36_date: z.string().max(100).nullable(),
    ud37_date: z.string().max(100).nullable(),
    ud38_date: z.string().max(100).nullable(),
    ud39_date: z.string().max(100).nullable(),
    ud40_date: z.string().max(100).nullable(),
  })
  .partial();
const FileDetails: z.ZodType<FileDetails> = z
  .object({
    file_name: z.string().nullable(),
    file_size: z.number().int().nullable(),
    date_uploaded: z.string().datetime({ offset: true }).nullable(),
    attach_id: z.string().nullable(),
  })
  .partial();
const AttachmentDetails: z.ZodType<AttachmentDetails> = z
  .object({ field_number: z.number().int(), files: z.array(FileDetails) })
  .partial();
const StudentUDAreaAttachmentResponse: z.ZodType<StudentUDAreaAttachmentResponse> =
  z
    .object({
      ud41_attachment_details: AttachmentDetails,
      ud42_attachment_details: AttachmentDetails,
      ud43_attachment_details: AttachmentDetails,
      ud44_attachment_details: AttachmentDetails,
      ud45_attachment_details: AttachmentDetails,
      ud46_attachment_details: AttachmentDetails,
      ud47_attachment_details: AttachmentDetails,
      ud48_attachment_details: AttachmentDetails,
      ud49_attachment_details: AttachmentDetails,
      ud50_attachment_details: AttachmentDetails,
    })
    .partial();
const StudentUDAreaFieldsResponse: z.ZodType<StudentUDAreaFieldsResponse> = z
  .object({
    ud_flags: StudentUDAreaFlagResponse,
    ud_codes: StudentUDAreaCodeResponse,
    ud_text: StudentUDAreaTextResponse,
    ud_dates: StudentUDAreaDateResponse,
    ud_attachments: StudentUDAreaAttachmentResponse,
  })
  .partial();
const StudentUDAreaResponse: z.ZodType<StudentUDAreaResponse> = z
  .object({
    cmpy_code: z.string(),
    area_code: z.string(),
    stud_code: z.string(),
    update_on: z.string().datetime({ offset: true }).nullable(),
    ud_fields: StudentUDAreaFieldsResponse,
  })
  .partial();
const StudentUDAreaFlagRequest: z.ZodType<StudentUDAreaFlagRequest> = z
  .object({
    ud1_flg: z.string().max(1).nullable(),
    ud2_flg: z.string().max(1).nullable(),
    ud3_flg: z.string().max(1).nullable(),
    ud4_flg: z.string().max(1).nullable(),
    ud5_flg: z.string().max(1).nullable(),
    ud6_flg: z.string().max(1).nullable(),
    ud7_flg: z.string().max(1).nullable(),
    ud8_flg: z.string().max(1).nullable(),
    ud9_flg: z.string().max(1).nullable(),
    ud10_flg: z.string().max(1).nullable(),
  })
  .partial();
const StudentUDAreaCodeRequest: z.ZodType<StudentUDAreaCodeRequest> = z
  .object({
    ud11_code: z.string().max(3).nullable(),
    ud12_code: z.string().max(3).nullable(),
    ud13_code: z.string().max(3).nullable(),
    ud14_code: z.string().max(3).nullable(),
    ud15_code: z.string().max(3).nullable(),
    ud16_code: z.string().max(3).nullable(),
    ud17_code: z.string().max(3).nullable(),
    ud18_code: z.string().max(3).nullable(),
    ud19_code: z.string().max(3).nullable(),
    ud20_code: z.string().max(3).nullable(),
  })
  .partial();
const StudentUDAreaTextRequest: z.ZodType<StudentUDAreaTextRequest> = z
  .object({
    ud21_text: z.string().max(100).nullable(),
    ud22_text: z.string().max(100).nullable(),
    ud23_text: z.string().max(100).nullable(),
    ud24_text: z.string().max(100).nullable(),
    ud25_text: z.string().max(100).nullable(),
    ud26_text: z.string().max(100).nullable(),
    ud27_text: z.string().max(100).nullable(),
    ud28_text: z.string().max(100).nullable(),
    ud29_text: z.string().max(100).nullable(),
    ud30_text: z.string().max(100).nullable(),
  })
  .partial();
const StudentUDAreaDateRequest: z.ZodType<StudentUDAreaDateRequest> = z
  .object({
    ud31_date: z.string().nullable(),
    ud32_date: z.string().nullable(),
    ud33_date: z.string().nullable(),
    ud34_date: z.string().nullable(),
    ud35_date: z.string().nullable(),
    ud36_date: z.string().nullable(),
    ud37_date: z.string().nullable(),
    ud38_date: z.string().nullable(),
    ud39_date: z.string().nullable(),
    ud40_date: z.string().nullable(),
  })
  .partial();
const StudentUDAreaFieldsRequest: z.ZodType<StudentUDAreaFieldsRequest> = z
  .object({
    ud_flags: StudentUDAreaFlagRequest,
    ud_codes: StudentUDAreaCodeRequest,
    ud_text: StudentUDAreaTextRequest,
    ud_dates: StudentUDAreaDateRequest,
  })
  .partial();
const CommonStudentUDAreaUpdateRequest: z.ZodType<CommonStudentUDAreaUpdateRequest> =
  z.object({ ud_fields: StudentUDAreaFieldsRequest }).partial();
const AddStudentUDAreaRequest: z.ZodType<AddStudentUDAreaRequest> =
  CommonStudentUDAreaUpdateRequest.and(z.object({}).partial());
const UpdateStudentUDAreaRequest: z.ZodType<UpdateStudentUDAreaRequest> =
  CommonStudentUDAreaUpdateRequest.and(z.object({}).partial());
const field_number = z.number().int();
const UDFlagResponse: z.ZodType<UDFlagResponse> = z
  .object({
    ud1_flg: z.string().max(1).nullable(),
    ud2_flg: z.string().max(1).nullable(),
    ud3_flg: z.string().max(1).nullable(),
    ud4_flg: z.string().max(1).nullable(),
    ud5_flg: z.string().max(1).nullable(),
    ud6_flg: z.string().max(1).nullable(),
    ud7_flg: z.string().max(1).nullable(),
    ud8_flg: z.string().max(1).nullable(),
    ud9_flg: z.string().max(1).nullable(),
    ud10_flg: z.string().max(1).nullable(),
  })
  .partial();
const UDCodeResponse: z.ZodType<UDCodeResponse> = z
  .object({
    ud11_code: z.string().max(3).nullable(),
    ud12_code: z.string().max(3).nullable(),
    ud13_code: z.string().max(3).nullable(),
    ud14_code: z.string().max(3).nullable(),
    ud15_code: z.string().max(3).nullable(),
    ud16_code: z.string().max(3).nullable(),
    ud17_code: z.string().max(3).nullable(),
    ud18_code: z.string().max(3).nullable(),
    ud19_code: z.string().max(3).nullable(),
    ud20_code: z.string().max(3).nullable(),
  })
  .partial();
const UDTextResponse: z.ZodType<UDTextResponse> = z
  .object({
    ud21_text: z.string().max(100).nullable(),
    ud22_text: z.string().max(100).nullable(),
    ud23_text: z.string().max(100).nullable(),
    ud24_text: z.string().max(100).nullable(),
    ud25_text: z.string().max(100).nullable(),
  })
  .partial();
const UDFieldsResponse: z.ZodType<UDFieldsResponse> = z
  .object({
    ud_flags: UDFlagResponse,
    ud_codes: UDCodeResponse,
    ud_text: UDTextResponse,
  })
  .partial();
const StudentUDFieldsResponse: z.ZodType<StudentUDFieldsResponse> = z
  .object({
    cmpy_code: z.string(),
    stud_code: z.string(),
    ud_fields: UDFieldsResponse,
  })
  .partial();
const UDFlagRequest: z.ZodType<UDFlagRequest> = z
  .object({
    ud1_flg: z.string().max(1).nullable(),
    ud2_flg: z.string().max(1).nullable(),
    ud3_flg: z.string().max(1).nullable(),
    ud4_flg: z.string().max(1).nullable(),
    ud5_flg: z.string().max(1).nullable(),
    ud6_flg: z.string().max(1).nullable(),
    ud7_flg: z.string().max(1).nullable(),
    ud8_flg: z.string().max(1).nullable(),
    ud9_flg: z.string().max(1).nullable(),
    ud10_flg: z.string().max(1).nullable(),
  })
  .partial();
const UDCodeRequest: z.ZodType<UDCodeRequest> = z
  .object({
    ud11_code: z.string().max(3).nullable(),
    ud12_code: z.string().max(3).nullable(),
    ud13_code: z.string().max(3).nullable(),
    ud14_code: z.string().max(3).nullable(),
    ud15_code: z.string().max(3).nullable(),
    ud16_code: z.string().max(3).nullable(),
    ud17_code: z.string().max(3).nullable(),
    ud18_code: z.string().max(3).nullable(),
    ud19_code: z.string().max(3).nullable(),
    ud20_code: z.string().max(3).nullable(),
  })
  .partial();
const UDTextRequest: z.ZodType<UDTextRequest> = z
  .object({
    ud21_text: z.string().max(100).nullable(),
    ud22_text: z.string().max(100).nullable(),
    ud23_text: z.string().max(100).nullable(),
    ud24_text: z.string().max(100).nullable(),
    ud25_text: z.string().max(100).nullable(),
  })
  .partial();
const UDFieldsRequest: z.ZodType<UDFieldsRequest> = z
  .object({
    ud_flags: UDFlagRequest,
    ud_codes: UDCodeRequest,
    ud_text: UDTextRequest,
  })
  .partial();
const UpdateStudentUDFieldsRequest: z.ZodType<UpdateStudentUDFieldsRequest> = z
  .object({ ud_fields: UDFieldsRequest })
  .partial();
const StudentUDFieldOptionDetails: z.ZodType<StudentUDFieldOptionDetails> = z
  .object({
    field_name: z.string(),
    field_desc: z.string().nullable(),
    sort_order: z.number().int(),
  })
  .partial();
const StudentUDFieldOptionReferenceValue: z.ZodType<StudentUDFieldOptionReferenceValue> =
  z
    .object({
      ud_code: z.string().nullable(),
      ud_desc: z.string().nullable(),
      sort_order: z.number().int(),
    })
    .partial();
const StudentUDCodeFieldOptionDetails = StudentUDFieldOptionDetails.and(
  z
    .object({ reference_values: z.array(StudentUDFieldOptionReferenceValue) })
    .partial(),
);
const StudentUDFieldOptionTypes: z.ZodType<StudentUDFieldOptionTypes> = z
  .object({
    ud_flags: z.array(StudentUDFieldOptionDetails),
    ud_codes: z.array(StudentUDCodeFieldOptionDetails),
    ud_text: z.array(StudentUDFieldOptionDetails),
  })
  .partial();
const StudentUDFieldOptionResponse: z.ZodType<StudentUDFieldOptionResponse> = z
  .object({ ud_fields: StudentUDFieldOptionTypes, cmpy_code: z.string() })
  .partial();
const EmployeeLeaveBalanceResponse = z
  .object({
    acr_code: z.string(),
    cmpy_code: z.string(),
    emp_code: z.string(),
    ent_qty: z.number().nullable(),
    lst_up_date: z.string().nullable(),
    non_acr_day_qty: z.number().int().nullable(),
    nts_code: z.string().nullable(),
    rate_amt: z.number().nullable(),
    str_ent_date: z.string().nullable(),
  })
  .partial();
const UsualSigns: z.ZodType<UsualSigns> = z
  .object({
    wheez_flg: z.boolean(),
    tight_flg: z.boolean(),
    cough_flg: z.boolean(),
    breath_flg: z.boolean(),
    speak_flg: z.boolean(),
    comm_text: z.string().nullable(),
  })
  .partial();
const WorseningSigns: z.ZodType<WorseningSigns> = z
  .object({
    wheez_flg: z.boolean(),
    tight_flg: z.boolean(),
    cough_flg: z.boolean(),
    breath_flg: z.boolean(),
    speak_flg: z.boolean(),
    comm_text: z.string().nullable(),
  })
  .partial();
const Triggers: z.ZodType<Triggers> = z
  .object({
    exercise_flg: z.boolean(),
    cold_virus_flg: z.boolean(),
    pollen_flg: z.boolean(),
    dust_flg: z.boolean(),
    food_flg: z.boolean(),
    food_text: z.string().nullable(),
    comm_text: z.string().nullable(),
  })
  .partial();
const AsthmaManagementResponse: z.ZodType<AsthmaManagementResponse> = z
  .object({
    cmpy_code: z.string(),
    stud_code: z.string(),
    usual_signs: UsualSigns,
    worsening_signs: WorseningSigns,
    triggers: Triggers,
  })
  .partial();
const UsualSigns2: z.ZodType<UsualSigns2> = z
  .object({
    wheez_flg: z.boolean(),
    tight_flg: z.boolean(),
    cough_flg: z.boolean(),
    breath_flg: z.boolean(),
    speak_flg: z.boolean(),
    comm_text: z.string().max(200).nullable(),
  })
  .partial();
const WorseningSigns2: z.ZodType<WorseningSigns2> = z
  .object({
    wheez_flg: z.boolean(),
    tight_flg: z.boolean(),
    cough_flg: z.boolean(),
    breath_flg: z.boolean(),
    speak_flg: z.boolean(),
    comm_text: z.string().max(200).nullable(),
  })
  .partial();
const Triggers2: z.ZodType<Triggers2> = z
  .object({
    exercise_flg: z.boolean(),
    cold_virus_flg: z.boolean(),
    pollen_flg: z.boolean(),
    dust_flg: z.boolean(),
    food_flg: z.boolean(),
    food_text: z.string().max(200).nullable(),
    comm_text: z.string().max(200).nullable(),
  })
  .partial();
const UpdateAsthmaManagementRequest: z.ZodType<UpdateAsthmaManagementRequest> =
  z
    .object({
      usual_signs: UsualSigns2,
      worsening_signs: WorseningSigns2,
      triggers: Triggers2,
    })
    .partial();
const UdText: z.ZodType<UdText> = z
  .object({
    ud1_text: z.string().nullable(),
    ud2_text: z.string().nullable(),
    ud3_text: z.string().nullable(),
    ud4_text: z.string().nullable(),
    ud5_text: z.string().nullable(),
    ud6_text: z.string().nullable(),
    ud7_text: z.string().nullable(),
    ud8_text: z.string().nullable(),
    ud9_text: z.string().nullable(),
    ud10_text: z.string().nullable(),
  })
  .partial();
const UdFields: z.ZodType<UdFields> = z.object({ ud_text: UdText }).partial();
const StudentMedicalConditionResponse: z.ZodType<StudentMedicalConditionResponse> =
  z
    .object({
      cmpy_code: z.string(),
      last_occ_date: z.string().nullable(),
      mcond_code: z.string(),
      severe_ind: z.boolean(),
      stud_code: z.string(),
      treat_text: z.string().nullable(),
      active_flg: z.boolean(),
      ud_fields: UdFields,
      has_attachment: z.boolean(),
      has_note: z.boolean(),
    })
    .partial();
const UdText2: z.ZodType<UdText2> = z
  .object({
    ud1_text: z.string().max(200).nullable(),
    ud2_text: z.string().max(200).nullable(),
    ud3_text: z.string().max(200).nullable(),
    ud4_text: z.string().max(200).nullable(),
    ud5_text: z.string().max(200).nullable(),
    ud6_text: z.string().max(200).nullable(),
    ud7_text: z.string().max(200).nullable(),
    ud8_text: z.string().max(200).nullable(),
    ud9_text: z.string().max(200).nullable(),
    ud10_text: z.string().max(200).nullable(),
  })
  .partial();
const UdFields2: z.ZodType<UdFields2> = z
  .object({ ud_text: UdText2 })
  .partial();
const AddStudentMedicalConditionRequest: z.ZodType<AddStudentMedicalConditionRequest> =
  z
    .object({
      last_occ_date: z.string().nullable(),
      mcond_code: z.string().max(3),
      severe_ind: z.boolean(),
      treat_text: z.string().max(4000).nullable(),
      active_flg: z.boolean(),
      ud_fields: UdFields2,
    })
    .partial();
const UdText3: z.ZodType<UdText3> = z
  .object({
    ud1_text: z.string().max(200).nullable(),
    ud2_text: z.string().max(200).nullable(),
    ud3_text: z.string().max(200).nullable(),
    ud4_text: z.string().max(200).nullable(),
    ud5_text: z.string().max(200).nullable(),
    ud6_text: z.string().max(200).nullable(),
    ud7_text: z.string().max(200).nullable(),
    ud8_text: z.string().max(200).nullable(),
    ud9_text: z.string().max(200).nullable(),
    ud10_text: z.string().max(200).nullable(),
  })
  .partial();
const UdFields3: z.ZodType<UdFields3> = z
  .object({ ud_text: UdText3 })
  .partial();
const UpdateStudentMedicalConditionRequest: z.ZodType<UpdateStudentMedicalConditionRequest> =
  z
    .object({
      last_occ_date: z.string().nullable(),
      severe_ind: z.boolean(),
      treat_text: z.string().max(4000).nullable(),
      active_flg: z.boolean(),
      ud_fields: UdFields3,
    })
    .partial();
const StudentMedicalConditionNoteResponse = z
  .object({
    cmpy_code: z.string(),
    stud_code: z.string(),
    mcond_code: z.string(),
    note_date: z.string(),
    note_text: z.string().nullable(),
    note_uid: z.string(),
  })
  .partial();
const AddStudentMedicalConditionNoteRequest = z.object({
  note_date: z.string().min(1),
  note_text: z.string().max(4000).nullish(),
});
const UpdateStudentMedicalConditionNoteRequest = z.object({
  note_date: z.string().min(1),
  note_text: z.string().max(4000).nullish(),
});
const StudentImmunisationResponse = z
  .object({
    cmpy_code: z.string(),
    imm_code: z.string(),
    imm_year: z.number().int().nullable(),
    stud_code: z.string(),
  })
  .partial();
const AddStudentImmunisationRequest = z.object({
  imm_code: z.string().min(1).max(2),
  imm_year: z.number().int(),
});
const UpdateStudentImmunisationRequest = z.object({
  imm_year: z.number().int(),
});
const StudentImmunisationRegisterResponse = z
  .object({
    cmpy_code: z.string(),
    air_state_date: z.string().nullable(),
    next_due_date: z.string().nullable(),
    stud_code: z.string(),
    status_code: z.string().nullable(),
    has_attachment: z.boolean(),
  })
  .partial();
const UpdateStudentImmunisationRegisterRequest = z
  .object({
    next_due_date: z.string().nullable(),
    status_code: z.string().nullable(),
  })
  .partial();
const Immunisations_AddStudentImmunisationRegisterAttachment_Body = z
  .object({
    air_state_date: z.string().datetime({ offset: true }).nullable(),
    file_name: z.string().nullable(),
    file_content: z.instanceof(File).nullable(),
  })
  .partial()
  .passthrough();
const StudentMedicationResponse = z
  .object({
    active_flg: z.boolean(),
    administer: z.string().nullable(),
    cmpy_code: z.string(),
    doc_phone: z.string().nullable(),
    end_date: z.string().nullable(),
    expiry_date: z.string().nullable(),
    mcond_code: z.string(),
    med_detl: z.string().nullable(),
    med_meth: z.string().nullable(),
    med_text: z.string().nullable(),
    medication_uid: z.string(),
    min_time_between_doses: z.number().int().nullable(),
    script_doc: z.string().nullable(),
    start_date: z.string().nullable(),
    stud_code: z.string(),
    training: z.boolean(),
    has_attachment: z.boolean(),
    has_note: z.boolean(),
    has_schedule: z.boolean(),
  })
  .partial();
const AddStudentMedicationRequest = z
  .object({
    active_flg: z.boolean(),
    administer: z.string().max(1),
    doc_phone: z.string().max(25).nullable(),
    end_date: z.string().nullable(),
    expiry_date: z.string().nullable(),
    med_detl: z.string().max(200).nullable(),
    med_meth: z.string().max(200).nullable(),
    med_text: z.string().max(200),
    min_time_between_doses: z.number().int().nullable(),
    script_doc: z.string().max(30).nullable(),
    start_date: z.string().nullable(),
    training: z.boolean(),
  })
  .partial();
const UpdateStudentMedicationRequest = z
  .object({
    active_flg: z.boolean(),
    administer: z.string().max(1),
    doc_phone: z.string().max(25).nullable(),
    end_date: z.string().nullable(),
    expiry_date: z.string().nullable(),
    med_detl: z.string().max(200).nullable(),
    med_meth: z.string().max(200).nullable(),
    med_text: z.string().max(200).nullable(),
    medication_uid: z.string(),
    script_doc: z.string().max(30).nullable(),
    start_date: z.string().nullable(),
    stud_code: z.string(),
    training: z.boolean(),
  })
  .partial();
const StudentMedicationNoteResponse = z
  .object({
    cmpy_code: z.string(),
    stud_code: z.string(),
    mcond_code: z.string(),
    medication_uid: z.string(),
    note_date: z.string(),
    note_text: z.string().nullable(),
    note_uid: z.string(),
  })
  .partial();
const AddStudentMedicationNoteRequest = z
  .object({ note_date: z.string(), note_text: z.string().max(4000).nullable() })
  .partial();
const UpdateStudentMedicationNoteRequest = z
  .object({ note_date: z.string(), note_text: z.string().max(4000).nullable() })
  .partial();
const DaysResponse: z.ZodType<DaysResponse> = z
  .object({
    mon_flg: z.boolean(),
    tue_flg: z.boolean(),
    wed_flg: z.boolean(),
    thu_flg: z.boolean(),
    fri_flg: z.boolean(),
    sat_flg: z.boolean(),
    sun_flg: z.boolean(),
  })
  .partial();
const StudentMedicationScheduleResponse: z.ZodType<StudentMedicationScheduleResponse> =
  z
    .object({
      cmpy_code: z.string(),
      stud_code: z.string(),
      mcond_code: z.string(),
      medication_uid: z.string(),
      sched_uid: z.string(),
      med_dose: z.string().nullable(),
      med_time: z.string(),
      shed_start_date: z.string().nullable(),
      shed_end_date: z.string().nullable(),
      days: DaysResponse,
    })
    .partial();
const DaysRequest: z.ZodType<DaysRequest> = z
  .object({
    mon_flg: z.boolean(),
    tue_flg: z.boolean(),
    wed_flg: z.boolean(),
    thu_flg: z.boolean(),
    fri_flg: z.boolean(),
    sat_flg: z.boolean(),
    sun_flg: z.boolean(),
  })
  .partial();
const AddStudentMedicationScheduleRequest: z.ZodType<AddStudentMedicationScheduleRequest> =
  z.object({
    med_dose: z.string().min(1).max(100),
    med_time: z.string().min(1),
    shed_start_date: z.string().min(1),
    shed_end_date: z.string().nullish(),
    days: DaysRequest.optional(),
  });
const DaysRequest2: z.ZodType<DaysRequest2> = z
  .object({
    mon_flg: z.boolean(),
    tue_flg: z.boolean(),
    wed_flg: z.boolean(),
    thu_flg: z.boolean(),
    fri_flg: z.boolean(),
    sat_flg: z.boolean(),
    sun_flg: z.boolean(),
  })
  .partial();
const UpdateStudentMedicationScheduleRequest: z.ZodType<UpdateStudentMedicationScheduleRequest> =
  z.object({
    med_dose: z.string().min(1).max(100),
    med_time: z.string().min(1),
    shed_start_date: z.string().min(1),
    shed_end_date: z.string().nullish(),
    days: DaysRequest2.optional(),
  });
const StudentMedicalStandardNoteResponse = z
  .object({
    cmpy_code: z.string(),
    stud_code: z.string(),
    note_cat: z.string().nullable(),
    note_date: z.string().datetime({ offset: true }),
    note_text: z.string().nullable(),
    note_uid: z.string(),
    has_attachment: z.boolean(),
  })
  .partial();
const CommonStudentMedicalStandardNoteUpdateRequest: z.ZodType<CommonStudentMedicalStandardNoteUpdateRequest> =
  z.object({
    note_cat: z.string().min(1).max(3),
    note_date: z.string().min(1).datetime({ offset: true }),
    note_text: z.string().min(1).max(4000),
  });
const AddStudentMedicalStandardNoteRequest: z.ZodType<AddStudentMedicalStandardNoteRequest> =
  CommonStudentMedicalStandardNoteUpdateRequest.and(z.object({}).partial());
const UpdateStudentMedicalStandardNoteRequest: z.ZodType<UpdateStudentMedicalStandardNoteRequest> =
  CommonStudentMedicalStandardNoteUpdateRequest.and(z.object({}).partial());
const StudentMedicalConfidentialNoteResponse = z
  .object({
    cmpy_code: z.string(),
    stud_code: z.string(),
    note_cat: z.string().nullable(),
    note_date: z.string().datetime({ offset: true }),
    note_text: z.string().nullable(),
    note_uid: z.string(),
    has_attachment: z.boolean(),
  })
  .partial();
const CommonStudentMedicalConfidentialNoteUpdateRequest: z.ZodType<CommonStudentMedicalConfidentialNoteUpdateRequest> =
  z.object({
    note_cat: z.string().min(1).max(3),
    note_date: z.string().min(1).datetime({ offset: true }),
    note_text: z.string().min(1).max(4000),
  });
const AddStudentMedicalConfidentialNoteRequest: z.ZodType<AddStudentMedicalConfidentialNoteRequest> =
  CommonStudentMedicalConfidentialNoteUpdateRequest.and(z.object({}).partial());
const UpdateStudentMedicalConfidentialNoteRequest: z.ZodType<UpdateStudentMedicalConfidentialNoteRequest> =
  CommonStudentMedicalConfidentialNoteUpdateRequest.and(z.object({}).partial());
const StudentPractitionerResponse = z
  .object({
    cmpy_code: z.string(),
    doct_name: z.string().nullable(),
    doct_phone: z.string().nullable(),
    prac_num: z.number().int(),
    ptype_code: z.string().nullable(),
    stud_code: z.string(),
  })
  .partial();
const AddStudentPractitionerRequest = z.object({
  doct_phone: z.string().max(25).nullish(),
  doct_name: z.string().min(1).max(30),
  ptype_code: z.string().min(1).max(3),
});
const CommonStudentPractitionerUpdateRequest: z.ZodType<CommonStudentPractitionerUpdateRequest> =
  z
    .object({
      doct_name: z.string().max(50).nullable(),
      doct_phone: z.string().max(20).nullable(),
      ptype_code: z.string().max(10).nullable(),
    })
    .partial();
const UpdateStudentPractitionerRequest: z.ZodType<UpdateStudentPractitionerRequest> =
  CommonStudentPractitionerUpdateRequest.and(z.object({}).partial());
const StudentMedicalSupplementaryResponse = z
  .object({
    cmpy_code: z.string(),
    stud_code: z.string(),
    msupp_code: z.string(),
    comm_text: z.string().nullable(),
  })
  .partial();
const AddStudentMedicalSupplementaryRequest = z
  .object({
    msupp_code: z.string().max(3),
    comm_text: z.string().max(200).nullable(),
  })
  .partial();
const UpdateStudentMedicalSupplementaryRequest = z
  .object({ comm_text: z.string().max(200).nullable() })
  .partial();
const YearPeriodOptionsResponse = z
  .object({
    year_num: z.number().int().nullable(),
    period_num: z.number().int().nullable(),
    start_date: z.string().nullable(),
    end_date: z.string().nullable(),
  })
  .partial();
const SegmentResponse: z.ZodType<SegmentResponse> = z
  .object({
    flex_code: z.string(),
    desc_text: z.string(),
    group_code: z.string(),
  })
  .partial();
const CodeStructureResponse: z.ZodType<CodeStructureResponse> = z
  .object({
    start_num: z.number().int(),
    length_num: z.number().int(),
    desc_text: z.string().nullable(),
    default_text: z.string().nullable(),
    type_ind: z.string(),
    dept_consol_flg: z.boolean(),
    segments: z.array(SegmentResponse),
  })
  .partial();
const CodeFormatRulesResponse: z.ZodType<CodeFormatRulesResponse> = z
  .object({
    cmpy_code: z.string(),
    code_structure: z.array(CodeStructureResponse),
  })
  .partial();
const ReportingCodeOptionsFieldReferenceValue: z.ZodType<ReportingCodeOptionsFieldReferenceValue> =
  z.object({ ref_code: z.string(), ref_desc: z.string() }).partial();
const ReportingCodeOptionsFieldDetails: z.ZodType<ReportingCodeOptionsFieldDetails> =
  z
    .object({
      field_name: z.string(),
      field_desc: z.string(),
      reference_values: z.array(ReportingCodeOptionsFieldReferenceValue),
    })
    .partial();
const ReportingCodeResponse: z.ZodType<ReportingCodeResponse> = z
  .object({
    cmpy_code: z.string(),
    field_details: z.array(ReportingCodeOptionsFieldDetails),
  })
  .partial();
const GeneralLedgerAccountResponse = z
  .object({
    cmpy_code: z.string(),
    acct_code: z.string(),
    desc_text: z.string(),
    start_year_num: z.number().int(),
    start_period_num: z.number().int(),
    end_year_num: z.number().int(),
    end_period_num: z.number().int(),
    group_code: z.string().nullable(),
    external_code: z.string().nullable(),
    type_ind: z.string(),
    def_tax_code: z.string().nullable(),
  })
  .partial();
const AddGeneralLedgerAccountRequest = z.object({
  acct_code: z.string().min(1).max(18),
  desc_text: z.string().min(1).max(40),
  start_year_num: z.number().int(),
  start_period_num: z.number().int(),
  end_year_num: z.number().int(),
  end_period_num: z.number().int(),
  group_code: z.string().max(7).nullish(),
  external_code: z.string().max(20).nullish(),
  type_ind: z.string().min(1).max(1),
  def_tax_code: z.string().max(3).nullish(),
});
const UpdateGeneralLedgerAccountRequest = z.object({
  acct_code: z.string().min(1).max(18),
  desc_text: z.string().min(1).max(40),
  start_year_num: z.number().int(),
  start_period_num: z.number().int(),
  end_year_num: z.number().int(),
  end_period_num: z.number().int(),
  group_code: z.string().max(7).nullish(),
  external_code: z.string().max(20).nullish(),
  type_ind: z.string().min(1).max(1),
  def_tax_code: z.string().max(3).nullish(),
});
const PeriodBudgetResponse: z.ZodType<PeriodBudgetResponse> = z
  .object({
    period_num: z.number().int(),
    period_amt: z.number(),
    ytd_pre_close_amt: z.number(),
    ytd_budget: z.number(),
    variance: z.number(),
  })
  .partial();
const AccountBudgetResponse: z.ZodType<AccountBudgetResponse> = z
  .object({
    cmpy_code: z.string(),
    acct_code: z.string(),
    year_num: z.number().int(),
    budget_num: z.number().int(),
    periods: z.array(PeriodBudgetResponse),
  })
  .partial();
const PeriodBudgetRequest: z.ZodType<PeriodBudgetRequest> = z.object({
  period_num: z.number().int(),
  period_amt: z.number(),
});
const AddAccountBudgetRequest: z.ZodType<AddAccountBudgetRequest> = z.object({
  year_num: z.number().int(),
  budget_num: z.number().int(),
  periods: z.array(PeriodBudgetRequest).optional(),
});
const BudgetPeriod: z.ZodType<BudgetPeriod> = z.object({
  period_num: z.number().int(),
  period_amt: z.number(),
});
const UpdateAccountBudgetRequest: z.ZodType<UpdateAccountBudgetRequest> =
  z.object({
    year_num: z.number().int(),
    budget_num: z.number().int(),
    periods: z.array(BudgetPeriod),
  });
const PeriodBalanceResponse: z.ZodType<PeriodBalanceResponse> = z
  .object({
    period_num: z.number().int(),
    open_amt: z.number(),
    debit_amt: z.number(),
    credit_amt: z.number(),
    close_amt: z.number(),
    pre_close_amt: z.number(),
  })
  .partial();
const AccountBalanceResponse: z.ZodType<AccountBalanceResponse> = z
  .object({
    cmpy_code: z.string(),
    acct_code: z.string(),
    year_num: z.number().int(),
    period_bals: z.array(PeriodBalanceResponse),
  })
  .partial();
const AccountTransactionResponse = z
  .object({
    cmpy_code: z.string(),
    acct_code: z.string(),
    year_num: z.number().int(),
    period_num: z.number().int(),
    jour_code: z.string().nullable(),
    jour_num: z.number().int(),
    jour_seq_num: z.number().int(),
    analysis_text: z.string().nullable(),
    tran_date: z.string(),
    ref_text: z.string().nullable(),
    ref_num: z.number().int(),
    desc_text: z.string().nullable(),
    debit_amt: z.number().nullable(),
    credit_amt: z.number().nullable(),
  })
  .partial();
const RptCodes: z.ZodType<RptCodes> = z
  .object({
    rpt1_code: z.string().nullable(),
    rpt2_code: z.string().nullable(),
    rpt3_code: z.string().nullable(),
    rpt4_code: z.string().nullable(),
    rpt5_code: z.string().nullable(),
    rpt6_code: z.string().nullable(),
    rpt7_code: z.string().nullable(),
    rpt8_code: z.string().nullable(),
    rpt9_code: z.string().nullable(),
    rpt10_code: z.string().nullable(),
    rpt11_code: z.string().nullable(),
    rpt12_code: z.string().nullable(),
    rpt13_code: z.string().nullable(),
    rpt14_code: z.string().nullable(),
    rpt15_code: z.string().nullable(),
    rpt16_code: z.string().nullable(),
    rpt17_code: z.string().nullable(),
    rpt18_code: z.string().nullable(),
    rpt19_code: z.string().nullable(),
    rpt20_code: z.string().nullable(),
  })
  .partial();
const AccountReportingCodesResponse: z.ZodType<AccountReportingCodesResponse> =
  z
    .object({
      cmpy_code: z.string(),
      acct_code: z.string(),
      assoc_acct_code: z.string().nullable(),
      resp_name: z.string().nullable(),
      resp_e_mail: z.string().nullable(),
      rpt_codes: RptCodes,
    })
    .partial();
const RptCodes2: z.ZodType<RptCodes2> = z
  .object({
    rpt1_code: z.string().max(4).nullable(),
    rpt2_code: z.string().max(4).nullable(),
    rpt3_code: z.string().max(4).nullable(),
    rpt4_code: z.string().max(4).nullable(),
    rpt5_code: z.string().max(4).nullable(),
    rpt6_code: z.string().max(4).nullable(),
    rpt7_code: z.string().max(4).nullable(),
    rpt8_code: z.string().max(4).nullable(),
    rpt9_code: z.string().max(4).nullable(),
    rpt10_code: z.string().max(4).nullable(),
    rpt11_code: z.string().max(4).nullable(),
    rpt12_code: z.string().max(4).nullable(),
    rpt13_code: z.string().max(4).nullable(),
    rpt14_code: z.string().max(4).nullable(),
    rpt15_code: z.string().max(4).nullable(),
    rpt16_code: z.string().max(4).nullable(),
    rpt17_code: z.string().max(4).nullable(),
    rpt18_code: z.string().max(4).nullable(),
    rpt19_code: z.string().max(4).nullable(),
    rpt20_code: z.string().max(4).nullable(),
  })
  .partial();
const UpdateAccountReportingCodesRequest: z.ZodType<UpdateAccountReportingCodesRequest> =
  z
    .object({
      assoc_acct_code: z.string().max(18).nullable(),
      resp_name: z.string().max(40).nullable(),
      resp_e_mail: z.string().max(60).nullable(),
      rpt_codes: RptCodes2,
    })
    .partial();
const AccountResponsibilityResponse = z
  .object({
    cmpy_code: z.string(),
    acct_code: z.string(),
    user_code: z.string(),
    source_flg: z.string(),
    resp_flg: z.number().int(),
  })
  .partial();
const AddAccountResponsibilityRequest = z
  .object({
    user_code: z.string().max(7),
    source_flg: z.string().max(1),
    resp_flg: z.number().int(),
  })
  .partial();
const UpdateAccountResponsibilityRequest = z
  .object({
    user_code: z.string().max(7),
    source_flg: z.string().max(1),
    resp_flg: z.number().int(),
  })
  .partial();
const JournalTypeOptionsResponse = z
  .object({
    code: z.string(),
    desc: z.string().nullable(),
    gl_flag: z.boolean(),
  })
  .partial();
const GLAccountOptionsResponse = z
  .object({
    code: z.string(),
    desc: z.string(),
    start_year: z.number().int(),
    end_year: z.number().int(),
    start_period: z.number().int(),
    end_period: z.number().int(),
  })
  .partial();
const GLLineResponse: z.ZodType<GLLineResponse> = z
  .object({
    acct_code: z.string(),
    seq_num: z.number().int(),
    ref_text: z.string().nullable(),
    ref_num: z.number().int().nullable(),
    analysis_text: z.string().nullable(),
    desc_text: z.string().nullable(),
    debit_amt: z.number(),
    credit_amt: z.number(),
    tax_code: z.string().nullable(),
    tax_type: z.string().nullable(),
    tax_amt: z.number().nullable(),
    tax_per: z.number().nullable(),
    tax_net: z.number().nullable(),
    gl_acct_desc: z.string().nullable(),
    warnings: z.array(z.string()),
  })
  .partial();
const JournalResponse: z.ZodType<JournalResponse> = z
  .object({
    cmpy_code: z.string(),
    jour_code: z.string(),
    jour_num: z.number().int(),
    jour_date: z.string().nullable(),
    post_flag: z.boolean(),
    year_num: z.number().int(),
    period_num: z.number().int(),
    com1_text: z.string().nullable(),
    com2_text: z.string().nullable(),
    control_amt: z.number(),
    bank_code: z.string().nullable(),
    bank_desc: z.string().nullable(),
    bank_gl_acct: z.string().nullable(),
    warnings: z.array(z.string()),
    gl_lines: z.array(GLLineResponse),
  })
  .partial();
const TaxJournalLine: z.ZodType<TaxJournalLine> = z.object({
  acct_code: z.string().min(1).max(18),
  ref_text: z.string().max(10).nullish(),
  analysis_text: z.string().max(16).nullish(),
  desc_text: z.string().min(1).max(4000),
  debit_amt: z.number(),
  credit_amt: z.number(),
  tax_type: z.string().min(1).max(1),
  tax_code: z.string().min(1).max(3),
  tax_amt: z.number().optional(),
});
const CommonTaxJournalRequest: z.ZodType<CommonTaxJournalRequest> = z.object({
  jour_date: z.string().min(1),
  year_num: z.number().int(),
  period_num: z.number().int(),
  com1_text: z.string().max(40).nullish(),
  com2_text: z.string().max(40).nullish(),
  control_amt: z.number().nullish(),
  gl_lines: z.array(TaxJournalLine).optional(),
});
const AddTaxJournalRequest: z.ZodType<AddTaxJournalRequest> =
  CommonTaxJournalRequest.and(z.object({}).partial());
const AddTaxJournalResponse = z
  .object({ cmpy_code: z.string(), jour_num: z.number().int() })
  .partial();
const UpdateTaxJournalRequest: z.ZodType<UpdateTaxJournalRequest> =
  CommonTaxJournalRequest.and(z.object({}).partial());
const StandardJournalLine: z.ZodType<StandardJournalLine> = z.object({
  acct_code: z.string().min(1).max(18),
  ref_text: z.string().max(10).nullish(),
  analysis_text: z.string().max(16).nullish(),
  desc_text: z.string().min(1).max(4000),
  debit_amt: z.number(),
  credit_amt: z.number(),
});
const CommonGeneralJournalRequest: z.ZodType<CommonGeneralJournalRequest> =
  z.object({
    jour_code: z.string().min(1),
    jour_date: z.string().min(1),
    year_num: z.number().int(),
    period_num: z.number().int(),
    com1_text: z.string().max(40).nullish(),
    com2_text: z.string().max(40).nullish(),
    control_amt: z.number().nullish(),
    gl_lines: z.array(StandardJournalLine).optional(),
  });
const AddGeneralJournalRequest: z.ZodType<AddGeneralJournalRequest> =
  CommonGeneralJournalRequest.and(z.object({}).partial());
const AddGeneralJournalResponse = z
  .object({ cmpy_code: z.string(), jour_num: z.number().int() })
  .partial();
const UpdateGeneralJournalRequest: z.ZodType<UpdateGeneralJournalRequest> =
  CommonGeneralJournalRequest.and(z.object({}).partial());
const EmployeeResponse = z
  .object({
    add1_text: z.string().nullable(),
    add2_text: z.string().nullable(),
    alt_id: z.string().nullable(),
    birth_date: z.string().nullable(),
    cessation_type: z.string().nullable(),
    city_text: z.string().nullable(),
    cmpy_code: z.string(),
    country_code: z.string().nullable(),
    country_text: z.string().nullable(),
    deceased_flg: z.boolean(),
    driv_lic_text: z.string().nullable(),
    e_mail: z.string().nullable(),
    emp_code: z.string(),
    first_name: z.string().nullable(),
    gender: z.string().nullable(),
    indig_status: z.string().nullable(),
    initials: z.string().nullable(),
    main_activity: z.string().nullable(),
    marital_stat_flag: z.string().nullable(),
    mob_phone: z.string().nullable(),
    nok_add1_text: z.string().nullable(),
    nok_add2_text: z.string().nullable(),
    nok_city_text: z.string().nullable(),
    nok_country_text: z.string().nullable(),
    nok_name_text: z.string().nullable(),
    nok_phone_h_text: z.string().nullable(),
    nok_phone_w_text: z.string().nullable(),
    nok_post_code: z.string().nullable(),
    nok_relat_text: z.string().nullable(),
    nok_state_text: z.string().nullable(),
    other_name: z.string().nullable(),
    phone_h_text: z.string().nullable(),
    phone_w_text: z.string().nullable(),
    position_text: z.string().nullable(),
    position_title: z.string().nullable(),
    post_code: z.string().nullable(),
    preferred_name: z.string().nullable(),
    previous_payroll_id: z.string().nullable(),
    school_email: z.string().nullable(),
    sms_flg: z.boolean(),
    start_date: z.string().nullable(),
    state_text: z.string().nullable(),
    status_text: z.string().nullable(),
    surname: z.string().nullable(),
    suffix: z.string().nullable(),
    supervisor_code: z.string().nullable(),
    supervisor2_code: z.string().nullable(),
    tch_code: z.string().nullable(),
    term_date: z.string().nullable(),
    title: z.string().nullable(),
    update_on: z.string().datetime({ offset: true }),
    vend_code: z.string().nullable(),
  })
  .partial();
const CommonEmployeeRequest: z.ZodType<CommonEmployeeRequest> = z.object({
  add1_text: z.string().max(60).nullish(),
  add2_text: z.string().max(60).nullish(),
  alt_id: z.string().max(40).nullish(),
  birth_date: z.string().min(1),
  cessation_type: z.string().max(1).nullish(),
  city_text: z.string().max(46).nullish(),
  country_code: z.string().max(2).nullish(),
  country_text: z.string().max(20).nullish(),
  deceased_flg: z.boolean().optional(),
  driv_lic_text: z.string().max(10).nullish(),
  e_mail: z.string().max(60).email().nullish(),
  emp_code: z.string().min(1).max(7),
  first_name: z.string().min(1).max(50),
  gender: z.string().min(1).max(3),
  indig_status: z.string().max(1).nullish(),
  initials: z.string().min(1).max(5),
  main_activity: z.string().max(4).nullish(),
  marital_stat_flag: z.string().max(1).nullish(),
  mob_phone: z.string().max(30).nullish(),
  nok_add1_text: z.string().max(60).nullish(),
  nok_add2_text: z.string().max(60).nullish(),
  nok_city_text: z.string().max(46).nullish(),
  nok_country_text: z.string().max(20).nullish(),
  nok_name_text: z.string().max(30).nullish(),
  nok_phone_h_text: z.string().max(30).nullish(),
  nok_phone_w_text: z.string().max(30).nullish(),
  nok_post_code: z.string().max(10).nullish(),
  nok_relat_text: z.string().max(20).nullish(),
  nok_state_text: z.string().max(3).nullish(),
  other_name: z.string().max(50).nullish(),
  phone_h_text: z.string().max(30).nullish(),
  phone_w_text: z.string().max(30).nullish(),
  position_text: z.string().max(20).nullish(),
  position_title: z.string().max(100).nullish(),
  post_code: z.string().min(1).max(10),
  preferred_name: z.string().min(1).max(50),
  previous_payroll_id: z.string().max(200).nullish(),
  school_email: z.string().max(60).email().nullish(),
  sms_flg: z.boolean().optional(),
  start_date: z.string().min(1),
  state_text: z.string().min(1).max(3),
  status_text: z.string().min(1).max(1),
  surname: z.string().min(1).max(50),
  suffix: z.string().max(30).nullish(),
  supervisor_code: z.string().max(7).nullish(),
  supervisor2_code: z.string().max(7).nullish(),
  term_date: z.string().nullish(),
  title: z.string().min(1).max(15),
  vend_code: z.string().max(8).nullish(),
});
const UpdateEmployeeRequest: z.ZodType<UpdateEmployeeRequest> =
  CommonEmployeeRequest.and(z.object({}).partial());
const AddEmployeeRequest: z.ZodType<AddEmployeeRequest> =
  CommonEmployeeRequest.and(z.object({}).partial());
const EmployeeStandardNoteResponse = z
  .object({
    cmpy_code: z.string(),
    emp_code: z.string(),
    note_cat: z.string().nullable(),
    note_date: z.string().datetime({ offset: true }),
    note_text: z.string().nullable(),
    note_uid: z.string(),
    has_attachment: z.boolean(),
  })
  .partial();
const CommonEmployeeStandardNoteUpdateRequest: z.ZodType<CommonEmployeeStandardNoteUpdateRequest> =
  z.object({
    note_cat: z.string().min(1).max(3),
    note_date: z.string().min(1).datetime({ offset: true }),
    note_text: z.string().min(1).max(4000),
  });
const AddEmployeeStandardNoteRequest: z.ZodType<AddEmployeeStandardNoteRequest> =
  CommonEmployeeStandardNoteUpdateRequest.and(z.object({}).partial());
const UpdateEmployeeStandardNoteRequest: z.ZodType<UpdateEmployeeStandardNoteRequest> =
  CommonEmployeeStandardNoteUpdateRequest.and(z.object({}).partial());
const EmployeeConfidentialNoteResponse = z
  .object({
    cmpy_code: z.string(),
    emp_code: z.string(),
    note_cat: z.string().nullable(),
    note_date: z.string().datetime({ offset: true }),
    note_text: z.string().nullable(),
    note_uid: z.string(),
    has_attachment: z.boolean(),
  })
  .partial();
const CommonEmployeeConfidentialNoteUpdateRequest: z.ZodType<CommonEmployeeConfidentialNoteUpdateRequest> =
  z.object({
    note_cat: z.string().min(1).max(3),
    note_date: z.string().min(1).datetime({ offset: true }),
    note_text: z.string().min(1).max(4000),
  });
const AddEmployeeConfidentialNoteRequest: z.ZodType<AddEmployeeConfidentialNoteRequest> =
  CommonEmployeeConfidentialNoteUpdateRequest.and(z.object({}).partial());
const UpdateEmployeeConfidentialNoteRequest: z.ZodType<UpdateEmployeeConfidentialNoteRequest> =
  CommonEmployeeConfidentialNoteUpdateRequest.and(z.object({}).partial());
const PDActivityUDFlagResponse: z.ZodType<PDActivityUDFlagResponse> = z
  .object({
    ud1_flg: z.string().max(1).nullable(),
    ud2_flg: z.string().max(1).nullable(),
    ud3_flg: z.string().max(1).nullable(),
    ud4_flg: z.string().max(1).nullable(),
    ud5_flg: z.string().max(1).nullable(),
  })
  .partial();
const PDActivityUDCodeResponse: z.ZodType<PDActivityUDCodeResponse> = z
  .object({
    ud6_code: z.string().max(3).nullable(),
    ud7_code: z.string().max(3).nullable(),
    ud8_code: z.string().max(3).nullable(),
    ud9_code: z.string().max(3).nullable(),
    ud10_code: z.string().max(3).nullable(),
  })
  .partial();
const PDActivityUDTextResponse: z.ZodType<PDActivityUDTextResponse> = z
  .object({
    ud11_text: z.string().max(100).nullable(),
    ud12_text: z.string().max(100).nullable(),
    ud13_text: z.string().max(100).nullable(),
    ud14_text: z.string().max(100).nullable(),
    ud15_text: z.string().max(100).nullable(),
  })
  .partial();
const PDActivityUDAttachmentResponse: z.ZodType<PDActivityUDAttachmentResponse> =
  z
    .object({
      ud16_attachment_details: AttachmentDetails,
      ud17_attachment_details: AttachmentDetails,
      ud18_attachment_details: AttachmentDetails,
      ud19_attachment_details: AttachmentDetails,
      ud20_attachment_details: AttachmentDetails,
    })
    .partial();
const PDUDFieldsResponse: z.ZodType<PDUDFieldsResponse> = z
  .object({
    ud_flags: PDActivityUDFlagResponse,
    ud_codes: PDActivityUDCodeResponse,
    ud_text: PDActivityUDTextResponse,
    ud_attachments: PDActivityUDAttachmentResponse,
  })
  .partial();
const EmployeePDActivityResponse: z.ZodType<EmployeePDActivityResponse> = z
  .object({
    cmpy_code: z.string(),
    cost_amt: z.number().nullable(),
    duration: z.number().nullable(),
    emp_code: z.string(),
    finish_date: z.string().nullable(),
    other_amt: z.number().nullable(),
    pd_prov_code: z.string().nullable(),
    pd_stat_code: z.string().nullable(),
    pd_type_code: z.string().nullable(),
    pdact_num: z.number().int(),
    pdact_text: z.string().nullable(),
    start_date: z.string().nullable(),
    updated_on: z.string().datetime({ offset: true }).nullable(),
    ud_fields: PDUDFieldsResponse,
  })
  .partial();
const PDActivityUDFlagUpdateRequest: z.ZodType<PDActivityUDFlagUpdateRequest> =
  z
    .object({
      ud1_flg: z.string().max(1).nullable(),
      ud2_flg: z.string().max(1).nullable(),
      ud3_flg: z.string().max(1).nullable(),
      ud4_flg: z.string().max(1).nullable(),
      ud5_flg: z.string().max(1).nullable(),
    })
    .partial();
const PDActivityUDCodeUpdateRequest: z.ZodType<PDActivityUDCodeUpdateRequest> =
  z
    .object({
      ud6_code: z.string().max(3).nullable(),
      ud7_code: z.string().max(3).nullable(),
      ud8_code: z.string().max(3).nullable(),
      ud9_code: z.string().max(3).nullable(),
      ud10_code: z.string().max(3).nullable(),
    })
    .partial();
const PDActivityUDTextUpdateRequest: z.ZodType<PDActivityUDTextUpdateRequest> =
  z
    .object({
      ud11_text: z.string().max(100).nullable(),
      ud12_text: z.string().max(100).nullable(),
      ud13_text: z.string().max(100).nullable(),
      ud14_text: z.string().max(100).nullable(),
      ud15_text: z.string().max(100).nullable(),
    })
    .partial();
const PDActivityUDFieldsRequest: z.ZodType<PDActivityUDFieldsRequest> = z
  .object({
    ud_flags: PDActivityUDFlagUpdateRequest,
    ud_codes: PDActivityUDCodeUpdateRequest,
    ud_text: PDActivityUDTextUpdateRequest,
  })
  .partial();
const CommonEmployeePDActivityUpdateRequest: z.ZodType<CommonEmployeePDActivityUpdateRequest> =
  z.object({
    cost_amt: z.number().nullish(),
    duration: z.number(),
    finish_date: z.string().min(1),
    other_amt: z.number().nullish(),
    pd_prov_code: z.string().max(3).nullish(),
    pd_stat_code: z.string().min(1).max(3),
    pd_type_code: z.string().max(3).nullish(),
    pdact_text: z.string().min(1).max(200),
    start_date: z.string().min(1),
    ud_fields: PDActivityUDFieldsRequest.optional(),
  });
const AddEmployeePDActivityRequest: z.ZodType<AddEmployeePDActivityRequest> =
  CommonEmployeePDActivityUpdateRequest.and(z.object({}).partial());
const UpdateEmployeePDActivityRequest: z.ZodType<UpdateEmployeePDActivityRequest> =
  CommonEmployeePDActivityUpdateRequest.and(z.object({}).partial());
const UDFieldOptionsResponse: z.ZodType<UDFieldOptionsResponse> = z
  .object({ ud_fields: UDFieldTypes, cmpy_code: z.string() })
  .partial();
const EmployeePhotoChange: z.ZodType<EmployeePhotoChange> = z
  .object({
    emp_code: z.string(),
    photo_update_on: z.string().datetime({ offset: true }),
  })
  .partial();
const EmployeePhotoChangesResponse: z.ZodType<EmployeePhotoChangesResponse> = z
  .object({
    cmpy_code: z.string(),
    change_key: z.string(),
    changes: z.array(EmployeePhotoChange),
  })
  .partial();
const EmployeeQualificationResponse = z
  .object({
    cmpy_code: z.string(),
    emp_code: z.string(),
    inst_code: z.string().nullable(),
    qual_cat: z.string().nullable(),
    qual_text: z.string().nullable(),
    qual_uid: z.string(),
    reminder_flg: z.boolean(),
    valid_date: z.string().nullable(),
    has_attachment: z.boolean(),
  })
  .partial();
const CommonEmployeeQualificationUpdateRequest: z.ZodType<CommonEmployeeQualificationUpdateRequest> =
  z.object({
    inst_code: z.string().min(1).max(4),
    qual_cat: z.string().min(1).max(4),
    qual_text: z.string().min(1).max(200),
    reminder_flg: z.boolean(),
    valid_date: z.string().nullish(),
  });
const AddEmployeeQualificationRequest: z.ZodType<AddEmployeeQualificationRequest> =
  CommonEmployeeQualificationUpdateRequest.and(z.object({}).partial());
const UpdateEmployeeQualificationRequest: z.ZodType<UpdateEmployeeQualificationRequest> =
  CommonEmployeeQualificationUpdateRequest.and(z.object({}).partial());
const UDAreaFlagResponse: z.ZodType<UDAreaFlagResponse> = z
  .object({
    ud1_flg: z.string().max(1).nullable(),
    ud2_flg: z.string().max(1).nullable(),
    ud3_flg: z.string().max(1).nullable(),
    ud4_flg: z.string().max(1).nullable(),
    ud5_flg: z.string().max(1).nullable(),
    ud6_flg: z.string().max(1).nullable(),
    ud7_flg: z.string().max(1).nullable(),
    ud8_flg: z.string().max(1).nullable(),
    ud9_flg: z.string().max(1).nullable(),
    ud10_flg: z.string().max(1).nullable(),
  })
  .partial();
const UDAreaCodeResponse: z.ZodType<UDAreaCodeResponse> = z
  .object({
    ud11_code: z.string().max(3).nullable(),
    ud12_code: z.string().max(3).nullable(),
    ud13_code: z.string().max(3).nullable(),
    ud14_code: z.string().max(3).nullable(),
    ud15_code: z.string().max(3).nullable(),
    ud16_code: z.string().max(3).nullable(),
    ud17_code: z.string().max(3).nullable(),
    ud18_code: z.string().max(3).nullable(),
    ud19_code: z.string().max(3).nullable(),
    ud20_code: z.string().max(3).nullable(),
  })
  .partial();
const UDAreaTextResponse: z.ZodType<UDAreaTextResponse> = z
  .object({
    ud21_text: z.string().max(100).nullable(),
    ud22_text: z.string().max(100).nullable(),
    ud23_text: z.string().max(100).nullable(),
    ud24_text: z.string().max(100).nullable(),
    ud25_text: z.string().max(100).nullable(),
    ud26_text: z.string().max(100).nullable(),
    ud27_text: z.string().max(100).nullable(),
    ud28_text: z.string().max(100).nullable(),
    ud29_text: z.string().max(100).nullable(),
    ud30_text: z.string().max(100).nullable(),
  })
  .partial();
const UDAreaDateResponse: z.ZodType<UDAreaDateResponse> = z
  .object({
    ud31_date: z.string().max(100).nullable(),
    ud32_date: z.string().max(100).nullable(),
    ud33_date: z.string().max(100).nullable(),
    ud34_date: z.string().max(100).nullable(),
    ud35_date: z.string().max(100).nullable(),
    ud36_date: z.string().max(100).nullable(),
    ud37_date: z.string().max(100).nullable(),
    ud38_date: z.string().max(100).nullable(),
    ud39_date: z.string().max(100).nullable(),
    ud40_date: z.string().max(100).nullable(),
  })
  .partial();
const UDAreaAttachmentResponse: z.ZodType<UDAreaAttachmentResponse> = z
  .object({
    ud41_attachment_details: AttachmentDetails,
    ud42_attachment_details: AttachmentDetails,
    ud43_attachment_details: AttachmentDetails,
    ud44_attachment_details: AttachmentDetails,
    ud45_attachment_details: AttachmentDetails,
    ud46_attachment_details: AttachmentDetails,
    ud47_attachment_details: AttachmentDetails,
    ud48_attachment_details: AttachmentDetails,
    ud49_attachment_details: AttachmentDetails,
    ud50_attachment_details: AttachmentDetails,
  })
  .partial();
const UDAreaFieldsResponse: z.ZodType<UDAreaFieldsResponse> = z
  .object({
    ud_flags: UDAreaFlagResponse,
    ud_codes: UDAreaCodeResponse,
    ud_text: UDAreaTextResponse,
    ud_dates: UDAreaDateResponse,
    ud_attachments: UDAreaAttachmentResponse,
  })
  .partial();
const EmployeeUDAreaResponse: z.ZodType<EmployeeUDAreaResponse> = z
  .object({
    cmpy_code: z.string(),
    area_code: z.string(),
    emp_code: z.string(),
    update_on: z.string().datetime({ offset: true }).nullable(),
    ud_fields: UDAreaFieldsResponse,
  })
  .partial();
const UDAreaFlagRequest: z.ZodType<UDAreaFlagRequest> = z
  .object({
    ud1_flg: z.string().max(1).nullable(),
    ud2_flg: z.string().max(1).nullable(),
    ud3_flg: z.string().max(1).nullable(),
    ud4_flg: z.string().max(1).nullable(),
    ud5_flg: z.string().max(1).nullable(),
    ud6_flg: z.string().max(1).nullable(),
    ud7_flg: z.string().max(1).nullable(),
    ud8_flg: z.string().max(1).nullable(),
    ud9_flg: z.string().max(1).nullable(),
    ud10_flg: z.string().max(1).nullable(),
  })
  .partial();
const UDAreaCodeRequest: z.ZodType<UDAreaCodeRequest> = z
  .object({
    ud11_code: z.string().max(3).nullable(),
    ud12_code: z.string().max(3).nullable(),
    ud13_code: z.string().max(3).nullable(),
    ud14_code: z.string().max(3).nullable(),
    ud15_code: z.string().max(3).nullable(),
    ud16_code: z.string().max(3).nullable(),
    ud17_code: z.string().max(3).nullable(),
    ud18_code: z.string().max(3).nullable(),
    ud19_code: z.string().max(3).nullable(),
    ud20_code: z.string().max(3).nullable(),
  })
  .partial();
const UDAreaTextRequest: z.ZodType<UDAreaTextRequest> = z
  .object({
    ud21_text: z.string().max(100).nullable(),
    ud22_text: z.string().max(100).nullable(),
    ud23_text: z.string().max(100).nullable(),
    ud24_text: z.string().max(100).nullable(),
    ud25_text: z.string().max(100).nullable(),
    ud26_text: z.string().max(100).nullable(),
    ud27_text: z.string().max(100).nullable(),
    ud28_text: z.string().max(100).nullable(),
    ud29_text: z.string().max(100).nullable(),
    ud30_text: z.string().max(100).nullable(),
  })
  .partial();
const UDAreaDateRequest: z.ZodType<UDAreaDateRequest> = z
  .object({
    ud31_date: z.string().nullable(),
    ud32_date: z.string().nullable(),
    ud33_date: z.string().nullable(),
    ud34_date: z.string().nullable(),
    ud35_date: z.string().nullable(),
    ud36_date: z.string().nullable(),
    ud37_date: z.string().nullable(),
    ud38_date: z.string().nullable(),
    ud39_date: z.string().nullable(),
    ud40_date: z.string().nullable(),
  })
  .partial();
const UDAreaFieldsRequest: z.ZodType<UDAreaFieldsRequest> = z
  .object({
    ud_flags: UDAreaFlagRequest,
    ud_codes: UDAreaCodeRequest,
    ud_text: UDAreaTextRequest,
    ud_dates: UDAreaDateRequest,
  })
  .partial();
const CommonEmployeeUDAreaUpdateRequest: z.ZodType<CommonEmployeeUDAreaUpdateRequest> =
  z.object({ ud_fields: UDAreaFieldsRequest }).partial();
const AddEmployeeUDAreaRequest: z.ZodType<AddEmployeeUDAreaRequest> =
  CommonEmployeeUDAreaUpdateRequest.and(z.object({}).partial());
const UpdateEmployeeUDAreaRequest: z.ZodType<UpdateEmployeeUDAreaRequest> =
  CommonEmployeeUDAreaUpdateRequest.and(z.object({}).partial());
const ValidationResponse: z.ZodType<ValidationResponse> = z
  .object({
    valid_result: z.string(),
    min_val: z.number().int().nullable(),
    max_val: z.number().int().nullable(),
  })
  .partial();
const AssessmentMethodResponse: z.ZodType<AssessmentMethodResponse> = z
  .object({
    ass_code: z.string(),
    ass_type: z.string(),
    ass_range: z.string(),
    desc_text: z.string(),
    val_type: z.string(),
    validations: z.array(ValidationResponse),
  })
  .partial();
const AssessmentCriteriaResponse = z
  .object({
    obj_code: z.string(),
    obj_desc: z.string(),
    max_val: z.number().int().nullable(),
    assessment_method: AssessmentMethodResponse.nullable(),
  })
  .partial() as z.ZodType<AssessmentCriteriaResponse>;
const ActivityResponse: z.ZodType<ActivityResponse> = z
  .object({
    cmpy_code: z.string(),
    activity_id: z.number().int(),
    year: z.string().nullable(),
    period: z.string().nullable(),
    sub_code: z.string().nullable(),
    year_grp: z.number().int().nullable(),
    activity_name: z.string(),
    topic_id: z.number().int(),
    topic_name: z.string(),
    assessment_criteria: z.array(AssessmentCriteriaResponse),
  })
  .partial();
const ActivityStudentResponse = z
  .object({
    cmpy_code: z.string(),
    activity_id: z.number().int(),
    stud_code: z.string(),
    class_code: z.string().nullable(),
    year_grp: z.number().int().nullable(),
  })
  .partial();
const ObjectiveResult: z.ZodType<ObjectiveResult> = z
  .object({ obj_code: z.string(), stud_result: z.string().nullable() })
  .partial();
const ActivityStudentResultsResponse: z.ZodType<ActivityStudentResultsResponse> =
  z
    .object({
      cmpy_code: z.string(),
      activity_id: z.number().int(),
      stud_code: z.string(),
      objective_results: z.array(ObjectiveResult),
    })
    .partial();
const ObjectiveResult2: z.ZodType<ObjectiveResult2> = z.object({
  obj_code: z.string().min(1).max(4),
  stud_result: z.string().min(1).max(7),
});
const UpdateActivityStudentResultsRequest: z.ZodType<UpdateActivityStudentResultsRequest> =
  z.object({ objective_results: z.array(ObjectiveResult2) }).partial();

export const schemas = {
  GetUserTokenRequest,
  AllowedCompanyDetails,
  UserTokenResponse,
  ExceptionDetails,
  ValidationExceptionDetails,
  cmpy_code,
  AbsenceReasonOptionsResponse,
  OptionsResponseActive,
  OptionsResponse,
  StudentAttendanceResponse,
  StudentCommunicationRulesParentNameResponse,
  StudentCommunicationRulesCommunicationTypeResponse,
  StudentCommunicationRulesParentAddressResponse,
  StudentCommunicationRulesParentDetailsResponse,
  StudentCommunicationRulesResponse,
  StudentResponse,
  CommonStudentUpdateRequest,
  UpdateStudentRequest,
  OperationBase,
  Operation,
  Information_PatchStudent_Body,
  StudentMceecdyaResponse,
  UpdateStudentMceecdyaRequest,
  StudentStandardNoteResponse,
  CommonStudentStandardNoteUpdateRequest,
  AddStudentStandardNoteRequest,
  UpdateStudentStandardNoteRequest,
  FileResponse,
  Notes_AddStudentStandardNotesAttachment_Body,
  NewAttachmentResponse,
  StudentConfidentialNoteResponse,
  CommonStudentConfidentialNoteUpdateRequest,
  AddStudentConfidentialNoteRequest,
  UpdateStudentConfidentialNoteRequest,
  change_key,
  StudentPhotoChange,
  StudentPhotoChangesResponse,
  Photo_AddStudentPhoto_Body,
  UDFieldDetails,
  UDFieldReferenceValue,
  UDCodeFieldDetails,
  UDAttachmentFieldDetails,
  UDFieldTypes,
  UDAreaOptionsResponse,
  StudentUDAreaFlagResponse,
  StudentUDAreaCodeResponse,
  StudentUDAreaTextResponse,
  StudentUDAreaDateResponse,
  FileDetails,
  AttachmentDetails,
  StudentUDAreaAttachmentResponse,
  StudentUDAreaFieldsResponse,
  StudentUDAreaResponse,
  StudentUDAreaFlagRequest,
  StudentUDAreaCodeRequest,
  StudentUDAreaTextRequest,
  StudentUDAreaDateRequest,
  StudentUDAreaFieldsRequest,
  CommonStudentUDAreaUpdateRequest,
  AddStudentUDAreaRequest,
  UpdateStudentUDAreaRequest,
  field_number,
  UDFlagResponse,
  UDCodeResponse,
  UDTextResponse,
  UDFieldsResponse,
  StudentUDFieldsResponse,
  UDFlagRequest,
  UDCodeRequest,
  UDTextRequest,
  UDFieldsRequest,
  UpdateStudentUDFieldsRequest,
  StudentUDFieldOptionDetails,
  StudentUDFieldOptionReferenceValue,
  StudentUDCodeFieldOptionDetails,
  StudentUDFieldOptionTypes,
  StudentUDFieldOptionResponse,
  EmployeeLeaveBalanceResponse,
  UsualSigns,
  WorseningSigns,
  Triggers,
  AsthmaManagementResponse,
  UsualSigns2,
  WorseningSigns2,
  Triggers2,
  UpdateAsthmaManagementRequest,
  UdText,
  UdFields,
  StudentMedicalConditionResponse,
  UdText2,
  UdFields2,
  AddStudentMedicalConditionRequest,
  UdText3,
  UdFields3,
  UpdateStudentMedicalConditionRequest,
  StudentMedicalConditionNoteResponse,
  AddStudentMedicalConditionNoteRequest,
  UpdateStudentMedicalConditionNoteRequest,
  StudentImmunisationResponse,
  AddStudentImmunisationRequest,
  UpdateStudentImmunisationRequest,
  StudentImmunisationRegisterResponse,
  UpdateStudentImmunisationRegisterRequest,
  Immunisations_AddStudentImmunisationRegisterAttachment_Body,
  StudentMedicationResponse,
  AddStudentMedicationRequest,
  UpdateStudentMedicationRequest,
  StudentMedicationNoteResponse,
  AddStudentMedicationNoteRequest,
  UpdateStudentMedicationNoteRequest,
  DaysResponse,
  StudentMedicationScheduleResponse,
  DaysRequest,
  AddStudentMedicationScheduleRequest,
  DaysRequest2,
  UpdateStudentMedicationScheduleRequest,
  StudentMedicalStandardNoteResponse,
  CommonStudentMedicalStandardNoteUpdateRequest,
  AddStudentMedicalStandardNoteRequest,
  UpdateStudentMedicalStandardNoteRequest,
  StudentMedicalConfidentialNoteResponse,
  CommonStudentMedicalConfidentialNoteUpdateRequest,
  AddStudentMedicalConfidentialNoteRequest,
  UpdateStudentMedicalConfidentialNoteRequest,
  StudentPractitionerResponse,
  AddStudentPractitionerRequest,
  CommonStudentPractitionerUpdateRequest,
  UpdateStudentPractitionerRequest,
  StudentMedicalSupplementaryResponse,
  AddStudentMedicalSupplementaryRequest,
  UpdateStudentMedicalSupplementaryRequest,
  YearPeriodOptionsResponse,
  SegmentResponse,
  CodeStructureResponse,
  CodeFormatRulesResponse,
  ReportingCodeOptionsFieldReferenceValue,
  ReportingCodeOptionsFieldDetails,
  ReportingCodeResponse,
  GeneralLedgerAccountResponse,
  AddGeneralLedgerAccountRequest,
  UpdateGeneralLedgerAccountRequest,
  PeriodBudgetResponse,
  AccountBudgetResponse,
  PeriodBudgetRequest,
  AddAccountBudgetRequest,
  BudgetPeriod,
  UpdateAccountBudgetRequest,
  PeriodBalanceResponse,
  AccountBalanceResponse,
  AccountTransactionResponse,
  RptCodes,
  AccountReportingCodesResponse,
  RptCodes2,
  UpdateAccountReportingCodesRequest,
  AccountResponsibilityResponse,
  AddAccountResponsibilityRequest,
  UpdateAccountResponsibilityRequest,
  JournalTypeOptionsResponse,
  GLAccountOptionsResponse,
  GLLineResponse,
  JournalResponse,
  TaxJournalLine,
  CommonTaxJournalRequest,
  AddTaxJournalRequest,
  AddTaxJournalResponse,
  UpdateTaxJournalRequest,
  StandardJournalLine,
  CommonGeneralJournalRequest,
  AddGeneralJournalRequest,
  AddGeneralJournalResponse,
  UpdateGeneralJournalRequest,
  EmployeeResponse,
  CommonEmployeeRequest,
  UpdateEmployeeRequest,
  AddEmployeeRequest,
  EmployeeStandardNoteResponse,
  CommonEmployeeStandardNoteUpdateRequest,
  AddEmployeeStandardNoteRequest,
  UpdateEmployeeStandardNoteRequest,
  EmployeeConfidentialNoteResponse,
  CommonEmployeeConfidentialNoteUpdateRequest,
  AddEmployeeConfidentialNoteRequest,
  UpdateEmployeeConfidentialNoteRequest,
  PDActivityUDFlagResponse,
  PDActivityUDCodeResponse,
  PDActivityUDTextResponse,
  PDActivityUDAttachmentResponse,
  PDUDFieldsResponse,
  EmployeePDActivityResponse,
  PDActivityUDFlagUpdateRequest,
  PDActivityUDCodeUpdateRequest,
  PDActivityUDTextUpdateRequest,
  PDActivityUDFieldsRequest,
  CommonEmployeePDActivityUpdateRequest,
  AddEmployeePDActivityRequest,
  UpdateEmployeePDActivityRequest,
  UDFieldOptionsResponse,
  EmployeePhotoChange,
  EmployeePhotoChangesResponse,
  EmployeeQualificationResponse,
  CommonEmployeeQualificationUpdateRequest,
  AddEmployeeQualificationRequest,
  UpdateEmployeeQualificationRequest,
  UDAreaFlagResponse,
  UDAreaCodeResponse,
  UDAreaTextResponse,
  UDAreaDateResponse,
  UDAreaAttachmentResponse,
  UDAreaFieldsResponse,
  EmployeeUDAreaResponse,
  UDAreaFlagRequest,
  UDAreaCodeRequest,
  UDAreaTextRequest,
  UDAreaDateRequest,
  UDAreaFieldsRequest,
  CommonEmployeeUDAreaUpdateRequest,
  AddEmployeeUDAreaRequest,
  UpdateEmployeeUDAreaRequest,
  ValidationResponse,
  AssessmentMethodResponse,
  AssessmentCriteriaResponse,
  ActivityResponse,
  ActivityStudentResponse,
  ObjectiveResult,
  ActivityStudentResultsResponse,
  ObjectiveResult2,
  UpdateActivityStudentResultsRequest,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/:cmpy_code/assessment/activities/:activity_id/students",
    alias: "Activities_GetAllActivityStudents",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Assessment | Activities | Activity Students | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "activity_id",
        type: "Path",
        schema: field_number,
      },
    ],
    response: z.array(ActivityStudentResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/assessment/activities/:activity_id/students/:stud_code/results",
    alias: "Activities_GetStudentActivityResults",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Assessment | Activities | Student Activity Results | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "activity_id",
        type: "Path",
        schema: field_number,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: ActivityStudentResultsResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/assessment/activities/:activity_id/students/:stud_code/results",
    alias: "Activities_UpdateStudentActivityResults",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Assessment | Activities | Student Activity Results | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Update request.`,
        type: "Body",
        schema: UpdateActivityStudentResultsRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "activity_id",
        type: "Path",
        schema: field_number,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/assessment/activities/:year/:semester",
    alias: "Activities_GetAllActivities",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Assessment | Activities | Activities | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "year",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "semester",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(ActivityResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees",
    alias: "Information_GetAllEmployees",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(EmployeeResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/employees",
    alias: "Information_AddEmployee",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AddEmployeeRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: EmployeeResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code",
    alias: "Information_GetEmployeeByCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: EmployeeResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/employees/:emp_code",
    alias: "Information_UpdateEmployee",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateEmployeeRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/employees/:emp_code",
    alias: "Information_PatchEmployee",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/notes/confidential",
    alias: "Notes_GetAllEmployeeConfidentialNotes",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Confidential Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(EmployeeConfidentialNoteResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/employees/:emp_code/notes/confidential",
    alias: "Notes_AddEmployeeConfidentialNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Confidential Notes | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AddEmployeeConfidentialNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: EmployeeConfidentialNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/notes/confidential/:note_uid",
    alias: "Notes_GetEmployeeConfidentialNoteByID",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Confidential Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: EmployeeConfidentialNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/employees/:emp_code/notes/confidential/:note_uid",
    alias: "Notes_UpdateEmployeeConfidentialNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Confidential Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateEmployeeConfidentialNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/employees/:emp_code/notes/confidential/:note_uid",
    alias: "Notes_PatchEmployeeConfidentialNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Confidential Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/employees/:emp_code/notes/confidential/:note_uid",
    alias: "Notes_DeleteEmployeeConfidentialNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Confidential Notes | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/notes/confidential/:note_uid/attachments",
    alias: "Notes_GetAllEmployeeConfidentialNotesAttachments",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Confidential Notes Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(FileResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/employees/:emp_code/notes/confidential/:note_uid/attachments",
    alias: "Notes_AddEmployeeConfidentialNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Confidential Notes Attachments | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Notes_AddStudentStandardNotesAttachment_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: NewAttachmentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/notes/confidential/:note_uid/attachments/:attach_id",
    alias: "Notes_DownloadEmployeeConfidentialNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Confidential Notes Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/employees/:emp_code/notes/confidential/:note_uid/attachments/:attach_id",
    alias: "Notes_DeleteEmployeeConfidentialNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Confidential Notes Attachments | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/notes/standard",
    alias: "Notes_GetAllEmployeeStandardNotes",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Standard Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(EmployeeStandardNoteResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/employees/:emp_code/notes/standard",
    alias: "Notes_AddEmployeeStandardNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Standard Notes | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AddEmployeeStandardNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: EmployeeStandardNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/notes/standard/:note_uid",
    alias: "Notes_GetEmployeeStandardNoteByID",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Standard Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: EmployeeStandardNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/employees/:emp_code/notes/standard/:note_uid",
    alias: "Notes_UpdateEmployeeStandardNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Standard Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateEmployeeStandardNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/employees/:emp_code/notes/standard/:note_uid",
    alias: "Notes_PatchEmployeeStandardNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Standard Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/employees/:emp_code/notes/standard/:note_uid",
    alias: "Notes_DeleteEmployeeStandardNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Standard Notes | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/notes/standard/:note_uid/attachments",
    alias: "Notes_GetAllEmployeeStandardNotesAttachments",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Standard Notes Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(FileResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/employees/:emp_code/notes/standard/:note_uid/attachments",
    alias: "Notes_AddEmployeeStandardNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Standard Notes Attachments | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Notes_AddStudentStandardNotesAttachment_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: NewAttachmentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/notes/standard/:note_uid/attachments/:attach_id",
    alias: "Notes_DownloadEmployeeStandardNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Standard Notes Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/employees/:emp_code/notes/standard/:note_uid/attachments/:attach_id",
    alias: "Notes_DeleteEmployeeStandardNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Standard Notes Attachments | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/pdactivities",
    alias: "PDActivities_GetAllEmployeePDActivities",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | PD Activities | Employee PD Activities | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(EmployeePDActivityResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/employees/:emp_code/pdactivities",
    alias: "PDActivities_AddEmployeePDActivity",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | PD Activities | Employee PD Activities | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AddEmployeePDActivityRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: EmployeePDActivityResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/pdactivities/:pdact_num",
    alias: "PDActivities_GetEmployeePDActivityByID",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | PD Activities | Employee PD Activities | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "pdact_num",
        type: "Path",
        schema: field_number,
      },
    ],
    response: EmployeePDActivityResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/employees/:emp_code/pdactivities/:pdact_num",
    alias: "PDActivities_UpdateEmployeePDActivity",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | PD Activities | Employee PD Activities | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateEmployeePDActivityRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "pdact_num",
        type: "Path",
        schema: field_number,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/employees/:emp_code/pdactivities/:pdact_num",
    alias: "PDActivities_PatchEmployeePDActivity",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | PD Activities | Employee PD Activities | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "pdact_num",
        type: "Path",
        schema: field_number,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/employees/:emp_code/pdactivities/:pdact_num",
    alias: "PDActivities_DeleteEmployeePDActivity",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | PD Activities | Employee PD Activities | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "pdact_num",
        type: "Path",
        schema: field_number,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/employees/:emp_code/pdactivities/:pdact_num/attachments/:field_number",
    alias: "PDActivities_AddEmployeePDActivityAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | PD Activities | Employee PD Activities Attachments | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Notes_AddStudentStandardNotesAttachment_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "pdact_num",
        type: "Path",
        schema: field_number,
      },
      {
        name: "field_number",
        type: "Path",
        schema: field_number,
      },
    ],
    response: NewAttachmentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/pdactivities/:pdact_num/attachments/:field_number/:attach_id",
    alias: "PDActivities_DownloadEmployeePDActivityAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | PD Activities | Employee PD Activities Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "pdact_num",
        type: "Path",
        schema: field_number,
      },
      {
        name: "field_number",
        type: "Path",
        schema: field_number,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/employees/:emp_code/pdactivities/:pdact_num/attachments/:field_number/:attach_id",
    alias: "PDActivities_DeleteEmployeePDActivityAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | PD Activities | Employee PD Activities Attachments | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "pdact_num",
        type: "Path",
        schema: field_number,
      },
      {
        name: "field_number",
        type: "Path",
        schema: field_number,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/photo",
    alias: "Photo_GetEmployeePhoto",
    description: `- ##### **Endpoint Details**
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Photos | Photo Changes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - This endpoint returns a ZIP file containing both the employee&#x27;s photo and thumbnail.
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/employees/:emp_code/photo",
    alias: "Photo_AddEmployeePhoto",
    description: `- ##### **Endpoint Details**
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Photos | Photo Changes | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Photo_AddStudentPhoto_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/qualifications",
    alias: "Qualifications_GetAllEmployeeQualifications",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Qualifications | Employee Qualifications | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(EmployeeQualificationResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/employees/:emp_code/qualifications",
    alias: "Qualifications_AddEmployeeQualification",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Qualifications | Employee Qualifications | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AddEmployeeQualificationRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: EmployeeQualificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/qualifications/:qual_uid",
    alias: "Qualifications_GetEmployeeQualificationByID",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Qualifications | Employee Qualifications | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "qual_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: EmployeeQualificationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/employees/:emp_code/qualifications/:qual_uid",
    alias: "Qualifications_UpdateEmployeeQualification",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Qualifications | Employee Qualifications | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateEmployeeQualificationRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "qual_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/employees/:emp_code/qualifications/:qual_uid",
    alias: "Qualifications_PatchEmployeeQualification",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Qualifications | Employee Qualifications | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "qual_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/employees/:emp_code/qualifications/:qual_uid",
    alias: "Qualifications_DeleteEmployeeQualification",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Qualifications | Employee Qualifications | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "qual_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/qualifications/:qual_uid/attachments",
    alias: "Qualifications_GetAllEmployeeQualificationsAttachments",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Qualifications | Employee Qualifications Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "qual_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(FileResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/employees/:emp_code/qualifications/:qual_uid/attachments",
    alias: "Qualifications_AddEmployeeQualificationsAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Qualifications | Employee Qualifications Attachments | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Notes_AddStudentStandardNotesAttachment_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "qual_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: NewAttachmentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/qualifications/:qual_uid/attachments/:attach_id",
    alias: "Qualifications_DownloadEmployeeQualificationsAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Qualifications | Employee Qualifications Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "qual_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/employees/:emp_code/qualifications/:qual_uid/attachments/:attach_id",
    alias: "Qualifications_DeleteEmployeeQualificationsAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Qualifications | Employee Qualifications Attachments | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "qual_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/udareas",
    alias: "UDAreas_GetAllEmployeeUDAreas",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | UD Areas | Employee UD Areas | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(EmployeeUDAreaResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/udareas/:area_code",
    alias: "UDAreas_GetEmployeeUDAreaByID",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | UD Areas | Employee UD Areas | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: EmployeeUDAreaResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/employees/:emp_code/udareas/:area_code",
    alias: "UDAreas_AddEmployeeUDArea",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | UD Areas | Employee UD Areas | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AddEmployeeUDAreaRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: EmployeeUDAreaResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/employees/:emp_code/udareas/:area_code",
    alias: "UDAreas_UpdateEmployeeUDArea",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | UD Areas | Employee UD Areas | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateEmployeeUDAreaRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/employees/:emp_code/udareas/:area_code",
    alias: "UDAreas_PatchEmployeeUDArea",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | UD Areas | Employee UD Areas | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/employees/:emp_code/udareas/:area_code",
    alias: "UDAreas_DeleteEmployeeUDArea",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | UD Areas | Employee UD Areas | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/employees/:emp_code/udareas/:area_code/attachments/:field_number",
    alias: "UDAreas_AddEmployeeUdAreaAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | UD Areas | Employee UD Areas Attachments | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Notes_AddStudentStandardNotesAttachment_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "field_number",
        type: "Path",
        schema: field_number,
      },
    ],
    response: NewAttachmentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/:emp_code/udareas/:area_code/attachments/:field_number/:attach_id",
    alias: "UDAreas_DownloadEmployeeUDAreaAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | UD Areas | Employee UD Areas Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "field_number",
        type: "Path",
        schema: field_number,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/employees/:emp_code/udareas/:area_code/attachments/:field_number/:attach_id",
    alias: "UDAreas_DeleteEmployeeUDAreaAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | UD Areas | Employee UD Areas Attachments | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "field_number",
        type: "Path",
        schema: field_number,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/employees/photo/changes",
    alias: "Photo_GetEmployeePhotoChanges",
    description: `- ##### **Endpoint Details**
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Photos | Photo Changes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Purpose**
    - Retrieves a list of employees whose photos have been updated, returning only the most recent photo change per employee.
    - This endpoint supports incremental synchronization through a change tracking mechanism.

- ##### **How It Works**
    - Initial Request (no change_key)
         - Call &#x60;GET /employees/photo/changes&#x60;
         - Returns all employees with photo updates, one record per employee (the most recent photo change)
         - Response includes a &#x60;change_key&#x60; for subsequent requests

    - Incremental Sync (with change_key)
         - Call &#x60;GET /employees/photo/changes?change_key&#x3D;{ previous_change_key }&#x60;
         - Returns only employees whose photos were updated AFTER the provided change_key
         - Response includes a new &#x60;change_key&#x60; for the next request

- ##### **Use Cases**
    - *Full Sync:* Omit &#x60;change_key&#x60; to get all employee photo changes
    - *Incremental Sync:* Use the &#x60;change_key&#x60; from the previous response to poll for new changes
    - *Photo Management:* Track which employee photos need to be refreshed in external systems`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "change_key",
        type: "Query",
        schema: change_key,
      },
    ],
    response: EmployeePhotoChangesResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/finance/generalledger/accounts",
    alias: "Accounts_GetAllGeneralLedgerAccounts",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Accounts | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(GeneralLedgerAccountResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/finance/generalledger/accounts",
    alias: "Accounts_AddGeneralLedgerAccount",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Accounts | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Request body.`,
        type: "Body",
        schema: AddGeneralLedgerAccountRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: GeneralLedgerAccountResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code",
    alias: "Accounts_GetGeneralLedgerAccountByCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Accounts | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: GeneralLedgerAccountResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code",
    alias: "Accounts_UpdateGeneralLedgerAccount",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Accounts | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Request body.`,
        type: "Body",
        schema: UpdateGeneralLedgerAccountRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code",
    alias: "Accounts_PatchGeneralLedgerAccount",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Accounts | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code/balances",
    alias: "Accounts_GetAccountBalancesByCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Balances | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(AccountBalanceResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code/budgets",
    alias: "Accounts_GetAccountBudgetsByCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Budgets | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(AccountBudgetResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code/budgets",
    alias: "Accounts_AddGeneralLedgerAccountBudget",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Budgets | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Request body.`,
        type: "Body",
        schema: AddAccountBudgetRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: AccountBudgetResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code/budgets",
    alias: "Accounts_UpdateGeneralLedgerAccountBudget",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Budgets | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Request body.`,
        type: "Body",
        schema: UpdateAccountBudgetRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code/reportingcodes",
    alias: "Accounts_GetAccountReportingCodesByCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Reporting Codes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: AccountReportingCodesResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code/reportingcodes",
    alias: "Accounts_UpdateAccountReportingCodes",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Reporting Codes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Request body.`,
        type: "Body",
        schema: UpdateAccountReportingCodesRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code/reportingcodes",
    alias: "Accounts_PatchAccountReportingCodes",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Reporting Codes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code/responsibilities",
    alias: "Accounts_GetAccountResponsibilitiesByCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Responsibilities | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(AccountResponsibilityResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code/responsibilities",
    alias: "Accounts_AddGeneralLedgerAccountResponsibility",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Responsibilities | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Request body.`,
        type: "Body",
        schema: AddAccountResponsibilityRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: AccountResponsibilityResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code/responsibilities/:source_flg/:user_code",
    alias: "Accounts_UpdateAccountResponsibility",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Responsibilities | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Request body.`,
        type: "Body",
        schema: UpdateAccountResponsibilityRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "source_flg",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "user_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code/responsibilities/:source_flg/:user_code",
    alias: "Accounts_DeleteAccountResponsibility",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Responsibilities | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "source_flg",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "user_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/finance/generalledger/accounts/:acct_code/transactions/:year_num/:period_num",
    alias: "Accounts_GetAccountTransactionsByCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Transactions | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "acct_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "year_num",
        type: "Path",
        schema: field_number,
      },
      {
        name: "period_num",
        type: "Path",
        schema: field_number,
      },
    ],
    response: z.array(AccountTransactionResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/finance/generalledger/journals",
    alias: "Journals_GetAllJournals",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Journals | General Journals | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |
            
    &gt; **&#x60;Please note:&#x60;**
    &gt; - OData functionality is limited to ensure optimal performance as journals can contain large amounts of data.
    &gt; - It is not possible to filter/orderby on child items within a return journal (ie. gl_lines).`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(JournalResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/finance/generalledger/journals/general",
    alias: "Journals_AddGeneralLedgerGeneralJournal",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Journals | General Journals | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `General journal creation request.`,
        type: "Body",
        schema: AddGeneralJournalRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: AddGeneralJournalResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/finance/generalledger/journals/general/:jour_num",
    alias: "Journals_UpdateGeneralLedgerGeneralJournal",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Journals | General Journals | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateGeneralJournalRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "jour_num",
        type: "Path",
        schema: field_number,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/finance/generalledger/journals/tax",
    alias: "Journals_AddGeneralLedgerTaxJournal",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Journals | Tax Journals | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Tax journal creation request.`,
        type: "Body",
        schema: AddTaxJournalRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: AddTaxJournalResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/finance/generalledger/journals/tax/:jour_num",
    alias: "Journals_UpdateGeneralLedgerTaxJournal",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Journals | Tax Journals | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateTaxJournalRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "jour_num",
        type: "Path",
        schema: field_number,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/countries",
    alias: "Information_GetAllCountryOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Read/Add/Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/genders",
    alias: "Information_GetAllGenderOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Read/Add/Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/indigenoustypes",
    alias: "Information_GetAllIndigneousTypeOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Read/Add/Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/mainactivities",
    alias: "Information_GetAllMainActivityOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Read/Add/Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/maritalstatuses",
    alias: "Information_GetAllMaritalStatusOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Read/Add/Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/notes/categories",
    alias: "Notes_GetAllEmployeeNoteCategoryOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Notes | Employee Standard Notes / Employee Confidential Notes | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/pdactivities/providers",
    alias: "PDActivities_GetAllPDProviderOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | PD Activities | Employee PD Activities | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/pdactivities/statuses",
    alias: "PDActivities_GetAllPDStatusOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | PD Activities | Employee PD Activities | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/pdactivities/types",
    alias: "PDActivities_GetAllPDTypeOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | PD Activities | Employee PD Activities | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/pdactivities/udfields",
    alias: "PDActivities_GetAllPDUDFieldOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | PD Activities | Employee PD Activities | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: UDFieldOptionsResponse,
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/qualifications/categories",
    alias: "Qualifications_GetAllQualificationCategoryOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Qualifications | Employee Qualifications | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/qualifications/institutions",
    alias: "Qualifications_GetAllQualificationInstitutionOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Qualifications | Employee Qualifications | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/statuses",
    alias: "Information_GetAllEmployeeStatusOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Read/Add/Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/terminationreasons",
    alias: "Information_GetAllTerminationReasonOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Read/Add/Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/titles",
    alias: "Information_GetAllTitleOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Read/Add/Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/udareas",
    alias: "UDAreas_GetAllUDAreaOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | UD Areas | Employee UD Areas | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(UDAreaOptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/udareas/:area_code",
    alias: "UDAreas_GetSingleUDAreaOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | UD Areas | Employee UD Areas | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: UDAreaOptionsResponse,
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/employees/vendors",
    alias: "Information_GetAllVendorOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Employee/HR | Information | Employee | Read/Add/Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/accounts/budgets",
    alias: "Accounts_GetAllAccountBudgetOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Budgets | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponseActive),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/accounts/formatrules",
    alias: "Accounts_GetAccountCodeFormatRules",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Accounts | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Account Code Explanation**
    - Each school can configure their own account code structure.
    - The account code can be made up of multiple parts, which then form the entire account code. Each part has a defined starting position, length and type.
    - The types are as follows:
        - &#x60;S&#x60; - Segment - This part of the account code must match one of the valid values defined in the segments list.
        - &#x60;F&#x60; - Filler - This part of the account code must match exactly the default_text value.
        - &#x60;C&#x60; - Custom - This part of the account code can be anything as long as it meets maximum length requirements.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: CodeFormatRulesResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/accounts/groupcodes",
    alias: "Accounts_GetAllGroupCodesOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Accounts | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/accounts/reportingcodes/reportingcodes",
    alias: "Accounts_GetAllReportingCodeOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Reporting Codes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: ReportingCodeResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/accounts/responsibilities/approvallevels",
    alias: "Accounts_GetAllResponsibilityApprovalLevelOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Responsibilities | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/accounts/responsibilities/employees",
    alias: "Accounts_GetAllResponsibilityEmployeeOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Responsibilities | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponseActive),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/accounts/responsibilities/teachers",
    alias: "Accounts_GetAllResponsibilityTeacherOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Responsibilities | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponseActive),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/accounts/taxcodes",
    alias: "Accounts_GetAllTaxCodesOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Accounts | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/accounts/transactions/journaltypes",
    alias: "Accounts_GetAllJournalTypesOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Transactions | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/accounts/typecodes",
    alias: "Accounts_GetAllTypeCodesOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Accounts | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/accounts/yearsperiods",
    alias: "Accounts_GetAllAccountYearPeriodOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Accounts | Budgets | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(YearPeriodOptionsResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/journals/glaccounts",
    alias: "Journals_GetAllGLAccountOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Journals | General Journals / Tax Journals | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(GLAccountOptionsResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/journals/taxcodes",
    alias: "Journals_GetAllTaxCodeOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Journals | Tax Journals | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/journals/types",
    alias: "Journals_GetAllJournalTypeOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Journals | General Journals | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(JournalTypeOptionsResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/finance/generalledger/journals/yearsperiods",
    alias: "Journals_GetAllYearPeriodOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | General Ledger | Journals | General Journals / Tax Journals | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(YearPeriodOptionsResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/payroll/leaveentitlements/accrualcodes",
    alias: "LeaveEntitlements_GetAllAccrualCodeOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Payroll | Leave Entitlements | Employee Leave Balances | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/student/attendance/absencereasons",
    alias: "Attendance_GetAllAbsenceReasonOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Attendance | Student Attendance | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(AbsenceReasonOptionsResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/student/attendance/absencetypes",
    alias: "Attendance_GetAllAbsenceTypeOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Attendance | Student Attendance | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponseActive),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/attendance/campuses",
    alias: "Attendance_GetAllCampusOptionsForAttendance",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Attendance | Student Attendance | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/attendance/houses",
    alias: "Attendance_GetAllHouseOptionsForAttendance",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Attendance | Student Attendance | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/attendance/yeargroups",
    alias: "Attendance_GetAllYearGroupOptionsForAttendance",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Attendance | Student Attendance | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/campuses",
    alias: "Information_GetAllCampusOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | Student | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/communicationrules/genders",
    alias: "CommunicationRules_GetAllCommunicationRuleGenderOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student | Information | Communication Rules | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/communicationrules/types",
    alias: "CommunicationRules_GetAllCommunicationRuleTypeOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student | Information | Communication Rules | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/comparativereportingtypes",
    alias: "Information_GetAllComparativeReportingTypeOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | Student | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/feederschools",
    alias: "Information_GetAllFeederSchoolOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | Student | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/houses",
    alias: "Information_GetAllHouseOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | Student | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/mceecdya/countries",
    alias: "MCEECDYA_GetAllStudentCountryOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | MCEECDYA | Read / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/mceecdya/indigenoustypes",
    alias: "MCEECDYA_GetAllStudentIndigenousTypeOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | MCEECDYA | Read / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/mceecdya/languages",
    alias: "MCEECDYA_GetAllStudentLanguageOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | MCEECDYA | Read / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/mceecdya/nonschooleducation",
    alias: "MCEECDYA_GetAllNonSchoolEducationTypeOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | MCEECDYA | Read / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/mceecdya/occupationalgroups",
    alias: "MCEECDYA_GetAllOccupationalGroupOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | MCEECDYA | Read / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/mceecdya/schooleducation",
    alias: "MCEECDYA_GetAllSchoolEducationTypeOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | MCEECDYA | Read / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/medical/conditions/types",
    alias: "Conditions_GetAllMedicalConditionTypesOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions | Add / Read / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponseActive),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/medical/immunisations/register/statuses",
    alias: "Immunisations_GetAllImmunisationStatusesOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Immunisations | Immunisation Register | Read / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponseActive),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/medical/immunisations/types",
    alias: "Immunisations_GetAllImmunisationTypesOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Immunisations | Immunisations | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/medical/notes/categories",
    alias: "Notes_GetAllStudentMedicalNoteCategoryOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Standard Medical Notes / Confidential Medical Notes | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/medical/practitioners/types",
    alias: "Practitioners_GetAllPractitionerTypesOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Practitioners | Practitioners | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/medical/supplementaries/types",
    alias: "Supplementaries_GetAllSupplementaryTypesOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Supplementary Information | Supplementaries | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/nextyearindicators",
    alias: "Information_GetAllNextYearIndicatorOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | Student | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/notes/categories",
    alias: "Notes_GetAllStudentNoteCategoryOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Standard Notes / Confidential Notes | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/pctutorgroups",
    alias: "Information_GetAllPCTutorGroupOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | Student | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/religions",
    alias: "Information_GetAllReligionOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | Student | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/residencystatuses",
    alias: "Information_GetAllResidencyStatusOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | Student | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/udareas",
    alias: "UDAreas_GetAllStudentUDAreaOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | UD Areas | UD Areas | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(UDAreaOptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/udareas/:area_code",
    alias: "UDAreas_GetSingleStudentUDAreaOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | UD Areas | UD Areas | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: UDAreaOptionsResponse,
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/udfields",
    alias: "UDFields_GetAllStudentUDFieldOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | UD Fields | Read / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentUDFieldOptionResponse,
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/options/students/yeargroups",
    alias: "Information_GetAllYearGroupOptions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | Student | Read / Add / Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(OptionsResponse),
    errors: [
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/payroll/leaveentitlements/:emp_code",
    alias: "LeaveEntitlements_GetAllEmployeeLeaveEntitlements",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Payroll | Leave Entitlements | Employee Leave Balances | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "emp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(EmployeeLeaveBalanceResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students",
    alias: "Information_GetAllStudents",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | Student | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code",
    alias: "Information_GetStudentByID",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | Student | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code",
    alias: "Information_UpdateStudent",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | Student | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateStudentRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code",
    alias: "Information_PatchStudent",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | Student | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/communicationrules",
    alias: "CommunicationRules_GetStudentCommunicationRules",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student | Information | Communication Rules | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentCommunicationRulesResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/communicationrules/:commtype_code",
    alias: "CommunicationRules_GetStudentCommunicationRulesByCommTypeCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student | Information | Communication Rules | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "commtype_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentCommunicationRulesResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/mceecdya",
    alias: "MCEECDYA_GetStudentMCEECDYA",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | MCEECDYA | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMceecdyaResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/mceecdya",
    alias: "MCEECDYA_UpdateStudentMceecdya",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | MCEECDYA | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateStudentMceecdyaRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/mceecdya",
    alias: "MCEECDYA_PatchStudentMceecdya",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | MCEECDYA | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/asthmamanagement",
    alias: "AsthmaManagement_GetAsthmaManagement",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Asthma Management | Asthma Management | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: AsthmaManagementResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/medical/asthmamanagement",
    alias: "AsthmaManagement_UpdateAsthmaManagement",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Asthma Management | Asthma Management | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateAsthmaManagementRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/medical/asthmamanagement",
    alias: "AsthmaManagement_PatchAsthmaManagement",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Asthma Management | Asthma Management | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions",
    alias: "Conditions_GetAllStudentMedicalConditions",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentMedicalConditionResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/conditions",
    alias: "Conditions_AddStudentMedicalCondition",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Medical condition details.`,
        type: "Body",
        schema: AddStudentMedicalConditionRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicalConditionResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code",
    alias: "Conditions_GetStudentMedicalConditionByCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicalConditionResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code",
    alias: "Conditions_UpdateStudentMedicalCondition",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Medical condition details.`,
        type: "Body",
        schema: UpdateStudentMedicalConditionRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code",
    alias: "Conditions_PatchStudentMedicalCondition",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code",
    alias: "Conditions_DeleteStudentMedicalCondition",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/attachments",
    alias: "Conditions_GetAllStudentMedicalConditionAttachments",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(FileResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/attachments",
    alias: "Conditions_AddStudentMedicalConditionAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions Attachments | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Notes_AddStudentStandardNotesAttachment_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: NewAttachmentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/attachments/:attach_id",
    alias: "Conditions_DownloadStudentMedicalConditionAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/attachments/:attach_id",
    alias: "Conditions_DeleteStudentMedicalConditionAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions Attachments | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications",
    alias: "Medications_GetAllStudentMedicalMedications",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentMedicationResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications",
    alias: "Medications_AddStudentMedicalMedication",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Add student medical medication request.`,
        type: "Body",
        schema: AddStudentMedicationRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid",
    alias: "Medications_GetStudentMedicalMedicationByCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid",
    alias: "Medications_UpdateStudentMedicalMedication",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Update student medication request.`,
        type: "Body",
        schema: UpdateStudentMedicationRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid",
    alias: "Medications_PatchStudentMedicalMedication",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `JSON patch document.`,
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid",
    alias: "Medications_DeleteStudentMedicalMedication",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/attachments",
    alias: "Medications_GetAllStudentMedicationAttachments",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(FileResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/attachments",
    alias: "Medications_AddStudentMedicationAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Attachments | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Notes_AddStudentStandardNotesAttachment_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: NewAttachmentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/attachments/:attach_id",
    alias: "Medications_DownloadStudentMedicationAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/attachments/:attach_id",
    alias: "Medications_DeleteStudentMedicationAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Attachments | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/notes",
    alias: "Medications_GetAllStudentMedicationNotes",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentMedicationNoteResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/notes",
    alias: "Medications_AddStudentMedicationNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Notes | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Add student medication note request.`,
        type: "Body",
        schema: AddStudentMedicationNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicationNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/notes/:note_uid",
    alias: "Medications_GetStudentMedicationNoteByCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicationNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/notes/:note_uid",
    alias: "Medications_UpdateStudentMedicationNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Update student medication note request.`,
        type: "Body",
        schema: UpdateStudentMedicationNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/notes/:note_uid",
    alias: "Medications_PatchStudentMedicationNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `JSON patch document.`,
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/notes/:note_uid",
    alias: "Medications_DeleteStudentMedicationNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Notes | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/schedules",
    alias: "Medications_GetAllStudentMedicationSchedules",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Schedules | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentMedicationScheduleResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/schedules",
    alias: "Medications_AddStudentMedicationSchedule",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Schedules | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Add student medication schedule request.`,
        type: "Body",
        schema: AddStudentMedicationScheduleRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicationScheduleResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/schedules/:sched_uid",
    alias: "Medications_GetStudentMedicationScheduleByCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Schedules | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "sched_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicationScheduleResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/schedules/:sched_uid",
    alias: "Medications_UpdateStudentMedicationSchedule",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Schedules | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Update student medication schedule request.`,
        type: "Body",
        schema: UpdateStudentMedicationScheduleRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "sched_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/schedules/:sched_uid",
    alias: "Medications_PatchStudentMedicationSchedule",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Schedules | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `JSON patch document.`,
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "sched_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/medications/:medication_uid/schedules/:sched_uid",
    alias: "Medications_DeleteStudentMedicationSchedule",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medications | Medications Schedules | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "medication_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "sched_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/notes",
    alias: "Conditions_GetAllStudentMedicalConditionNotes",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentMedicalConditionNoteResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/notes",
    alias: "Conditions_AddStudentMedicalConditionNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions Notes | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Medical condition note details.`,
        type: "Body",
        schema: AddStudentMedicalConditionNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicalConditionNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/notes/:note_uid",
    alias: "Conditions_GetStudentMedicalConditionNoteByCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicalConditionNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/notes/:note_uid",
    alias: "Conditions_UpdateStudentMedicalConditionNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Medical condition note details.`,
        type: "Body",
        schema: UpdateStudentMedicalConditionNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/notes/:note_uid",
    alias: "Conditions_PatchStudentMedicalConditionNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/conditions/:mcond_code/notes/:note_uid",
    alias: "Conditions_DeleteStudentMedicalConditionNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Medical Conditions | Medical Conditions Notes | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "mcond_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/immunisations",
    alias: "Immunisations_GetAllStudentImmunisations",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Immunisations | Immunisations | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentImmunisationResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/immunisations",
    alias: "Immunisations_AddStudentImmunisation",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Immunisations | Immunisations | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AddStudentImmunisationRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentImmunisationResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/immunisations/:imm_code",
    alias: "Immunisations_GetStudentImmunisations",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Immunisations | Immunisations | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "imm_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentImmunisationResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/immunisations/:imm_code",
    alias: "Immunisations_DeleteStudentImmunisation",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Immunisations | Immunisations | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "imm_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/medical/immunisations/:imm_code",
    alias: "Immunisations_UpdateStudentImmunisation",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Immunisations | Immunisations | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateStudentImmunisationRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "imm_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/immunisations/register",
    alias: "Immunisations_GetStudentImmunisationRegister",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Immunisations | Immunisation Register | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentImmunisationRegisterResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/medical/immunisations/register",
    alias: "Immunisations_UpdateStudentImmunisationRegister",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Immunisations | Immunisation Register | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateStudentImmunisationRegisterRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/immunisations/register/attachments",
    alias: "Immunisations_GetAllStudentImmunisationRegisterAttachments",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Immunisations | Immunisation Register Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(FileResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/immunisations/register/attachments",
    alias: "Immunisations_AddStudentImmunisationRegisterAttachment",
    description: `- ##### **Endpoint Details**  
- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Immunisations | Immunisation Register Attachments | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Immunisations_AddStudentImmunisationRegisterAttachment_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: NewAttachmentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/immunisations/register/attachments/:attach_id",
    alias: "Immunisations_DownloadStudentImmunisationRegisterAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Immunisations | Immunisation Register Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/immunisations/register/attachments/:attach_id",
    alias: "Immunisations_DeleteStudentImmunisationRegisterAttachments",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Immunisations | Immunisation Register Attachments | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/notes/confidential",
    alias: "Notes_GetAllStudentConfidentialMedicalNotes",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Confidential Medical Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentMedicalConfidentialNoteResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/notes/confidential",
    alias: "Notes_AddStudentMedicalConfidentialNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Confidential Medical Notes | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AddStudentMedicalConfidentialNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicalConfidentialNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/notes/confidential/:note_uid",
    alias: "Notes_GetStudentMedicalConfidentialNoteByID",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Confidential Medical Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicalConfidentialNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/medical/notes/confidential/:note_uid",
    alias: "Notes_UpdateStudentMedicalConfidentialNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Confidential Medical Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateStudentMedicalConfidentialNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/medical/notes/confidential/:note_uid",
    alias: "Notes_PatchStudentMedicalConfidentialNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Confidential Medical Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/notes/confidential/:note_uid",
    alias: "Notes_DeleteStudentMedicalConfidentialNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Confidential Medical Notes | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/notes/confidential/:note_uid/attachments",
    alias: "Notes_GetAllStudentMedicalConfidentialNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Confidential Medical Notes Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(FileResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/notes/confidential/:note_uid/attachments",
    alias: "Notes_AddStudentMedicalConfidentialNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Confidential Medical Notes Attachments | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Notes_AddStudentStandardNotesAttachment_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: NewAttachmentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/notes/confidential/:note_uid/attachments/:attach_id",
    alias: "Notes_DownloadStudentConfidentialMedicalNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Confidential Medical Notes Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/notes/confidential/:note_uid/attachments/:attach_id",
    alias: "Notes_DeleteStudentMedicalConfidentialNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Confidential Medical Notes Attachments | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/notes/standard",
    alias: "Notes_GetAllStudentStandardMedicalNotes",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Standard Medical Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentMedicalStandardNoteResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/notes/standard",
    alias: "Notes_AddStudentMedicalStandardNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Standard Medical Notes | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AddStudentMedicalStandardNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicalStandardNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/notes/standard/:note_uid",
    alias: "Notes_GetStudentMedicalStandardNoteByID",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Standard Medical Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicalStandardNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/medical/notes/standard/:note_uid",
    alias: "Notes_UpdateStudentMedicalStandardNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Standard Medical Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateStudentMedicalStandardNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/medical/notes/standard/:note_uid",
    alias: "Notes_PatchStudentMedicalStandardNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Standard Medical Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/notes/standard/:note_uid",
    alias: "Notes_DeleteStudentMedicalStandardNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Standard Medical Notes | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/notes/standard/:note_uid/attachments",
    alias: "Notes_GetAllStudentMedicalStandardNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Standard Medical Notes Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(FileResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/notes/standard/:note_uid/attachments",
    alias: "Notes_AddStudentMedicalStandardNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Standard Medical Notes Attachments | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Notes_AddStudentStandardNotesAttachment_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: NewAttachmentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/notes/standard/:note_uid/attachments/:attach_id",
    alias: "Notes_DownloadStudentMedicalStandardNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Standard Medical Notes Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/notes/standard/:note_uid/attachments/:attach_id",
    alias: "Notes_DeleteStudentMedicalStandardNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Notes | Standard Medical Notes Attachments | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/practitioners",
    alias: "Practitioners_GetAllStudentPractitioners",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Practitioners | Practitioners | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentPractitionerResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/practitioners",
    alias: "Practitioners_AddStudentPractitioner",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Practitioners | Practitioners | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AddStudentPractitionerRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentPractitionerResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/practitioners/:prac_num",
    alias: "Practitioners_GetStudentPractitionerByPracNum",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Practitioners | Practitioners | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "prac_num",
        type: "Path",
        schema: field_number,
      },
    ],
    response: StudentPractitionerResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/practitioners/:prac_num",
    alias: "Practitioners_DeleteStudentPractitioner",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Practitioners | Practitioners | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "prac_num",
        type: "Path",
        schema: field_number,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/medical/practitioners/:prac_num",
    alias: "Practitioners_UpdateStudentPractitioner",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Practitioners | Practitioners | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateStudentPractitionerRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "prac_num",
        type: "Path",
        schema: field_number,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/medical/practitioners/:prac_num",
    alias: "Practitioners_PatchStudentPractitioner",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Practitioners | Practitioners | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "prac_num",
        type: "Path",
        schema: field_number,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/supplementaries",
    alias: "Supplementaries_GetAllStudentMedicalSupplementaries",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Supplementary Information | Supplementaries | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentMedicalSupplementaryResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/medical/supplementaries",
    alias: "Supplementaries_CreateStudentMedicalSupplementary",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Supplementary Information | Supplementaries | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Create request.`,
        type: "Body",
        schema: AddStudentMedicalSupplementaryRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicalSupplementaryResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/medical/supplementaries/:msupp_code",
    alias: "Supplementaries_GetStudentMedicalSupplementaryByCode",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Supplementary Information | Supplementaries | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "msupp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentMedicalSupplementaryResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/medical/supplementaries/:msupp_code",
    alias: "Supplementaries_DeleteStudentMedicalSupplementary",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Supplementary Information | Supplementaries | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "msupp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/medical/supplementaries/:msupp_code",
    alias: "Supplementaries_UpdateStudentMedicalSupplementary",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Supplementary Information | Supplementaries | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `Update request.`,
        type: "Body",
        schema: UpdateStudentMedicalSupplementaryRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "msupp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/medical/supplementaries/:msupp_code",
    alias: "Supplementaries_PatchStudentMedicalSupplementary",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student Medical | Supplementary Information | Supplementaries | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        description: `JSON Patch document.`,
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "msupp_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/notes/confidential",
    alias: "Notes_GetAllStudentConfidentialNotes",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Confidential Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentConfidentialNoteResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/notes/confidential",
    alias: "Notes_AddStudentConfidentialNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Confidential Notes | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AddStudentConfidentialNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentConfidentialNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/notes/confidential/:note_uid",
    alias: "Notes_GetStudentConfidentialNoteByID",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Confidential Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentConfidentialNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/notes/confidential/:note_uid",
    alias: "Notes_UpdateStudentConfidentialNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Confidential Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateStudentConfidentialNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/notes/confidential/:note_uid",
    alias: "Notes_PatchStudentConfidentialNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Confidential Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/notes/confidential/:note_uid",
    alias: "Notes_DeleteStudentConfidentialNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Confidential Notes | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/notes/confidential/:note_uid/attachments",
    alias: "Notes_GetAllStudentConfidentialNotesAttachments",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Confidential Notes Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(FileResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/notes/confidential/:note_uid/attachments",
    alias: "Notes_AddStudentConfidentialNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Confidential Notes Attachments | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Notes_AddStudentStandardNotesAttachment_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: NewAttachmentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/notes/confidential/:note_uid/attachments/:attach_id",
    alias: "Notes_DownloadStudentConfidentialNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Confidential Notes Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/notes/confidential/:note_uid/attachments/:attach_id",
    alias: "Notes_DeleteStudentConfidentialNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Confidential Notes Attachments | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/notes/standard",
    alias: "Notes_GetAllStudentStandardNotes",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Standard Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentStandardNoteResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/notes/standard",
    alias: "Notes_AddStudentStandardNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Standard Notes | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AddStudentStandardNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentStandardNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/notes/standard/:note_uid",
    alias: "Notes_GetStudentStandardNoteByID",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Standard Notes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentStandardNoteResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/notes/standard/:note_uid",
    alias: "Notes_UpdateStudentStandardNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Standard Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateStudentStandardNoteRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/notes/standard/:note_uid",
    alias: "Notes_PatchStudentStandardNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Standard Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/notes/standard/:note_uid",
    alias: "Notes_DeleteStudentStandardNote",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Standard Notes | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/notes/standard/:note_uid/attachments",
    alias: "Notes_GetAllStudentStandardNotesAttachments",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Standard Notes Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(FileResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/notes/standard/:note_uid/attachments",
    alias: "Notes_AddStudentStandardNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Standard Notes Attachments | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Notes_AddStudentStandardNotesAttachment_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: NewAttachmentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/notes/standard/:note_uid/attachments/:attach_id",
    alias: "Notes_DownloadStudentStandardNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Standard Notes Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/notes/standard/:note_uid/attachments/:attach_id",
    alias: "Notes_DeleteStudentStandardNotesAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Notes | Standard Notes Attachments | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "note_uid",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/photo",
    alias: "Photo_GetStudentPhoto",
    description: `- ##### **Endpoint Details**  
     | Group | Sub-Group | Name | Permission |
     |:------|:----------|:-----|:-----------|
     | Students | Photos | Photo | Read |
     
 - ##### **OData Functionality**
     | Functions | | | | |
     |:------|:------|:------|:------|:------|
     | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
     
 - ##### **Comments**
     - This endpoint returns a ZIP file containing both the student&#x27;s photo and thumbnail.
     - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/photo",
    alias: "Photo_AddStudentPhoto",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Photos | Photo | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Photo_AddStudentPhoto_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/udareas",
    alias: "UDAreas_GetAllStudentUDAreas",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | UD Areas | UD Areas | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentUDAreaResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/udareas/:area_code",
    alias: "UDAreas_GetStudentUDAreaByID",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | UD Areas | UD Areas | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentUDAreaResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/udareas/:area_code",
    alias: "UDAreas_AddStudentUDArea",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | UD Areas | UD Areas | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: AddStudentUDAreaRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: StudentUDAreaResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/udareas/:area_code",
    alias: "UDAreas_UpdateStudentUDArea",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | UD Areas | UD Areas | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateStudentUDAreaRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/udareas/:area_code",
    alias: "UDAreas_PatchStudentUDArea",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | UD Areas | UD Areas | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/udareas/:area_code",
    alias: "UDAreas_DeleteStudentUDArea",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | UD Areas | UD Areas | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/:cmpy_code/students/:stud_code/udareas/:area_code/attachments/:field_number",
    alias: "UDAreas_AddStudentUdAreaAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | UD Areas | UD Areas Attachments | Add |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "form-data",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Notes_AddStudentStandardNotesAttachment_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "field_number",
        type: "Path",
        schema: field_number,
      },
    ],
    response: NewAttachmentResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/udareas/:area_code/attachments/:field_number/:attach_id",
    alias: "UDAreas_DownloadStudentUDAreaAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | UD Areas | UD Areas Attachments | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Comments**
    - A DIGEST header will be returned with the response. This will contain the SHA-256 hash of the file content. The value in the header is base64 encoded and will need to be decoded before checking against the file content.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "field_number",
        type: "Path",
        schema: field_number,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "delete",
    path: "/:cmpy_code/students/:stud_code/udareas/:area_code/attachments/:field_number/:attach_id",
    alias: "UDAreas_DeleteStudentUDAreaAttachment",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | UD Areas | UD Areas Attachments | Delete |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "area_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "field_number",
        type: "Path",
        schema: field_number,
      },
      {
        name: "attach_id",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Attachment not found.`,
        schema: ExceptionDetails,
      },
      {
        status: 500,
        description: `Internal server error.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/:stud_code/udfields",
    alias: "UDFields_GetStudentUDFields",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | UD Fields | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentUDFieldsResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "put",
    path: "/:cmpy_code/students/:stud_code/udfields",
    alias: "UDFields_UpdateStudentUDFields",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | UD Fields | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UpdateStudentUDFieldsRequest,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "patch",
    path: "/:cmpy_code/students/:stud_code/udfields",
    alias: "UDFields_PatchStudentUDFields",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Information | UD Fields | Update |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: Information_PatchStudent_Body,
      },
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "stud_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/attendance",
    alias: "Attendance_GetAllStudentAttendances",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Attendance | Student Attendance | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ✅ $select | ✅ $filter | ✅ $orderby | ✅ $top (max 500) | ✅ $skip |

&gt; **&#x60;Please note:&#x60;**
&gt; - Student information such as boarder, house, year group, campus etc. are from when the absence was recorded, they are not current values. If this student information was not archived as at the absence date, then these values are not obtainable and will be returned as null.`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentAttendanceResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/communicationrules",
    alias: "CommunicationRules_GetAllStudentCommunicationRules",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student | Information | Communication Rules | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentCommunicationRulesResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/communicationrules/:commtype_code",
    alias: "CommunicationRules_GetAllStudentCommunicationRulesByCommType",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Student | Information | Communication Rules | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ✅ $top (max 500) | ✅ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "commtype_code",
        type: "Path",
        schema: cmpy_code,
      },
    ],
    response: z.array(StudentCommunicationRulesResponse),
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
      {
        status: 404,
        description: `Not found.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "get",
    path: "/:cmpy_code/students/photo/changes",
    alias: "Photo_GetStudentPhotoChanges",
    description: `- ##### **Endpoint Details**
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Students | Photos | Photo Changes | Read |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |
    
- ##### **Purpose**
    - Retrieves a list of students whose photos have been updated, returning only the most recent photo change per student.
    - This endpoint supports incremental synchronization through a change tracking mechanism.

- ##### **How It Works**
    - Initial Request (no change_key)
         - Call &#x60;GET /students/photo/changes&#x60;
         - Returns all students with photo updates, one record per student (the most recent photo change)
         - Response includes a &#x60;change_key&#x60; for subsequent requests

    - Incremental Sync (with change_key)
         - Call &#x60;GET /students/photo/changes?change_key&#x3D;{ previous_change_key }&#x60;
         - Returns only students whose photos were updated AFTER the provided change_key
         - Response includes a new &#x60;change_key&#x60; for the next request

- ##### **Use Cases**
    - *Full Sync:* Omit &#x60;change_key&#x60; to get all student photo changes
    - *Incremental Sync:* Use the &#x60;change_key&#x60; from the previous response to poll for new changes
    - *Photo Management:* Track which student photos need to be refreshed in external systems`,
    requestFormat: "json",
    parameters: [
      {
        name: "cmpy_code",
        type: "Path",
        schema: cmpy_code,
      },
      {
        name: "change_key",
        type: "Query",
        schema: change_key,
      },
    ],
    response: StudentPhotoChangesResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
      {
        status: 403,
        description: `Forbidden.`,
        schema: ExceptionDetails,
      },
    ],
  },
  {
    method: "post",
    path: "/users",
    alias: "Users_GetUserToken",
    description: `- ##### **Endpoint Details**  
    | Group | Sub-Group | Name | Permission |
    |:------|:----------|:-----|:-----------|
    | Users | User | Authenticate | n/a |
    
- ##### **OData Functionality**
    | Functions | | | | |
    |:------|:------|:------|:------|:------|
    | ❌ $select | ❌ $filter | ❌ $orderby | ❌ $top | ❌ $skip |`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: GetUserTokenRequest,
      },
    ],
    response: UserTokenResponse,
    errors: [
      {
        status: 400,
        description: `Bad request.`,
        schema: ValidationExceptionDetails,
      },
      {
        status: 401,
        description: `Unauthorised.`,
        schema: ExceptionDetails,
      },
    ],
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
