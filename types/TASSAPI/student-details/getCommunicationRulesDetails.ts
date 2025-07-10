export interface StudentCommRulesResponse {
  commrules: Commrule[];
  __tassversion: string;
  __invalid?: {};
  token: Token;
}

export interface Commrule {
  addresses: Address[];
  studcode: string;
}

export interface Address {
  communication_type:
    | "all"
    | "aca"
    | "att"
    | "ec"
    | "gen"
    | "lw"
    | "tk"
    | "tkco";
  add_num: number;
  sms_flg_2: "Y" | "N";
  f_deceased_flg: "Y" | "N";
  email_2: string;
  sms_flg_1: "Y" | "N";
  m_initials: string;
  f_preferred_name: string;
  addressee: string;
  email: string;
  m_deceased_flg: "Y" | "N";
  m_preferred_name: string;
  m_person_num: number;
  business_phone: string;
  address_person_gender_desc: "Male" | "Female";
  salutation: string;
  m_title: string;
  m_suffix: string;
  f_suffix: string;
  home_phone: string;
  address_person_label: "Parent/Cargiver 1" | "Parent/Caregiver 2";
  address_person_posn: number;
  f_surname: string;
  mobile_phone_2: string;
  f_initials: string;
  adressee: string;
  address_description: string;
  mobile_phone_1: string;
  f_description: string;
  f_other_name: string;
  m_first_name: string;
  f_title: string;
  parent_code: string;
  m_description: string;
  current_address: string;
  m_other_name: string;
  f_first_name: string;
  m_surname: string;
  f_person_num: number;
  relationship: "Biological" | "Step" | "Guardian";
  tag: string;
  address_person_gender: "M" | "F";
  facsimile: string;
  addr1: string;
  addr2: string;
  addr3: string;
  country: string;
  post_code: number;
  state_code: string;
  town_sub: string;
  call_order: string;
}

export interface Token {
  code: string;
  commtype: string;
  timestamp: string;
  currentstatus: string;
}
