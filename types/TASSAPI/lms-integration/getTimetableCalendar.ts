export interface TimetableCalendar {
  tt_calendar: CalendarDay[];
  __tassversion: string;
  token: Token;
}

export interface CalendarDay {
  CAT_NUM: string;
  CMPY_CODE: string;
  TTDATE: string;
  RECORD_ID: number;
  LABEL: string;
  ID: string;
  TABLE_ID: string;
  VALUE: string;
  TT_ID: number;
  DAY_CODE: number;
}

interface Token {
  timestamp: string;
  tt_id: number;
}
