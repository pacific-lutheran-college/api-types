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
 * Role
 * A type of user account at the school. Roles are generally used to group
 * users by the type of position that they have at the school.
 * @example {"id":4,"name":"Senior Students","type":"student"}
 */
export interface Role {
  /** Identifying ID number for most objects within Schoolbox */
  id: Id;
  /** The name of the role. */
  name?: string;
  /**
   * The type of this role. Different role types have different levels of
   * access to different parts of Schoolbox.
   */
  type?: RoleTypeEnum;
}

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
 * Year Level
 * A year level which a student may belong to.
 * @example {"id":13,"name":"Year 12"}
 */
export type YearLevel = {
  /** Identifying ID number for most objects within Schoolbox */
  id: Id;
  /** The name of the year level. */
  name?: string;
} | null;

/**
 * User
 * Short fields for users
 */
export interface UserShort {
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
  /**
   * The user's title (Mr., Ms., etc.).
   * @example "Ms"
   */
  title?: string | null;
  /**
   * The user's first name.
   *
   * Schoolbox doesn't distinguish between a person's actual first name
   * and any other names, and in any case is not the definitive source of
   * naming information; therefore in practice this will usually be the
   * user's given name.
   * @example "Rebecca"
   */
  firstName?: string;
  /** The user's preferred name. */
  preferredName?: string | null;
  /** The user's preferred name, if set. If preferred name is not set, returns the user's first name. */
  givenName?: string;
  /**
   * The user's surname.
   * @example "White"
   */
  lastName?: string | null;
  /**
   * The user's formatted full name.
   * @example "Ms Rebecca White"
   */
  fullName?: string;
  /**
   * A type of user account at the school. Roles are generally used to group
   * users by the type of position that they have at the school.
   */
  role?: Role;
  /** A year level which a student may belong to. */
  yearLevel?: YearLevel;
}

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
 * User
 * Short fields for users
 */
export interface UserAuthor {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  _links?: {
    /**
     * URL for a link to the user's profile page.
     * @format uri
     * @example "/search/user/25"
     */
    profile?: string;
    /**
     * URL for a link to the user's avatar image.
     * @format uri
     * @example "/portrait.php?id=25&size=square64"
     */
    avatar?: string;
  };
  /**
   * The user's title (Mr., Ms., etc.).
   * @example "Ms"
   */
  title?: string | null;
  /**
   * The user's first name.
   *
   * Schoolbox doesn't distinguish between a person's actual first name
   * and any other names, and in any case is not the definitive source of
   * naming information; therefore in practice this will usually be the
   * user's given name.
   * @example "Rebecca"
   */
  firstName?: string;
  /** The user's preferred name. */
  preferredName?: string | null;
  pronoun?: string | null;
  /**
   * The user's surname.
   * @example "White"
   */
  lastName?: string | null;
  /** The user's formatted full name. */
  fullName?: string;
  /** Whether the user is deleted or not. */
  isDeleted?: boolean;
}

/**
 * a Curriculum Code
 * A Curriculum Code
 */
export interface CurriculumItem {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** @example "Self-awareness" */
  name?: string;
  /** @example "GCPSC-SEA" */
  code?: string;
}

/**
 * An array of links used to perform actions relating to this learning moment.
 * Whether a particular link will be present depends on the state of the learning moment.
 * For example, createThread will only be present if a discussionThread has not already been created.
 */
export interface LearningMomentLinks {
  /**
   * @format uri
   * @example "/discussion/evidence/19/threads"
   */
  createThread?: string;
  /**
   * @format uri
   * @example "/learning/evidence/19"
   */
  detail?: string;
  /**
   * @format uri
   * @example "/learning/evidence/19/modify"
   */
  modifyForm?: string;
  /**
   * @format uri
   * @example "/learning/evidence/19"
   */
  put?: string;
  /**
   * @format uri
   * @example "/learning/evidence/19/draft"
   */
  draft?: string;
  /**
   * @format uri
   * @example "/learning/evidence/19/submit"
   */
  submit?: string;
  /**
   * @format uri
   * @example "/learning/evidence/19/publish"
   */
  publish?: string;
  /**
   * @format uri
   * @example "/learning/evidence/19/reject"
   */
  reject?: string;
  /**
   * @format uri
   * @example "/learning/evidence/19/delete"
   */
  delete?: string;
}

