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
 * A truthy integer value (0 or 1).
 *
 * 0 evaluates to false; 1 evaluates to true.
 * @default 0
 */
export enum QueryBoolean {
  Value0 = 0,
  Value1 = 1,
}

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
 * A description of how a file is stored in Schoolbox's internal file storage,
 * and of how it may be retrieved.
 */
export interface File {
  /** The location of the file in the file store. */
  hash?: string;
  /** The name with which the file was uploaded. */
  name?: string;
  /** The mimetype of the uploaded file. */
  mime?: string;
  /** The type of the uploaded file. */
  type?: FileTypeEnum;
  /** The uploaded file's size, in bytes. */
  size?: number;
  /** Relevant links for the file. */
  _links?: {
    /**
     * An icon for the file's mimetype.
     * @format uri
     * @example "/static/images/mime/application-image-jpg.svg"
     */
    icon?: string;
    /**
     * An image URL for the file (if it's an image).
     * @format uri
     * @example "/storage/image.php?hash=a5e2262c38739a80255cc97e50e97b5d3030e749"
     */
    image?: string;
    /**
     * A stream URL for the file (if it's audio or video).
     * @format uri
     * @example "/cms/sendVideo.php?id=&a5e2262c38739a80255cc97e50e97b5d3030e749type=storage"
     */
    stream?: string;
    /**
     * A poster URL for the file (if it's a video).
     * @format uri
     * @example "/cms/videoThumb.php?size=poster&id=&a5e2262c38739a80255cc97e50e97b5d3030e749type=storage"
     */
    poster?: string;
    /**
     * A URL from which the file may be fetched.
     * @format uri
     * @example "/storage/fetch.php?hash=a5e2262c38739a80255cc97e50e97b5d3030e749"
     */
    fetch?: string;
  };
}

/** News article body, as raw HTML. */
export type Body = string;

/**
 * A pointer to a file within Schoolbox, in the format:
 * `$locator:$location:$filename`
 *
 * The variables within the pointer have this meaning:
 * * `$locator` represents the strategy for finding the file:
 *   * `store` for files uploaded to Schoolbox's storage
 *   * `browse` finds files in Schoolbox's resource browser
 *   * `myfile` finds files in a Schoolbox user's My Files browser
 *   * `office365` finds files in an Office365 store
 * * `$location` is the location of the file within `$locator`:
 *   * for `store` this is a file's unique hash
 *   * for `browse` and `myfile` this is a file ID
 *   * for `office365` this is the file's unique node
 * * `$filename` is the filename that the file will be given once it is uploaded
 *   to wherever it is being uploaded
 *
 * See the [Upload a file](#post-/storage/asyncUpload.php)
 * endpoint for details on how to upload a file, and receive a file
 * pointer from that upload.
 */
export type FilePointer = string;

/**
 * A base-64 encoded URL to redirect to, once processing of the entity on this
 * page is completed.
 * @pattern ^[a-zA-Z0-9+/]+={0,2}$
 */
export type ReturnUrl = string;

/** A topic which may be applicable to a news article. */
export interface Topic {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** A human-readable name for the topic. */
  name?: string;
  /** A machine-readable name for the topic. */
  slug?: string;
  /** The order in which this topic will display in a topic list. */
  sequence?: number;
}

export interface CommonFields {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** News article title. */
  title?: string;
  /**
   * News article displayed blurb, as raw HTML.
   *
   * This is derived from the article's blurb (if any) and body:
   * * the blurb is used in full, if provided
   * * if not, the body is trimmed
   */
  blurb?: string;
  /** Feature image of this article. */
  featureImage?: {
    /** The mimetype of the image file. */
    mime?: string;
    /** The size of the image file in bytes. */
    size?: number;
    /** Relevant links for the file. */
    _links?: {
      image?: {
        auth?: boolean | null;
        /**
         * A URL for the file storage.
         * @format uri
         */
        href?: string;
      };
    };
  };
  /** When was the article published? (RFC3339 string eg. "2018-01-28T00:00:00+11:00"). */
  publishAt?: DateTimeString;
  /** A list of topics which are applicable to the article. */
  topics?: {
    /** A human-readable name for the topic. */
    name?: string;
    /** A machine-readable name for the topic. */
    slug?: string;
  }[];
}

/** The author's details. */
export interface Author {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
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
  /** The author's first name (a.k.a. given name). */
  firstname?: string;
  /** The author's last name (a.k.a. surname). */
  lastname?: string;
  /** The author's title. */
  title?: string;
  /**
   * The author's full name: usually, this is the title, first name and last
   * name joined together.
   */
  fullname?: string;
  preferredName?: string | null;
  givenName?: string;
}

/**
 * A human-readable representation of the article's current
 * status.
 *
 * * `Drafted`: the article is a draft only
 * * `Awaiting Moderation`: the article has been submitted
 *   for approval, but is not yet approved or rejected
 * * `Awaiting Publication`: the article has been approved
 *   for publishing, but its publish date has not been
 *   reached yet
 * * `Rejected`: the article has been rejected for
 *   publishing
 * * `Published`: the article has been published
 * * `Archived`: the article has expired; whilst it is no
 *   longer published, it is still readable in the archive
 */
export type Status = string;

