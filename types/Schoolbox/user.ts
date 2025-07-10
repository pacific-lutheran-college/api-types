export interface SchoolboxUserResponse {
  data: SchoolboxUser[];
  metadata: {
    count: number;
    cursor: number;
  };
}
export interface SchoolboxUser {
  id: number;
  campus: Campus[];
  role: Role;
  groups: Group[];
  schoolHouse: SchoolHouse;
  guardians: null;
  students: null;
  impersonableUser: any[];
  email: string;
  _links: SchoolboxUserLinks;
  externalId: string;
  username: string;
  superuser: boolean;
  enabled: boolean;
  title: null;
  firstName: string;
  preferredName: string;
  lastName: string;
  fullName: string;
  isEmailDerived: boolean;
  altEmail: string;
  positionTitle: null;
  yearLevel: SchoolHouse;
  isDeleted: boolean;
  flags: Flags;
}

interface SchoolboxUserLinks {
  profile: string;
  avatar: string;
}

interface Campus {
  id: number;
  name: string;
  code: string;
  days: string;
}

interface Flags {
  showContacts: boolean;
  enableTimetable: boolean;
  showSideNav: boolean;
  showNotificationsPanel: boolean;
  showGradeGraph: boolean;
  enableEportfolio: boolean;
  useInternalMail: boolean;
  calendarView: string;
}

interface Group {
  id: number;
  name: string;
  type: string;
  isForceFollow: boolean;
  isFavourite: boolean;
  isNotificationsOn: boolean;
  enrolmentStatus: string;
  membership: string;
  _links: GroupLinks;
}

interface GroupLinks {
  homepage: string;
}

interface Role {
  id: number;
  name: string;
  type: string;
}

interface SchoolHouse {
  id: number;
  name: string;
}
