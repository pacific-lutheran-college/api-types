export interface EmployeeDetails {
  employees: Employee[];
  __tassversion: string;
  token: Token;
}

export interface Employee {
  address: StaffAddress;
  general: General;
  next_of_kin: NextOfKin;
}

export interface StaffAddress {
  town_suburb: string;
  address_line_1: string;
  address_barcode: string;
  address_description: string;
  address_line_2: string;
  state: string;
  employee_name: string;
  email: string;
  work_phone: string;
  mobile_phone: string;
  country: string;
  sms: string;
  post_code: number;
  home_phone: string;
}

export interface General {
  initials: string;
  employment_status: string;
  marital_status: string;
  last_update_on: string;
  position_title: string;
  employee_code: string;
  first_name: string;
  position_text: string;
  last_update_by: string;
  preferred_name: string;
  name_suffixes: string;
  gender: string;
  date_of_birth: string;
  surname: string;
  supervisor: string;
  ceider: string;
  start_date: string;
  school_email: string;
  teacher_code: string;
  termination_date: string;
  supervisor_2: string;
  title: string;
  driver_licence_no: string;
  supplier_code: string;
  given_names: string;
}

export interface NextOfKin {
  town_suburb: string;
  address_line_1: string;
  country: string;
  address_line_2: string;
  state: string;
  post_code: number;
  home_phone: string;
  relationship: string;
  work_phone: string;
  name: string;
}

export interface Token {
  date: string;
  code: string;
  timestamp: string;
}
