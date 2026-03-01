/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type ValidationExceptionDetails = ExceptionDetails & {
  errors?: Record<string, string[]>;
};

export interface ExceptionDetails {
  /** @format int32 */
  status?: number;
  title?: string;
  detail?: string;
}

export interface ActivityResponse {
  /** Company code */
  cmpy_code?: string;
  /**
   * Activity identifier
   * @format int32
   */
  activity_id?: number;
  /** Result year */
  year?: string | null;
  /** Result period */
  period?: string | null;
  /** Subject code */
  sub_code?: string | null;
  /** Year group */
  year_grp?: number | null;
  /** Activity name */
  activity_name?: string;
  /**
   * Topic identifier
   * @format int32
   */
  topic_id?: number;
  /** Topic name */
  topic_name?: string;
  /** Assessment criteria */
  assessment_criteria?: AssessmentCriteriaResponse[];
}

export interface AssessmentCriteriaResponse {
  /** Object code */
  obj_code?: string;
  /** Object description */
  obj_desc?: string;
  /** Maximum value */
  max_val?: number | null;
  /** Assessment method */
  assessment_method?: AssessmentMethodResponse | null;
}

export interface AssessmentMethodResponse {
  /** Assessment code */
  ass_code?: string;
  /** Assessment type */
  ass_type?: string;
  /** Assessment range */
  ass_range?: string;
  /** Description text */
  desc_text?: string;
  /** Validation type */
  val_type?: string;
  /** Validations */
  validations?: ValidationResponse[];
}

export interface ValidationResponse {
  /** Valid result */
  valid_result?: string;
  /** Minimum value */
  min_val?: number | null;
  /** Maximum value */
  max_val?: number | null;
}

export interface ActivityStudentResponse {
  /** Company code */
  cmpy_code?: string;
  /**
   * Activity identifier
   * @format int32
   */
  activity_id?: number;
  /** Student code */
  stud_code?: string;
  /** Class */
  class_code?: string | null;
  /** Year Group */
  year_grp?: number | null;
}

export interface ActivityStudentResultsResponse {
  /** Company code */
  cmpy_code?: string;
  /**
   * Activity identifier
   * @format int32
   */
  activity_id?: number;
  /** Student code */
  stud_code?: string;
  /** Objective results */
  objective_results?: ObjectiveResult[];
}

export interface ObjectiveResult {
  /** Objective code */
  obj_code?: string;
  /** Student result */
  stud_result?: string | null;
}

export interface UpdateActivityStudentResultsRequest {
  /** Objective results */
  objective_results?: ObjectiveResult2[];
}

export interface ObjectiveResult2 {
  /**
   * Objective code
   * @minLength 1
   * @maxLength 4
   */
  obj_code: string;
  /**
   * Student result
   * @minLength 1
   * @maxLength 7
   */
  stud_result: string;
}

export interface ActivitiesGetAllActivitiesParams {
  /** Company code. */
  cmpyCode: string;
  /** Result year. */
  year: string;
  /** Semester. */
  semester: string;
}

export interface ActivitiesGetAllActivityStudentsParams {
  /** Company code. */
  cmpyCode: string;
  /**
   * Activity identifier.
   * @format int32
   */
  activityId: number;
}

export interface ActivitiesGetStudentActivityResultsParams {
  /** Company code. */
  cmpyCode: string;
  /**
   * Activity identifier.
   * @format int32
   */
  activityId: number;
  /** Student code. */
  studCode: string;
}

export interface ActivitiesUpdateStudentActivityResultsParams {
  /** Company code. */
  cmpyCode: string;
  /**
   * Activity identifier.
   * @format int32
   */
  activityId: number;
  /** Student code. */
  studCode: string;
}
