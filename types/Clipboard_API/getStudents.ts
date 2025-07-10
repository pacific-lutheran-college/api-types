import { Pagination } from "./pagination";
interface StudentResponse {
  data: Student[];
  pagination: Pagination;
}

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  legalFirstName: string | null;
  sisId: string;
  secondarySisId: string;
  yearGroupId: number;
}

export { StudentResponse, Student };
