import { Pagination } from "./pagination";
interface AbsenceResponse {
  data: Absence[];
  pagination: Pagination;
}

interface Absence {
  id: number;
  studentId: number;
  startDate: string;
  endDate: string;
  explained: boolean;
  reason: string;
}

export { AbsenceResponse, Absence };
