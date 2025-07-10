interface TeachersDetailsResponse {
  __tassversion: string;
  teachers: Teacher[];
  token: {
    timestamp: string;
    includephoto: boolean;
    thumbnail: boolean;
    currentstatus: "current" | "noncurrent";
  };
}

interface Teacher {
  surname: string;
  active_flag: "Y" | "N";
  teacher_name: string;
  pc_tutor_group: string;
  department: string;
  portal_user_code: string;
  employee_code: string;
  teacher_code: string;
  first_name: string;
  email_address: string;
  salutation: string;
  employee_surname: string;
  preferred_name: string;
  other_name: string;
  school_email_address: string;
  given_names: string;
}

export { TeachersDetailsResponse };
