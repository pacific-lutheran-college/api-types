export interface MedicalGeneral {
  contacts: Contact[];
  swimingLevel: string;
  surname: string;
  given_name: string;
  mud_fields: MudFields;
  stud_code: string;
  __tassversion: string;
  preferred_name: string;
  token: Token;
}

interface Contact {
  contact_name: string;
  medical_townsub: string;
  medical_home_phone: any;
  medical_addr1: string;
  medical_country: string;
  medical_addr2: string;
  medical_mob_phone2: string;
  medical_addr3: string;
  medical_post_code: any;
  medical_bus_phone: string;
  medical_mob_phone: string;
  medical_state_code: string;
}

interface MudFields {
  "Detail cont.": string;
  "Private Health Fund": string;
  Paracetamol: string;
  "Blood Group": string;
  Detail: string;
  "Medical Form Rec'd": string;
  Ibuprofen: string;
  "Ambulance Cover": string;
  "Allergy/Synd/Cond": string;
  Antihistamine: string;
  "Health Fund No.": string;
  "Medicare No.": number;
}

interface Token {
  timestamp: string;
  studcode: string;
}