export interface LearningMomentResponse {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** The date as a RFC3339 string. eg. "2018-01-28T00:00:00+11:00". */
  createdAt?: DateTimeString;
  /** The date as a RFC3339 string. eg. "2018-01-28T00:00:00+11:00". */
  updatedAt?: DateTimeString;
  /**
   * Body text of learning moment as HTML.
   * @example "<p>I learned to tie my shoelaces.  Let me explain in detail the steps...</p>"
   */
  body?: string;
  /** Short fields for users */
  creator?: UserAuthor;
  discussionThread?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    /** Whether the discussion thread is open to new comments or not. */
    open?: boolean | null;
    /** Currently null, but in the future will be a datetime string. */
    createdAt?: string | null;
    /** Currently null, but in the future will be a datetime string. */
    updatedAt?: string | null;
    _links?: {
      getComments?: Link & {
        /** @example "/discussion/evidence/19/threads/27/comments" */
        href?: any;
      };
      createComment?: Link & {
        /** @example "/discussion/evidence/19/threads/27/comments" */
        href?: any;
      };
    };
  };
  /** Short fields for users */
  recipient?: UserAuthor;
  /** Array of evidence objects. */
  evidence?: {
    /**
     * A description of how a file is stored in Schoolbox's internal file storage,
     * and of how it may be retrieved.
     */
    storage?: File;
    /** @example "photo.jpeg" */
    filename?: string;
  }[];
  /** Array of folder objects. */
  folders?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    name?: string;
    code?: string;
  }[];
  currentState?: LearningMomentResponseCurrentStateEnum;
  /** Array of curriculum node objects. */
  curriculumNodes?: CurriculumItem[];
  /** Array of tag objects */
  tags?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    /**
     * Short text tag to help with searching.
     * @example "Class Work"
     */
    name?: string;
  }[];
  /**
   * An array of links used to perform actions relating to this learning moment.
   * Whether a particular link will be present depends on the state of the learning moment.
   * For example, createThread will only be present if a discussionThread has not already been created.
   */
  _links?: LearningMomentLinks;
  _labels?: {
    publish?: string;
  };
}

export interface DateObject {
  /**
   * Unix timestamp
   * @example 1759472154
   */
  timestamp?: number;
  /**
   * The date as it is intended to be displayed in this context.
   * @example "Oct 3, 2025"
   */
  displayAs?: string;
  /**
   * Date in RFC3339 format.
   * @example "2025-10-03T16:09:06+10:00"
   */
  rfc?: string;
}

export interface LearningMomentPayloadItem {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /**
   * Body text of learning moment as HTML.
   * @example "<p>I learned to tie my shoelaces.  Let me explain in detail the steps...</p>"
   */
  body?: string;
  /**
   * Short version of body text, automatically generated from body.  Not HTML.
   * @example "I learned to tie my shoelaces."
   */
  blurb?: string;
  /**
   * Whether to show a 'Read more' link after the blurb text.
   * @example false
   */
  showReadMore?: boolean;
  /** Array of file objects */
  files?: File[];
  /** Short fields for users */
  recipient?: UserAuthor;
  /** Short fields for users */
  creator?: UserAuthor;
  createdAt?: DateObject;
  updatedAt?: DateObject;
  /**
   * Whether the learning moment has any comments.
   * @example false
   */
  hasComments?: boolean;
  /** @example "draft" */
  currentState?: LearningMomentPayloadItemCurrentStateEnum;
  /** Array of tag objects */
  tags?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    /**
     * Short text tag to help with searching.
     * @example "Class Work"
     */
    name?: string;
  }[];
  /** Currently an empty array.  Return of curriculum nodes and filtering by curriculum nodes is planned for a future version. */
  curriculumNodes?: object[];
  /**
   * An array of links used to perform actions relating to this learning moment.
   * Whether a particular link will be present depends on the state of the learning moment.
   * For example, createThread will only be present if a discussionThread has not already been created.
   */
  _links?: LearningMomentLinks;
  _labels?: {
    publish?: string;
  };
}

export interface LearningMomentRequest {
  /**
   * Body text of learning moment as HTML.
   * @example "<p>I learned to tie my shoelaces.  Let me explain in detail the steps...</p>"
   */
  body?: string;
  /** Array of evidence objects. */
  evidence?: {
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
    file?: FilePointer;
  }[];
  /** Array of curriculum node ids. */
  curriculumNodes?: Id[];
  /** Array of tag object stubs (containing id only). */
  tags?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
  }[];
  /** Array of folder ids. */
  folders?: Id[];
}

