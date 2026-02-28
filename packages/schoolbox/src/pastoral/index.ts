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
 * Campus
 * A sub-division within the school.
 *
 * All users within the school belong to one or more campuses:
 * * a teacher may have classes across multiple campuses
 * * a student will generally only attend one campus
 * * a parent may have children who belong to different campuses
 * @example {"id":1,"name":"Secondary","code":"SEC","days":"5"}
 */
export interface Campus {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** The name of the campus. */
  name?: string;
  /** The identifying code for the campus in the school's SIS. */
  code?: string;
  /** The number of days in a cycle for this campus' timetable. */
  days?: string;
}

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
 * School House
 * A school house which a student may belong to.
 * @example {"id":2,"name":"Prospect"}
 */
export type SchoolHouse = {
  /** Identifying ID number for most objects within Schoolbox */
  id: Id;
  /** The name of the school house. */
  name?: string;
} | null;

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
 * User
 * User with fields that are relevant when reading a user's value.
 */
export interface UserReadableFields {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  campus?: Campus[];
  /**
   * A type of user account at the school. Roles are generally used to group
   * users by the type of position that they have at the school.
   */
  role?: Role;
  /** This user's group memberships */
  groups?: {
    /**
     * ID
     * The ID of the user.
     */
    id?: number;
    /**
     * The name of the group.
     *
     * In this context, this is the name of the group's folder.
     * @example "Basketball"
     */
    name?: string;
    /**
     * The level of access that users have to this group.
     *
     * * `private`: membership is by invitation only
     * * `moderated`: users may apply for membership, but must be approved
     * * `free`: users may join and leave at any time
     */
    type?: UserReadableFieldsTypeEnum;
    /**
     * The level of subscription that is allowed to this group.
     *
     * * `false`: users may subscribe to this group's events
     * * `true`: users must subscribe to this group's events, and may not
     *   unsubscribe
     * @example true
     */
    isForceFollow?: boolean;
    /** Does the user have this group set as a favourite? */
    isFavourite?: boolean;
    /**
     * Is this user subscribed to this group's events? If so, they will be
     * notified when an event occurs.
     *
     * Note that the group administrator may:
     * * Force Follow, so that users may not opt out of notifications
     * * Disable Notifications, so that users never receive notifications
     */
    isNotificationsOn?: boolean;
    /**
     * The enrolment status of the user for this group.
     *
     * * `enroled`: the user is enroled in the group with the 'membership' permission
     * * `notEnroled`: the user is not enroled in the group
     * * `pending`: the user has requested to join the group and is currently
     *   awaiting approval by a group admin
     */
    enrolmentStatus?: UserReadableFieldsEnrolmentStatusEnum;
    /**
     * The type of membership that this user has.
     *
     * * `admin`: the user is the administrator of this group: they may add
     *   and remove members, change the group's permissions and disband the
     *   group
     * * `write`: the user may create content within the group
     * * `read`: the user may view content within the group, and may be
     *   notified of and may participate in group events
     * * `none`: the user is not a member of the group
     */
    membership?: UserReadableFieldsMembershipEnum;
    _links?: {
      /**
       * Gives the homepage link to the group, or NULL if the group has no homepage.
       * @format uri-reference
       * @example "/homepage/83"
       */
      homepage?: string | null;
    };
  }[];
  /** A school house which a student may belong to. */
  schoolHouse?: SchoolHouse;
  /**
   * This user's guardians. (Only applicable if this user is of role
   * type: student.)
   *
   * Guardians are not necessarily the same thing as parents: a guardian
   * is not always the child's parent (e.g. they may be a foster parent
   * or other relative), and a parent is not always the child's guardian
   * (e.g. the family might have separated).
   * @uniqueItems true
   * @example [{"id":25,"fullName":"Janna Reed","yearLevel":[],"role":{"id":3,"name":"Parent"}}]
   */
  guardians?: UserShort[] | null;
  /**
   * This user's students. (Only applicable if this user is of role type:
   * parent.)
   *
   * Students are not necessarily the same thing as children, for the
   * same reason that guardians are not the same thing as parents.
   *
   * Generally, the guardian => student relation is symmetrical to the
   * student => guardian relation.
   * @uniqueItems true
   * @example []
   */
  students?: UserShort[] | null;
  /**
   * The users whom this user may impersonate within a Schoolbox session.
   *
   * This relation is asymmetric: A may impersonate B, but that does not
   * imply that B may impersonate A.
   * @uniqueItems true
   * @example [{"id":69,"externalId":69,"title":null,"firstName":"Eden","preferredName":"Reed","givenName":"Eden","lastName":"Reed","fullName":"Eden Reed","role":{"id":5,"name":"Junior Student","type":"student"},"yearLevel":{"id":4,"name":"3"}}]
   */
  impersonableUsers?: UserShort[];
  /**
   * The user's email address for receiving communication from this
   * Schoolbox instance, or its users.
   *
   * This may be derived from the user's username and the instance's
   * hostname (see isEmailDerived); if not, it may be set via the
   * altEmail field.
   * @format email
   */
  email?: string;
  _links?: {
    /** @format uri-reference */
    profile?: string;
    /** @format uri-reference */
    avatar?: string | null;
  };
  /** A year level which a student may belong to. */
  yearLevel?: YearLevel;
  /**
   * Is this user deleted?
   * @default false
   */
  isDeleted?: boolean;
  /**
   * The user's formatted full name.
   * @example "Ms Rebecca White"
   */
  fullName?: string | null;
}

