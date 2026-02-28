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
 * Cursor
 * A generated but decodable pointer to the first record to return.
 *
 * Each endpoint whose data accepts a cursor will return a cursor that
 * points to the next page of the result set.
 */
export type Cursor = string;

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
 * List metadata
 * Metadata for lists of items retrieved
 */
export interface ListMetadata {
  /**
   * If provided, the number of items in the result set.
   * @format int32
   */
  count?: number;
  cursor?: {
    /**
     * Cursor
     * If set, a cursor to the current page of results.
     * Seems redundant, but it does generate a cursor to a request
     * made without one.
     */
    current: string | null;
    /**
     * Cursor
     * If set, a cursor to the next page of results.
     */
    next: string | null;
  };
}

/**
 * A curriculum node
 * A curriculum node
 */
export type CourseFolderCurriculumItem = {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** The name of the curriculum node */
  name?: string;
  /** The code of the curriculum node */
  code?: string;
  reference?: string;
  enabled?: boolean;
  parent?:
    | (
        | {
            id?: number;
          }[]
        | CourseFolderCurriculumItem
      )[]
    | null;
  children?: CourseFolderCurriculumItem[] | null;
  order?: number;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   */
  createdAt?: string;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   */
  modifiedAt?: string;
  _usageCounts?: {
    course?: number;
    unit?: number;
    assessment?: number;
    folder?: number;
    badge?: number;
  } | null;
  _links?: {
    /**
     * A link to view the curriculum node
     * @format uri-reference
     */
    read?: string;
    /**
     * A link to modify the curriculum node
     * @format uri-reference
     */
    update?: string;
    /**
     * A link to delete the curriculum node
     * @format uri-reference
     */
    delete?: string;
    /**
     * A link to view the curriculum node usage
     * @format uri-reference
     */
    getUsage?: string;
  };
};

/**
 * A course folder
 * A course folder
 */
export type CourseFolderItem = {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** The name of the folder. */
  name?: string;
  /** The name of the folder, including any class codes. */
  title?: string;
  /** A list of class codes (if any) associated with this folder. */
  codes?: string[];
  /** A curriculum node */
  curriculumNodes?: CourseFolderCurriculumItem;
  /** A course folder */
  parent?: CourseFolderItem;
  _links?: {
    /**
     * A link to the homepage for this folder.
     * @format uri-reference
     */
    view?: string;
  };
} | null;

/**
 * A Course item
 * A Course item
 */
export interface CourseItem {
  course?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    title?: string;
    /** The course's subject code. */
    subjectCode?: string;
    /** The course's framework ID */
    frameworkId?: number | null;
    /** A course folder */
    folder?: CourseFolderItem;
    _links?: {
      /**
       * A link to view this course: contains a modify form.
       * @format uri-reference
       */
      view?: string;
      /**
       * A link to delete this course
       * @format uri-reference
       */
      delete?: string;
    };
  };
}

export interface CourseList {
  data?: {
    /** A Course item */
    courses?: CourseItem;
    /** A Course item */
    suggestions?: CourseItem;
  };
  /** Metadata for lists of items retrieved */
  metadata?: ListMetadata;
}

export interface SearchCoursesParams {
  /** Will do a fuzzy match on the `course` name. **_You may only define either query or folder at a time._** */
  query?: string;
  /**
   * Passing folder ID will return related courses as suggestions. If the folder contains curriculum code(s), the
   * suggestions will return a list of other courses that fulfils the same curriculum code(s).
   * **_You may only define either query or folder at a time._**
   */
  folder?: number;
  /**
   * A generated but decodable pointer to the first record to return.
   *
   * Each endpoint whose data accepts a cursor will return a cursor that
   * points to the next page of the result set.
   */
  cursor?: Cursor;
  /**
   * Limit
   * An option to limit the returned results.
   *
   * Each endpoint whose data accepts a limit will limit
   * their results to that number.
   *
   * Note a maximum limit may also apply, depending on the
   * specific type of request.
   */
  limit?: number;
}
