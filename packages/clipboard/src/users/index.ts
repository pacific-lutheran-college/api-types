import { Pagination } from "../util";

export interface UsersResponse {
  data: User[];
  pagination: Pagination;
}

/**
 * Represents a Staff member or Coach in Clipboard.
 * Note: Students have their own object type.
 */
export interface User {
  id: number;
  email: string;
  frozen: boolean;
  firstName: string;
  lastName: string;
  mobileNumber: string | null;
  isAdmin: boolean;
  isManager: boolean;
  employeeId: string | null;
  wwccExpiryDate: string | null;
  updatedDetails: boolean;
  sisId: string | null;
  payment: "ts" | "na";
  /**
   * ISO 8601 RFC 3339 timestamp in UTC, e.g. "2026-01-29 01:29:08.177587"
   * @example "2026-01-29 01:29:08.177587"
   */
  inviteEmailLastSentTimestamp: string;
  activitiesPermissions: ActivitiesPermission[];
  departments: Department[];
}

export interface ActivitiesPermission {
  activityId: number;
  activityName: string;
}

export interface Department {
  id: number;
  name: string;
}