/**
 * A learning moment item
 * A learning moment item
 */
export interface EvidenceItem {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example "2022-08-30T10:09:09+10:00"
   */
  createdAt?: string;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example "2022-08-30T10:09:09+10:00"
   */
  updatedAt?: string;
  /** The content of the Learning Moment */
  body?: string;
  creator?: {
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
    /**
     * The user's title (Mr., Ms., etc.).
     * @example "Ms"
     */
    title?: string | null;
    /**
     * The user's first name.
     *
     * Schoolbox doesn't distinguish between a person's actual first name
     * and any other names, and in any case is not the definitive source of
     * naming information; therefore in practice this will usually be the
     * user's given name.
     * @example "Rebecca"
     */
    firstName?: string | null;
    /**
     * The user's surname.
     * @example "White"
     */
    lastName?: string | null;
    _links?: {
      /** @example "/search/user/2" */
      profile?: string;
      /** @example "/portrait.php?id=2&size=square64" */
      avatar?: string;
    };
    /** @example false */
    isDeleted?: boolean;
  };
  recipient?: {
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
    /**
     * The user's title (Mr., Ms., etc.).
     * @example "Ms"
     */
    title?: string | null;
    /**
     * The user's first name.
     *
     * Schoolbox doesn't distinguish between a person's actual first name
     * and any other names, and in any case is not the definitive source of
     * naming information; therefore in practice this will usually be the
     * user's given name.
     * @example "Rebecca"
     */
    firstName?: string | null;
    /**
     * The user's surname.
     * @example "White"
     */
    lastName?: string | null;
    _links?: {
      /** @example "/search/user/2" */
      profile?: string;
      /** @example "/portrait.php?id=2&size=square64" */
      avatar?: string;
    };
    /** @example false */
    isDeleted?: boolean;
  };
  /** Common fields for discussion threads. */
  discussionThread?: DiscussionThreadRead;
  filename?: string | null;
  storage?: {
    /** @example "966fb6fbd7bdf8c442fb421d816b1ff8a7d6a23c" */
    hash?: string | null;
    /** @example "image/jpeg" */
    mime?: string | null;
    /** @example "image" */
    type?: string | null;
    /** @example 3385989 */
    size?: number | null;
    /** Will contain one of the following depending on what file type is attached */
    _links?: {
      /** @example "/static/images/mime/application-image-jpg.svg" */
      icon?: string;
      /** @example "/storage/image.php?hash=966fb6fbd7bdf8c442fb421d816b1ff8a7d6a23c" */
      image?: string;
      stream?: string;
      poster?: string;
      /** @example "/storage/fetch.php?hash=966fb6fbd7bdf8c442fb421d816b1ff8a7d6a23c" */
      fetch?: string;
    } | null;
  };
  curriculumNodes?: CurriculumItem[] | null;
  /** System configurable in your Admin Lists Learning Moment area */
  tags?: {
    /**
     * the DB identifier of the Learning Moment Tags
     * @example 1
     */
    id?: number;
    /**
     * the name of the Learning Moment type, may not be unique
     * @example "Class Work"
     */
    name?: string;
  } | null;
  _links?: {
    /** @example "/discussion/evidence/7/threads" */
    createThread?: string;
    /** @example "/learning/evidence/7" */
    delete?: string;
    /** @example "/learning/evidence/7" */
    detail?: string;
    /** @example "/learning/evidence/7/modify" */
    modifyForm?: string;
    /** @example "/learning/evidence/7" */
    put?: string;
  };
}

/** Evidence */
export interface EvidenceList {
  /**
   * moment - discriminator for learning moment object
   * @example "evidence"
   */
  discriminator: string;
  /** A learning moment item */
  object?: EvidenceItem;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example "2022-08-30T10:09:09+10:00"
   */
  date?: string;
}

/**
 * badge
 * A Badge item
 */
