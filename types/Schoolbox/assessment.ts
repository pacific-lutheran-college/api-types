export interface AssessmentFilter {
  assessmentId?: number;
  assessmentType?:
    | "dueWork"
    | "quiz"
    | "task"
    | "project"
    | "LTI"
    | "lessonPlan";
  folder?: { id: number };
  yearLevel?: { id: number };
  dueDate?: {
    from?: string;
    to?: string;
  };
}
export interface Assessment {
  data: Data[];
  metadata: Metadata;
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

export interface Data {
  id: number;
  title: string;
  assessmentType: string;
  commonAssessment: boolean;
  workType: WorkType;
  folder: Folder;
  subjectCode: string;
  project: null | {
    id: number;
  };
  weight: number;
  dueDate: string;
  rubric: Rubric;
  participants: Participant[];
}

interface WorkType {
  name: string;
  id: number;
}

interface Folder {
  id: number;
  name: string;
  code: string | null | string[];
  yearLevel: YearLevel[];
}

interface YearLevel {
  id: number;
  name: string;
}

interface Rubric {
  capabilities: Capability[];
}

interface Capability {
  id: number;
  name: string;
  maxValue: number;
  mark: string;
  indicators: Indicator[];
}

interface Indicator {
  id: number;
  name: string;
  maxValue: number;
  descriptors: Descriptor[];
}

interface Descriptor {
  id: number;
  description: string;
  maxValue: number;
  sequence: number;
}

export interface Participant {
  learner: Learner;
  feedback: Feedback;
  mark: string;
  normalisedMark: number;
  comment: string;
  date: string;
  instructor: Instructor;
  rubric?: Rubric;
  response?: Response;
}

interface Learner {
  id: number;
  title: string | null;
  firstName: string;
  preferredName: string | null;
  lastName: string | null;
  externalId: string;
}

interface Feedback {
  id: number;
  mark: string;
  normalisedMark: number;
  comment: string;
  date: string;
  instructor: Instructor;
  rubric?: ResultRubric;
}

interface Instructor {
  id: number;
  title: string;
  firstName: string;
  preferredName: any;
  lastName: string;
  externalId: string;
}

interface ResultRubric {
  capabilities: ResultCapability[];
}

interface ResultCapability {
  id: number;
  name: string;
  value: number;
  maxValue: number;
  mark: string;
  indicators: ResultIndicator[];
}

interface ResultIndicator {
  id: number;
  name: string;
  maxValue: number;
  value: number;
  descriptor: ResultDescriptor;
}

interface ResultDescriptor {
  id: number;
  description: string;
  maxValue: number;
  sequence: number;
}

interface Response {
  id: string;
  date: string;
  submitter: Submitter;
  files: any[];
}

interface Submitter {
  id: string;
  title: string;
  firstName: string;
  preferredName: any;
  lastName: string;
  externalId: string;
}

interface Metadata {
  count: number;
  cursor: number;
}

export interface TassACRData {
  "Student Code": string;
  "Student Name": null;
  "Subject Code": number;
  "Objective Code": string;
  Result: string;
}

export interface Objectives {
  "Obj Code": string;
  "Objective Description": string;
  Analytics: "Y" | "N";
  "View in Parent lounge": "Y" | "N";
  "View in Student Cafe": "Y" | "N";
  Active: "Y" | "N";
  Competency: string | null;
  "Delivery Mode": string | null;
  Hours: string;
}
