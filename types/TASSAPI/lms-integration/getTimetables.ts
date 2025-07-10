export interface Timetables {
  timetables: Timetable[];
  __tassversion: string;
  token: Token;
}

export interface Timetable {
  sub_code: string;
  room_code: string;
  tch_code: string;
  prd_code: number;
  table_id: string;
  class: string;
  day_code: number;
  semester: number;
  year_grp_desc: number;
  year_grp: number;
  year_num: number;
  record_id: number;
  id: string;
  tt_id: number;
}

interface Token {
  year: number;
  period: number;
  timestamp: string;
}
