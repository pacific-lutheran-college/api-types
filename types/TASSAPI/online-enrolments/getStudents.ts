export interface EnrolledStudents {
  __tassversion: string;
  token: Token;
  students: Student[];
}

export interface Token {
  commtype: string;
  timestamp: string;
  studcode: string;
}

export interface Student {
  language: string;
  nationality: string;
  contacts: Contact[];
  last_name: string;
  preferred_surname: string;
  first_name: string;
  indigenous_status: string;
  citizenship: string;
  dob: string;
  preferred_name: string;
  other_name: string;
  gender: string;
}

export interface Contact {
  mobile2: string;
  town_suburb: string;
  parent_name2: string;
  m_initials: string;
  f_preferred_name: string;
  email: string;
  m_preferred_name: string;
  mother_name: string;
  country: string;
  salutation: string;
  parent_name: string;
  family_name: string;
  m_title: string;
  m_suffix: string;
  f_suffix: string;
  home_phone: string;
  post_code: number;
  father_name: string;
  mobile1: string;
  address1: string;
  f_surname: string;
  address3: string;
  address2: string;
  f_initials: string;
  address_description: string;
  f_description: string;
  f_other_name: string;
  email2: string;
  f_title: string;
  m_first_name: string;
  work_phone: string;
  state_code: string;
  parent_code: string;
  address_number: number;
  m_description: string;
  f_first_name: string;
  m_other_name: string;
  m_surname: string;
  relationship: string;
}
