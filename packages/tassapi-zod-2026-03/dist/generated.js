"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
const zod_1 = require("zod");
const GetUserTokenRequest = zod_1.z
    .object({ clientKey: zod_1.z.string(), clientSecret: zod_1.z.string() })
    .partial();
const AllowedCompanyDetails = zod_1.z
    .object({
    cmpy_code: zod_1.z.string().nullable(),
    name_text: zod_1.z.string().nullable(),
})
    .partial();
const UserTokenResponse = zod_1.z
    .object({
    token: zod_1.z.string(),
    token_expiry_date: zod_1.z.string().datetime({ offset: true }),
    allowed_companies: zod_1.z.array(AllowedCompanyDetails),
})
    .partial();
const ExceptionDetails = zod_1.z
    .object({ status: zod_1.z.number().int(), title: zod_1.z.string(), detail: zod_1.z.string() })
    .partial();
const ValidationExceptionDetails = ExceptionDetails.and(zod_1.z.object({ errors: zod_1.z.record(zod_1.z.array(zod_1.z.string())) }).partial());
const AbsenceReasonOptionsResponse = zod_1.z
    .object({
    code: zod_1.z.string(),
    desc: zod_1.z.string(),
    is_active: zod_1.z.boolean(),
    acceptable_reason: zod_1.z.boolean(),
})
    .partial();
const OptionsResponseActive = zod_1.z
    .object({ code: zod_1.z.string(), desc: zod_1.z.string(), is_active: zod_1.z.boolean() })
    .partial();
const OptionsResponse = zod_1.z
    .object({ code: zod_1.z.string(), desc: zod_1.z.string() })
    .partial();
const StudentAttendanceResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    absent_date: zod_1.z.string(),
    absent_time: zod_1.z.string().nullable(),
    absent_type: zod_1.z.string(),
    reas_code: zod_1.z.string().nullable(),
    dcert_flg: zod_1.z.boolean(),
    par_flg: zod_1.z.boolean(),
    par_date: zod_1.z.string().datetime({ offset: true }).nullable(),
    corr_flg: zod_1.z.boolean(),
    corr_date: zod_1.z.string().datetime({ offset: true }).nullable(),
    prd_code: zod_1.z.number().int().nullable(),
    ref_num: zod_1.z.string().nullable(),
    abs_from_time: zod_1.z.string().nullable(),
    abs_to_time: zod_1.z.string().nullable(),
    key_num: zod_1.z.number().int(),
    tt_id: zod_1.z.number().int().nullable(),
    note_text: zod_1.z.string().nullable(),
    year_grp: zod_1.z.number().int().nullable(),
    boarder: zod_1.z.boolean(),
    house: zod_1.z.string().nullable(),
    pctut_grp: zod_1.z.string().nullable(),
    gender: zod_1.z.string().nullable(),
    campus_code: zod_1.z.string().nullable(),
    has_attachment: zod_1.z.boolean(),
})
    .partial();
const StudentCommunicationRulesParentNameResponse = zod_1.z
    .object({
    parent_type: zod_1.z.string(),
    deceased_flg: zod_1.z.boolean(),
    first_name: zod_1.z.string(),
    gender: zod_1.z.string().nullable(),
    initials: zod_1.z.string().nullable(),
    person_posn: zod_1.z.number().int(),
    preferred_name: zod_1.z.string(),
    suffix: zod_1.z.string().nullable(),
    surname: zod_1.z.string(),
    title: zod_1.z.string().nullable(),
})
    .partial();
const StudentCommunicationRulesCommunicationTypeResponse = zod_1.z
    .object({ commtype_code: zod_1.z.string() })
    .partial();
const StudentCommunicationRulesParentAddressResponse = zod_1.z
    .object({
    add_num: zod_1.z.number().int(),
    addr1: zod_1.z.string().nullable(),
    addr2: zod_1.z.string().nullable(),
    addr3: zod_1.z.string().nullable(),
    addr_desc: zod_1.z.string().nullable(),
    addressee: zod_1.z.string().nullable(),
    bus_phone: zod_1.z.string().nullable(),
    call_order: zod_1.z.number().int().nullable(),
    country: zod_1.z.string().nullable(),
    e_mail1: zod_1.z.string().nullable(),
    e_mail2: zod_1.z.string().nullable(),
    fax: zod_1.z.string().nullable(),
    home_phone: zod_1.z.string().nullable(),
    mobile1: zod_1.z.string().nullable(),
    mobile2: zod_1.z.string().nullable(),
    person_posn: zod_1.z.number().int().nullable(),
    post_code: zod_1.z.string().nullable(),
    relationship: zod_1.z.string().nullable(),
    salutation: zod_1.z.string().nullable(),
    sms_flg1: zod_1.z.boolean(),
    sms_flg2: zod_1.z.boolean(),
    state_code: zod_1.z.string().nullable(),
    town_sub: zod_1.z.string().nullable(),
    comm_types: zod_1.z.array(StudentCommunicationRulesCommunicationTypeResponse),
})
    .partial();
const StudentCommunicationRulesParentDetailsResponse = zod_1.z
    .object({
    par_code: zod_1.z.string(),
    parent_names: zod_1.z.array(StudentCommunicationRulesParentNameResponse),
    addresses: zod_1.z.array(StudentCommunicationRulesParentAddressResponse),
})
    .partial();
const StudentCommunicationRulesResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    comm_rules: zod_1.z.array(StudentCommunicationRulesParentDetailsResponse),
})
    .partial();
const StudentResponse = zod_1.z
    .object({
    alt_id: zod_1.z.string().nullable(),
    boarder: zod_1.z.boolean(),
    campus_code: zod_1.z.string().nullable(),
    ceider: zod_1.z.string().nullable(),
    cmpy_code: zod_1.z.string(),
    compare_flg: zod_1.z.string(),
    date_arrival: zod_1.z.string().nullable(),
    distance_ed: zod_1.z.boolean(),
    dob: zod_1.z.string().nullable(),
    doe: zod_1.z.string().nullable(),
    dol: zod_1.z.string().nullable(),
    e_mail: zod_1.z.string().nullable(),
    entry_lev: zod_1.z.number().int().nullable(),
    ffpos: zod_1.z.boolean(),
    first_name: zod_1.z.string().nullable(),
    form_cls: zod_1.z.string().nullable(),
    fte: zod_1.z.number().nullable(),
    gender: zod_1.z.string(),
    house: zod_1.z.string().nullable(),
    idm_id: zod_1.z.string().nullable(),
    mob_phone: zod_1.z.string().nullable(),
    multipar_flg: zod_1.z.boolean(),
    next_yr_ind: zod_1.z.string(),
    other_name: zod_1.z.string().nullable(),
    par_code: zod_1.z.string().nullable(),
    pctut_grp: zod_1.z.string().nullable(),
    preferred_name: zod_1.z.string().nullable(),
    preferred_surname: zod_1.z.string().nullable(),
    prev_school: zod_1.z.string().nullable(),
    privacy_flg: zod_1.z.boolean(),
    religion: zod_1.z.string().nullable(),
    resident_sts: zod_1.z.string().nullable(),
    sms_flg: zod_1.z.boolean(),
    stud_code: zod_1.z.string(),
    stud_govt_id: zod_1.z.string().nullable(),
    stud_id: zod_1.z.string().nullable(),
    surname: zod_1.z.string(),
    update_on: zod_1.z.string().datetime({ offset: true }).nullable(),
    usi: zod_1.z.string().nullable(),
    visa_expiry: zod_1.z.string().nullable(),
    visa_subclass: zod_1.z.string().nullable(),
    web_access_ind: zod_1.z.boolean(),
    year_grp: zod_1.z.number().int().nullable(),
})
    .partial();
const CommonStudentUpdateRequest = zod_1.z.object({
    alt_id: zod_1.z.string().max(40).nullish(),
    boarder: zod_1.z.boolean().optional(),
    campus_code: zod_1.z.string().max(3).nullish(),
    ceider: zod_1.z.string().max(9).nullish(),
    compare_flg: zod_1.z.string().min(1).max(1),
    date_arrival: zod_1.z.string().nullish(),
    distance_ed: zod_1.z.boolean().optional(),
    dob: zod_1.z.string().nullish(),
    doe: zod_1.z.string().min(1),
    dol: zod_1.z.string().nullish(),
    e_mail: zod_1.z.string().max(60).nullish(),
    entry_lev: zod_1.z.number().int().nullish(),
    ffpos: zod_1.z.boolean().optional(),
    first_name: zod_1.z.string().min(1).max(50),
    form_cls: zod_1.z.string().max(2).nullish(),
    fte: zod_1.z.number(),
    gender: zod_1.z.string().min(1).max(3),
    house: zod_1.z.string().max(2).nullish(),
    idm_id: zod_1.z.string().max(100).nullish(),
    mob_phone: zod_1.z.string().max(30).nullish(),
    next_yr_ind: zod_1.z.string().max(1).optional(),
    other_name: zod_1.z.string().max(50).nullish(),
    pctut_grp: zod_1.z.string().max(5).nullish(),
    preferred_name: zod_1.z.string().min(1).max(20),
    preferred_surname: zod_1.z.string().min(1).max(50),
    prev_school: zod_1.z.string().max(5).nullish(),
    privacy_flg: zod_1.z.boolean().optional(),
    religion: zod_1.z.string().max(2).nullish(),
    resident_sts: zod_1.z.string().max(3).nullish(),
    sms_flg: zod_1.z.boolean().optional(),
    stud_code: zod_1.z.string().max(8).optional(),
    surname: zod_1.z.string().min(1).max(30),
    usi: zod_1.z.string().max(10).nullish(),
    visa_expiry: zod_1.z.string().nullish(),
    visa_subclass: zod_1.z.string().max(6).nullish(),
    web_access_ind: zod_1.z.boolean().optional(),
    year_grp: zod_1.z.number().int(),
});
const UpdateStudentRequest = CommonStudentUpdateRequest.and(zod_1.z.object({}).partial());
const OperationBase = zod_1.z
    .object({
    path: zod_1.z.string().nullable(),
    op: zod_1.z.string().nullable(),
    from: zod_1.z.string().nullable(),
})
    .partial();
const Operation = OperationBase.and(zod_1.z.object({ value: zod_1.z.unknown().nullable() }).partial());
const StudentMceecdyaResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    arrive_yr: zod_1.z.number().int().nullable(),
    flote_code: zod_1.z.string().nullable(),
    fnse_code: zod_1.z.string().nullable(),
    focc_code: zod_1.z.string().nullable(),
    fse_code: zod_1.z.string().nullable(),
    mlote_code: zod_1.z.string().nullable(),
    mnse_code: zod_1.z.string().nullable(),
    mocc_code: zod_1.z.string().nullable(),
    mse_code: zod_1.z.string().nullable(),
    s_indig_sts: zod_1.z.string().nullable(),
    scob_code: zod_1.z.string().nullable(),
    slote_code: zod_1.z.string().nullable(),
    update_on: zod_1.z.string().datetime({ offset: true }).nullable(),
})
    .partial();
