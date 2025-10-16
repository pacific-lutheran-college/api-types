interface SubjectResultsResponse {
  DATA: SubjectResult[];
  token: {
    resyear?: number;
    timestamp: string;
    studcode: string;
    yeargrp?: number;
  };
}

interface SubjectResult {
  RES_PERIOD: number;
  RESULT_MAPPING: number;
  SUB_CODE: string;
  SUB_SHORT: string;
  ARCHIVED_FLAG: "Y" | "N";
  ASS_CODE: string;
  RES_YEAR: number;
  SUB_LONG: string;
  CLASS: number;
  OBJ_CODE: string;
  RANKING: string;
  SUB_YEAR_GRP: string;
  PRD_DESC: string;
  SEMESTER: number;
  STUD_CODE: string;
  STUD_RESULT: LetterGrade;
  PA_TYPE: string;
  FACULTY_ID: number;
  SUB_DESC: string;
  SUB_LEVEL: number;
}

type LetterGrade =
  | "A+"
  | "A"
  | "A-"
  | "B+"
  | "B"
  | "B-"
  | "C+"
  | "C"
  | "C-"
  | "D+"
  | "D"
  | "D-"
  | "E+"
  | "E"
  | "E-";

export { SubjectResultsResponse, SubjectResult, LetterGrade };
