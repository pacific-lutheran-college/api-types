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
 * External ID
 * This user's ID in the school's School Information System (SIS).
 *
 * This value is used to query the SIS for data that is stored in the SIS,
 * in particular:
 * * relationships with other users
 * * class enrolments
 * * timetabled classes
 * @example 501
 */
export type ExternalId = string | null;

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
 * Datetime
 * The date as a RFC3339 string. eg. "2018-01-28T00:00:00+11:00".
 * @format date-time
 * @example "2018-01-28T00:00:00+11:00"
 */
export type DateTimeString = string;

/**
 * Link
 * A JSON representation of a link to content within Schoolbox.
 * For compatibility with existing code, can be defined as either:
 * * a URI string
 * * an object, which contains a URI string and an `auth` boolean value
 */
export type Link =
  | string
  | {
      /** @format uri */
      href: string;
      /**
       * Is the currently authenticated user authorized to view the resource
       * pointed to by `href`?
       *
       * If this value is `null`, then it is not known whether the user may
       * view this resource.
       */
      auth?: boolean | null;
    };

/**
 * Comment list
 * A list of comments
 */
export interface DiscussionCommentReadList {
  data?: {
    /** The ID of this comment. */
    id?: number;
    /** The author of this comment. */
    author?: {
      /** The ID of this user. */
      id?: number;
      /**
       * This user's ID in the school's School Information System (SIS).
       *
       * This value is used to query the SIS for data that is stored in the SIS,
       * in particular:
       * * relationships with other users
       * * class enrolments
       * * timetabled classes
       */
      externalId?: ExternalId;
      /** The user's title (Mr., Ms., etc.). */
      title?: string | null;
      /** The user's first name. */
      firstname?: string | null;
      /** The user's full name. */
      fullName?: string | null;
      /** The user's given name. */
      givenName?: string | null;
      /** The user's last name. */
      lastname?: string | null;
      /** The user's preferred name. */
      preferredName?: string | null;
      _links?: {
        avatar?: {
          auth?: string | null;
          /** @format uri */
          href?: string | null;
        };
        profile?: {
          auth?: string | null;
          /** @format uri */
          href?: string | null;
        };
      };
    };
    content?: string;
    /** The date as a RFC3339 string. eg. "2018-01-28T00:00:00+11:00". */
    createdAt?: DateTimeString;
    /** The date as a RFC3339 string. eg. "2018-01-28T00:00:00+11:00". */
    updatedAt?: DateTimeString;
  }[];
  /** Metadata for lists of items retrieved */
  metadata?: ListMetadata;
}

/**
 * Thread
 * Common fields for discussion threads.
 */
export interface DiscussionThreadRead {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** Is the thread open for further comments? */
  open?: boolean;
  /** The date as a RFC3339 string. eg. "2018-01-28T00:00:00+11:00". */
  createdAt?: DateTimeString;
  /** The date as a RFC3339 string. eg. "2018-01-28T00:00:00+11:00". */
  updatedAt?: DateTimeString;
  _links?: {
    /** Endpoint for [get comments for a thread](#get-/discussion/-contextType-/-contextId-/threads/-id-/comments). */
    getComments?: Link;
    /** Endpoint for [create a new comment on a thread](#post-/discussion/-contextType-/-contextId-/threads/-id-/comments). */
    createComment?: Link;
  };
  /** A list of direct child comments of this thread. */
  children?: DiscussionCommentReadList;
}

/** Common fields for discussion threads. */
export interface CreateThreadPayload {
  /** Is the thread open for further comments? */
  open: boolean;
}

export interface CreateThreadParams {
  contextType: string;
  contextId: string;
}

export interface GetThreadParams {
  contextType: string;
  contextId: string;
  id: string;
}

export interface OpenThreadParams {
  contextType: string;
  contextId: string;
  id: string;
}

export interface CloseThreadParams {
  contextType: string;
  contextId: string;
  id: string;
}

export interface GetCommentsByThreadParams {
  contextType: string;
  contextId: string;
  id: string;
}

/** A single comment. */
export interface CreateCommentInThreadPayload {
  /** Comment content. */
  content: string;
}

export interface CreateCommentInThreadParams {
  contextType: string;
  contextId: string;
  id: string;
}

export interface DeleteCommentParams {
  contextType: string;
  contextId: string;
  id: string;
}

export interface GetCommentsByParentParams {
  contextType: string;
  contextId: string;
  id: string;
}
