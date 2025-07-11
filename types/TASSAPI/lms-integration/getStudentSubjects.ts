export interface StudentSubjects {
  [key: string]: Subject[];
}

export type StudentSubjectsResponse = StudentSubjects & Metadata;

interface Metadata {
  __tassversion: string;
  token: {
    code: string;
    timestamp: string;
    lmsflag: "Y" | "N";
  };
}

interface Subject {
  sub_code: string | number;
  from_date: string;
  sub_short: string;
  to_date: string;
  student_code: string;
  sub_long: string;
  class: string;
  sub_type: string;
  semester: number;
  year_grp_desc: number | "P";
  year_grp: number;
  year_num: number;
}

export type { Subject };
