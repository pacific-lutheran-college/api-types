interface StudentDetailsResponse {
  students: StudentRecord[];
  __tassversion: string;
  token: Token;
}

interface StudentRecord {
  general_details: {
    surname: string;
    next_year_indicator:
      | "Advancing"
      | "Finished"
      | "Leaving"
      | "Re-entering"
      | "Repeating";
    multiparent_flag: "Y" | "N";
    last_update_on: string;
    date_of_leaving: string;
    student_code: string;
    usi: string;
    preferred_surname: string;
    first_name: string;
    last_update_by: string;
    mobile_phone: string;
    lui_number: string;
    entry_year_group: string;
    par_code: string;
    sms_flg: string;
    religion: string;
    preferred_name: string;
    other_name: string;
    gender: "Male" | "Female";
    date_of_entry: string;
    date_of_birth: string;
    alternate_id: string;
    given_names: string;
    student_photo?: {
      file_info: {
        image: string;
        file_name: string;
        mime_type: "image/jpeg" | "image/gif";
      };
    };
  };
  school_details: {
    campus: string;
    email_address: string;
    pc_tutor_group: string;
    boarder: string;
    student_cafe_access: string;
    house: string;
    year_group: number | "P";
    form_class: string;
    residency_status: string;
  };
  other_school_details: {
    student_talent_1: string;
    student_consent_form: string;
    student_talent_2: string;
    custody_issues: string;
    student_talent_3: string;
    in_australia_on_visa: string;
    "ascertained/appraise": string;
    repeated: string;
    student_talent_4: string;
    extension: string;
    "net/computer_agmt": string;
    scholarship_expiry: number;
    learning_support: string;
    english_2nd_language: string;
    disability: string;
    bus_route: string;
    specialist_assess: string;
    accelerated: string;
    scholarship_type: string;
    birth_certificate: string;
  };
}

interface Token {
  code: string;
  timestamp: string;
  currentstatus: "current" | "noncurrent" | "future" | "past";
}

export { StudentDetailsResponse, StudentRecord };