export interface UserFields {
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
   * The user's username. This will be used as the user's identification
   * when they attempt to log into the Schoolbox instance.
   * @example "rwhite"
   */
  username?: string;
  /**
   * Does this user have superuser permissions over the Schoolbox
   * instance?
   * @default false
   */
  superuser?: boolean;
  /**
   * Is this user able to log in to the Schoolbox instance?
   * @default true
   */
  enabled?: boolean;
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
  /**
   * The user's surname.
   * @example "White"
   */
  lastName?: string | null;
  /** The user's preferred name. */
  preferredName?: string | null;
  /**
   * Is this user's email address derived directly from their username
   * and the host name of the Schoolbox instance?
   */
  isEmailDerived?: boolean;
  /**
   * The user's email address, if it is not derived from their username
   * and hostname.
   * @format email
   * @example "rwhite@example.com.au"
   */
  altEmail?: string | null;
  /**
   * The user's job or position title within the school which owns the
   * Schoolbox instance.
   */
  positionTitle?: string | null;
  /**
   * A set of flags which control the behavior of a user's Schoolbox
   * session.
   */
  flags?: {
    /** Does this user's contacts get shown to other users? */
    showContacts?: boolean;
    /** Does this user get to see their timetabled classes? */
    enableTimetable?: boolean;
    /** Does the side navigation show for this user? */
    showSideNav?: boolean;
    /** Does the notifications panel show for this user? */
    showNotificationsPanel?: boolean;
    /** Does the grade graph show for this user? */
    showGradeGraph?: boolean;
    /**
     * Is this user able to create ePortfolio content?
     * @default false
     */
    enableEportfolio?: boolean;
    /**
     * Does this user use Schoolbox's internal mail system to send
     * email?
     *
     * If false, they use webmail instead.
     * @default false
     */
    useInternalMail?: boolean;
    /**
     * Which calendar view will the user default to?
     * @default "month"
     */
    calendarView?: UserFieldsCalendarViewEnum;
  };
}

/** User */
export type UserRead = UserReadableFields & UserFields;

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
 * Comment
 * Common fields for discussion comments.
 */
export interface DiscussionCommentRead {
  /** Identifying ID number for most objects within Schoolbox */
  id: Id;
  /** Common fields for discussion threads. */
  thread?: DiscussionThreadRead;
  author: UserRead;
  content: string;
  /** The date as a RFC3339 string. eg. "2018-01-28T00:00:00+11:00". */
  createdAt?: DateTimeString;
  /** The date as a RFC3339 string. eg. "2018-01-28T00:00:00+11:00". */
  updatedAt?: DateTimeString;
  /** Common fields for discussion comments. */
  parent?: DiscussionCommentRead;
  /** A list of direct children of this comment. */
  children?: DiscussionCommentReadList;
  /**
   * Which role types may view this comment? If not set, assume all role
   * types may view it.
   * This is likely to be replaced with a more sophisticated visibility
   * system, which encompasses individual roles, role types, folders,
   * and who knows what else?
   */
  visibility?: DiscussionCommentReadVisibilityEnum[];
}

/**
 * a Pastoral Record
 * A pastoral record.
 */
