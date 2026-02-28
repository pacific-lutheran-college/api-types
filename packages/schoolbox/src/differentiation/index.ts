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

/**
 * Problem Details
 * Schema for RFC 7807 (Problem Details for HTTP APIs).
 */
export interface Problem {
  /**
   * A URI reference that identifies the problem type.
   * @format uri
   * @default "about:blank"
   */
  type: string;
  /** A short human-readable summary of the problem type. */
  title: string;
  /**
   * The HTTP status code.
   * @format int32
   * @min 100
   * @max 600
   * @example 503
   */
  status: number;
  /** A human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /**
   * A URI reference that identifies the specific occurrence of the problem.
   * @format uri
   */
  instance?: string;
}

/**
 * ID
 * Identifying ID number for most objects within Schoolbox
 * @format int32
 * @min 1
 */
export type Id = number;

/**
 * Datetime
 * The date as a RFC3339 string. eg. "2018-01-28T00:00:00+11:00".
 * @format date-time
 * @example "2018-01-28T00:00:00+11:00"
 */
export type DateTimeString = string;

/**
 * A Differentiation Profile
 * A Differentiation Profile object
 */
export interface Differentiation {
  /** Identifying ID number for most objects within Schoolbox */
  id: Id;
  /**
   * Status flags for the differentiation profile
   * @example []
   */
  status: DifferentiationStatusEnum[];
  /** The student associated with the differentiation profile */
  student: {
    /** @example 69 */
    id?: number;
    /** @example "Eden Reed" */
    fullName?: string;
    /** @example "Eden" */
    givenName?: string;
    /** @example "Reed" */
    lastName?: string;
    yearLevel?: {
      /** @example 4 */
      id?: number;
      /** @example "3" */
      name?: string;
    };
    _links?: {
      /** @example "/search/user/69" */
      profile?: string;
    };
  };
  /**
   * Array of adjustment categories (if applicable)
   * @example [{"id":1,"name":"Physical"},{"id":2,"name":"Cognitive"}]
   */
  adjustment_category?:
    | {
        id?: number;
        name?: string;
      }[]
    | null;
  /**
   * Array of adjustment levels (if applicable)
   * @example [{"id":1,"name":"Extensive"}]
   */
  adjustment_level?:
    | {
        id?: number;
        name?: string;
      }[]
    | null;
  /**
   * Overview of the differentiation profile (if applicable)
   * @example null
   */
  overview?: string | null;
  /**
   * Interests and strengths (if applicable)
   * @example null
   */
  interests_strengths?: string | null;
  /**
   * Needs and challenges (if applicable)
   * @example null
   */
  needs_challenges?: string | null;
  /**
   * Strategies and adjustments (if applicable)
   * @example null
   */
  strategies_adjustments?: string | null;
  /**
   * Goals for the student (if applicable)
   * @example "Goal 1: Improve reading comprehension."
   */
  goals?: string | null;
  /** Related routes for the differentiation profile */
  _routes?: {
    /** @example "/differentiation-profiles/linkedRecords/69" */
    linkedRecords?: string | null;
    /** @example "/differentiation-profiles/create/69" */
    create?: string | null;
    /** @example "/differentiation-profiles/edit/69" */
    edit?: string | null;
  };
  /** The date as a RFC3339 string. eg. "2018-01-28T00:00:00+11:00". */
  created_at?: DateTimeString;
  /**
   * Who created the profile
   * @example "Mr John Smith"
   */
  created_by?: string;
  /** The date as a RFC3339 string. eg. "2018-01-28T00:00:00+11:00". */
  updated_at?: DateTimeString;
  /**
   * Who last updated the profile
   * @example "Mr John Smith"
   */
  updated_by?: string;
  /**
   * Datetime
   * When the profile was deleted (if applicable). The date as a RFC3339 string.
   * @format date-time
   * @example null
   */
  deleted_at?: string | null;
}

export enum DifferentiationStatusEnum {
  Unpopulated = "unpopulated",
  Expired = "expired",
  OutOfDate = "out-of-date",
}

export interface GetDifferentiationProfileParams {
  id: string;
}

export interface CreateDifferentiationProfileParams {
  id: string;
}

export interface UpdateDifferentiationProfileParams {
  id: string;
}
