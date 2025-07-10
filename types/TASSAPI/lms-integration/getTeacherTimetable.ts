interface TeacherTimetable {
  teacher_timetable: Timetable[];
  __tassversion: string;
  token: Token;
}

interface Timetable {
  DESC_TEXT: string;
  DAYS: Record<string, Day>;
  PERIODMIN: number;
  DAYMAX: number;
  SEMESTER: number;
  DAYMIN: number;
  YEAR_GRP: string;
  ARRLINES: any[];
  YEAR_NUM: number;
  STRDAYS: Record<string, StrDay>;
  ENTITYCODE: string;
  TT_ID: number;
  ENTITYNAME: string;
  PERIODMAX: number;
}

interface Day {
  PERIODS: Record<string, Period>;
}

interface Period {
  SUBJECTS: Subject[];
  PRD_END: string;
  PRD_CODE: number;
  PRD_START: string;
  PRD_DESC: string;
}

interface Subject {
  SUB_CODE: string;
  SUB_SHORT: string;
  HASOVERRIDE: number;
  ROOM_CODE: string;
  TCH_CODE: string;
  SUBTAB_YEAR_GRP_DESC: string;
  CLASS: string;
  YEAR_GRP: number;
  SUB_DESC: string;
  SUB_ABREV: string;
  LINE_CODE: string;
  SUBTAB_YEAR_GRP: number;
}

interface StrDay {
  PERIODS: Record<string, StrPeriod>;
  DAY_DESC: string;
}

interface StrPeriod {
  PRD_END: string;
  PRD_START: string;
  PRD_DESC: string;
}

interface Token {
  semester: number;
  year_num: number;
  timestamp: string;
  teacher_code: string;
}

export { TeacherTimetable };
