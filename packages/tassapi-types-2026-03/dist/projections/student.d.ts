import type { components } from '../generated.js';
type StudentResponse = components['schemas']['StudentResponse'];
/**
 * Minimal student identification — suitable for dropdown lists, search results,
 * and anywhere a human-readable label is needed.
 *
 * Corresponds to: `$select=stud_code,first_name,surname,preferred_name,year_grp,form_cls`
 */
export type StudentSummary = Pick<StudentResponse, 'stud_code' | 'first_name' | 'surname' | 'preferred_name' | 'year_grp' | 'form_cls'>;
/**
 * Student card — identity and enrolment details for a student profile display.
 *
 * Corresponds to: `$select=stud_code,first_name,surname,preferred_name,preferred_surname,year_grp,form_cls,gender,dob,campus_code,pctut_grp,boarder`
 */
export type StudentCard = Pick<StudentResponse, 'stud_code' | 'first_name' | 'surname' | 'preferred_name' | 'preferred_surname' | 'year_grp' | 'form_cls' | 'gender' | 'dob' | 'campus_code' | 'pctut_grp' | 'boarder'>;
/**
 * Student contact details — for communication and parent/guardian look-ups.
 *
 * Corresponds to: `$select=stud_code,first_name,surname,e_mail,mob_phone,par_code,sms_flg`
 */
export type StudentContact = Pick<StudentResponse, 'stud_code' | 'first_name' | 'surname' | 'e_mail' | 'mob_phone' | 'par_code' | 'sms_flg'>;
/**
 * Active/current enrolment status fields — useful for filtering or displaying
 * enrolment state without fetching the full student record.
 *
 * Corresponds to: `$select=stud_code,cmpy_code,doe,dol,next_yr_ind,year_grp,campus_code`
 */
export type StudentEnrolment = Pick<StudentResponse, 'stud_code' | 'cmpy_code' | 'doe' | 'dol' | 'next_yr_ind' | 'year_grp' | 'campus_code'>;
export {};
//# sourceMappingURL=student.d.ts.map