type TeacherSubjectsResponse = {
  [teacherCode: string]: TeacherSubject[];
};

type TeacherSubject = {
  sub_code: number | string;
  sub_short: string;
  sub_long: string;
  class: number | string;
  employee_code: string;
  sub_type: string;
  teacher_code: string;
  semester: number;
  year_grp_desc: number;
  year_grp: number;
  year_num: number;
  sub_dept_code: string;
  sub_dept_desc: string;
  sub_desc: string;
};

export { TeacherSubjectsResponse, TeacherSubject };
