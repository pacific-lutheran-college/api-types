import { z } from "zod";

const GetUserTokenRequest = z
  .object({ clientKey: z.string(), clientSecret: z.string() })
  .partial();
const AllowedCompanyDetails = z
  .object({
    cmpy_code: z.string().nullable(),
    name_text: z.string().nullable(),
  })
  .partial();
const UserTokenResponse = z
  .object({
    token: z.string(),
    token_expiry_date: z.string().datetime({ offset: true }),
    allowed_companies: z.array(AllowedCompanyDetails),
  })
  .partial();
const ExceptionDetails = z
  .object({ status: z.number().int(), title: z.string(), detail: z.string() })
  .partial();
const ValidationExceptionDetails = ExceptionDetails.and(
  z.object({ errors: z.record(z.array(z.string())) }).partial()
);
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
const StudentCommunicationRulesParentNameResponse = z
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
const StudentCommunicationRulesCommunicationTypeResponse = z
  .object({ commtype_code: z.string() })
  .partial();
const StudentCommunicationRulesParentAddressResponse = z
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
const StudentCommunicationRulesParentDetailsResponse = z
  .object({
    par_code: z.string(),
    parent_names: z.array(StudentCommunicationRulesParentNameResponse),
    addresses: z.array(StudentCommunicationRulesParentAddressResponse),
  })
  .partial();