const UpdateStudentMceecdyaRequest = zod_1.z
    .object({
    arrive_yr: zod_1.z.number().int().nullable(),
    flote_code: zod_1.z.string().nullable(),
    fnse_code: zod_1.z.string().nullable(),
    focc_code: zod_1.z.string().nullable(),
    fse_code: zod_1.z.string().nullable(),
    mlote_code: zod_1.z.string().nullable(),
    mnse_code: zod_1.z.string().nullable(),
    mocc_code: zod_1.z.string().nullable(),
    mse_code: zod_1.z.string().nullable(),
    s_indig_sts: zod_1.z.string().nullable(),
    scob_code: zod_1.z.string().nullable(),
    slote_code: zod_1.z.string().nullable(),
})
    .partial();
const StudentStandardNoteResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    note_cat: zod_1.z.string().nullable(),
    note_date: zod_1.z.string().datetime({ offset: true }),
    note_text: zod_1.z.string().nullable(),
    note_uid: zod_1.z.string(),
    has_attachment: zod_1.z.boolean(),
})
    .partial();
const CommonStudentStandardNoteUpdateRequest = zod_1.z.object({
    note_cat: zod_1.z.string().min(1).max(3),
    note_date: zod_1.z.string().min(1).datetime({ offset: true }),
    note_text: zod_1.z.string().min(1).max(4000),
});
const AddStudentStandardNoteRequest = CommonStudentStandardNoteUpdateRequest.and(zod_1.z.object({}).partial());
const UpdateStudentStandardNoteRequest = CommonStudentStandardNoteUpdateRequest.and(zod_1.z.object({}).partial());
const FileResponse = zod_1.z
    .object({
    file_name: zod_1.z.string().nullable(),
    file_size: zod_1.z.number().int().nullable(),
    date_uploaded: zod_1.z.string().datetime({ offset: true }).nullable(),
    attach_id: zod_1.z.string().nullable(),
})
    .partial();
const Notes_AddStudentStandardNotesAttachment_Body = zod_1.z
    .object({
    file_name: zod_1.z.string().nullable(),
    file_content: zod_1.z.instanceof(File).nullable(),
})
    .partial()
    .passthrough();
const NewAttachmentResponse = zod_1.z.object({ attach_id: zod_1.z.string() }).partial();
const StudentConfidentialNoteResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    note_cat: zod_1.z.string().nullable(),
    note_date: zod_1.z.string().datetime({ offset: true }),
    note_text: zod_1.z.string().nullable(),
    note_uid: zod_1.z.string(),
    has_attachment: zod_1.z.boolean(),
})
    .partial();
const CommonStudentConfidentialNoteUpdateRequest = zod_1.z.object({
    note_cat: zod_1.z.string().min(1).max(3),
    note_date: zod_1.z.string().min(1).datetime({ offset: true }),
    note_text: zod_1.z.string().min(1).max(4000),
});
const AddStudentConfidentialNoteRequest = CommonStudentConfidentialNoteUpdateRequest.and(zod_1.z.object({}).partial());
const UpdateStudentConfidentialNoteRequest = CommonStudentConfidentialNoteUpdateRequest.and(zod_1.z.object({}).partial());
const StudentPhotoChange = zod_1.z
    .object({
    stud_code: zod_1.z.string(),
    photo_update_on: zod_1.z.string().datetime({ offset: true }),
})
    .partial();
const StudentPhotoChangesResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    change_key: zod_1.z.string(),
    changes: zod_1.z.array(StudentPhotoChange),
})
    .partial();
const UDFieldDetails = zod_1.z
    .object({
    field_name: zod_1.z.string(),
    field_desc: zod_1.z.string().nullable(),
    sort_order: zod_1.z.number().int(),
})
    .partial();
const UDFieldReferenceValue = zod_1.z
    .object({
    ud_code: zod_1.z.string().nullable(),
    ud_desc: zod_1.z.string(),
    sort_order: zod_1.z.number().int(),
})
    .partial();
const UDCodeFieldDetails = UDFieldDetails.and(zod_1.z.object({ reference_values: zod_1.z.array(UDFieldReferenceValue) }).partial());
const UDAttachmentFieldDetails = UDFieldDetails.and(zod_1.z.object({ field_number: zod_1.z.number().int() }).partial());
const UDFieldTypes = zod_1.z
    .object({
    ud_flags: zod_1.z.array(UDFieldDetails),
    ud_codes: zod_1.z.array(UDCodeFieldDetails),
    ud_text: zod_1.z.array(UDFieldDetails),
    ud_dates: zod_1.z.array(UDFieldDetails),
    ud_attachments: zod_1.z.array(UDAttachmentFieldDetails),
})
    .partial();
const UDAreaOptionsResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    area_code: zod_1.z.string(),
    area_desc: zod_1.z.string(),
    ud_fields: UDFieldTypes,
})
    .partial();
const StudentUDAreaFlagResponse = zod_1.z
    .object({
    ud1_flg: zod_1.z.string().max(1).nullable(),
    ud2_flg: zod_1.z.string().max(1).nullable(),
    ud3_flg: zod_1.z.string().max(1).nullable(),
    ud4_flg: zod_1.z.string().max(1).nullable(),
    ud5_flg: zod_1.z.string().max(1).nullable(),
    ud6_flg: zod_1.z.string().max(1).nullable(),
    ud7_flg: zod_1.z.string().max(1).nullable(),
    ud8_flg: zod_1.z.string().max(1).nullable(),
    ud9_flg: zod_1.z.string().max(1).nullable(),
    ud10_flg: zod_1.z.string().max(1).nullable(),
})
    .partial();
const StudentUDAreaCodeResponse = zod_1.z
    .object({
    ud11_code: zod_1.z.string().max(3).nullable(),
    ud12_code: zod_1.z.string().max(3).nullable(),
    ud13_code: zod_1.z.string().max(3).nullable(),
    ud14_code: zod_1.z.string().max(3).nullable(),
    ud15_code: zod_1.z.string().max(3).nullable(),
    ud16_code: zod_1.z.string().max(3).nullable(),
    ud17_code: zod_1.z.string().max(3).nullable(),
    ud18_code: zod_1.z.string().max(3).nullable(),
    ud19_code: zod_1.z.string().max(3).nullable(),
    ud20_code: zod_1.z.string().max(3).nullable(),
})
    .partial();
const StudentUDAreaTextResponse = zod_1.z
    .object({
    ud21_text: zod_1.z.string().max(100).nullable(),
    ud22_text: zod_1.z.string().max(100).nullable(),
    ud23_text: zod_1.z.string().max(100).nullable(),
    ud24_text: zod_1.z.string().max(100).nullable(),
    ud25_text: zod_1.z.string().max(100).nullable(),
    ud26_text: zod_1.z.string().max(100).nullable(),
    ud27_text: zod_1.z.string().max(100).nullable(),
    ud28_text: zod_1.z.string().max(100).nullable(),
    ud29_text: zod_1.z.string().max(100).nullable(),
    ud30_text: zod_1.z.string().max(100).nullable(),
})
    .partial();
const StudentUDAreaDateResponse = zod_1.z
    .object({
    ud31_date: zod_1.z.string().max(100).nullable(),
    ud32_date: zod_1.z.string().max(100).nullable(),
    ud33_date: zod_1.z.string().max(100).nullable(),
    ud34_date: zod_1.z.string().max(100).nullable(),
    ud35_date: zod_1.z.string().max(100).nullable(),
    ud36_date: zod_1.z.string().max(100).nullable(),
    ud37_date: zod_1.z.string().max(100).nullable(),
    ud38_date: zod_1.z.string().max(100).nullable(),
    ud39_date: zod_1.z.string().max(100).nullable(),
    ud40_date: zod_1.z.string().max(100).nullable(),
})
    .partial();
const FileDetails = zod_1.z
    .object({
    file_name: zod_1.z.string().nullable(),
    file_size: zod_1.z.number().int().nullable(),
    date_uploaded: zod_1.z.string().datetime({ offset: true }).nullable(),
    attach_id: zod_1.z.string().nullable(),
})
    .partial();
const AttachmentDetails = zod_1.z
    .object({ field_number: zod_1.z.number().int(), files: zod_1.z.array(FileDetails) })
    .partial();
const StudentUDAreaAttachmentResponse = zod_1.z
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
const StudentUDAreaFieldsResponse = zod_1.z
    .object({
    ud_flags: StudentUDAreaFlagResponse,
    ud_codes: StudentUDAreaCodeResponse,
    ud_text: StudentUDAreaTextResponse,
    ud_dates: StudentUDAreaDateResponse,
    ud_attachments: StudentUDAreaAttachmentResponse,
})
    .partial();
const StudentUDAreaResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    area_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    update_on: zod_1.z.string().datetime({ offset: true }).nullable(),
    ud_fields: StudentUDAreaFieldsResponse,
})
    .partial();
const StudentUDAreaFlagRequest = zod_1.z
    .object({
    ud1_flg: zod_1.z.string().max(1).nullable(),
    ud2_flg: zod_1.z.string().max(1).nullable(),
    ud3_flg: zod_1.z.string().max(1).nullable(),
    ud4_flg: zod_1.z.string().max(1).nullable(),
    ud5_flg: zod_1.z.string().max(1).nullable(),
    ud6_flg: zod_1.z.string().max(1).nullable(),
    ud7_flg: zod_1.z.string().max(1).nullable(),
    ud8_flg: zod_1.z.string().max(1).nullable(),
    ud9_flg: zod_1.z.string().max(1).nullable(),
    ud10_flg: zod_1.z.string().max(1).nullable(),
})
    .partial();
const StudentUDAreaCodeRequest = zod_1.z
    .object({
    ud11_code: zod_1.z.string().max(3).nullable(),
    ud12_code: zod_1.z.string().max(3).nullable(),
    ud13_code: zod_1.z.string().max(3).nullable(),
    ud14_code: zod_1.z.string().max(3).nullable(),
    ud15_code: zod_1.z.string().max(3).nullable(),
    ud16_code: zod_1.z.string().max(3).nullable(),
    ud17_code: zod_1.z.string().max(3).nullable(),
    ud18_code: zod_1.z.string().max(3).nullable(),
    ud19_code: zod_1.z.string().max(3).nullable(),
    ud20_code: zod_1.z.string().max(3).nullable(),
})
    .partial();