export interface BadgeItem {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example "2022-08-30T10:09:09+10:00"
   */
  createdAt?: string;
  createdBy?: {
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
    /**
     * The user's title (Mr., Ms., etc.).
     * @example "Ms"
     */
    title?: string | null;
    /**
     * The user's first name.
     *
     * Schoolbox doesn't distinguish between a person's actual first name
     * and any other names, and in any case is not the definitive source of
     * naming information; therefore in practice this will usually be the
     * user's given name.
     * @example "Rebecca"
     */
    firstName?: string | null;
    /**
     * The user's surname.
     * @example "White"
     */
    lastName?: string | null;
    _links?: {
      /** @example "/search/user/2" */
      profile?: string;
      /** @example "/portrait.php?id=2&size=square64" */
      avatar?: string;
    };
    /** @example false */
    isDeleted?: boolean;
  };
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example "2022-08-30T10:09:09+10:00"
   */
  updatedAt?: string;
  updatedBy?: {
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
    /**
     * The user's title (Mr., Ms., etc.).
     * @example "Ms"
     */
    title?: string | null;
    /**
     * The user's first name.
     *
     * Schoolbox doesn't distinguish between a person's actual first name
     * and any other names, and in any case is not the definitive source of
     * naming information; therefore in practice this will usually be the
     * user's given name.
     * @example "Rebecca"
     */
    firstName?: string | null;
    /**
     * The user's surname.
     * @example "White"
     */
    lastName?: string | null;
    _links?: {
      /** @example "/search/user/2" */
      profile?: string;
      /** @example "/portrait.php?id=2&size=square64" */
      avatar?: string;
    };
    /** @example false */
    isDeleted?: boolean;
  };
  /**
   * @example "Jump Rope for Heart Team
   * "
   */
  name?: string;
  /** The content of the Learning Moment */
  body?: string;
  image?: string | null;
  /**
   * The Badge Image, either system defined or selectable by the user
   * @example "/images/badges/sport/23.svg
   * "
   */
  icon?: string;
  /** @example true */
  allowAsGoal?: boolean;
  /**
   * On First load of the achieved badge, should the badge be animated? flying stars, fly in...
   * @example true
   */
  animate?: boolean;
  category?: {
    /** @example 4 */
    id?: number;
    /**
     * @example "Extra-Curricular
     * "
     */
    name?: string;
  };
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example null
   */
  achievementExpiry?: string | null;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example null
   */
  goalExpiry?: string | null;
  curriculumNodes?: CurriculumItem[] | null;
  /**
   * System configurable in your Admin Lists Learning Moment area
   * @example null
   */
  tags?: {
    /**
     * the DB identifier of the Learning Moment Tags
     * @example 1
     */
    id?: number;
    /**
     * the name of the Learning Moment type, may not be unique
     * @example "Class Work"
     */
    name?: string;
  } | null;
  _links?: {
    /**
     * the link for the user to update the badge
     * @example "/learning/badge/10/update"
     */
    update?: string;
    /**
     * the link for the user to delete the badge
     * @example "/learning/badge/10"
     */
    delete?: string;
    /** @example "/learning/badge/award/10/achievement/recipients" */
    achievementRecipients?: string;
    /** @example "/learning/badge/award/10/goal/recipients" */
    goalRecipients?: string;
    /** @example "/learning/badge/award/10/achievement/withdraw" */
    achievementWithdraw?: string;
    /** @example "/learning/badge/award/10/goal/withdraw" */
    goalWithdraw?: string;
    /**
     * The Badge Image, either system defined or selectable by the user
     * @example "/static/images/badges/sport/23.svg"
     */
    icon?: string;
  };
}

/**
 * A badgeAward item
 * A Badge Award item
 */