const StudentCommunicationRulesResponse = z
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
const CommonStudentUpdateRequest = z.object({
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
const UpdateStudentRequest = CommonStudentUpdateRequest.and(
  z.object({}).partial()
);
const OperationBase = z
  .object({
    path: z.string().nullable(),
    op: z.string().nullable(),
    from: z.string().nullable(),
  })
  .partial();
const Operation = OperationBase.and(
  z.object({ value: z.unknown().nullable() }).partial()
);
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
const CommonStudentStandardNoteUpdateRequest = z.object({
  note_cat: z.string().min(1).max(3),
  note_date: z.string().min(1).datetime({ offset: true }),
  note_text: z.string().min(1).max(4000),
});
const AddStudentStandardNoteRequest =
  CommonStudentStandardNoteUpdateRequest.and(z.object({}).partial());
const UpdateStudentStandardNoteRequest =
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
const CommonStudentConfidentialNoteUpdateRequest = z.object({
  note_cat: z.string().min(1).max(3),
  note_date: z.string().min(1).datetime({ offset: true }),
  note_text: z.string().min(1).max(4000),
});
const AddStudentConfidentialNoteRequest =
  CommonStudentConfidentialNoteUpdateRequest.and(z.object({}).partial());
const UpdateStudentConfidentialNoteRequest =
  CommonStudentConfidentialNoteUpdateRequest.and(z.object({}).partial());
const StudentPhotoChange = z
  .object({
    stud_code: z.string(),
    photo_update_on: z.string().datetime({ offset: true }),
  })
  .partial();
const StudentPhotoChangesResponse = z
  .object({
    cmpy_code: z.string(),
    change_key: z.string(),
    changes: z.array(StudentPhotoChange),
  })
  .partial();
const UDFieldDetails = z
  .object({
    field_name: z.string(),
    field_desc: z.string().nullable(),
    sort_order: z.number().int(),
  })
  .partial();
const UDFieldReferenceValue = z
  .object({
    ud_code: z.string().nullable(),
    ud_desc: z.string(),
    sort_order: z.number().int(),
  })
  .partial();
const UDCodeFieldDetails = UDFieldDetails.and(
  z.object({ reference_values: z.array(UDFieldReferenceValue) }).partial()
);
const UDAttachmentFieldDetails = UDFieldDetails.and(
  z.object({ field_number: z.number().int() }).partial()
);
const UDFieldTypes = z
  .object({
    ud_flags: z.array(UDFieldDetails),
    ud_codes: z.array(UDCodeFieldDetails),
    ud_text: z.array(UDFieldDetails),
    ud_dates: z.array(UDFieldDetails),
    ud_attachments: z.array(UDAttachmentFieldDetails),
  })
  .partial();
const UDAreaOptionsResponse = z
  .object({
    cmpy_code: z.string(),
    area_code: z.string(),
    area_desc: z.string(),
    ud_fields: UDFieldTypes,
  })
  .partial();
const StudentUDAreaFlagResponse = z
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
const StudentUDAreaCodeResponse = z
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
const StudentUDAreaTextResponse = z
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
const StudentUDAreaDateResponse = z
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
const FileDetails = z
  .object({
    file_name: z.string().nullable(),
    file_size: z.number().int().nullable(),
    date_uploaded: z.string().datetime({ offset: true }).nullable(),
    attach_id: z.string().nullable(),
  })
  .partial();
const AttachmentDetails = z
  .object({ field_number: z.number().int(), files: z.array(FileDetails) })
  .partial();
const StudentUDAreaAttachmentResponse = z
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
const StudentUDAreaFieldsResponse = z
  .object({
    ud_flags: StudentUDAreaFlagResponse,
    ud_codes: StudentUDAreaCodeResponse,
    ud_text: StudentUDAreaTextResponse,
    ud_dates: StudentUDAreaDateResponse,
    ud_attachments: StudentUDAreaAttachmentResponse,
  })
  .partial();
const StudentUDAreaResponse = z
  .object({
    cmpy_code: z.string(),
    area_code: z.string(),
    stud_code: z.string(),
    update_on: z.string().datetime({ offset: true }).nullable(),
    ud_fields: StudentUDAreaFieldsResponse,
  })
  .partial();
const StudentUDAreaFlagRequest = z
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
const StudentUDAreaCodeRequest = z
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
const StudentUDAreaTextRequest = z
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
const StudentUDAreaDateRequest = z
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
const StudentUDAreaFieldsRequest = z
  .object({
    ud_flags: StudentUDAreaFlagRequest,
    ud_codes: StudentUDAreaCodeRequest,
    ud_text: StudentUDAreaTextRequest,
    ud_dates: StudentUDAreaDateRequest,
  })
  .partial();
const CommonStudentUDAreaUpdateRequest = z
  .object({ ud_fields: StudentUDAreaFieldsRequest })
  .partial();
const AddStudentUDAreaRequest = CommonStudentUDAreaUpdateRequest.and(
  z.object({}).partial()
);
const UpdateStudentUDAreaRequest = CommonStudentUDAreaUpdateRequest.and(
  z.object({}).partial()
);
const UDFlagResponse = z
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
const UDCodeResponse = z
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
const UDTextResponse = z
  .object({
    ud21_text: z.string().max(100).nullable(),
    ud22_text: z.string().max(100).nullable(),
    ud23_text: z.string().max(100).nullable(),
    ud24_text: z.string().max(100).nullable(),
    ud25_text: z.string().max(100).nullable(),
  })
  .partial();
const UDFieldsResponse = z
  .object({
    ud_flags: UDFlagResponse,
    ud_codes: UDCodeResponse,
    ud_text: UDTextResponse,
  })
  .partial();
const StudentUDFieldsResponse = z
  .object({
    cmpy_code: z.string(),
    stud_code: z.string(),
    ud_fields: UDFieldsResponse,
  })
  .partial();
const UDFlagRequest = z
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
const UDCodeRequest = z
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
const UDTextRequest = z
  .object({
    ud21_text: z.string().max(100).nullable(),
    ud22_text: z.string().max(100).nullable(),
    ud23_text: z.string().max(100).nullable(),
    ud24_text: z.string().max(100).nullable(),
    ud25_text: z.string().max(100).nullable(),
  })
  .partial();
const UDFieldsRequest = z
  .object({
    ud_flags: UDFlagRequest,
    ud_codes: UDCodeRequest,
    ud_text: UDTextRequest,
  })
  .partial();
const UpdateStudentUDFieldsRequest = z
  .object({ ud_fields: UDFieldsRequest })
  .partial();
const StudentUDFieldOptionDetails = z
  .object({
    field_name: z.string(),
    field_desc: z.string().nullable(),
    sort_order: z.number().int(),
  })
  .partial();
const StudentUDFieldOptionReferenceValue = z
  .object({
    ud_code: z.string().nullable(),
    ud_desc: z.string().nullable(),
    sort_order: z.number().int(),
  })
  .partial();
const StudentUDCodeFieldOptionDetails = StudentUDFieldOptionDetails.and(
  z
    .object({ reference_values: z.array(StudentUDFieldOptionReferenceValue) })
    .partial()
);
const StudentUDFieldOptionTypes = z
  .object({
    ud_flags: z.array(StudentUDFieldOptionDetails),
    ud_codes: z.array(StudentUDCodeFieldOptionDetails),
    ud_text: z.array(StudentUDFieldOptionDetails),
  })
  .partial();
const StudentUDFieldOptionResponse = z
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
const UsualSigns = z
  .object({
    wheez_flg: z.boolean(),
    tight_flg: z.boolean(),
    cough_flg: z.boolean(),
    breath_flg: z.boolean(),
    speak_flg: z.boolean(),
    comm_text: z.string().nullable(),
  })
  .partial();
const WorseningSigns = z
  .object({
    wheez_flg: z.boolean(),
    tight_flg: z.boolean(),
    cough_flg: z.boolean(),
    breath_flg: z.boolean(),
    speak_flg: z.boolean(),
    comm_text: z.string().nullable(),
  })
  .partial();
const Triggers = z
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
const AsthmaManagementResponse = z
  .object({
    cmpy_code: z.string(),
    stud_code: z.string(),
    usual_signs: UsualSigns,
    worsening_signs: WorseningSigns,
    triggers: Triggers,
  })
  .partial();
const UsualSigns2 = z
  .object({
    wheez_flg: z.boolean(),
    tight_flg: z.boolean(),
    cough_flg: z.boolean(),
    breath_flg: z.boolean(),
    speak_flg: z.boolean(),
    comm_text: z.string().max(200).nullable(),
  })
  .partial();
const WorseningSigns2 = z
  .object({
    wheez_flg: z.boolean(),
    tight_flg: z.boolean(),
    cough_flg: z.boolean(),
    breath_flg: z.boolean(),
    speak_flg: z.boolean(),
    comm_text: z.string().max(200).nullable(),
  })
  .partial();
const Triggers2 = z
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
const UpdateAsthmaManagementRequest = z
  .object({
    usual_signs: UsualSigns2,
    worsening_signs: WorseningSigns2,
    triggers: Triggers2,
  })
  .partial();
const UdText = z
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
const UdFields = z.object({ ud_text: UdText }).partial();
const StudentMedicalConditionResponse = z
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
const UdText2 = z
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
const UdFields2 = z.object({ ud_text: UdText2 }).partial();
const AddStudentMedicalConditionRequest = z
  .object({
    last_occ_date: z.string().nullable(),
    mcond_code: z.string().max(3),
    severe_ind: z.boolean(),
    treat_text: z.string().max(4000).nullable(),
    active_flg: z.boolean(),
    ud_fields: UdFields2,
  })
  .partial();
const UdText3 = z
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
const UdFields3 = z.object({ ud_text: UdText3 }).partial();
const UpdateStudentMedicalConditionRequest = z
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
const DaysResponse = z
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
const StudentMedicationScheduleResponse = z
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
const DaysRequest = z
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
const AddStudentMedicationScheduleRequest = z.object({
  med_dose: z.string().min(1).max(100),
  med_time: z.string().min(1),
  shed_start_date: z.string().min(1),
  shed_end_date: z.string().nullish(),
  days: DaysRequest.optional(),
});
const DaysRequest2 = z
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
const UpdateStudentMedicationScheduleRequest = z.object({
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
const CommonStudentMedicalStandardNoteUpdateRequest = z.object({
  note_cat: z.string().min(1).max(3),
  note_date: z.string().min(1).datetime({ offset: true }),
  note_text: z.string().min(1).max(4000),
});
const AddStudentMedicalStandardNoteRequest =
  CommonStudentMedicalStandardNoteUpdateRequest.and(z.object({}).partial());
const UpdateStudentMedicalStandardNoteRequest =
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
const CommonStudentMedicalConfidentialNoteUpdateRequest = z.object({
  note_cat: z.string().min(1).max(3),
  note_date: z.string().min(1).datetime({ offset: true }),
  note_text: z.string().min(1).max(4000),
});
const AddStudentMedicalConfidentialNoteRequest =
  CommonStudentMedicalConfidentialNoteUpdateRequest.and(z.object({}).partial());
const UpdateStudentMedicalConfidentialNoteRequest =
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
const CommonStudentPractitionerUpdateRequest = z
  .object({
    doct_name: z.string().max(50).nullable(),
    doct_phone: z.string().max(20).nullable(),
    ptype_code: z.string().max(10).nullable(),
  })
  .partial();
const UpdateStudentPractitionerRequest =
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
const SegmentResponse = z
  .object({
    flex_code: z.string(),
    desc_text: z.string(),
    group_code: z.string(),
  })
  .partial();
const CodeStructureResponse = z
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
const CodeFormatRulesResponse = z
  .object({
    cmpy_code: z.string(),
    code_structure: z.array(CodeStructureResponse),
  })
  .partial();
const ReportingCodeOptionsFieldReferenceValue = z
  .object({ ref_code: z.string(), ref_desc: z.string() })
  .partial();
const ReportingCodeOptionsFieldDetails = z
  .object({
    field_name: z.string(),
    field_desc: z.string(),
    reference_values: z.array(ReportingCodeOptionsFieldReferenceValue),
  })
  .partial();
const ReportingCodeResponse = z
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
const PeriodBudgetResponse = z
  .object({
    period_num: z.number().int(),
    period_amt: z.number(),
    ytd_pre_close_amt: z.number(),
    ytd_budget: z.number(),
    variance: z.number(),
  })
  .partial();
const AccountBudgetResponse = z
  .object({
    cmpy_code: z.string(),
    acct_code: z.string(),
    year_num: z.number().int(),
    budget_num: z.number().int(),
    periods: z.array(PeriodBudgetResponse),
  })
  .partial();
const PeriodBudgetRequest = z.object({
  period_num: z.number().int(),
  period_amt: z.number(),
});
const AddAccountBudgetRequest = z.object({
  year_num: z.number().int(),
  budget_num: z.number().int(),
  periods: z.array(PeriodBudgetRequest).optional(),
});
const BudgetPeriod = z.object({
  period_num: z.number().int(),
  period_amt: z.number(),
});
const UpdateAccountBudgetRequest = z.object({
  year_num: z.number().int(),
  budget_num: z.number().int(),
  periods: z.array(BudgetPeriod),
});
const PeriodBalanceResponse = z
  .object({
    period_num: z.number().int(),
    open_amt: z.number(),
    debit_amt: z.number(),
    credit_amt: z.number(),
    close_amt: z.number(),
    pre_close_amt: z.number(),
  })
  .partial();
const AccountBalanceResponse = z
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
const RptCodes = z
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
const AccountReportingCodesResponse = z
  .object({
    cmpy_code: z.string(),
    acct_code: z.string(),
    assoc_acct_code: z.string().nullable(),
    resp_name: z.string().nullable(),
    resp_e_mail: z.string().nullable(),
    rpt_codes: RptCodes,
  })
  .partial();
const RptCodes2 = z
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
const UpdateAccountReportingCodesRequest = z
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
const GLLineResponse = z
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
const JournalResponse = z
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
const TaxJournalLine = z.object({
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
const CommonTaxJournalRequest = z.object({
  jour_date: z.string().min(1),
  year_num: z.number().int(),
  period_num: z.number().int(),
  com1_text: z.string().max(40).nullish(),
  com2_text: z.string().max(40).nullish(),
  control_amt: z.number().nullish(),
  gl_lines: z.array(TaxJournalLine).optional(),
});
const AddTaxJournalRequest = CommonTaxJournalRequest.and(
  z.object({}).partial()
);
const AddTaxJournalResponse = z
  .object({ cmpy_code: z.string(), jour_num: z.number().int() })
  .partial();
const UpdateTaxJournalRequest = CommonTaxJournalRequest.and(
  z.object({}).partial()
);
const StandardJournalLine = z.object({
  acct_code: z.string().min(1).max(18),
  ref_text: z.string().max(10).nullish(),
  analysis_text: z.string().max(16).nullish(),
  desc_text: z.string().min(1).max(4000),
  debit_amt: z.number(),
  credit_amt: z.number(),
});
const CommonGeneralJournalRequest = z.object({
  jour_code: z.string().min(1),
  jour_date: z.string().min(1),
  year_num: z.number().int(),
  period_num: z.number().int(),
  com1_text: z.string().max(40).nullish(),
  com2_text: z.string().max(40).nullish(),
  control_amt: z.number().nullish(),
  gl_lines: z.array(StandardJournalLine).optional(),
});
const AddGeneralJournalRequest = CommonGeneralJournalRequest.and(
  z.object({}).partial()
);
const AddGeneralJournalResponse = z
  .object({ cmpy_code: z.string(), jour_num: z.number().int() })
  .partial();
const UpdateGeneralJournalRequest = CommonGeneralJournalRequest.and(
  z.object({}).partial()
);
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
const CommonEmployeeRequest = z.object({
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
const UpdateEmployeeRequest = CommonEmployeeRequest.and(z.object({}).partial());
const AddEmployeeRequest = CommonEmployeeRequest.and(z.object({}).partial());
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
const CommonEmployeeStandardNoteUpdateRequest = z.object({
  note_cat: z.string().min(1).max(3),
  note_date: z.string().min(1).datetime({ offset: true }),
  note_text: z.string().min(1).max(4000),
});
const AddEmployeeStandardNoteRequest =
  CommonEmployeeStandardNoteUpdateRequest.and(z.object({}).partial());
const UpdateEmployeeStandardNoteRequest =
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
const CommonEmployeeConfidentialNoteUpdateRequest = z.object({
  note_cat: z.string().min(1).max(3),
  note_date: z.string().min(1).datetime({ offset: true }),
  note_text: z.string().min(1).max(4000),
});
const AddEmployeeConfidentialNoteRequest =
  CommonEmployeeConfidentialNoteUpdateRequest.and(z.object({}).partial());
const UpdateEmployeeConfidentialNoteRequest =
  CommonEmployeeConfidentialNoteUpdateRequest.and(z.object({}).partial());
const PDActivityUDFlagResponse = z
  .object({
    ud1_flg: z.string().max(1).nullable(),
    ud2_flg: z.string().max(1).nullable(),
    ud3_flg: z.string().max(1).nullable(),
    ud4_flg: z.string().max(1).nullable(),
    ud5_flg: z.string().max(1).nullable(),
  })
  .partial();
const PDActivityUDCodeResponse = z
  .object({
    ud6_code: z.string().max(3).nullable(),
    ud7_code: z.string().max(3).nullable(),
    ud8_code: z.string().max(3).nullable(),
    ud9_code: z.string().max(3).nullable(),
    ud10_code: z.string().max(3).nullable(),
  })
  .partial();
const PDActivityUDTextResponse = z
  .object({
    ud11_text: z.string().max(100).nullable(),
    ud12_text: z.string().max(100).nullable(),
    ud13_text: z.string().max(100).nullable(),
    ud14_text: z.string().max(100).nullable(),
    ud15_text: z.string().max(100).nullable(),
  })
  .partial();
const PDActivityUDAttachmentResponse = z
  .object({
    ud16_attachment_details: AttachmentDetails,
    ud17_attachment_details: AttachmentDetails,
    ud18_attachment_details: AttachmentDetails,
    ud19_attachment_details: AttachmentDetails,
    ud20_attachment_details: AttachmentDetails,
  })
  .partial();
const PDUDFieldsResponse = z
  .object({
    ud_flags: PDActivityUDFlagResponse,
    ud_codes: PDActivityUDCodeResponse,
    ud_text: PDActivityUDTextResponse,
    ud_attachments: PDActivityUDAttachmentResponse,
  })
  .partial();
const EmployeePDActivityResponse = z
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
const PDActivityUDFlagUpdateRequest = z
  .object({
    ud1_flg: z.string().max(1).nullable(),
    ud2_flg: z.string().max(1).nullable(),
    ud3_flg: z.string().max(1).nullable(),
    ud4_flg: z.string().max(1).nullable(),
    ud5_flg: z.string().max(1).nullable(),
  })
  .partial();
const PDActivityUDCodeUpdateRequest = z
  .object({
    ud6_code: z.string().max(3).nullable(),
    ud7_code: z.string().max(3).nullable(),
    ud8_code: z.string().max(3).nullable(),
    ud9_code: z.string().max(3).nullable(),
    ud10_code: z.string().max(3).nullable(),
  })
  .partial();
const PDActivityUDTextUpdateRequest = z
  .object({
    ud11_text: z.string().max(100).nullable(),
    ud12_text: z.string().max(100).nullable(),
    ud13_text: z.string().max(100).nullable(),
    ud14_text: z.string().max(100).nullable(),
    ud15_text: z.string().max(100).nullable(),
  })
  .partial();
const PDActivityUDFieldsRequest = z
  .object({
    ud_flags: PDActivityUDFlagUpdateRequest,
    ud_codes: PDActivityUDCodeUpdateRequest,
    ud_text: PDActivityUDTextUpdateRequest,
  })
  .partial();
const CommonEmployeePDActivityUpdateRequest = z.object({
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
const AddEmployeePDActivityRequest = CommonEmployeePDActivityUpdateRequest.and(
  z.object({}).partial()
);
const UpdateEmployeePDActivityRequest =
  CommonEmployeePDActivityUpdateRequest.and(z.object({}).partial());
const UDFieldOptionsResponse = z
  .object({ ud_fields: UDFieldTypes, cmpy_code: z.string() })
  .partial();
const EmployeePhotoChange = z
  .object({
    emp_code: z.string(),
    photo_update_on: z.string().datetime({ offset: true }),
  })
  .partial();
const EmployeePhotoChangesResponse = z
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
const CommonEmployeeQualificationUpdateRequest = z.object({
  inst_code: z.string().min(1).max(4),
  qual_cat: z.string().min(1).max(4),
  qual_text: z.string().min(1).max(200),
  reminder_flg: z.boolean(),
  valid_date: z.string().nullish(),
});
const AddEmployeeQualificationRequest =
  CommonEmployeeQualificationUpdateRequest.and(z.object({}).partial());
const UpdateEmployeeQualificationRequest =
  CommonEmployeeQualificationUpdateRequest.and(z.object({}).partial());
const UDAreaFlagResponse = z
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
const UDAreaCodeResponse = z
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
const UDAreaTextResponse = z
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
const UDAreaDateResponse = z
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
const UDAreaAttachmentResponse = z
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
const UDAreaFieldsResponse = z
  .object({
    ud_flags: UDAreaFlagResponse,
    ud_codes: UDAreaCodeResponse,
    ud_text: UDAreaTextResponse,
    ud_dates: UDAreaDateResponse,
    ud_attachments: UDAreaAttachmentResponse,
  })
  .partial();
const EmployeeUDAreaResponse = z
  .object({
    cmpy_code: z.string(),
    area_code: z.string(),
    emp_code: z.string(),
    update_on: z.string().datetime({ offset: true }).nullable(),
    ud_fields: UDAreaFieldsResponse,
  })
  .partial();
const UDAreaFlagRequest = z
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
const UDAreaCodeRequest = z
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
const UDAreaTextRequest = z
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
const UDAreaDateRequest = z
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
const UDAreaFieldsRequest = z
  .object({
    ud_flags: UDAreaFlagRequest,
    ud_codes: UDAreaCodeRequest,
    ud_text: UDAreaTextRequest,
    ud_dates: UDAreaDateRequest,
  })
  .partial();
const CommonEmployeeUDAreaUpdateRequest = z
  .object({ ud_fields: UDAreaFieldsRequest })
  .partial();
const AddEmployeeUDAreaRequest = CommonEmployeeUDAreaUpdateRequest.and(
  z.object({}).partial()
);
const UpdateEmployeeUDAreaRequest = CommonEmployeeUDAreaUpdateRequest.and(
  z.object({}).partial()
);
const ValidationResponse = z
  .object({
    valid_result: z.string(),
    min_val: z.number().int().nullable(),
    max_val: z.number().int().nullable(),
  })
  .partial();
const AssessmentMethodResponse = z
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
  .partial();
const ActivityResponse = z
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
const ObjectiveResult = z
  .object({ obj_code: z.string(), stud_result: z.string().nullable() })
  .partial();
const ActivityStudentResultsResponse = z
  .object({
    cmpy_code: z.string(),
    activity_id: z.number().int(),
    stud_code: z.string(),
    objective_results: z.array(ObjectiveResult),
  })
  .partial();
const ObjectiveResult2 = z.object({
  obj_code: z.string().min(1).max(4),
  stud_result: z.string().min(1).max(7),
});
const UpdateActivityStudentResultsRequest = z
  .object({ objective_results: z.array(ObjectiveResult2) })
  .partial();

export const schemas = {
  GetUserTokenRequest,
  AllowedCompanyDetails,
  UserTokenResponse,
  ExceptionDetails,
  ValidationExceptionDetails,
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
  StudentPhotoChange,
  StudentPhotoChangesResponse,
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