const StudentUDAreaTextRequest = zod_1.z
    .object({
    ud21_text: zod_1.z.string().max(100).nullable(),
    ud22_text: zod_1.z.string().max(100).nullable(),
    ud23_text: zod_1.z.string().max(100).nullable(),
    ud24_text: zod_1.z.string().max(100).nullable(),
    ud25_text: zod_1.z.string().max(100).nullable(),
    ud26_text: zod_1.z.string().max(100).nullable(),
    ud27_text: zod_1.z.string().max(100).nullable(),
    ud28_text: zod_1.z.string().max(100).nullable(),
    ud29_text: zod_1.z.string().max(100).nullable(),
    ud30_text: zod_1.z.string().max(100).nullable(),
})
    .partial();
const StudentUDAreaDateRequest = zod_1.z
    .object({
    ud31_date: zod_1.z.string().nullable(),
    ud32_date: zod_1.z.string().nullable(),
    ud33_date: zod_1.z.string().nullable(),
    ud34_date: zod_1.z.string().nullable(),
    ud35_date: zod_1.z.string().nullable(),
    ud36_date: zod_1.z.string().nullable(),
    ud37_date: zod_1.z.string().nullable(),
    ud38_date: zod_1.z.string().nullable(),
    ud39_date: zod_1.z.string().nullable(),
    ud40_date: zod_1.z.string().nullable(),
})
    .partial();
const StudentUDAreaFieldsRequest = zod_1.z
    .object({
    ud_flags: StudentUDAreaFlagRequest,
    ud_codes: StudentUDAreaCodeRequest,
    ud_text: StudentUDAreaTextRequest,
    ud_dates: StudentUDAreaDateRequest,
})
    .partial();
const CommonStudentUDAreaUpdateRequest = zod_1.z
    .object({ ud_fields: StudentUDAreaFieldsRequest })
    .partial();
const AddStudentUDAreaRequest = CommonStudentUDAreaUpdateRequest.and(zod_1.z.object({}).partial());
const UpdateStudentUDAreaRequest = CommonStudentUDAreaUpdateRequest.and(zod_1.z.object({}).partial());
const UDFlagResponse = zod_1.z
    .object({
    ud1_flg: zod_1.z.string().max(1).nullable(),
    ud2_flg: zod_1.z.string().max(1).nullable(),
    ud3_flg: zod_1.z.string().max(1).nullable(),
    ud4_flg: zod_1.z.string().max(1).nullable(),
    ud5_flg: zod_1.z.string().max(1).nullable(),
    ud6_flg: zod_1.z.string().max(1).nullable(),
    ud7_flg: zod_1.z.string().max(1).nullable(),
    ud8_flg: zod_1.z.string().max(1).nullable(),
    ud9_flg: zod_1.z.string().max(1).nullable(),
    ud10_flg: zod_1.z.string().max(1).nullable(),
})
    .partial();
const UDCodeResponse = zod_1.z
    .object({
    ud11_code: zod_1.z.string().max(3).nullable(),
    ud12_code: zod_1.z.string().max(3).nullable(),
    ud13_code: zod_1.z.string().max(3).nullable(),
    ud14_code: zod_1.z.string().max(3).nullable(),
    ud15_code: zod_1.z.string().max(3).nullable(),
    ud16_code: zod_1.z.string().max(3).nullable(),
    ud17_code: zod_1.z.string().max(3).nullable(),
    ud18_code: zod_1.z.string().max(3).nullable(),
    ud19_code: zod_1.z.string().max(3).nullable(),
    ud20_code: zod_1.z.string().max(3).nullable(),
})
    .partial();
const UDTextResponse = zod_1.z
    .object({
    ud21_text: zod_1.z.string().max(100).nullable(),
    ud22_text: zod_1.z.string().max(100).nullable(),
    ud23_text: zod_1.z.string().max(100).nullable(),
    ud24_text: zod_1.z.string().max(100).nullable(),
    ud25_text: zod_1.z.string().max(100).nullable(),
})
    .partial();
const UDFieldsResponse = zod_1.z
    .object({
    ud_flags: UDFlagResponse,
    ud_codes: UDCodeResponse,
    ud_text: UDTextResponse,
})
    .partial();
const StudentUDFieldsResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    ud_fields: UDFieldsResponse,
})
    .partial();
const UDFlagRequest = zod_1.z
    .object({
    ud1_flg: zod_1.z.string().max(1).nullable(),
    ud2_flg: zod_1.z.string().max(1).nullable(),
    ud3_flg: zod_1.z.string().max(1).nullable(),
    ud4_flg: zod_1.z.string().max(1).nullable(),
    ud5_flg: zod_1.z.string().max(1).nullable(),
    ud6_flg: zod_1.z.string().max(1).nullable(),
    ud7_flg: zod_1.z.string().max(1).nullable(),
    ud8_flg: zod_1.z.string().max(1).nullable(),
    ud9_flg: zod_1.z.string().max(1).nullable(),
    ud10_flg: zod_1.z.string().max(1).nullable(),
})
    .partial();
const UDCodeRequest = zod_1.z
    .object({
    ud11_code: zod_1.z.string().max(3).nullable(),
    ud12_code: zod_1.z.string().max(3).nullable(),
    ud13_code: zod_1.z.string().max(3).nullable(),
    ud14_code: zod_1.z.string().max(3).nullable(),
    ud15_code: zod_1.z.string().max(3).nullable(),
    ud16_code: zod_1.z.string().max(3).nullable(),
    ud17_code: zod_1.z.string().max(3).nullable(),
    ud18_code: zod_1.z.string().max(3).nullable(),
    ud19_code: zod_1.z.string().max(3).nullable(),
    ud20_code: zod_1.z.string().max(3).nullable(),
})
    .partial();
const UDTextRequest = zod_1.z
    .object({
    ud21_text: zod_1.z.string().max(100).nullable(),
    ud22_text: zod_1.z.string().max(100).nullable(),
    ud23_text: zod_1.z.string().max(100).nullable(),
    ud24_text: zod_1.z.string().max(100).nullable(),
    ud25_text: zod_1.z.string().max(100).nullable(),
})
    .partial();
const UDFieldsRequest = zod_1.z
    .object({
    ud_flags: UDFlagRequest,
    ud_codes: UDCodeRequest,
    ud_text: UDTextRequest,
})
    .partial();
const UpdateStudentUDFieldsRequest = zod_1.z
    .object({ ud_fields: UDFieldsRequest })
    .partial();
const StudentUDFieldOptionDetails = zod_1.z
    .object({
    field_name: zod_1.z.string(),
    field_desc: zod_1.z.string().nullable(),
    sort_order: zod_1.z.number().int(),
})
    .partial();
const StudentUDFieldOptionReferenceValue = zod_1.z
    .object({
    ud_code: zod_1.z.string().nullable(),
    ud_desc: zod_1.z.string().nullable(),
    sort_order: zod_1.z.number().int(),
})
    .partial();
const StudentUDCodeFieldOptionDetails = StudentUDFieldOptionDetails.and(zod_1.z
    .object({ reference_values: zod_1.z.array(StudentUDFieldOptionReferenceValue) })
    .partial());
const StudentUDFieldOptionTypes = zod_1.z
    .object({
    ud_flags: zod_1.z.array(StudentUDFieldOptionDetails),
    ud_codes: zod_1.z.array(StudentUDCodeFieldOptionDetails),
    ud_text: zod_1.z.array(StudentUDFieldOptionDetails),
})
    .partial();
const StudentUDFieldOptionResponse = zod_1.z
    .object({ ud_fields: StudentUDFieldOptionTypes, cmpy_code: zod_1.z.string() })
    .partial();
const EmployeeLeaveBalanceResponse = zod_1.z
    .object({
    acr_code: zod_1.z.string(),
    cmpy_code: zod_1.z.string(),
    emp_code: zod_1.z.string(),
    ent_qty: zod_1.z.number().nullable(),
    lst_up_date: zod_1.z.string().nullable(),
    non_acr_day_qty: zod_1.z.number().int().nullable(),
    nts_code: zod_1.z.string().nullable(),
    rate_amt: zod_1.z.number().nullable(),
    str_ent_date: zod_1.z.string().nullable(),
})
    .partial();
const UsualSigns = zod_1.z
    .object({
    wheez_flg: zod_1.z.boolean(),
    tight_flg: zod_1.z.boolean(),
    cough_flg: zod_1.z.boolean(),
    breath_flg: zod_1.z.boolean(),
    speak_flg: zod_1.z.boolean(),
    comm_text: zod_1.z.string().nullable(),
})
    .partial();
const WorseningSigns = zod_1.z
    .object({
    wheez_flg: zod_1.z.boolean(),
    tight_flg: zod_1.z.boolean(),
    cough_flg: zod_1.z.boolean(),
    breath_flg: zod_1.z.boolean(),
    speak_flg: zod_1.z.boolean(),
    comm_text: zod_1.z.string().nullable(),
})
    .partial();
const Triggers = zod_1.z
    .object({
    exercise_flg: zod_1.z.boolean(),
    cold_virus_flg: zod_1.z.boolean(),
    pollen_flg: zod_1.z.boolean(),
    dust_flg: zod_1.z.boolean(),
    food_flg: zod_1.z.boolean(),
    food_text: zod_1.z.string().nullable(),
    comm_text: zod_1.z.string().nullable(),
})
    .partial();
const AsthmaManagementResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    usual_signs: UsualSigns,
    worsening_signs: WorseningSigns,
    triggers: Triggers,
})
    .partial();
const UsualSigns2 = zod_1.z
    .object({
    wheez_flg: zod_1.z.boolean(),
    tight_flg: zod_1.z.boolean(),
    cough_flg: zod_1.z.boolean(),
    breath_flg: zod_1.z.boolean(),
    speak_flg: zod_1.z.boolean(),
    comm_text: zod_1.z.string().max(200).nullable(),
})
    .partial();
const WorseningSigns2 = zod_1.z
    .object({
    wheez_flg: zod_1.z.boolean(),
    tight_flg: zod_1.z.boolean(),
    cough_flg: zod_1.z.boolean(),
    breath_flg: zod_1.z.boolean(),
    speak_flg: zod_1.z.boolean(),
    comm_text: zod_1.z.string().max(200).nullable(),
})
    .partial();
const Triggers2 = zod_1.z
    .object({
    exercise_flg: zod_1.z.boolean(),
    cold_virus_flg: zod_1.z.boolean(),
    pollen_flg: zod_1.z.boolean(),
    dust_flg: zod_1.z.boolean(),
    food_flg: zod_1.z.boolean(),
    food_text: zod_1.z.string().max(200).nullable(),
    comm_text: zod_1.z.string().max(200).nullable(),
})
    .partial();