export interface BadgeAwardItem {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** A Badge item */
  badge?: BadgeItem;
  /** @example "goal" */
  status?: BadgeAwardItemStatusEnum;
  /** @example "I saw it with my own eyes!" */
  reason?: string;
  /** @example true */
  isGoal?: boolean;
  /** A Badge Award item */
  award?: BadgeAwardItem;
  recipient?: {
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
    /**
     * The user's title (Mr., Ms., etc.).
     * @example "Ms"
     */
    title?: string | null;
    /**
     * The user's first name.
     *
     * Schoolbox doesn't distinguish between a person's actual first name
     * and any other names, and in any case is not the definitive source of
     * naming information; therefore in practice this will usually be the
     * user's given name.
     * @example "Rebecca"
     */
    firstName?: string | null;
    /**
     * The user's surname.
     * @example "White"
     */
    lastName?: string | null;
    _links?: {
      /** @example "/search/user/2" */
      profile?: string;
      /** @example "/portrait.php?id=2&size=square64" */
      avatar?: string;
    };
    /** @example false */
    isDeleted?: boolean;
  };
  awardedBy?: {
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
    /**
     * The user's title (Mr., Ms., etc.).
     * @example "Ms"
     */
    title?: string | null;
    /**
     * The user's first name.
     *
     * Schoolbox doesn't distinguish between a person's actual first name
     * and any other names, and in any case is not the definitive source of
     * naming information; therefore in practice this will usually be the
     * user's given name.
     * @example "Rebecca"
     */
    firstName?: string | null;
    /**
     * The user's surname.
     * @example "White"
     */
    lastName?: string | null;
    _links?: {
      /** @example "/search/user/2" */
      profile?: string;
      /** @example "/portrait.php?id=2&size=square64" */
      avatar?: string;
    };
    /** @example false */
    isDeleted?: boolean;
  };
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example "2022-08-27T12:49:11+10:00"
   */
  awardedAt?: string;
  /** Short fields for users */
  reasonedBy?: UserShort;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example "2022-08-27T12:49:11+10:00"
   */
  reasonedAt?: string | null;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example null
   */
  expiresAt?: string | null;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example null
   */
  viewedOn?: string | null;
  _links?: {
    /** @example "/learning/badge/award/10/achievement/withdraw" */
    achievementWithdraw?: string;
    /** @example "/learning/badge/award/10/goal/withdraw" */
    goalWithdraw?: string;
    /** @example "/learning/badge/award/10/achievement" */
    goalAward?: string;
    /** @example "/learning/badge/award/8/update" */
    awardUpdate?: string;
  };
}

/** Badge */
export interface BadgeAwardList {
  /**
   * badgeAward - discriminator for Badge award object
   * @example "badgeAward"
   */
  discriminator: string;
  /** A Badge Award item */
  object?: BadgeAwardItem;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example "2022-08-30T10:09:09+10:00"
   */
  date?: string;
}

/**
 * A dueWorkFeedback item
 * A Due Work Feedback item
 */
export interface DueWorkFeedbackItem {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /**
   * The mark in its original form.  For example this could be a letter grade or a percentage or a rubric.
   * @example "A"
   */
  mark?: string;
  /**
   * The mark in numeric form
   * @deprecated
   * @format float
   * @example 85
   */
  normalisedMark?: number;
  /**
   * A string intended to correspond to a css class that represents a numeric value visually, if possible. Returns null if there's no corresponding colour visualisation, including when it's disabled via admin.
   * @example "5"
   */
  gradientMark?: string | null;
  /** Comments about the work or the mark, by the user who assessed the work and gave the mark. */
  comment?: string;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example "2022-08-30T10:09:09+10:00"
   */
  publishedAt?: string;
  /** Short fields for users */
  instructor?: UserShort;
  assessment?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    /**
     * The title of the assessment.
     * @example "Evaluate your Approaches to Learning"
     */
    title?: string;
    /**
     * The date on which the assessment was published, as a RFC3339 string.
     * @format date-time
     * @example "2022-08-30T10:09:09+10:00"
     */
    publishedAt?: string;
    /**
     * The earliest date on which the assessment may be started, as a RFC3339 string.
     * @format date-time
     * @example "2022-08-30T10:09:09+10:00"
     */
    openAt?: string;
    /**
     * The date on which the assessment is due, as a RFC3339 string.
     * @format date-time
     * @example "2022-08-30T10:09:09+10:00"
     */
    dueAt?: string;
    /**
     * The latest date on which the assessment may be submitted, as a RFC3339 string.
     * @format date-time
     * @example "2022-08-30T10:09:09+10:00"
     */
    closeAt?: string;
    /**
     * The weight given to this assessment for the purpose of calculating an overall grade.
     * @example 25
     */
    weight?: number;
    /**
     * The number determines the order in which the assessment is intended to be completed, relative to other assessments.
     * @example 5
     */
    sequence?: number;
    /**
     * The type of work involved in this assessment.
     * @example "Formative Assessment Task"
     */
    workType?: string;
    /**
     * folderId
     * The ID of the folder to which this assessment belongs.
     * @format int32
     * @min 1
     */
    folderId?: number;
    /**
     * The name of the folder to which this assessment belongs.
     * @example "3IH"
     */
    folderName?: string;
  };
  _links?: {
    /** @example "/learning/assessments/150/69" */
    summary?: string;
  };
}

