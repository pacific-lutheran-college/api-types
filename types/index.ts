// Main type exports - commonly used types
export * from './educationPerfect';
export * from './operoo';
export * from './overdues';
export * from './documentIntelligence';

// Core API types (single files)
export * from './clipboard_API';
export * from './schoolbox';

// Direct exports from subdirectories
export * from './Clipboard_API/getPreExplainedAbsences';
export * from './Clipboard_API/getStudents';
export * from './Clipboard_API/pagination';

export * from './Sharepoint/DeviceLease';

// Schoolbox types (specific exports to avoid conflicts)
export type { NavGroup } from './Schoolbox/groupMembers';

// TASS API exports (excluding conflicting modules)
export * from './TASSAPI/assessment/setStudentSubjectResults';
export * from './TASSAPI/identity-management/getParents';
export * from './TASSAPI/lms-integration/getStudentSubjects';
export * from './TASSAPI/lms-integration/getStudentTimetable';
export * from './TASSAPI/lms-integration/getTeachers';
export * from './TASSAPI/lms-integration/getTeacherSubjects';
export * from './TASSAPI/lms-integration/getTeacherTimetable';
export * from './TASSAPI/lms-integration/getTimetableCalendar';
export * from './TASSAPI/lms-integration/getTimetables';
export * from './TASSAPI/online-enrolments/getEnrolledStudents';
export * from './TASSAPI/student-academic-analytics/getStudentAbsences';
export * from './TASSAPI/student-academic-analytics/getStudentSubjects';
export * from './TASSAPI/student-details/getMCEECDYA';
export * from './TASSAPI/student-details/getMedicalGeneral';
export * from './TASSAPI/student-details/getStudentsDetails';

// Namespace exports for modules with conflicts
export * as TASSEmployeeHR from './TASSAPI/employee-hr/getEmployeesDetails';
export * as TASSCommunicationRules from './TASSAPI/student-details/getCommunicationRulesDetails';

// Re-export conflicting Schoolbox types with namespaces
export * as SchoolboxAssessment from './Schoolbox/assessment';
export * as SchoolboxUser from './Schoolbox/user';