const UpdateAsthmaManagementRequest = zod_1.z
    .object({
    usual_signs: UsualSigns2,
    worsening_signs: WorseningSigns2,
    triggers: Triggers2,
})
    .partial();
const UdText = zod_1.z
    .object({
    ud1_text: zod_1.z.string().nullable(),
    ud2_text: zod_1.z.string().nullable(),
    ud3_text: zod_1.z.string().nullable(),
    ud4_text: zod_1.z.string().nullable(),
    ud5_text: zod_1.z.string().nullable(),
    ud6_text: zod_1.z.string().nullable(),
    ud7_text: zod_1.z.string().nullable(),
    ud8_text: zod_1.z.string().nullable(),
    ud9_text: zod_1.z.string().nullable(),
    ud10_text: zod_1.z.string().nullable(),
})
    .partial();
const UdFields = zod_1.z.object({ ud_text: UdText }).partial();
const StudentMedicalConditionResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    last_occ_date: zod_1.z.string().nullable(),
    mcond_code: zod_1.z.string(),
    severe_ind: zod_1.z.boolean(),
    stud_code: zod_1.z.string(),
    treat_text: zod_1.z.string().nullable(),
    active_flg: zod_1.z.boolean(),
    ud_fields: UdFields,
    has_attachment: zod_1.z.boolean(),
    has_note: zod_1.z.boolean(),
})
    .partial();
const UdText2 = zod_1.z
    .object({
    ud1_text: zod_1.z.string().max(200).nullable(),
    ud2_text: zod_1.z.string().max(200).nullable(),
    ud3_text: zod_1.z.string().max(200).nullable(),
    ud4_text: zod_1.z.string().max(200).nullable(),
    ud5_text: zod_1.z.string().max(200).nullable(),
    ud6_text: zod_1.z.string().max(200).nullable(),
    ud7_text: zod_1.z.string().max(200).nullable(),
    ud8_text: zod_1.z.string().max(200).nullable(),
    ud9_text: zod_1.z.string().max(200).nullable(),
    ud10_text: zod_1.z.string().max(200).nullable(),
})
    .partial();
const UdFields2 = zod_1.z.object({ ud_text: UdText2 }).partial();
const AddStudentMedicalConditionRequest = zod_1.z
    .object({
    last_occ_date: zod_1.z.string().nullable(),
    mcond_code: zod_1.z.string().max(3),
    severe_ind: zod_1.z.boolean(),
    treat_text: zod_1.z.string().max(4000).nullable(),
    active_flg: zod_1.z.boolean(),
    ud_fields: UdFields2,
})
    .partial();
const UdText3 = zod_1.z
    .object({
    ud1_text: zod_1.z.string().max(200).nullable(),
    ud2_text: zod_1.z.string().max(200).nullable(),
    ud3_text: zod_1.z.string().max(200).nullable(),
    ud4_text: zod_1.z.string().max(200).nullable(),
    ud5_text: zod_1.z.string().max(200).nullable(),
    ud6_text: zod_1.z.string().max(200).nullable(),
    ud7_text: zod_1.z.string().max(200).nullable(),
    ud8_text: zod_1.z.string().max(200).nullable(),
    ud9_text: zod_1.z.string().max(200).nullable(),
    ud10_text: zod_1.z.string().max(200).nullable(),
})
    .partial();
const UdFields3 = zod_1.z.object({ ud_text: UdText3 }).partial();
const UpdateStudentMedicalConditionRequest = zod_1.z
    .object({
    last_occ_date: zod_1.z.string().nullable(),
    severe_ind: zod_1.z.boolean(),
    treat_text: zod_1.z.string().max(4000).nullable(),
    active_flg: zod_1.z.boolean(),
    ud_fields: UdFields3,
})
    .partial();
const StudentMedicalConditionNoteResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    mcond_code: zod_1.z.string(),
    note_date: zod_1.z.string(),
    note_text: zod_1.z.string().nullable(),
    note_uid: zod_1.z.string(),
})
    .partial();
const AddStudentMedicalConditionNoteRequest = zod_1.z.object({
    note_date: zod_1.z.string().min(1),
    note_text: zod_1.z.string().max(4000).nullish(),
});
const UpdateStudentMedicalConditionNoteRequest = zod_1.z.object({
    note_date: zod_1.z.string().min(1),
    note_text: zod_1.z.string().max(4000).nullish(),
});
const StudentImmunisationResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    imm_code: zod_1.z.string(),
    imm_year: zod_1.z.number().int().nullable(),
    stud_code: zod_1.z.string(),
})
    .partial();
const AddStudentImmunisationRequest = zod_1.z.object({
    imm_code: zod_1.z.string().min(1).max(2),
    imm_year: zod_1.z.number().int(),
});
const UpdateStudentImmunisationRequest = zod_1.z.object({
    imm_year: zod_1.z.number().int(),
});
const StudentImmunisationRegisterResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    air_state_date: zod_1.z.string().nullable(),
    next_due_date: zod_1.z.string().nullable(),
    stud_code: zod_1.z.string(),
    status_code: zod_1.z.string().nullable(),
    has_attachment: zod_1.z.boolean(),
})
    .partial();
const UpdateStudentImmunisationRegisterRequest = zod_1.z
    .object({
    next_due_date: zod_1.z.string().nullable(),
    status_code: zod_1.z.string().nullable(),
})
    .partial();
const Immunisations_AddStudentImmunisationRegisterAttachment_Body = zod_1.z
    .object({
    air_state_date: zod_1.z.string().datetime({ offset: true }).nullable(),
    file_name: zod_1.z.string().nullable(),
    file_content: zod_1.z.instanceof(File).nullable(),
})
    .partial()
    .passthrough();
const StudentMedicationResponse = zod_1.z
    .object({
    active_flg: zod_1.z.boolean(),
    administer: zod_1.z.string().nullable(),
    cmpy_code: zod_1.z.string(),
    doc_phone: zod_1.z.string().nullable(),
    end_date: zod_1.z.string().nullable(),
    expiry_date: zod_1.z.string().nullable(),
    mcond_code: zod_1.z.string(),
    med_detl: zod_1.z.string().nullable(),
    med_meth: zod_1.z.string().nullable(),
    med_text: zod_1.z.string().nullable(),
    medication_uid: zod_1.z.string(),
    min_time_between_doses: zod_1.z.number().int().nullable(),
    script_doc: zod_1.z.string().nullable(),
    start_date: zod_1.z.string().nullable(),
    stud_code: zod_1.z.string(),
    training: zod_1.z.boolean(),
    has_attachment: zod_1.z.boolean(),
    has_note: zod_1.z.boolean(),
    has_schedule: zod_1.z.boolean(),
})
    .partial();
const AddStudentMedicationRequest = zod_1.z
    .object({
    active_flg: zod_1.z.boolean(),
    administer: zod_1.z.string().max(1),
    doc_phone: zod_1.z.string().max(25).nullable(),
    end_date: zod_1.z.string().nullable(),
    expiry_date: zod_1.z.string().nullable(),
    med_detl: zod_1.z.string().max(200).nullable(),
    med_meth: zod_1.z.string().max(200).nullable(),
    med_text: zod_1.z.string().max(200),
    min_time_between_doses: zod_1.z.number().int().nullable(),
    script_doc: zod_1.z.string().max(30).nullable(),
    start_date: zod_1.z.string().nullable(),
    training: zod_1.z.boolean(),
})
    .partial();
const UpdateStudentMedicationRequest = zod_1.z
    .object({
    active_flg: zod_1.z.boolean(),
    administer: zod_1.z.string().max(1),
    doc_phone: zod_1.z.string().max(25).nullable(),
    end_date: zod_1.z.string().nullable(),
    expiry_date: zod_1.z.string().nullable(),
    med_detl: zod_1.z.string().max(200).nullable(),
    med_meth: zod_1.z.string().max(200).nullable(),
    med_text: zod_1.z.string().max(200).nullable(),
    medication_uid: zod_1.z.string(),
    script_doc: zod_1.z.string().max(30).nullable(),
    start_date: zod_1.z.string().nullable(),
    stud_code: zod_1.z.string(),
    training: zod_1.z.boolean(),
})
    .partial();
const StudentMedicationNoteResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    mcond_code: zod_1.z.string(),
    medication_uid: zod_1.z.string(),
    note_date: zod_1.z.string(),
    note_text: zod_1.z.string().nullable(),
    note_uid: zod_1.z.string(),
})
    .partial();
const AddStudentMedicationNoteRequest = zod_1.z
    .object({ note_date: zod_1.z.string(), note_text: zod_1.z.string().max(4000).nullable() })
    .partial();
const UpdateStudentMedicationNoteRequest = zod_1.z
    .object({ note_date: zod_1.z.string(), note_text: zod_1.z.string().max(4000).nullable() })
    .partial();
const DaysResponse = zod_1.z
    .object({
    mon_flg: zod_1.z.boolean(),
    tue_flg: zod_1.z.boolean(),
    wed_flg: zod_1.z.boolean(),
    thu_flg: zod_1.z.boolean(),
    fri_flg: zod_1.z.boolean(),
    sat_flg: zod_1.z.boolean(),
    sun_flg: zod_1.z.boolean(),
})
    .partial();
const StudentMedicationScheduleResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    mcond_code: zod_1.z.string(),
    medication_uid: zod_1.z.string(),
    sched_uid: zod_1.z.string(),
    med_dose: zod_1.z.string().nullable(),
    med_time: zod_1.z.string(),
    shed_start_date: zod_1.z.string().nullable(),
    shed_end_date: zod_1.z.string().nullable(),
    days: DaysResponse,
})
    .partial();
const DaysRequest = zod_1.z
    .object({
    mon_flg: zod_1.z.boolean(),
    tue_flg: zod_1.z.boolean(),
    wed_flg: zod_1.z.boolean(),
    thu_flg: zod_1.z.boolean(),
    fri_flg: zod_1.z.boolean(),
    sat_flg: zod_1.z.boolean(),
    sun_flg: zod_1.z.boolean(),
})
    .partial();
const AddStudentMedicationScheduleRequest = zod_1.z.object({
    med_dose: zod_1.z.string().min(1).max(100),
    med_time: zod_1.z.string().min(1),
    shed_start_date: zod_1.z.string().min(1),
    shed_end_date: zod_1.z.string().nullish(),
    days: DaysRequest.optional(),
});
const DaysRequest2 = zod_1.z
    .object({
    mon_flg: zod_1.z.boolean(),
    tue_flg: zod_1.z.boolean(),
    wed_flg: zod_1.z.boolean(),
    thu_flg: zod_1.z.boolean(),
    fri_flg: zod_1.z.boolean(),
    sat_flg: zod_1.z.boolean(),
    sun_flg: zod_1.z.boolean(),
})
    .partial();