/** Due Work Feedback */
export interface DueWorkFeedbackList {
  /**
   * dueWorkFeedback - discriminator for Due Work Feedback object
   * @example "dueWorkFeedback"
   */
  discriminator: string;
  /** A Due Work Feedback item */
  object?: DueWorkFeedbackItem;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   * @example "2022-08-30T10:09:09+10:00"
   */
  date?: string;
}

/**
 * The type of this role. Different role types have different levels of
 * access to different parts of Schoolbox.
 */
export enum RoleTypeEnum {
  Staff = "staff",
  Student = "student",
  Parent = "parent",
  Guest = "guest",
}

/** The type of the uploaded file. */
export enum FileTypeEnum {
  Image = "image",
  Video = "video",
  Audio = "audio",
  Document = "document",
  Other = "other",
}

export enum LearningMomentResponseCurrentStateEnum {
  Draft = "draft",
  Submitted = "submitted",
  Published = "published",
  Rejected = "rejected",
}

/** @example "draft" */
export enum LearningMomentPayloadItemCurrentStateEnum {
  Draft = "draft",
  Submitted = "submitted",
  Published = "published",
  Rejected = "rejected",
}

/** @example "goal" */
export enum BadgeAwardItemStatusEnum {
  Goal = "goal",
  Achievement = "achievement",
}

export interface PutEvidenceBulkPublishPayload {
  /** Array of learning moment ids. */
  momentIds?: Id[];
  /**
   * Whether comments on the learning moments should be deleted before the learning moments are published.
   * @example false
   */
  deleteComments?: boolean;
}

export interface PutEvidenceBulkRejectPayload {
  /** Array of learning moment ids. */
  momentIds?: Id[];
  /**
   * The reason for the decision not to publish the learning moment in its current state.
   * Note this will appear in a comment in the discussion thread of the rejected learning moment.
   * @example "Please add more detail to your descriptions."
   */
  rejectionReason?: string;
}

export interface EvidenceCohortPayloadParams {
  /**
   * Comma-separated list of integer userIds (referring to owners) for filtering to specific learning moment owners.
   * Or an array of userIds as URL parameters (e.g. 'userIds[]=1&userIds=2...')
   */
  userIds?: string;
  /**
   * Comma-separated list of integer userIds (referring to authors) for filtering to specific learning moment authors.
   * Or an array of authorIds as URL parameters (e.g. 'authorIds[]=1&authorIds=2...')
   */
  authorIds?: string;
  /**
   * Comma-separated list of integer folderIds for filtering to learning moments linked to specific folders.
   * Or an array of folderIds as URL parameters (e.g. 'folderIds[]=1&folderIds=2...')
   */
  folderIds?: string;
  /**
   * Comma-separated list of integer tagIds for filtering to learning moments having specific tags.
   * Or an array of tagIds as URL parameters (e.g. 'tagIds[]=1&tagIds=2...')
   */
  tagIds?: string;
  /**
   * Comma-separated list of states for filtering to learning moments in specific states.
   * Or an array of states as URL parameters (e.g. 'states[]=rejected&states=draft...')
   */
  states?: StatesEnum;
  /**
   * A date in YYYY-MM-DD format.
   * @example "2025-10-15"
   */
  from?: string;
  /**
   * A date in YYYY-MM-DD format.
   * @example "2025-10-15"
   */
  to?: string;
  /** The ID of a class or group folder.  The cohort is the set of users involved in that class or group. */
  id: number;
}

/**
 * Comma-separated list of states for filtering to learning moments in specific states.
 * Or an array of states as URL parameters (e.g. 'states[]=rejected&states=draft...')
 */
export enum StatesEnum {
  Draft = "draft",
  Submitted = "submitted",
  Published = "published",
  Rejected = "rejected",
}

/**
 * Comma-separated list of states for filtering to learning moments in specific states.
 * Or an array of states as URL parameters (e.g. 'states[]=rejected&states=draft...')
 */
export enum EvidenceCohortPayloadParams1StatesEnum {
  Draft = "draft",
  Submitted = "submitted",
  Published = "published",
  Rejected = "rejected",
}

export interface PostEvidenceDraftMultiUserParams {
  /** A comma-separated list of userIds for whom the learning moment should be put into 'draft' state. */
  ids: string;
}

export interface PostEvidencePublishMultiUserParams {
  /** A comma-separated list of userIds for whom the learning moment should be published. */
  ids: string;
}