export type PastoralItem = {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** The ID of SIS data corresponding to this pastoral record, if External Pastoral Synchronisation is ON. */
  externalId?: string | null;
  /**
   * User
   * Short fields for users
   */
  student?: {
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
    /** The user's preferred name. */
    preferredName?: string | null;
    _links?: {
      /** @format uri-reference */
      profile?: string;
      /** @format uri-reference */
      avatar?: string | null;
    };
  };
  /** Heading of the pastoral record. */
  heading?: string;
  /** Type of the pastoral record. */
  type?: {
    /** The ID of the pastoral type associated to this pastoral record. */
    id?: number;
    /** The name of the pastoral type. */
    name?: string;
    /** The name of the icon associated to the pastoral type. */
    icon?: string;
    /** The colour of the icon associated to the pastoral type. */
    colour?: string;
    sentiment?: string;
    /** The order in which this pastoral type will display in a pastoral type list. */
    sequence?: number;
  };
  /** Sub-type of the pastoral record. */
  subType?: {
    /** The ID of the pastoral sub-type associated to this pastoral record. */
    id?: number;
    /** The name of the pastoral sub-type. */
    name?: string;
    /** The name of the icon associated to the pastoral sub-type. */
    icon?: string;
    /** The colour of the icon associated to the pastoral sub-type. */
    colour?: string;
    sentiment?: string;
    /** The order in which this pastoral sub-type will display in a pastoral sub-type list. */
    sequence?: number;
  };
  /** Severity of the pastoral record. */
  severity?: {
    /** The ID of the pastoral severity of this pastoral record. */
    id?: number;
    /** The name of the pastoral severity. */
    name?: string;
    /** The colour associated to the pastoral severity. */
    color?: string;
    /** The order in which this pastoral severity will display in a pastoral severity list. */
    sequence?: number;
  };
  /**
   * The date on which this is occurred as a RFC3339 string.
   * @format date-time
   */
  occurredOn?: string;
  /** Points of this pastoral record. */
  points?: number | null;
  /** List of tag names. */
  tags?: {
    /** The ID of the pastoral tag. */
    id?: number;
    /** The name of the pastoral tag. */
    name?: string;
  }[];
  /** General content of this pastoral record in raw HTML. */
  bodyPublic?: string;
  /** Confidential content of this pastoral record in raw HTML. */
  bodyPrivate?: string;
  /** Files attached to General content. */
  attachmentsPublic?: File[];
  /** Files attached to Confidential content. */
  attachmentsPrivate?: File[];
  /** General comments. */
  commentsPublic?: DiscussionCommentRead[];
  /** Confidential comments */
  commentsPrivate?: DiscussionCommentRead[];
  /** An array of pastoral actions. */
  recordActions?:
    | {
        /** The ID of the pastoral action. */
        id?: number;
        /** The name of the pastoral action. */
        name?: string;
        /** Whether the action is completed. */
        completed?: boolean;
        /**
         * The last modified date of the action as a RFC3339 string.
         * @format date-time
         */
        updatedAt?: string;
        /** Short fields for users */
        updatedBy?: UserAuthor;
      }[]
    | null;
  /** Short fields for users */
  createdBy?: UserAuthor;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   */
  createdAt?: string;
  /** Short fields for users */
  updatedBy?: UserAuthor;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   */
  updatedAt?: string;
  _links?: object;
}[];

/**
 * a partial Pastoral Record
 * A partial pastoral record.
 */