const UpdateStudentMedicationScheduleRequest = zod_1.z.object({
    med_dose: zod_1.z.string().min(1).max(100),
    med_time: zod_1.z.string().min(1),
    shed_start_date: zod_1.z.string().min(1),
    shed_end_date: zod_1.z.string().nullish(),
    days: DaysRequest2.optional(),
});
const StudentMedicalStandardNoteResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    note_cat: zod_1.z.string().nullable(),
    note_date: zod_1.z.string().datetime({ offset: true }),
    note_text: zod_1.z.string().nullable(),
    note_uid: zod_1.z.string(),
    has_attachment: zod_1.z.boolean(),
})
    .partial();
const CommonStudentMedicalStandardNoteUpdateRequest = zod_1.z.object({
    note_cat: zod_1.z.string().min(1).max(3),
    note_date: zod_1.z.string().min(1).datetime({ offset: true }),
    note_text: zod_1.z.string().min(1).max(4000),
});
const AddStudentMedicalStandardNoteRequest = CommonStudentMedicalStandardNoteUpdateRequest.and(zod_1.z.object({}).partial());
const UpdateStudentMedicalStandardNoteRequest = CommonStudentMedicalStandardNoteUpdateRequest.and(zod_1.z.object({}).partial());
const StudentMedicalConfidentialNoteResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    note_cat: zod_1.z.string().nullable(),
    note_date: zod_1.z.string().datetime({ offset: true }),
    note_text: zod_1.z.string().nullable(),
    note_uid: zod_1.z.string(),
    has_attachment: zod_1.z.boolean(),
})
    .partial();
const CommonStudentMedicalConfidentialNoteUpdateRequest = zod_1.z.object({
    note_cat: zod_1.z.string().min(1).max(3),
    note_date: zod_1.z.string().min(1).datetime({ offset: true }),
    note_text: zod_1.z.string().min(1).max(4000),
});
const AddStudentMedicalConfidentialNoteRequest = CommonStudentMedicalConfidentialNoteUpdateRequest.and(zod_1.z.object({}).partial());
const UpdateStudentMedicalConfidentialNoteRequest = CommonStudentMedicalConfidentialNoteUpdateRequest.and(zod_1.z.object({}).partial());
const StudentPractitionerResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    doct_name: zod_1.z.string().nullable(),
    doct_phone: zod_1.z.string().nullable(),
    prac_num: zod_1.z.number().int(),
    ptype_code: zod_1.z.string().nullable(),
    stud_code: zod_1.z.string(),
})
    .partial();
const AddStudentPractitionerRequest = zod_1.z.object({
    doct_phone: zod_1.z.string().max(25).nullish(),
    doct_name: zod_1.z.string().min(1).max(30),
    ptype_code: zod_1.z.string().min(1).max(3),
});
const CommonStudentPractitionerUpdateRequest = zod_1.z
    .object({
    doct_name: zod_1.z.string().max(50).nullable(),
    doct_phone: zod_1.z.string().max(20).nullable(),
    ptype_code: zod_1.z.string().max(10).nullable(),
})
    .partial();
const UpdateStudentPractitionerRequest = CommonStudentPractitionerUpdateRequest.and(zod_1.z.object({}).partial());
const StudentMedicalSupplementaryResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    stud_code: zod_1.z.string(),
    msupp_code: zod_1.z.string(),
    comm_text: zod_1.z.string().nullable(),
})
    .partial();
const AddStudentMedicalSupplementaryRequest = zod_1.z
    .object({
    msupp_code: zod_1.z.string().max(3),
    comm_text: zod_1.z.string().max(200).nullable(),
})
    .partial();
const UpdateStudentMedicalSupplementaryRequest = zod_1.z
    .object({ comm_text: zod_1.z.string().max(200).nullable() })
    .partial();
const YearPeriodOptionsResponse = zod_1.z
    .object({
    year_num: zod_1.z.number().int().nullable(),
    period_num: zod_1.z.number().int().nullable(),
    start_date: zod_1.z.string().nullable(),
    end_date: zod_1.z.string().nullable(),
})
    .partial();
const SegmentResponse = zod_1.z
    .object({
    flex_code: zod_1.z.string(),
    desc_text: zod_1.z.string(),
    group_code: zod_1.z.string(),
})
    .partial();
const CodeStructureResponse = zod_1.z
    .object({
    start_num: zod_1.z.number().int(),
    length_num: zod_1.z.number().int(),
    desc_text: zod_1.z.string().nullable(),
    default_text: zod_1.z.string().nullable(),
    type_ind: zod_1.z.string(),
    dept_consol_flg: zod_1.z.boolean(),
    segments: zod_1.z.array(SegmentResponse),
})
    .partial();
const CodeFormatRulesResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    code_structure: zod_1.z.array(CodeStructureResponse),
})
    .partial();
const ReportingCodeOptionsFieldReferenceValue = zod_1.z
    .object({ ref_code: zod_1.z.string(), ref_desc: zod_1.z.string() })
    .partial();
const ReportingCodeOptionsFieldDetails = zod_1.z
    .object({
    field_name: zod_1.z.string(),
    field_desc: zod_1.z.string(),
    reference_values: zod_1.z.array(ReportingCodeOptionsFieldReferenceValue),
})
    .partial();
const ReportingCodeResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    field_details: zod_1.z.array(ReportingCodeOptionsFieldDetails),
})
    .partial();
const GeneralLedgerAccountResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    acct_code: zod_1.z.string(),
    desc_text: zod_1.z.string(),
    start_year_num: zod_1.z.number().int(),
    start_period_num: zod_1.z.number().int(),
    end_year_num: zod_1.z.number().int(),
    end_period_num: zod_1.z.number().int(),
    group_code: zod_1.z.string().nullable(),
    external_code: zod_1.z.string().nullable(),
    type_ind: zod_1.z.string(),
    def_tax_code: zod_1.z.string().nullable(),
})
    .partial();
const AddGeneralLedgerAccountRequest = zod_1.z.object({
    acct_code: zod_1.z.string().min(1).max(18),
    desc_text: zod_1.z.string().min(1).max(40),
    start_year_num: zod_1.z.number().int(),
    start_period_num: zod_1.z.number().int(),
    end_year_num: zod_1.z.number().int(),
    end_period_num: zod_1.z.number().int(),
    group_code: zod_1.z.string().max(7).nullish(),
    external_code: zod_1.z.string().max(20).nullish(),
    type_ind: zod_1.z.string().min(1).max(1),
    def_tax_code: zod_1.z.string().max(3).nullish(),
});
const UpdateGeneralLedgerAccountRequest = zod_1.z.object({
    acct_code: zod_1.z.string().min(1).max(18),
    desc_text: zod_1.z.string().min(1).max(40),
    start_year_num: zod_1.z.number().int(),
    start_period_num: zod_1.z.number().int(),
    end_year_num: zod_1.z.number().int(),
    end_period_num: zod_1.z.number().int(),
    group_code: zod_1.z.string().max(7).nullish(),
    external_code: zod_1.z.string().max(20).nullish(),
    type_ind: zod_1.z.string().min(1).max(1),
    def_tax_code: zod_1.z.string().max(3).nullish(),
});
const PeriodBudgetResponse = zod_1.z
    .object({
    period_num: zod_1.z.number().int(),
    period_amt: zod_1.z.number(),
    ytd_pre_close_amt: zod_1.z.number(),
    ytd_budget: zod_1.z.number(),
    variance: zod_1.z.number(),
})
    .partial();
const AccountBudgetResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    acct_code: zod_1.z.string(),
    year_num: zod_1.z.number().int(),
    budget_num: zod_1.z.number().int(),
    periods: zod_1.z.array(PeriodBudgetResponse),
})
    .partial();
const PeriodBudgetRequest = zod_1.z.object({
    period_num: zod_1.z.number().int(),
    period_amt: zod_1.z.number(),
});
const AddAccountBudgetRequest = zod_1.z.object({
    year_num: zod_1.z.number().int(),
    budget_num: zod_1.z.number().int(),
    periods: zod_1.z.array(PeriodBudgetRequest).optional(),
});
const BudgetPeriod = zod_1.z.object({
    period_num: zod_1.z.number().int(),
    period_amt: zod_1.z.number(),
});
const UpdateAccountBudgetRequest = zod_1.z.object({
    year_num: zod_1.z.number().int(),
    budget_num: zod_1.z.number().int(),
    periods: zod_1.z.array(BudgetPeriod),
});
const PeriodBalanceResponse = zod_1.z
    .object({
    period_num: zod_1.z.number().int(),
    open_amt: zod_1.z.number(),
    debit_amt: zod_1.z.number(),
    credit_amt: zod_1.z.number(),
    close_amt: zod_1.z.number(),
    pre_close_amt: zod_1.z.number(),
})
    .partial();
const AccountBalanceResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    acct_code: zod_1.z.string(),
    year_num: zod_1.z.number().int(),
    period_bals: zod_1.z.array(PeriodBalanceResponse),
})
    .partial();
const AccountTransactionResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    acct_code: zod_1.z.string(),
    year_num: zod_1.z.number().int(),
    period_num: zod_1.z.number().int(),
    jour_code: zod_1.z.string().nullable(),
    jour_num: zod_1.z.number().int(),
    jour_seq_num: zod_1.z.number().int(),
    analysis_text: zod_1.z.string().nullable(),
    tran_date: zod_1.z.string(),
    ref_text: zod_1.z.string().nullable(),
    ref_num: zod_1.z.number().int(),
    desc_text: zod_1.z.string().nullable(),
    debit_amt: zod_1.z.number().nullable(),
    credit_amt: zod_1.z.number().nullable(),
})
    .partial();
const RptCodes = zod_1.z
    .object({
    rpt1_code: zod_1.z.string().nullable(),
    rpt2_code: zod_1.z.string().nullable(),
    rpt3_code: zod_1.z.string().nullable(),
    rpt4_code: zod_1.z.string().nullable(),
    rpt5_code: zod_1.z.string().nullable(),
    rpt6_code: zod_1.z.string().nullable(),
    rpt7_code: zod_1.z.string().nullable(),
    rpt8_code: zod_1.z.string().nullable(),
    rpt9_code: zod_1.z.string().nullable(),
    rpt10_code: zod_1.z.string().nullable(),
    rpt11_code: zod_1.z.string().nullable(),
    rpt12_code: zod_1.z.string().nullable(),
    rpt13_code: zod_1.z.string().nullable(),
    rpt14_code: zod_1.z.string().nullable(),
    rpt15_code: zod_1.z.string().nullable(),
    rpt16_code: zod_1.z.string().nullable(),
    rpt17_code: zod_1.z.string().nullable(),
    rpt18_code: zod_1.z.string().nullable(),
    rpt19_code: zod_1.z.string().nullable(),
    rpt20_code: zod_1.z.string().nullable(),
})
    .partial();
const AccountReportingCodesResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    acct_code: zod_1.z.string(),
    assoc_acct_code: zod_1.z.string().nullable(),
    resp_name: zod_1.z.string().nullable(),
    resp_e_mail: zod_1.z.string().nullable(),
    rpt_codes: RptCodes,
})
    .partial();
const RptCodes2 = zod_1.z
    .object({
    rpt1_code: zod_1.z.string().max(4).nullable(),
    rpt2_code: zod_1.z.string().max(4).nullable(),
    rpt3_code: zod_1.z.string().max(4).nullable(),
    rpt4_code: zod_1.z.string().max(4).nullable(),
    rpt5_code: zod_1.z.string().max(4).nullable(),
    rpt6_code: zod_1.z.string().max(4).nullable(),
    rpt7_code: zod_1.z.string().max(4).nullable(),
    rpt8_code: zod_1.z.string().max(4).nullable(),
    rpt9_code: zod_1.z.string().max(4).nullable(),
    rpt10_code: zod_1.z.string().max(4).nullable(),
    rpt11_code: zod_1.z.string().max(4).nullable(),
    rpt12_code: zod_1.z.string().max(4).nullable(),
    rpt13_code: zod_1.z.string().max(4).nullable(),
    rpt14_code: zod_1.z.string().max(4).nullable(),
    rpt15_code: zod_1.z.string().max(4).nullable(),
    rpt16_code: zod_1.z.string().max(4).nullable(),
    rpt17_code: zod_1.z.string().max(4).nullable(),
    rpt18_code: zod_1.z.string().max(4).nullable(),
    rpt19_code: zod_1.z.string().max(4).nullable(),
    rpt20_code: zod_1.z.string().max(4).nullable(),
})
    .partial();
const UpdateAccountReportingCodesRequest = zod_1.z
    .object({
    assoc_acct_code: zod_1.z.string().max(18).nullable(),
    resp_name: zod_1.z.string().max(40).nullable(),
    resp_e_mail: zod_1.z.string().max(60).nullable(),
    rpt_codes: RptCodes2,
})
    .partial();
const AccountResponsibilityResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    acct_code: zod_1.z.string(),
    user_code: zod_1.z.string(),
    source_flg: zod_1.z.string(),
    resp_flg: zod_1.z.number().int(),
})
    .partial();
const AddAccountResponsibilityRequest = zod_1.z
    .object({
    user_code: zod_1.z.string().max(7),
    source_flg: zod_1.z.string().max(1),
    resp_flg: zod_1.z.number().int(),
})
    .partial();
const UpdateAccountResponsibilityRequest = zod_1.z
    .object({
    user_code: zod_1.z.string().max(7),
    source_flg: zod_1.z.string().max(1),
    resp_flg: zod_1.z.number().int(),
})
    .partial();
const JournalTypeOptionsResponse = zod_1.z
    .object({
    code: zod_1.z.string(),
    desc: zod_1.z.string().nullable(),
    gl_flag: zod_1.z.boolean(),
})
    .partial();
const GLAccountOptionsResponse = zod_1.z
    .object({
    code: zod_1.z.string(),
    desc: zod_1.z.string(),
    start_year: zod_1.z.number().int(),
    end_year: zod_1.z.number().int(),
    start_period: zod_1.z.number().int(),
    end_period: zod_1.z.number().int(),
})
    .partial();
const GLLineResponse = zod_1.z
    .object({
    acct_code: zod_1.z.string(),
    seq_num: zod_1.z.number().int(),
    ref_text: zod_1.z.string().nullable(),
    ref_num: zod_1.z.number().int().nullable(),
    analysis_text: zod_1.z.string().nullable(),
    desc_text: zod_1.z.string().nullable(),
    debit_amt: zod_1.z.number(),
    credit_amt: zod_1.z.number(),
    tax_code: zod_1.z.string().nullable(),
    tax_type: zod_1.z.string().nullable(),
    tax_amt: zod_1.z.number().nullable(),
    tax_per: zod_1.z.number().nullable(),
    tax_net: zod_1.z.number().nullable(),
    gl_acct_desc: zod_1.z.string().nullable(),
    warnings: zod_1.z.array(zod_1.z.string()),
})
    .partial();
const JournalResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    jour_code: zod_1.z.string(),
    jour_num: zod_1.z.number().int(),
    jour_date: zod_1.z.string().nullable(),
    post_flag: zod_1.z.boolean(),
    year_num: zod_1.z.number().int(),
    period_num: zod_1.z.number().int(),
    com1_text: zod_1.z.string().nullable(),
    com2_text: zod_1.z.string().nullable(),
    control_amt: zod_1.z.number(),
    bank_code: zod_1.z.string().nullable(),
    bank_desc: zod_1.z.string().nullable(),
    bank_gl_acct: zod_1.z.string().nullable(),
    warnings: zod_1.z.array(zod_1.z.string()),
    gl_lines: zod_1.z.array(GLLineResponse),
})
    .partial();
const TaxJournalLine = zod_1.z.object({
    acct_code: zod_1.z.string().min(1).max(18),
    ref_text: zod_1.z.string().max(10).nullish(),
    analysis_text: zod_1.z.string().max(16).nullish(),
    desc_text: zod_1.z.string().min(1).max(4000),
    debit_amt: zod_1.z.number(),
    credit_amt: zod_1.z.number(),
    tax_type: zod_1.z.string().min(1).max(1),
    tax_code: zod_1.z.string().min(1).max(3),
    tax_amt: zod_1.z.number().optional(),
});
const CommonTaxJournalRequest = zod_1.z.object({
    jour_date: zod_1.z.string().min(1),
    year_num: zod_1.z.number().int(),
    period_num: zod_1.z.number().int(),
    com1_text: zod_1.z.string().max(40).nullish(),
    com2_text: zod_1.z.string().max(40).nullish(),
    control_amt: zod_1.z.number().nullish(),
    gl_lines: zod_1.z.array(TaxJournalLine).optional(),
});
const AddTaxJournalRequest = CommonTaxJournalRequest.and(zod_1.z.object({}).partial());
const AddTaxJournalResponse = zod_1.z
    .object({ cmpy_code: zod_1.z.string(), jour_num: zod_1.z.number().int() })
    .partial();
const UpdateTaxJournalRequest = CommonTaxJournalRequest.and(zod_1.z.object({}).partial());
const StandardJournalLine = zod_1.z.object({
    acct_code: zod_1.z.string().min(1).max(18),
    ref_text: zod_1.z.string().max(10).nullish(),
    analysis_text: zod_1.z.string().max(16).nullish(),
    desc_text: zod_1.z.string().min(1).max(4000),
    debit_amt: zod_1.z.number(),
    credit_amt: zod_1.z.number(),
});
const CommonGeneralJournalRequest = zod_1.z.object({
    jour_code: zod_1.z.string().min(1),
    jour_date: zod_1.z.string().min(1),
    year_num: zod_1.z.number().int(),
    period_num: zod_1.z.number().int(),
    com1_text: zod_1.z.string().max(40).nullish(),
    com2_text: zod_1.z.string().max(40).nullish(),
    control_amt: zod_1.z.number().nullish(),
    gl_lines: zod_1.z.array(StandardJournalLine).optional(),
});
const AddGeneralJournalRequest = CommonGeneralJournalRequest.and(zod_1.z.object({}).partial());
const AddGeneralJournalResponse = zod_1.z
    .object({ cmpy_code: zod_1.z.string(), jour_num: zod_1.z.number().int() })
    .partial();
const UpdateGeneralJournalRequest = CommonGeneralJournalRequest.and(zod_1.z.object({}).partial());
const EmployeeResponse = zod_1.z
    .object({
    add1_text: zod_1.z.string().nullable(),
    add2_text: zod_1.z.string().nullable(),
    alt_id: zod_1.z.string().nullable(),
    birth_date: zod_1.z.string().nullable(),
    cessation_type: zod_1.z.string().nullable(),
    city_text: zod_1.z.string().nullable(),
    cmpy_code: zod_1.z.string(),
    country_code: zod_1.z.string().nullable(),
    country_text: zod_1.z.string().nullable(),
    deceased_flg: zod_1.z.boolean(),
    driv_lic_text: zod_1.z.string().nullable(),
    e_mail: zod_1.z.string().nullable(),
    emp_code: zod_1.z.string(),
    first_name: zod_1.z.string().nullable(),
    gender: zod_1.z.string().nullable(),
    indig_status: zod_1.z.string().nullable(),
    initials: zod_1.z.string().nullable(),
    main_activity: zod_1.z.string().nullable(),
    marital_stat_flag: zod_1.z.string().nullable(),
    mob_phone: zod_1.z.string().nullable(),
    nok_add1_text: zod_1.z.string().nullable(),
    nok_add2_text: zod_1.z.string().nullable(),
    nok_city_text: zod_1.z.string().nullable(),
    nok_country_text: zod_1.z.string().nullable(),
    nok_name_text: zod_1.z.string().nullable(),
    nok_phone_h_text: zod_1.z.string().nullable(),
    nok_phone_w_text: zod_1.z.string().nullable(),
    nok_post_code: zod_1.z.string().nullable(),
    nok_relat_text: zod_1.z.string().nullable(),
    nok_state_text: zod_1.z.string().nullable(),
    other_name: zod_1.z.string().nullable(),
    phone_h_text: zod_1.z.string().nullable(),
    phone_w_text: zod_1.z.string().nullable(),
    position_text: zod_1.z.string().nullable(),
    position_title: zod_1.z.string().nullable(),
    post_code: zod_1.z.string().nullable(),
    preferred_name: zod_1.z.string().nullable(),
    previous_payroll_id: zod_1.z.string().nullable(),
    school_email: zod_1.z.string().nullable(),
    sms_flg: zod_1.z.boolean(),
    start_date: zod_1.z.string().nullable(),
    state_text: zod_1.z.string().nullable(),
    status_text: zod_1.z.string().nullable(),
    surname: zod_1.z.string().nullable(),
    suffix: zod_1.z.string().nullable(),
    supervisor_code: zod_1.z.string().nullable(),
    supervisor2_code: zod_1.z.string().nullable(),
    tch_code: zod_1.z.string().nullable(),
    term_date: zod_1.z.string().nullable(),
    title: zod_1.z.string().nullable(),
    update_on: zod_1.z.string().datetime({ offset: true }),
    vend_code: zod_1.z.string().nullable(),
})
    .partial();