export interface PostEvidenceSubmitMultiUserParams {
  /** A comma-separated list of userIds for whom the learning moment should be submitted. */
  ids: string;
}

/** @example "upload" */
export enum LearningMomentEvidencePostMomentForUsersTypeEnum {
  Photo = "photo",
  Text = "text",
  Upload = "upload",
  Video = "video",
  Audio = "audio",
}

export interface LearningMomentEvidencePostMomentForUsersParams {
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

export interface PutEvidenceParams {
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

export interface DeleteLearningMomentParams {
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

export interface PutEvidenceDraftParams {
  /** The ID of the learning moment you wish to put into a 'draft' state. */
  id: number;
}

export interface PutEvidencePublishParams {
  /** The ID of the learning moment you wish to put into a 'published' state. */
  id: number;
}

/** The learning moment to save.  Only fields to be updated need to be included in the request. */
export type PutEvidenceRejectPayload = LearningMomentRequest & {
  /**
   * The reason for the decision not to publish the learning moment in its current state.
   * Note this will appear in a comment in the discussion thread of the rejected learning moment.
   * @example "Please add more detail to your descriptions."
   */
  rejectionReason?: string;
};

export interface PutEvidenceRejectParams {
  /** The ID of the learning moment you wish to put into a 'rejected' state. */
  id: number;
}

export interface PutEvidenceSubmitParams {
  /** The ID of the learning moment you wish to put into a 'submitted' state. */
  id: number;
}

export interface EvidenceFeedParams {
  /**
   * Base 64 encoded object.
   * Decoded examples:
   *  1. Return all feed items in category 'feedback'.
   *     {"filterNames" => ["feedback"], "tag" => ‘"}
   *  2. Return all feed items in category 'feedback' or 'achievements'.
   *     {"filterNames" => ["feedback", "achievements"], "tag" => ""}
   *  3. Return all feed items in category 'feedback' or 'learningMoments', that have tag "Class Work".
   *     {"filterNames" => ["feedback", "learningMoments"], "tag" => "Class Work"}
   * @example "eyJmaWx0ZXJOYW1lcyI6WyJnb2FscyIsImxlYXJuaW5nTW9tZW50cyIsImFjaGlldmVtZW50cyIsImZlZWRiYWNrIl0sInRhZyI6IiJ9"
   */
  filter?: {
    /** @example ["achievements","feedback","goals","learningMoments"] */
    filterNames?: FilterFilterNamesEnum[];
    /**
     * String to match a tag on one or more learning moments.
     * Note that tag is only relevant if 'learningMoments' is included in filterNames.
     * @example "Class Work"
     */
    tag?: string;
  };
  /**
   * Base64 encoded object of a pointer to display the next 10 items from.
   *
   * The ID, discriminator and datetime of the current last item.
   * @example "eyJpZCI6IjQiLCJkaXNjcmltaW5hdG9yIjoiYmFkZ2VBd2FyZCIsImRhdGUiOiIyMDIyLTA3LTIzIDExOjM5OjI3In0="
   */
  cursor?: {
    /** The ID of the object specified by discriminator. */
    id?: number;
    /**
     * The type of the object.
     * @example "badgeAward"
     */
    discriminator?: CursorDiscriminatorEnum;
    /**
     * The date time of the object in `YYYY-MM-DD hh:mm:ss` format.
     * @format date-time
     * @example "2022-08-30 10:09:09"
     */
    date?: string;
  };
  /** The ID of the user. */
  id: number;
}

export enum FilterFilterNamesEnum {
  Achievements = "achievements",
  Feedback = "feedback",
  Goals = "goals",
  LearningMoments = "learningMoments",
}

/**
 * The type of the object.
 * @example "badgeAward"
 */
export enum CursorDiscriminatorEnum {
  Evidence = "evidence",
  BadgeAward = "badgeAward",
  DueWorkFeedback = "dueWorkFeedback",
}

export enum EvidenceFeedParams1FilterNamesEnum {
  Achievements = "achievements",
  Feedback = "feedback",
  Goals = "goals",
  LearningMoments = "learningMoments",
}

/**
 * The type of the object.
 * @example "badgeAward"
 */
export enum EvidenceFeedParams1DiscriminatorEnum {
  Evidence = "evidence",
  BadgeAward = "badgeAward",
  DueWorkFeedback = "dueWorkFeedback",
}