export type PastoralPartialItem = {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** The ID of SIS data corresponding to this pastoral record, if External Pastoral Synchronisation is ON. */
  externalId?: string | null;
  /**
   * User
   * Short fields for users
   */
  student?: {
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
    /** The user's preferred name. */
    preferredName?: string | null;
    _links?: {
      /** @format uri-reference */
      profile?: string;
      /** @format uri-reference */
      avatar?: string | null;
    };
  };
  /** Heading of the pastoral record. */
  heading?: string;
  /** Type of the pastoral record. */
  type?: {
    /** The ID of the pastoral type associated to this pastoral record. */
    id?: number;
    /** The name of the pastoral type. */
    name?: string;
    /** The name of the icon associated to the pastoral type. */
    icon?: string;
    /** The colour of the icon associated to the pastoral type. */
    colour?: string;
    sentiment?: string;
    /** The order in which this pastoral type will display in a pastoral type list. */
    sequence?: number;
  };
  /** Sub-type of the pastoral record. */
  subType?: {
    /** The ID of the pastoral sub-type associated to this pastoral record. */
    id?: number;
    /** The name of the pastoral sub-type. */
    name?: string;
    /** The name of the icon associated to the pastoral sub-type. */
    icon?: string;
    /** The colour of the icon associated to the pastoral sub-type. */
    colour?: string;
    sentiment?: string;
    /** The order in which this pastoral sub-type will display in a pastoral sub-type list. */
    sequence?: number;
  };
  /** Severity of the pastoral record. */
  severity?: {
    /** The ID of the pastoral severity of this pastoral record. */
    id?: number;
    /** The name of the pastoral severity. */
    name?: string;
    /** The colour associated to the pastoral severity. */
    color?: string;
    /** The order in which this pastoral severity will display in a pastoral severity list. */
    sequence?: number;
  };
  /**
   * The date on which this is occurred as a RFC3339 string.
   * @format date-time
   */
  occurredOn?: string;
  /** Points of this pastoral record. */
  points?: number | null;
  /** List of tag names. */
  tags?: {
    /** The ID of the pastoral tag. */
    id?: number;
    /** The name of the pastoral tag. */
    name?: string;
  }[];
  /** General content of this pastoral record in raw HTML. */
  bodyPublic?: string;
  /** Confidential content of this pastoral record in raw HTML. */
  bodyPrivate?: string;
  /** Files attached to General content. */
  attachmentsPublic?: File[];
  /** Files attached to Confidential content. */
  attachmentsPrivate?: File[];
  /** General comments. */
  commentsPublic?: DiscussionCommentRead[];
  /** Confidential comments */
  commentsPrivate?: DiscussionCommentRead[];
  /** An array of pastoral actions. */
  recordActions?:
    | {
        /** The ID of the pastoral action. */
        id?: number;
        /** The name of the pastoral action. */
        name?: string;
        /** Whether the action is completed. */
        completed?: boolean;
        /**
         * The last modified date of the action as a RFC3339 string.
         * @format date-time
         */
        updatedAt?: string;
        /** Short fields for users */
        updatedBy?: UserAuthor;
      }[]
    | null;
  /** Short fields for users */
  createdBy?: UserAuthor;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   */
  createdAt?: string;
  /** Short fields for users */
  updatedBy?: UserAuthor;
  /**
   * The date as a RFC3339 string.
   * @format date-time
   */
  updatedAt?: string;
  _links?: object;
}[];

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

/**
 * The level of access that users have to this group.
 *
 * * `private`: membership is by invitation only
 * * `moderated`: users may apply for membership, but must be approved
 * * `free`: users may join and leave at any time
 */
export enum UserReadableFieldsTypeEnum {
  Private = "private",
  Moderated = "moderated",
  Free = "free",
}

/**
 * The enrolment status of the user for this group.
 *
 * * `enroled`: the user is enroled in the group with the 'membership' permission
 * * `notEnroled`: the user is not enroled in the group
 * * `pending`: the user has requested to join the group and is currently
 *   awaiting approval by a group admin
 */
export enum UserReadableFieldsEnrolmentStatusEnum {
  Enroled = "enroled",
  NotEnroled = "notEnroled",
  Pending = "pending",
}

/**
 * The type of membership that this user has.
 *
 * * `admin`: the user is the administrator of this group: they may add
 *   and remove members, change the group's permissions and disband the
 *   group
 * * `write`: the user may create content within the group
 * * `read`: the user may view content within the group, and may be
 *   notified of and may participate in group events
 * * `none`: the user is not a member of the group
 */
export enum UserReadableFieldsMembershipEnum {
  Admin = "admin",
  Write = "write",
  Read = "read",
  None = "none",
}

/**
 * Which calendar view will the user default to?
 * @default "month"
 */
export enum UserFieldsCalendarViewEnum {
  Month = "month",
  AgendaWeek = "agendaWeek",
  AgendaDay = "agendaDay",
  List = "list",
}

/** The type of the uploaded file. */
export enum FileTypeEnum {
  Image = "image",
  Video = "video",
  Audio = "audio",
  Document = "document",
  Other = "other",
}

export enum DiscussionCommentReadVisibilityEnum {
  Staff = "staff",
  Parent = "parent",
  Student = "student",
}

export interface PastoralPatchRecordUpdateParams {
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
