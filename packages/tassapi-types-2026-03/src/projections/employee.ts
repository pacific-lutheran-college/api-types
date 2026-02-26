import type { components } from "../generated.js";

type EmployeeResponse = components["schemas"]["EmployeeResponse"];

/**
 * Minimal employee identification — for dropdowns, assignee pickers, and lists.
 *
 * Corresponds to: `$select=emp_code,first_name,surname,tch_code,cmpy_code`
 */
export type EmployeeSummary = Pick<
  EmployeeResponse,
  "emp_code" | "first_name" | "surname" | "tch_code" | "cmpy_code"
>;

/**
 * Employee card — role and identity details for a staff profile display.
 *
 * Corresponds to: `$select=emp_code,first_name,surname,preferred_name,position_text,position_title,status_text,tch_code,start_date,cmpy_code`
 */
export type EmployeeCard = Pick<
  EmployeeResponse,
  | "emp_code"
  | "first_name"
  | "surname"
  | "preferred_name"
  | "position_text"
  | "position_title"
  | "status_text"
  | "tch_code"
  | "start_date"
  | "cmpy_code"
>;

/**
 * Employee contact details — for staff directories and communication.
 *
 * Corresponds to: `$select=emp_code,first_name,surname,e_mail,school_email,mob_phone,phone_w_text,sms_flg`
 */
export type EmployeeContact = Pick<
  EmployeeResponse,
  | "emp_code"
  | "first_name"
  | "surname"
  | "e_mail"
  | "school_email"
  | "mob_phone"
  | "phone_w_text"
  | "sms_flg"
>;