/**
 * When did the article's status change to its current
 * value? (RFC3339 string eg. "2018-01-28T00:00:00+11:00").
 */
export type StatusDate = DateTimeString;

/**
 * Is this article sticky?
 *
 * If so, it will always display at the top of the list of
 * articles.
 */
export type Sticky = boolean;

export interface Links {
  /** Endpoint for [saving this article for later](#post-/news/saved/-id-/add). */
  saveForLater?: Link;
  /**
   * Endpoint for [removing this article from the save
   * for later list](#post-/news/saved/-id-/remove).
   */
  unsaveForLater?: Link;
  /** Endpoint for [viewing this article](#get-/news/-id-). */
  self?: Link;
  /** Endpoint for viewing a HTML form for updating this article. */
  update?: Link;
}

/** The author's details: currently, only their name. */
export interface AuthorNameOnly {
  /** The author's full name. */
  fullname?: string;
}

export interface ReadMore {
  /**
   * The text to show in this article's "read more" link,
   * if any.
   */
  string?: string;
  /**
   * Is there a "read more" link?
   *
   * It is only available if the "read more" link
   * configuration is not empty, and the article has one or
   * more of:
   * * a feature image
   * * a discussion thread
   * * a body
   */
  available?: boolean;
}

/** The type of the uploaded file. */
export enum FileTypeEnum {
  Image = "image",
  Video = "video",
  Audio = "audio",
  Document = "document",
  Other = "other",
}

/**
 * Is this article pinned to the top of any list it is within?
 *
 * (Not all users have permission to set this flag.)
 *
 * A truthy integer value (0 or 1).
 *
 * 0 evaluates to false; 1 evaluates to true.
 * @default 0
 */
export enum CommsNewsPostCreateStickyEnum {
  Value0 = 0,
  Value1 = 1,
}

export interface CommsNewsGetDetailParams {
  /**
   * The ID of an item to act upon.
   *
   * The type of item that is acted upon is dependent on the endpoint in which
   * it is included.
   * @format int32
   * @min 1
   */
  id: number;
}

export interface CommsNewsPostUpdateParams {
  /**
   * The ID of an item to act upon.
   *
   * The type of item that is acted upon is dependent on the endpoint in which
   * it is included.
   * @format int32
   * @min 1
   */
  id: number;
}

export interface CommsNewsPostDeleteParams {
  /**
   * The ID of an item to act upon.
   *
   * The type of item that is acted upon is dependent on the endpoint in which
   * it is included.
   * @format int32
   * @min 1
   */
  id: number;
}

export interface CommsNewsModerationSetStatusPayload {
  /**
   * Why was the article rejected?
   *
   * (Only applies if rejecting the article.)
   */
  rejectionReason?: string;
}

export interface CommsNewsModerationSetStatusParams {
  /**
   * The ID of an item to act upon.
   *
   * The type of item that is acted upon is dependent on the endpoint in which
   * it is included.
   * @format int32
   * @min 1
   */
  id: number;
  /**
   * The status to put the article into.
   *
   * - `submit`: put the article into the mod queue
   * - `accept`: accept the article for publication
   * - `reject`: block the article from being published, or retract it from
   *             publication
   */
  status?: StatusEnum;
}

/**
 * The status to put the article into.
 *
 * - `submit`: put the article into the mod queue
 * - `accept`: accept the article for publication
 * - `reject`: block the article from being published, or retract it from
 *             publication
 */
export enum StatusEnum {
  Submit = "submit",
  Accept = "accept",
  Reject = "reject",
}

/**
 * The status to put the article into.
 *
 * - `submit`: put the article into the mod queue
 * - `accept`: accept the article for publication
 * - `reject`: block the article from being published, or retract it from
 *             publication
 */
export enum CommsNewsModerationSetStatusParams1StatusEnum {
  Submit = "submit",
  Accept = "accept",
  Reject = "reject",
}

export enum CommsNewsModerationSetStatusParams1Enum {
  Submit = "submit",
  Accept = "accept",
  Reject = "reject",
}

export interface CommsNewsSaveForLaterPostAddParams {
  /**
   * The ID of an item to act upon.
   *
   * The type of item that is acted upon is dependent on the endpoint in which
   * it is included.
   * @format int32
   * @min 1
   */
  id: number;
}

export interface CommsNewsSaveForLaterPostRemoveParams {
  /**
   * The ID of an item to act upon.
   *
   * The type of item that is acted upon is dependent on the endpoint in which
   * it is included.
   * @format int32
   * @min 1
   */
  id: number;
}

export interface CommsNewsGetListForIndexParams {
  /** The machine-readable value (a.k.a. slug) for the selected news topic. */
  topic?: string;
}

export interface CommsNewsFeedGetFeedForUserParams {
  /** A key which identifies a user. */
  key: string;
}

export interface CommsNewsGetListForHomepageParams {
  /**
   * Is compact mode enabled?
   *
   * If on, the list of attachments is loaded, and any articles loaded are
   * considered as read by the authenticated user.
   */
  c?: QueryBoolean;
  /** Limit of results to show per page */
  l?: number;
  /**
   * The ID of an item to act upon.
   *
   * The type of item that is acted upon is dependent on the endpoint in which
   * it is included.
   * @format int32
   * @min 1
   */
  id: number;
}