const CommonEmployeeRequest = zod_1.z.object({
    add1_text: zod_1.z.string().max(60).nullish(),
    add2_text: zod_1.z.string().max(60).nullish(),
    alt_id: zod_1.z.string().max(40).nullish(),
    birth_date: zod_1.z.string().min(1),
    cessation_type: zod_1.z.string().max(1).nullish(),
    city_text: zod_1.z.string().max(46).nullish(),
    country_code: zod_1.z.string().max(2).nullish(),
    country_text: zod_1.z.string().max(20).nullish(),
    deceased_flg: zod_1.z.boolean().optional(),
    driv_lic_text: zod_1.z.string().max(10).nullish(),
    e_mail: zod_1.z.string().max(60).email().nullish(),
    emp_code: zod_1.z.string().min(1).max(7),
    first_name: zod_1.z.string().min(1).max(50),
    gender: zod_1.z.string().min(1).max(3),
    indig_status: zod_1.z.string().max(1).nullish(),
    initials: zod_1.z.string().min(1).max(5),
    main_activity: zod_1.z.string().max(4).nullish(),
    marital_stat_flag: zod_1.z.string().max(1).nullish(),
    mob_phone: zod_1.z.string().max(30).nullish(),
    nok_add1_text: zod_1.z.string().max(60).nullish(),
    nok_add2_text: zod_1.z.string().max(60).nullish(),
    nok_city_text: zod_1.z.string().max(46).nullish(),
    nok_country_text: zod_1.z.string().max(20).nullish(),
    nok_name_text: zod_1.z.string().max(30).nullish(),
    nok_phone_h_text: zod_1.z.string().max(30).nullish(),
    nok_phone_w_text: zod_1.z.string().max(30).nullish(),
    nok_post_code: zod_1.z.string().max(10).nullish(),
    nok_relat_text: zod_1.z.string().max(20).nullish(),
    nok_state_text: zod_1.z.string().max(3).nullish(),
    other_name: zod_1.z.string().max(50).nullish(),
    phone_h_text: zod_1.z.string().max(30).nullish(),
    phone_w_text: zod_1.z.string().max(30).nullish(),
    position_text: zod_1.z.string().max(20).nullish(),
    position_title: zod_1.z.string().max(100).nullish(),
    post_code: zod_1.z.string().min(1).max(10),
    preferred_name: zod_1.z.string().min(1).max(50),
    previous_payroll_id: zod_1.z.string().max(200).nullish(),
    school_email: zod_1.z.string().max(60).email().nullish(),
    sms_flg: zod_1.z.boolean().optional(),
    start_date: zod_1.z.string().min(1),
    state_text: zod_1.z.string().min(1).max(3),
    status_text: zod_1.z.string().min(1).max(1),
    surname: zod_1.z.string().min(1).max(50),
    suffix: zod_1.z.string().max(30).nullish(),
    supervisor_code: zod_1.z.string().max(7).nullish(),
    supervisor2_code: zod_1.z.string().max(7).nullish(),
    term_date: zod_1.z.string().nullish(),
    title: zod_1.z.string().min(1).max(15),
    vend_code: zod_1.z.string().max(8).nullish(),
});
const UpdateEmployeeRequest = CommonEmployeeRequest.and(zod_1.z.object({}).partial());
const AddEmployeeRequest = CommonEmployeeRequest.and(zod_1.z.object({}).partial());
const EmployeeStandardNoteResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    emp_code: zod_1.z.string(),
    note_cat: zod_1.z.string().nullable(),
    note_date: zod_1.z.string().datetime({ offset: true }),
    note_text: zod_1.z.string().nullable(),
    note_uid: zod_1.z.string(),
    has_attachment: zod_1.z.boolean(),
})
    .partial();
const CommonEmployeeStandardNoteUpdateRequest = zod_1.z.object({
    note_cat: zod_1.z.string().min(1).max(3),
    note_date: zod_1.z.string().min(1).datetime({ offset: true }),
    note_text: zod_1.z.string().min(1).max(4000),
});
const AddEmployeeStandardNoteRequest = CommonEmployeeStandardNoteUpdateRequest.and(zod_1.z.object({}).partial());
const UpdateEmployeeStandardNoteRequest = CommonEmployeeStandardNoteUpdateRequest.and(zod_1.z.object({}).partial());
const EmployeeConfidentialNoteResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    emp_code: zod_1.z.string(),
    note_cat: zod_1.z.string().nullable(),
    note_date: zod_1.z.string().datetime({ offset: true }),
    note_text: zod_1.z.string().nullable(),
    note_uid: zod_1.z.string(),
    has_attachment: zod_1.z.boolean(),
})
    .partial();
const CommonEmployeeConfidentialNoteUpdateRequest = zod_1.z.object({
    note_cat: zod_1.z.string().min(1).max(3),
    note_date: zod_1.z.string().min(1).datetime({ offset: true }),
    note_text: zod_1.z.string().min(1).max(4000),
});
const AddEmployeeConfidentialNoteRequest = CommonEmployeeConfidentialNoteUpdateRequest.and(zod_1.z.object({}).partial());
const UpdateEmployeeConfidentialNoteRequest = CommonEmployeeConfidentialNoteUpdateRequest.and(zod_1.z.object({}).partial());
const PDActivityUDFlagResponse = zod_1.z
    .object({
    ud1_flg: zod_1.z.string().max(1).nullable(),
    ud2_flg: zod_1.z.string().max(1).nullable(),
    ud3_flg: zod_1.z.string().max(1).nullable(),
    ud4_flg: zod_1.z.string().max(1).nullable(),
    ud5_flg: zod_1.z.string().max(1).nullable(),
})
    .partial();
const PDActivityUDCodeResponse = zod_1.z
    .object({
    ud6_code: zod_1.z.string().max(3).nullable(),
    ud7_code: zod_1.z.string().max(3).nullable(),
    ud8_code: zod_1.z.string().max(3).nullable(),
    ud9_code: zod_1.z.string().max(3).nullable(),
    ud10_code: zod_1.z.string().max(3).nullable(),
})
    .partial();
const PDActivityUDTextResponse = zod_1.z
    .object({
    ud11_text: zod_1.z.string().max(100).nullable(),
    ud12_text: zod_1.z.string().max(100).nullable(),
    ud13_text: zod_1.z.string().max(100).nullable(),
    ud14_text: zod_1.z.string().max(100).nullable(),
    ud15_text: zod_1.z.string().max(100).nullable(),
})
    .partial();
const PDActivityUDAttachmentResponse = zod_1.z
    .object({
    ud16_attachment_details: AttachmentDetails,
    ud17_attachment_details: AttachmentDetails,
    ud18_attachment_details: AttachmentDetails,
    ud19_attachment_details: AttachmentDetails,
    ud20_attachment_details: AttachmentDetails,
})
    .partial();
const PDUDFieldsResponse = zod_1.z
    .object({
    ud_flags: PDActivityUDFlagResponse,
    ud_codes: PDActivityUDCodeResponse,
    ud_text: PDActivityUDTextResponse,
    ud_attachments: PDActivityUDAttachmentResponse,
})
    .partial();
const EmployeePDActivityResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    cost_amt: zod_1.z.number().nullable(),
    duration: zod_1.z.number().nullable(),
    emp_code: zod_1.z.string(),
    finish_date: zod_1.z.string().nullable(),
    other_amt: zod_1.z.number().nullable(),
    pd_prov_code: zod_1.z.string().nullable(),
    pd_stat_code: zod_1.z.string().nullable(),
    pd_type_code: zod_1.z.string().nullable(),
    pdact_num: zod_1.z.number().int(),
    pdact_text: zod_1.z.string().nullable(),
    start_date: zod_1.z.string().nullable(),
    updated_on: zod_1.z.string().datetime({ offset: true }).nullable(),
    ud_fields: PDUDFieldsResponse,
})
    .partial();
const PDActivityUDFlagUpdateRequest = zod_1.z
    .object({
    ud1_flg: zod_1.z.string().max(1).nullable(),
    ud2_flg: zod_1.z.string().max(1).nullable(),
    ud3_flg: zod_1.z.string().max(1).nullable(),
    ud4_flg: zod_1.z.string().max(1).nullable(),
    ud5_flg: zod_1.z.string().max(1).nullable(),
})
    .partial();
const PDActivityUDCodeUpdateRequest = zod_1.z
    .object({
    ud6_code: zod_1.z.string().max(3).nullable(),
    ud7_code: zod_1.z.string().max(3).nullable(),
    ud8_code: zod_1.z.string().max(3).nullable(),
    ud9_code: zod_1.z.string().max(3).nullable(),
    ud10_code: zod_1.z.string().max(3).nullable(),
})
    .partial();
const PDActivityUDTextUpdateRequest = zod_1.z
    .object({
    ud11_text: zod_1.z.string().max(100).nullable(),
    ud12_text: zod_1.z.string().max(100).nullable(),
    ud13_text: zod_1.z.string().max(100).nullable(),
    ud14_text: zod_1.z.string().max(100).nullable(),
    ud15_text: zod_1.z.string().max(100).nullable(),
})
    .partial();
const PDActivityUDFieldsRequest = zod_1.z
    .object({
    ud_flags: PDActivityUDFlagUpdateRequest,
    ud_codes: PDActivityUDCodeUpdateRequest,
    ud_text: PDActivityUDTextUpdateRequest,
})
    .partial();
const CommonEmployeePDActivityUpdateRequest = zod_1.z.object({
    cost_amt: zod_1.z.number().nullish(),
    duration: zod_1.z.number(),
    finish_date: zod_1.z.string().min(1),
    other_amt: zod_1.z.number().nullish(),
    pd_prov_code: zod_1.z.string().max(3).nullish(),
    pd_stat_code: zod_1.z.string().min(1).max(3),
    pd_type_code: zod_1.z.string().max(3).nullish(),
    pdact_text: zod_1.z.string().min(1).max(200),
    start_date: zod_1.z.string().min(1),
    ud_fields: PDActivityUDFieldsRequest.optional(),
});
const AddEmployeePDActivityRequest = CommonEmployeePDActivityUpdateRequest.and(zod_1.z.object({}).partial());
const UpdateEmployeePDActivityRequest = CommonEmployeePDActivityUpdateRequest.and(zod_1.z.object({}).partial());
const UDFieldOptionsResponse = zod_1.z
    .object({ ud_fields: UDFieldTypes, cmpy_code: zod_1.z.string() })
    .partial();
const EmployeePhotoChange = zod_1.z
    .object({
    emp_code: zod_1.z.string(),
    photo_update_on: zod_1.z.string().datetime({ offset: true }),
})
    .partial();
const EmployeePhotoChangesResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    change_key: zod_1.z.string(),
    changes: zod_1.z.array(EmployeePhotoChange),
})
    .partial();
const EmployeeQualificationResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    emp_code: zod_1.z.string(),
    inst_code: zod_1.z.string().nullable(),
    qual_cat: zod_1.z.string().nullable(),
    qual_text: zod_1.z.string().nullable(),
    qual_uid: zod_1.z.string(),
    reminder_flg: zod_1.z.boolean(),
    valid_date: zod_1.z.string().nullable(),
    has_attachment: zod_1.z.boolean(),
})
    .partial();
const CommonEmployeeQualificationUpdateRequest = zod_1.z.object({
    inst_code: zod_1.z.string().min(1).max(4),
    qual_cat: zod_1.z.string().min(1).max(4),
    qual_text: zod_1.z.string().min(1).max(200),
    reminder_flg: zod_1.z.boolean(),
    valid_date: zod_1.z.string().nullish(),
});
const AddEmployeeQualificationRequest = CommonEmployeeQualificationUpdateRequest.and(zod_1.z.object({}).partial());
const UpdateEmployeeQualificationRequest = CommonEmployeeQualificationUpdateRequest.and(zod_1.z.object({}).partial());
const UDAreaFlagResponse = zod_1.z
    .object({
    ud1_flg: zod_1.z.string().max(1).nullable(),
    ud2_flg: zod_1.z.string().max(1).nullable(),
    ud3_flg: zod_1.z.string().max(1).nullable(),
    ud4_flg: zod_1.z.string().max(1).nullable(),
    ud5_flg: zod_1.z.string().max(1).nullable(),
    ud6_flg: zod_1.z.string().max(1).nullable(),
    ud7_flg: zod_1.z.string().max(1).nullable(),
    ud8_flg: zod_1.z.string().max(1).nullable(),
    ud9_flg: zod_1.z.string().max(1).nullable(),
    ud10_flg: zod_1.z.string().max(1).nullable(),
})
    .partial();
const UDAreaCodeResponse = zod_1.z
    .object({
    ud11_code: zod_1.z.string().max(3).nullable(),
    ud12_code: zod_1.z.string().max(3).nullable(),
    ud13_code: zod_1.z.string().max(3).nullable(),
    ud14_code: zod_1.z.string().max(3).nullable(),
    ud15_code: zod_1.z.string().max(3).nullable(),
    ud16_code: zod_1.z.string().max(3).nullable(),
    ud17_code: zod_1.z.string().max(3).nullable(),
    ud18_code: zod_1.z.string().max(3).nullable(),
    ud19_code: zod_1.z.string().max(3).nullable(),
    ud20_code: zod_1.z.string().max(3).nullable(),
})
    .partial();
const UDAreaTextResponse = zod_1.z
    .object({
    ud21_text: zod_1.z.string().max(100).nullable(),
    ud22_text: zod_1.z.string().max(100).nullable(),
    ud23_text: zod_1.z.string().max(100).nullable(),
    ud24_text: zod_1.z.string().max(100).nullable(),
    ud25_text: zod_1.z.string().max(100).nullable(),
    ud26_text: zod_1.z.string().max(100).nullable(),
    ud27_text: zod_1.z.string().max(100).nullable(),
    ud28_text: zod_1.z.string().max(100).nullable(),
    ud29_text: zod_1.z.string().max(100).nullable(),
    ud30_text: zod_1.z.string().max(100).nullable(),
})
    .partial();
const UDAreaDateResponse = zod_1.z
    .object({
    ud31_date: zod_1.z.string().max(100).nullable(),
    ud32_date: zod_1.z.string().max(100).nullable(),
    ud33_date: zod_1.z.string().max(100).nullable(),
    ud34_date: zod_1.z.string().max(100).nullable(),
    ud35_date: zod_1.z.string().max(100).nullable(),
    ud36_date: zod_1.z.string().max(100).nullable(),
    ud37_date: zod_1.z.string().max(100).nullable(),
    ud38_date: zod_1.z.string().max(100).nullable(),
    ud39_date: zod_1.z.string().max(100).nullable(),
    ud40_date: zod_1.z.string().max(100).nullable(),
})
    .partial();
const UDAreaAttachmentResponse = zod_1.z
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
const UDAreaFieldsResponse = zod_1.z
    .object({
    ud_flags: UDAreaFlagResponse,
    ud_codes: UDAreaCodeResponse,
    ud_text: UDAreaTextResponse,
    ud_dates: UDAreaDateResponse,
    ud_attachments: UDAreaAttachmentResponse,
})
    .partial();
const EmployeeUDAreaResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    area_code: zod_1.z.string(),
    emp_code: zod_1.z.string(),
    update_on: zod_1.z.string().datetime({ offset: true }).nullable(),
    ud_fields: UDAreaFieldsResponse,
})
    .partial();
const UDAreaFlagRequest = zod_1.z
    .object({
    ud1_flg: zod_1.z.string().max(1).nullable(),
    ud2_flg: zod_1.z.string().max(1).nullable(),
    ud3_flg: zod_1.z.string().max(1).nullable(),
    ud4_flg: zod_1.z.string().max(1).nullable(),
    ud5_flg: zod_1.z.string().max(1).nullable(),
    ud6_flg: zod_1.z.string().max(1).nullable(),
    ud7_flg: zod_1.z.string().max(1).nullable(),
    ud8_flg: zod_1.z.string().max(1).nullable(),
    ud9_flg: zod_1.z.string().max(1).nullable(),
    ud10_flg: zod_1.z.string().max(1).nullable(),
})
    .partial();
const UDAreaCodeRequest = zod_1.z
    .object({
    ud11_code: zod_1.z.string().max(3).nullable(),
    ud12_code: zod_1.z.string().max(3).nullable(),
    ud13_code: zod_1.z.string().max(3).nullable(),
    ud14_code: zod_1.z.string().max(3).nullable(),
    ud15_code: zod_1.z.string().max(3).nullable(),
    ud16_code: zod_1.z.string().max(3).nullable(),
    ud17_code: zod_1.z.string().max(3).nullable(),
    ud18_code: zod_1.z.string().max(3).nullable(),
    ud19_code: zod_1.z.string().max(3).nullable(),
    ud20_code: zod_1.z.string().max(3).nullable(),
})
    .partial();
const UDAreaTextRequest = zod_1.z
    .object({
    ud21_text: zod_1.z.string().max(100).nullable(),
    ud22_text: zod_1.z.string().max(100).nullable(),
    ud23_text: zod_1.z.string().max(100).nullable(),
    ud24_text: zod_1.z.string().max(100).nullable(),
    ud25_text: zod_1.z.string().max(100).nullable(),
    ud26_text: zod_1.z.string().max(100).nullable(),
    ud27_text: zod_1.z.string().max(100).nullable(),
    ud28_text: zod_1.z.string().max(100).nullable(),
    ud29_text: zod_1.z.string().max(100).nullable(),
    ud30_text: zod_1.z.string().max(100).nullable(),
})
    .partial();
const UDAreaDateRequest = zod_1.z
    .object({
    ud31_date: zod_1.z.string().nullable(),
    ud32_date: zod_1.z.string().nullable(),
    ud33_date: zod_1.z.string().nullable(),
    ud34_date: zod_1.z.string().nullable(),
    ud35_date: zod_1.z.string().nullable(),
    ud36_date: zod_1.z.string().nullable(),
    ud37_date: zod_1.z.string().nullable(),
    ud38_date: zod_1.z.string().nullable(),
    ud39_date: zod_1.z.string().nullable(),
    ud40_date: zod_1.z.string().nullable(),
})
    .partial();
const UDAreaFieldsRequest = zod_1.z
    .object({
    ud_flags: UDAreaFlagRequest,
    ud_codes: UDAreaCodeRequest,
    ud_text: UDAreaTextRequest,
    ud_dates: UDAreaDateRequest,
})
    .partial();
const CommonEmployeeUDAreaUpdateRequest = zod_1.z
    .object({ ud_fields: UDAreaFieldsRequest })
    .partial();
const AddEmployeeUDAreaRequest = CommonEmployeeUDAreaUpdateRequest.and(zod_1.z.object({}).partial());
const UpdateEmployeeUDAreaRequest = CommonEmployeeUDAreaUpdateRequest.and(zod_1.z.object({}).partial());
const ValidationResponse = zod_1.z
    .object({
    valid_result: zod_1.z.string(),
    min_val: zod_1.z.number().int().nullable(),
    max_val: zod_1.z.number().int().nullable(),
})
    .partial();
const AssessmentMethodResponse = zod_1.z
    .object({
    ass_code: zod_1.z.string(),
    ass_type: zod_1.z.string(),
    ass_range: zod_1.z.string(),
    desc_text: zod_1.z.string(),
    val_type: zod_1.z.string(),
    validations: zod_1.z.array(ValidationResponse),
})
    .partial();
const AssessmentCriteriaResponse = zod_1.z
    .object({
    obj_code: zod_1.z.string(),
    obj_desc: zod_1.z.string(),
    max_val: zod_1.z.number().int().nullable(),
    assessment_method: AssessmentMethodResponse.nullable(),
})
    .partial();
const ActivityResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    activity_id: zod_1.z.number().int(),
    year: zod_1.z.string().nullable(),
    period: zod_1.z.string().nullable(),
    sub_code: zod_1.z.string().nullable(),
    year_grp: zod_1.z.number().int().nullable(),
    activity_name: zod_1.z.string(),
    topic_id: zod_1.z.number().int(),
    topic_name: zod_1.z.string(),
    assessment_criteria: zod_1.z.array(AssessmentCriteriaResponse),
})
    .partial();
const ActivityStudentResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    activity_id: zod_1.z.number().int(),
    stud_code: zod_1.z.string(),
    class_code: zod_1.z.string().nullable(),
    year_grp: zod_1.z.number().int().nullable(),
})
    .partial();
const ObjectiveResult = zod_1.z
    .object({ obj_code: zod_1.z.string(), stud_result: zod_1.z.string().nullable() })
    .partial();
const ActivityStudentResultsResponse = zod_1.z
    .object({
    cmpy_code: zod_1.z.string(),
    activity_id: zod_1.z.number().int(),
    stud_code: zod_1.z.string(),
    objective_results: zod_1.z.array(ObjectiveResult),
})
    .partial();
const ObjectiveResult2 = zod_1.z.object({
    obj_code: zod_1.z.string().min(1).max(4),
    stud_result: zod_1.z.string().min(1).max(7),
});
const UpdateActivityStudentResultsRequest = zod_1.z
    .object({ objective_results: zod_1.z.array(ObjectiveResult2) })
    .partial();
exports.schemas = {
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
//# sourceMappingURL=generated.js.map