export interface StudentAbsences {
  DATA: AbsenceRecord[];
  __tassversion: string;
  token: Token;
}

interface AbsenceRecord {
  SUB_CODE: string | number;
  YEAR_GRP: number;
  ACCEPT_IND: "Y" | "N";
  STUD_CODE: string;
  PRD_CODE: number;
  CLASS: string;
  WEEK: number;
  TT_ID: number;
  ABSENT_DATE: string;
  DAY_CODE: number;
}

interface Token {
  absentdatefrom: string;
  timestamp: string;
  studcode: string;
  currentstatus: string;
  absentdateto: string;
}
