interface ParentResponse {
  __tassversion: string;
  parents: ParentCode[];
}

interface ParentCode {
  [key: string]: ParDetails | ParDetails[];
}

interface ParDetails {
  web_access: boolean;
  user_code: string;
  person2: Person;
  address: AddressLine;
  person1: Person;
  username: string;
  sfa_num: "" | number;
  students: string[] | [];
}

interface Person {
  initials: string;
  suffix: string;
  surname: string;
  e_mail: string;
  person_num: number;
  first_name: string;
  deceased_flg: string;
  person_posn: number;
  description: string;
  preferred_name: string;
  other_name: string;
  title: string;
}

interface AddressLine {
  [key: string]: Address;
}

interface Address {
  person_posn: string;
  par_name: string;
  email: string;
  email2: string;
  email1: string;
}

export { ParentResponse, ParentCode, ParDetails };
