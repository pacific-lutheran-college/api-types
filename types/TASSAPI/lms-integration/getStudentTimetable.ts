interface StudentTimetableResponse {
  __tassversion: string;
  student_timetable: StudentTimetable[];
  token: {
    timestamp: string;
    student_code: string;
  };
  error?: string;
}

interface Subject {
  SUB_CODE: number;
  FROM_DATE: string;
  SUB_SHORT: string;
  HASOVERRIDE: number;
  ROOM_CODE: string;
  TO_DATE: string;
  TCH_CODE: string;
  SUB_LONG: string;
  SUBTAB_YEAR_GRP_DESC: string;
  CLASS: string;
  YEAR_GRP: number;
  TT_PRIORITY: number;
  SUB_DESC: string;
  SUB_ABREV: string;
  LINE_CODE: string;
  SUBTAB_YEAR_GRP: string;
  DATE_RANGE: string;
}

interface Period {
  SUBJECTS: Subject[];
  PRD_END: string;
  PRD_CODE: number;
  PRD_START: string;
  PRD_DESC: string;
}

interface Day {
  PERIODS: {
    [key: string]: Period;
  };
  DAY_DESC: string;
}

interface StudentTimetable {
  HSE_CODE: string;
  DESC_TEXT: string;
  HSE_NAME: string;
  DAYS: {
    [key: string]: Day;
  };
  FORM_CLS: string;
  ENTITYCODE: string;
  TT_ID: number;
  ENTITYNAME: string;
  PERIODMAX: number;
  STUD_YEAR_GRP: number;
}

export { StudentTimetableResponse, StudentTimetable };
