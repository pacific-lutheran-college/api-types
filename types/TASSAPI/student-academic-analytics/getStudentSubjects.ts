interface StudentSubjectsData {
  DATA: StudentSubject[];
  __tassversion: string;
  token: Token;
}
interface StudentSubject {
  SUB_CODE: string;
  YEAR_GRP: number;
  STUD_CODE: string;
  CLASS: number;
  TT_ID: number;
  SUB_DESC: string;
  LESSON_COUNT: number;
}

interface Token {
  timestamp: string;
  studcode: string;
  ttid: number;
  subcode: string;
}

export { StudentSubjectsData };
