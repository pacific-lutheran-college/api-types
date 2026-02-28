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
 * Search result
 * A single search result.
 *
 * This contains only search results which are not contained within a page:
 * pages contain their own list of sub-results.
 */
export type ResultItem = BaseResultItem &
  (
    | BaseResultItemTypeMapping<"badge", Badge>
    | BaseResultItemTypeMapping<"event", Event>
    | BaseResultItemTypeMapping<"news", News>
    | BaseResultItemTypeMapping<"page.class", Page>
    | BaseResultItemTypeMapping<"page.course", Page>
    | BaseResultItemTypeMapping<"page.unit", Page>
    | BaseResultItemTypeMapping<"page.homepage", Page>
    | BaseResultItemTypeMapping<"page.other", Page>
    | BaseResultItemTypeMapping<"user.guest", User>
    | BaseResultItemTypeMapping<"user.parent", User>
    | BaseResultItemTypeMapping<"user.staff", User>
    | BaseResultItemTypeMapping<"user.student", User>
  );

/**
 * Page search sub-result
 * A single search result within this page.
 */
export type PageSubResultItem = BasePageSubResultItem &
  (
    | BasePageSubResultItemTypeMapping<"assessment.dueWork", Assessment>
    | BasePageSubResultItemTypeMapping<"assessment.lessonPlan", Assessment>
    | BasePageSubResultItemTypeMapping<"assessment.lti", Assessment>
    | BasePageSubResultItemTypeMapping<"assessment.project", Assessment>
    | BasePageSubResultItemTypeMapping<"assessment.task", Assessment>
    | BasePageSubResultItemTypeMapping<"assessment.quiz", Assessment>
    | BasePageSubResultItemTypeMapping<"blog", Blog>
    | BasePageSubResultItemTypeMapping<"file.audio", ResultFile>
    | BasePageSubResultItemTypeMapping<"file.document", ResultFile>
    | BasePageSubResultItemTypeMapping<"file.image", ResultFile>
    | BasePageSubResultItemTypeMapping<"file.video", ResultFile>
    | BasePageSubResultItemTypeMapping<"file.other", ResultFile>
    | BasePageSubResultItemTypeMapping<"forum", Forum>
    | BasePageSubResultItemTypeMapping<"link", ResultLink>
    | BasePageSubResultItemTypeMapping<"textBox", TextBox>
    | BasePageSubResultItemTypeMapping<"tile", Tile>
  );

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
 * User list
 * A list of users
 */
export interface UserReadList {
  /** @uniqueItems true */
  data?: UserRead[];
  /** Metadata for lists of items retrieved */
  metadata?: ListMetadata;
}

/**
 * Item relation
 * A relation to another item, consisting only of an ID.
 *
 * Generally, this is used within request bodies for specifying that the
 * item is to be related to another item, without implying that any
 * properties of the related item are to be modified.
 */
export interface ItemRelation {
  /** Identifying ID number for most objects within Schoolbox */
  id: Id;
}

/**
 * Schoolbox User
 * Fields that are only relevant when writing a user's value.
 */
export interface UserWritableFields {
  /**
   * @minItems 1
   * @uniqueItems true
   */
  campus?: ItemRelation[];
  /**
   * A relation to another item, consisting only of an ID.
   *
   * Generally, this is used within request bodies for specifying that the
   * item is to be related to another item, without implying that any
   * properties of the related item are to be modified.
   */
  role?: ItemRelation;
  /**
   * A relation to another item, consisting only of an ID.
   *
   * Generally, this is used within request bodies for specifying that the
   * item is to be related to another item, without implying that any
   * properties of the related item are to be modified.
   */
  schoolHouse?: ItemRelation;
  /**
   * A relation to another item, consisting only of an ID.
   *
   * Generally, this is used within request bodies for specifying that the
   * item is to be related to another item, without implying that any
   * properties of the related item are to be modified.
   */
  yearLevel?: ItemRelation;
  impersonableUser?: ItemRelation[] | null;
}

export type UserWrite = UserWritableFields & UserFields;

export interface UserToken {
  /**
   * A JSON Web Token (JWT) which authenticates the bearer as a particular
   * user, and allows the bearer to perform API calls within the context of
   * that user.
   *
   * This token is passed to the Schoolbox API according to the "BearerAuth"
   * security scheme (i.e. in a HTTP header `Authorization: Bearer $token`).
   * @example "3MiOiJ2YWdyYW50LmRldi5zY2hvb2xib3guY2xvdWQiLCJzdWIiOiJhbGFyZXNzIiwianRpIjoiZDM1N..."
   */
  token?: string;
  /**
   * The creation datetime for the token.
   * @example "Nov 11, 2025 2:45pm"
   */
  createdAt?: string;
  /**
   * The datetime when the token expires. Will be `null` for indefinite token lifetime.
   * @example "Dec 25, 2025 3:45pm"
   */
  expiry?: string;
  /**
   * The user who created the token.
   * @example "John Smith"
   */
  createdBy?: string;
  /**
   * The identifier of the JWT.
   * @example "u82jddg5-ky61-z9w3-0098-334hxb27dhg0"
   */
  jwtId?: string;
  /**
   * This is `true` when a JWT was either generated for the user, or it already existed for the user.
   * @example true
   */
  showExisting?: boolean;
}

/** Writable Group Membership Fields */
export interface UserGroupMembershipWritableFields {
  /**
   * The type of membership that this user has.
   *
   * * Admin: the user is the administrator of this group: they may add
   *   and remove members, change the group's permissions and disband the
   *   group
   * * Write: the user may create content within the group
   * * Read: the user may view content within the group, and may be
   *   notified of and may participate in group events
   */
  membership: UserGroupMembershipWritableFieldsMembershipEnum;
  /**
   * The enrolment status of the user for this group.
   *
   * * Enroled: the user is enroled in the group with the 'membership' permission
   * * Pending: the user has requested to join the group and is currently
   *   awaiting approval by a group admin
   * @default "enroled"
   */
  enrolmentStatus?: UserGroupMembershipWritableFieldsEnrolmentStatusEnum;
  /**
   * Is this user subscribed to this group's events? If so, they will be
   * notified when an event occurs.
   *
   * Note that the group administrator may:
   * * force Follow, so that users may not opt out of notifications
   * * disable Notifications, so that users never receive notifications
   */
  isNotificationsOn: boolean;
  /** Does the user have this group set as a favourite */
  isFavourite: boolean;
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

/** Username/Password */
export interface AuthenticationUsernamePassword {
  /** The username which identifies the user who logged into the device. */
  username: string;
  /** The password which authenticates the user who logged into the device. */
  password: string;
}

/** JWT */
export interface AuthenticationJwt {
  /** A JWT generated via an oAuth request. */
  jwt: string;
}

/** Mobile App Registration */
export interface RegistrationBase {
  /**
   * A unique string used to identify the user on the device.
   *
   * Ignored if using the Digistorm provider: otherwise, if not
   * provided no device will be registered.
   */
  token?: string;
  /** A unique string to identify the app's identity. */
  appId: string;
  /**
   * An optional unique string to identify the device identity.
   *
   * Stored but not used if using the Digistorm provider: otherwise,
   * this is normally not provided or is the same as the app ID due
   * to limitations enforced by device makers.
   */
  deviceId?: string;
}

export type RegistrationUsernamePassword = AuthenticationUsernamePassword &
  RegistrationBase;

export type RegistrationJwt = AuthenticationJwt & RegistrationBase;

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

/**
 * The status of the user's attendance.
 *
 * * null: user is not invited to this event
 * * 1: user has not yet responded to the invitation
 * * 2: user has accepted the invitation
 * * 3: user has declined the invitation
 * @min 1
 * @max 3
 */
export type CalendarAttendanceStatus = number | null;

export interface AjaxEvent {
  /** Optional resource identifier for resource-timeline views. */
  resourceId?: number | string | null;
  /**
   * Display title of the event.
   * @example "Staff Meeting"
   */
  title: string;
  /**
   * Start in RFC3339 date-time or date (YYYY-MM-DD) format if all day.
   * @example "2025-10-01T16:00:00+11:00"
   */
  start: string;
  /**
   * End in RFC3339 date-time or date (YYYY-MM-DD) format if all day.
   * @example "2025-10-01T17:00:00+11:00"
   */
  end: string;
  /**
   * Whether the event is editable for the current user.
   * @example true
   */
  editable: boolean;
  /**
   * Whether the event spans the whole day.
   * @example false
   */
  allDay: boolean;
  /**
   * CSS color string for the event.
   * @example "#29839e"
   */
  color: string;
  /**
   * Space-separated CSS classes that describe the event source/type/level.  Useful for client side filtering.
   * @example "source1 type3 campus1"
   */
  className: string;
  /** Additional metadata and links used by the calendar UI. */
  data: {
    /** Event metadata used by the UI and links. */
    meta?: {
      /**
       * Whether this event is editable by the current user.
       * @example true
       */
      editable?: boolean;
      /**
       * Identifier of the event (may be an integer id or external string id).
       * @example 178
       */
      eventId?: number | string;
      /**
       * Human-readable time range.
       * @example "4:00pm&ndash;5:00pm"
       */
      time?: string;
      /** Additional details for the event. May contain HTML markup. */
      detail?: string;
      /**
       * Location or room for the event.
       * @example "Staffroom"
       */
      location?: string;
      /**
       * Event type id.
       * @example 3
       */
      eventTypeId?: number;
      /**
       * Event type code as a CSS class string.
       * @example "type3"
       */
      eventType?: string;
      /**
       * Variant of the item. Typically "event".
       * @example "event"
       */
      variant?: string;
      /**
       * Friendly type or category label.
       * @example "Meeting"
       */
      type?: string;
      /**
       * Name of the event author, if any.
       * @example "Cecilia Cordonnier"
       */
      author?: string;
      /**
       * Author id, or -1 if not applicable.
       * @example 12
       */
      authorId?: number;
      /**
       * Encoded classification e.g. source/type/level classes.
       * @example "source1 type3 campus1"
       */
      level?: string;
      /**
       * Whether the event has been completed (for task-like events).
       * @example false
       */
      completed?: boolean;
      /**
       * Series identifier when part of a repeating series.
       * @example 8
       */
      seriesId?: number | string | null;
    };
    /** Related links for the event. */
    links?: {
      category?: {
        /** @example -1 */
        id?: number;
        /** @example "" */
        name?: string;
      };
      /**
       * Internal path to the event details page, if available.
       * @example "/calendar/event/178"
       */
      path?: string | null;
    };
    styles?: {
      /**
       * Extra style flags.
       * @example ""
       */
      visible?: string;
    };
    /** Attendance information when applicable. */
    attendance?: {
      /** @example false */
      hasAttendance?: boolean;
      status?: {
        /**
         * The status of the user's attendance.
         *
         * * null: user is not invited to this event
         * * 1: user has not yet responded to the invitation
         * * 2: user has accepted the invitation
         * * 3: user has declined the invitation
         */
        current?: CalendarAttendanceStatus;
      };
    };
    /** Class attendance link info, present for class events. */
    classAttendance?: {
      url?: string | null;
      target?: string | null;
    };
  };
}

/** A list of calendar events for the requested date range. */
export type AjaxEventList = AjaxEvent[];

export interface EventCommonProps {
  /**
   * Whether the event is an all day event.
   * @example false
   */
  allDay?: boolean;
  /**
   * Whether the requested change should apply only to the event with the given 'id', or to all events in the series of which event 'id' is a member.
   * @example "self"
   */
  efficacy?: EventCommonPropsEfficacyEnum;
  /**
   * Title of event.
   * @example "The Yalta Conference"
   */
  title?: string;
  /**
   * Start date and time of event in RFC3339 format.
   * @format date-time
   * @example "2024-03-05T19:00:00+10:00"
   */
  startDate?: string;
  /**
   * End date and time of event in RFC3339 format.
   * @format date-time
   * @example "2024-03-05T19:30:00+10:00"
   */
  endDate?: string;
  /**
   * Blank for single event.
   * @example "weekly"
   */
  repeat?: EventCommonPropsRepeatEnum;
  /**
   * Date event repeats until, in either YYYY-MM-DD as well as DD/MM/YYYY formats.
   * @format date
   * @example "2024-04-05"
   */
  repeat_until?: string;
  /**
   * Location name or description.
   * @example "Meeting room 1"
   */
  location?: string;
  /**
   * More details about event.
   * @example "Meeting to discuss things"
   */
  detail?: string;
  /**
   * Date and time at which the event becomes public in RFC3339 format.
   * @format date-time
   * @example "2024-03-05T19:30:00+10:00"
   */
  publishDate?: string;
  /**
   * Event level ID.  1 for Personal, 2 for Group, 3 for Campus.
   * @example 2
   */
  level?: EventCommonPropsLevelEnum;
  /**
   * Integer representing the type of attendance that is enabled. 0 means 'None', 1 means 'Invitation Only', and 2 means 'Open'.
   * @example 2
   */
  attendance?: EventCommonPropsAttendanceEnum;
  /**
   * The maximum number of guests who may attend this event.  Null means no maximum.
   * @example 5
   */
  maxAttendees?: number | null;
  /**
   * Whether the list of attendees will show visible to guests.
   * @example false
   */
  showAttendees?: boolean;
}

/** This is the preferred request schema. */
export type EventRequestFieldsForModify = {
  /** An object stub for specifying an author. When an event is created, if this is not supplied the logged-in user will become the author. */
  author?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
  };
  /** Type as an object stub. */
  type?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
  };
  /**
   * Array of role object stubs.
   * @example [{"id":123},{"id":456}]
   */
  roles?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
  }[];
  /**
   * Array of campus object stubs.  Required when creating campus-level events.
   * @example [{"id":123},{"id":456}]
   */
  campuses?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
  }[];
  /**
   * Array of folder object stubs.  These specify the groups that should see the event (for group-level events).  Required when creating group-level events.
   * @example [{"id":123},{"id":456}]
   */
  folders?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
  }[];
  /**
   * Array of user object stubs.
   * @example [{"id":123},{"id":456}]
   */
  guests?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
  }[];
} & EventCommonProps;

export type EventRequestFieldsForCreate = (object &
  EventRequestFieldsForModify) & {
  /** An object stub for specifying a user.  This specifies the owner of the event. When an event is created, if this is not supplied the logged-in user will become the owner.  Note the owner may not be changed after event creation. */
  user?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
  };
};

/**
 * Folder
 * @example {"id":83,"name":"9A English","title":"9A English (9ENGA)","codes":["9ENGA"],"parent":{"id":2},"_links":{"view":"\\/homepage\\/83"}}
 */
export interface FolderLinkOnly {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** The name of the Folder. */
  name?: string;
  /** The name of the folder with any class codes appended in brackets. */
  title?: string;
  /** Schoolbox Class Codes */
  codes?: string;
  /** Parent folder object stub. */
  parent?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
  };
  /** Object containing names as keys and URLs as values */
  _links?: object;
}

export type EventResponseFields = {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** Short fields for users */
  user?: UserShort;
  /** Short fields for users */
  author?: UserShort;
  /** Type as an object. */
  type?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    /**
     * Name of event type
     * @example "Excursion"
     */
    type?: string;
    /**
     * CSS colour string
     * @example null
     */
    color?: string;
  };
  /** Array of role objects */
  roles?: Role[];
  /** Array of campus objects */
  campuses?: Campus[];
  /** Array of folder objects */
  folders?: FolderLinkOnly[];
  /** Array of user objects */
  guests?: UserShort[];
} & EventCommonProps;

/**
 * Calendar event attendance
 * A record of the invitees to a calendar event, and whether or not they are
 * attending.
 */
export interface CalendarAttendance {
  /**
   * The level of attendance which applies to this event.
   *
   * * 0: event may not be attended (usually, this means that no users will be
   *    invited to this event; however, it is possible for an event's
   *    attendance level to change)
   * * 1: event attendees may only be invited by the event's creator
   * * 2: any user who may view the event may invite themselves to the event
   * @min 0
   * @max 2
   */
  level?: number;
  currentUser?: {
    /** Short fields for users */
    user?: UserShort;
    status?: CalendarAttendanceStatus;
    /** Can the authenticated user modify the event? */
    canModify?: boolean;
    /** Can the authenticated user invite other users to the event? */
    canInvite?: boolean;
  };
  /** A summary of all the invitees of this event. */
  attendees?: {
    /**
     * A list of the event's invitees.
     *
     * Not all events have public invitation lists: if this is the case, then
     * the guest list is hidden from all but the event's creator.
     */
    guests?: {
      /** The invitee's ID number. */
      id?: number;
      /** The invitee's full name. */
      name?: string;
      /**
       * The status of the user's attendance.
       *
       * * null: user is not invited to this event
       * * 1: user has not yet responded to the invitation
       * * 2: user has accepted the invitation
       * * 3: user has declined the invitation
       */
      status?: CalendarAttendanceStatus;
    }[];
    /**
     * The maximum number of invitees to this event, or null if there is no
     * maximum.
     */
    max?: number | null;
    /**
     * The current total number of invitees to this event.
     *
     * This may differ from the number of guests in the guest list, due to
     * the ability to create events with private invitation lists.
     */
    num?: number;
    /** The number of available invite slots for this event. */
    available?: number | null;
    /**
     * The number of invitees for this event whose invitation is pending
     * response.
     */
    pending?: number;
    /**
     * The number of invitees for this event whose invitation has been
     * accepted.
     */
    accepted?: number;
    /**
     * The number of invitees for this event whose invitation has been
     * declined.
     */
    declined?: number;
  };
}

/**
 * An Assessment Rubric item
 * An Assessment Rubric item.
 */
export interface AssessmentRubric {
  /** The area that you are assessing. */
  capabilities?: {
    /**
     * The ID in the DB of this field. To help identify different rubric capabilities.
     * @example 47
     */
    id?: number;
    /**
     * The description of the capability.
     * @example "Skills"
     */
    name?: string;
    /**
     * By default, the maximum points for the capability is the sum of the highest descriptor values available in each indicator within that capability.
     * @example 0
     */
    maxValue?: number;
    /** The key skills that you will be assessing in the assessment. */
    indicators?: {
      /**
       * The ID in the DB of this field. To help identify different rubric indicators.
       * @example 105
       */
      id?: number;
      /**
       * The description of the indicator.
       * @example "Communication
       * "
       */
      name?: string;
      /**
       * By default, the maximum points for the indicator is the sum of the highest descriptor values available within the indicator.
       * @example 0
       */
      maxValue?: number;
      /** Statement that explain what a student has achieved or demonstrated for this level. */
      descriptors?: {
        /**
         * The ID in the DB of this field. To help identify different rubric descriptors.
         * @example 620
         */
        id?: number;
        /**
         * The description of the descriptor.
         * @example "Developing in reading appropriate materials and writing on-topic.
         * "
         */
        description?: string;
        /**
         * If you are using the mark range, this will be the upper point value available for that particular descriptor.
         * @example 0
         */
        maxValue?: number;
        /**
         * The order the descriptors are ordered in.
         * @example 4
         */
        sequence?: number;
      }[];
    }[];
  }[];
}

/** User */
export interface AssessmentUser {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
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
  /**
   * The user's surname.
   * @example "White"
   */
  lastName?: string | null;
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
}

/**
 * An Assessment Rubric item
 * An Assessment Rubric item.
 */
export interface AssessmentRubricFeedback {
  /** The area that was assessed. */
  capabilities?: {
    /**
     * The ID in the DB of this field. To help identify different rubric capabilities.
     * @example 47
     */
    id?: number;
    /**
     * The description of the capability.
     * @example "Skills"
     */
    name?: string;
    /**
     * By default, the maximum points for the capability is the sum of the highest descriptor values available in each indicator within that capability.
     * @example 0
     */
    maxValue?: number;
    /**
     * The marked value for this capability.
     * @example 0
     */
    value?: number;
    /**
     * The human readable mark for this capability.
     * @example null
     */
    mark?: string | null;
    /** The key skills that was assessed in the assessment. */
    indicators?: {
      /**
       * The ID in the DB of this field. To help identify different rubric indicators.
       * @example 105
       */
      id?: number;
      /**
       * The description of the indicator.
       * @example "Communication
       * "
       */
      name?: string;
      /**
       * By default, the maximum points for the indicator is the sum of the highest descriptor values available within the indicator.
       * @example 0
       */
      maxValue?: number;
      /**
       * The marked value for this indicator.
       * @example 0
       */
      value?: number;
      /** Statement that explain what a student has achieved or demonstrated for this level. */
      descriptor?: {
        /**
         * The ID in the DB of this field. To help identify different rubric descriptors.
         * @example 628
         */
        id?: number;
        /**
         * The description of the descriptor.
         * @example "Mostly listening, speaking on topic, reading appropriate materials, writing on-topic & using critical non-verbal communication.
         * "
         */
        description?: string;
        /**
         * If you are using the mark range, this will be the upper point value available for that particular descriptor.
         * @example 0
         */
        maxValue?: number;
        /**
         * The order the descriptor was ordered in.
         * @example 4
         */
        sequence?: number;
      };
    }[];
  }[];
}

/**
 * An Assessment participation item
 * An Assessment participation item.
 */
export interface AssessmentParticipationItem {
  /** The user who is participating in the assessment: usually a student. */
  learner?: AssessmentUser;
  /** The most recent response given by (or for) the participant. */
  response?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    /**
     * The date as a RFC3339 string.
     * @format date-time
     * @example "2022-01-30T21:00:00.000Z"
     */
    date?: string;
    /** Any files which were attached as part of the participant's response. */
    files?: File[];
    /**
     * The user who submitted the due response.
     *
     * This may be different to the learner: the instructor may submit a
     * response on behalf of the learner.
     */
    submitter?: AssessmentUser;
  };
  /** The most recent feedback given for the participant. */
  feedback?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    /**
     * The teacher's feedback for the student.
     * @example "Joffrey,
     * Your introduction was very strong, but you did not use the previous feedback, which reminded you to add evidence.
     * Please consider this for your next essay.
     * "
     */
    comment?: string;
    /**
     * The date as a RFC3339 string.
     * @format date-time
     * @example "2022-01-30T21:00:00.000Z"
     */
    date?: string;
    /**
     * A human readable mark.
     * @example "A"
     */
    mark?: string;
    /**
     * The mark in numeric form.
     * @format float
     * @example 36
     */
    normalisedMark?: number;
    /** An Assessment Rubric item. */
    rubric?: AssessmentRubricFeedback;
    /** The user who gave the feedback to the learner: usually a teacher. */
    instructor?: AssessmentUser;
  };
  /**
   * The teacher's feedback for the student.
   * (Deprecated: moved to the `feedback` object.)
   * @deprecated
   */
  comment?: string;
  /**
   * The date as a RFC3339 string.
   * (Deprecated: moved to the `feedback` object.)
   * @deprecated
   * @format date-time
   */
  date?: string;
  /**
   * A human readable mark.
   * (Deprecated: moved to the `feedback` object.)
   * @deprecated
   */
  mark?: string;
  /**
   * The mark in numeric form.
   * (Deprecated: moved to the `feedback` object.)
   * @deprecated
   */
  normalisedMark?: number;
  /** An Assessment Rubric item. (Deprecated: moved to the `feedback` object.) */
  rubric?: AssessmentRubricFeedback;
  /**
   * The user who gave the feedback to the learner: usually a teacher.
   * (Deprecated: moved to the `feedback` object.)
   */
  instructor?: AssessmentUser;
}

/**
 * an Assessment Item
 * An assessment item.
 */
export interface AssessmentItem {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** @example "Turning on the computer" */
  title?: string;
  /** @example "task" */
  assessmentType?: AssessmentItemAssessmentTypeEnum;
  /** The folder where the assessment is found. */
  folder?: {
    /** The ID of the folder. */
    id?: number;
    /** The name of the folder. */
    name?: string;
    /** Class Codes associated with the folder. */
    code?: string | null | string[];
    /** Year levels which the folder is associated with. */
    yearLevel?:
      | {
          /** Identifying ID number for most objects within Schoolbox */
          id?: Id;
          /** The name of the year level. */
          name?: string;
        }[]
      | null;
  };
  /** The Course Subject Code */
  subjectCode?: string | null;
  /** Only applicable for assessmentType 'dueWork' (so value will be null for other assessmentTypes). */
  commonAssessment?: boolean | null;
  /**
   * System configurable in your Admin Lists Work Types area.
   * Not applicable to assessmentType 'lessonPlan' (so value will be null in that case).
   */
  workType?: {
    /**
     * The DB identifier of the worktype.
     * @example 1
     */
    id?: number;
    /**
     * The name of the work type, may not be unique.
     * @example "Formative Assessment"
     */
    name?: string;
  } | null;
  /**
   * The value of how much this assessment's outcome contributes to the final overall grade -
   * a value of 0 indicates this assessment has no impact on the overall grade.
   * Generally, this is a number between 0 and 100.
   * Not applicable to assessmentTypes 'lessonPlan' and 'task' (so value will be null in those cases).
   * @example 30
   */
  weight?: number | null;
  /**
   * The due date of the assessment as a RFC3339 string. This can be null for assessments in a course.
   * @format date-time
   * @example "2022-01-30T21:00:00.000Z"
   */
  dueDate?: string | null;
  /** An Assessment Rubric item. */
  rubric?: AssessmentRubric;
  project?: {
    /**
     * ID of the parent assessment (project).
     * @example 255
     */
    id?: number;
  } | null;
  /** Not applicable to assessmentType 'lessonPlan' (so value will be null in that case). */
  participants?: AssessmentParticipationItem[] | null;
}

/**
 * Assessment list
 * A list of assessments
 */
export interface AssessmentList {
  data?: AssessmentItem[];
  /** Metadata for lists of items retrieved */
  metadata?: ListMetadata;
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
 * A folder usage
 * A folder usage
 */
export interface CurriculumNodeUsageFolderItem {
  discriminator?: CurriculumNodeUsageFolderItemDiscriminatorEnum;
  object?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    /** The name of the folder. */
    name?: string;
    /** The name of the folder, including any class codes. */
    title?: string;
    /** A list of class codes (if any) associated with this folder. */
    codes?: string[];
    _links?: {
      /**
       * A link to the homepage for this folder.
       * @format uri-reference
       */
      view?: string;
    };
  };
}

/**
 * A course usage
 * A course usage
 */
export interface CurriculumNodeUsageCourseItem {
  discriminator?: CurriculumNodeUsageCourseItemDiscriminatorEnum;
  object?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    /** The name of the course. */
    title?: string;
    /** The course's subject code. */
    subjectCode?: string;
    /** The course's framework ID */
    frameworkId?: number | null;
    /** A folder usage */
    folder?: CurriculumNodeUsageFolderItem;
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

/**
 * A unit usage
 * A unit usage
 */
export interface CurriculumNodeUsageUnitItem {
  discriminator?: CurriculumNodeUsageUnitItemDiscriminatorEnum;
  object?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    /** The name of the unit. */
    title?: string;
    /** A folder usage */
    folder?: CurriculumNodeUsageFolderItem;
    /** A course usage */
    course?: CurriculumNodeUsageCourseItem;
    _links?: {
      /**
       * A link to view this unit's course: contains a modify form.
       * @format uri-reference
       */
      view?: string;
    };
  };
}

/**
 * An assessment usage
 * An assessment usage.
 *
 * This only includes assessments which are within a unit specification.
 */
export interface CurriculumNodeUsageAssessmentItem {
  discriminator?: CurriculumNodeUsageAssessmentItemDiscriminatorEnum;
  object?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    /** The name of the assessment. */
    title?: string;
    /** The type of the assessment. */
    type?: CurriculumNodeUsageAssessmentItemTypeEnum;
    /** A unit usage */
    unit?: CurriculumNodeUsageUnitItem;
    project?: {
      /** Identifying ID number for most objects within Schoolbox */
      id?: Id;
      /** The type of the project: always "project". */
      type?: CurriculumNodeUsageAssessmentItemTypeEnum1;
      /** The name of the project. */
      title?: string;
      _links?: {
        /**
         * A link to view this project: contains a modify form.
         * @format uri-reference
         */
        view?: string;
      };
    };
    _links?: {
      /**
       * A link to view this assessment: contains a modify form.
       * @format uri-reference
       */
      view?: string;
    };
  };
}

/**
 * A badge usage
 * A badge usage.
 */
export interface CurriculumNodeUsageBadgeItem {
  discriminator?: CurriculumNodeUsageBadgeItemDiscriminatorEnum;
  object?: {
    /** Identifying ID number for most objects within Schoolbox */
    id?: Id;
    /** The name of the badge. */
    title?: string;
    /** The name of the badge category. */
    category?: string;
    /** Either the user uploaded or selected badge banner image */
    icon?: string;
    /** A list of year levels (if any) associated with this badge. */
    yearLevel?: string[];
    /** A Badge item */
    object?: BadgeItem;
  };
}

export interface CurriculumNodeUsageList {
  data?: (BaseNull &
    (
      | BaseNullDiscriminatorMapping<"folder", CurriculumNodeUsageFolderItem>
      | BaseNullDiscriminatorMapping<"course", CurriculumNodeUsageCourseItem>
      | BaseNullDiscriminatorMapping<"unit", CurriculumNodeUsageUnitItem>
      | BaseNullDiscriminatorMapping<
          "assessment",
          CurriculumNodeUsageAssessmentItem
        >
      | BaseNullDiscriminatorMapping<"badge", CurriculumNodeUsageBadgeItem>
    ))[];
  /** Metadata for lists of items retrieved */
  metadata?: ListMetadata;
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

/**
 * Folder
 * @example {"id":80,"name":"9A English","code":"9ENGA","yearLevel":{"id":9,"name":"Year 10"}}
 */
export interface Folder {
  /** Identifying ID number for most objects within Schoolbox */
  id?: Id;
  /** The name of the Folder. */
  name?: string;
  /** Schoolbox Class Codes */
  code?: string;
  /**
   * Year Level
   * Year level(s) which the folder is associated to.
   */
  yearLevel?: {
    /** Identifying ID number for most objects within Schoolbox */
    id: Id;
    /** The name of the year level. */
    name?: string;
  } | null;
}

export interface Common {
  /** Identifying ID number for most objects within Schoolbox */
  id: Id;
  /** The type of search result. */
  type: string;
  /**
   * The date of the search result.
   * @format date-time
   * @example "2022-01-30T21:00:00Z"
   */
  date?: string | null;
  /**
   * A link to the search result.
   * @format uri
   */
  url: string;
  /**
   * The title of the search result.
   *
   * Intended to be used as the content of the main link to the search result.
   */
  title: string;
  /**
   * An optional brief line of context for the search result.
   *
   * Intended to be displayed directly underneath the title, in order to
   * quickly describe the result.
   */
  meta?: string | null;
  /**
   * A link to an image to display next to this search result.
   *
   * If not provided: this result's `type` should be used to determine an icon
   * to display next to the result.
   * @format uri
   */
  image?: string | null;
  /**
   * An optional further description of the search result.
   *
   * Intended to be displayed beneath the main link to the search result,
   * and to provide further context for the search user.
   *
   * For example: for a news article, this may be a truncated version of the
   * article, cut so that it contains a match on the search keyword.
   */
  description?: string | null;
  /** An optional creator of this search result. */
  creator?: object | (null & UserAuthor);
  /**
   * An optional list of folders which point to this search result.
   *
   * This list will be ordered from the top-most folder down to the folder in
   * which the search result actually exists, but does not need to contain the
   * entire folder hierarchy.
   */
  context?: (Folder & {
    /**
     * A link to this folder.
     * @format uri
     */
    url?: string;
  })[];
  /**
   * The name of an icon to display next to this search result.
   *
   * Intended as a fallback, if the search result does not have an associated
   * image URL.
   */
  icon?: string;
  /**
   * A set of supplementary contextual links for this search result, for
   * actions which the search user may perform on or for that result.
   */
  _links?: object;
}

export type Badge = Common & {
  type?: BadgeTypeEnum;
};

export type Event = Common & {
  type?: EventTypeEnum;
};

export type News = Common & {
  type?: NewsTypeEnum;
};

export type Assessment = Common & {
  /**
   * The type for this assessment. Assessments are sub-typed according to
   * their assessment type:
   *
   * - assessment.dueWork: this is a due work
   * - assessment.lessonPlan: this is a lesson plan
   * - assessment.lti: this is an LTI assessment
   * - assessment.project: this is a project
   *   (activities within the project are not fetched)
   * - assessment.task: this is a task
   * - assessment.quiz: this is a quiz
   */
  type?: AssessmentTypeEnum;
};

export type Blog = Common & {
  type?: BlogTypeEnum;
};

export type ResultFile = Common & {
  /**
   * The type for this file. Files are sub-typed according to their
   * classification:
   *
   * - file.audio: audio files
   * - file.document: text and other documents
   * - file.image: images
   * - file.video: videos
   * - file.other: any type of file which doesn't fit one of the above
   */
  type?: ResultFileTypeEnum;
};

export type Forum = Common & {
  type?: ForumTypeEnum;
};

export type ResultLink = Common & {
  type?: ResultLinkTypeEnum;
};

export type TextBox = Common & {
  type?: TextBoxTypeEnum;
};

export type Tile = Common & {
  type?: TileTypeEnum;
  _links?: {
    /**
     * The target URL of the tile, if there is one.
     *
     * (The result URL points to the tile's location within the page.)
     * @format uri
     */
    target?: string;
  };
};

/**
 * Page search sub-result list
 * A list of search results found within this page.
 */
export interface PageSubResultList {
  data?: PageSubResultItem[];
  /** Metadata for lists of items retrieved */
  metadata?: ListMetadata;
}

export type Page = Common & {
  /**
   * The type for this page. Pages are sub-typed according to their class
   * or homepage status:
   *
   * - page.class: this is a page with a class attached
   * - page.course: this is a page with a course specification attached
   * - page.unit: this is a page with a unit specification attached
   * - page.homepage: this is a page with neither a class, course or unit,
   *   but which still has a homepage
   * - page.other: this is a folder which has no homepage
   */
  type?: PageTypeEnum;
  _links?: {
    /**
     * A link for retrieving search results within this page.
     *
     * This link does not contain a cursor: use the cursor within
     * `_subResults.metadata.cursor.next` to find the next page of
     * results.
     * @format uri
     */
    subResults?: string;
  };
  /** A list of search results found within this page. */
  _subResults?: PageSubResultList;
};

export type User = Common & {
  /**
   * The type of this user. (Users are subtyped by role type.)
   *
   * - user.guest: this is a guest user
   * - user.parent: this is a parent user
   * - user.staff: this is a staff user
   * - user.student: this is a student user
   */
  type?: UserTypeEnum;
};

/**
 * Search result list
 * A list of search results
 */
export interface ResultList {
  data?: ResultItem[];
  /** Metadata for lists of items retrieved */
  metadata?: ListMetadata;
}

/** @example {"configs":[{"name":"site_name","value":"My Updated School"},{"name":"theme_settings","value":{"primaryColor":"#2563eb","secondaryColor":"#64748b","darkMode":true}},{"name":"allowed_file_types","value":["pdf","doc","docx","jpg","png"]},{"name":"max_file_size","value":52428800},{"name":"enable_notifications","value":false}]} */
export interface ConfigBulkRequest {
  /** Array of configuration updates to process */
  configs: {
    /**
     * The unique name/key of the configuration setting
     * @example "site_name"
     */
    name: string;
    /**
     * The new configuration value
     * @example {"string_value":"Updated School Name","number_value":52428800,"boolean_value":true,"object_value":{"primaryColor":"#2563eb","darkMode":true},"array_value":["pdf","doc","jpg"]}
     */
    value: string | number | boolean | Record<string, any> | any[];
  }[];
}

export interface ConfigItem {
  /**
   * The unique name/key of the configuration setting
   * @example "site_name"
   */
  name: string;
  /**
   * The configuration value. Can be any valid JSON type depending on the config setting.
   * @example {"string_value":"My School","number_value":52428800,"boolean_value":true,"object_value":{"primaryColor":"#2563eb","darkMode":true},"array_value":["pdf","doc","jpg"]}
   */
  value: string | number | boolean | Record<string, any> | any[];
  /**
   * Optional description of what this configuration setting controls
   * @example "The name of the school displayed in the header"
   */
  description?: string;
}

/** @example {"results":[{"name":"site_name","value":"My Updated School","description":"The name of the school displayed in the header","status":"success"},{"name":"theme_settings","value":{"primaryColor":"#2563eb","secondaryColor":"#64748b","darkMode":true},"description":"Theme configuration object","status":"success"},{"name":"allowed_file_types","value":["pdf","doc","docx","jpg","png"],"description":"Array of allowed file extensions","status":"success"},{"name":"enable_notifications","value":true,"description":"Whether to enable push notifications","status":"success"},{"name":"invalid_config","status":"failed","error":"Config 'invalid_config' not found"}],"errors":["Config 'invalid_config' not found"],"total_processed":5,"successful":4,"failed":1} */
export interface ConfigBulkResponse {
  /** Array of results for each config update attempt */
  results: (
    | (ConfigItem & {
        /** @example "success" */
        status: ConfigBulkResponseStatusEnum;
      })
    | {
        /**
         * The config name that failed to update
         * @example "invalid_config"
         */
        name: string;
        /** @example "failed" */
        status: ConfigBulkResponseStatusEnum1;
        /**
         * Error message explaining why the update failed
         * @example "Config 'invalid_config' not found"
         */
        error: string;
      }
  )[];
  /**
   * Array of error messages for failed updates
   * @example ["Config 'invalid_config' not found"]
   */
  errors: string[];
  /**
   * Total number of config updates attempted
   * @example 5
   */
  total_processed: number;
  /**
   * Number of config updates that succeeded
   * @example 4
   */
  successful: number;
  /**
   * Number of config updates that failed
   * @example 1
   */
  failed: number;
}

export interface ConfigUpdate {
  /**
   * The new configuration value. Can be any valid JSON type depending on the config setting.
   * @example {"string_value":"Updated School Name","number_value":52428800,"boolean_value":false,"object_value":{"primaryColor":"#2563eb","secondaryColor":"#64748b","darkMode":true},"array_value":["pdf","doc","docx","jpg","png"]}
   */
  value: string | number | boolean | Record<string, any> | any[];
}

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

/**
 * Search result
 * A single search result.
 *
 * This contains only search results which are not contained within a page:
 * pages contain their own list of sub-results.
 */
type BaseResultItem = object;

type BaseResultItemTypeMapping<Key, Type> = {
  type: Key;
} & Type;

/**
 * Page search sub-result
 * A single search result within this page.
 */
type BasePageSubResultItem = object;

type BasePageSubResultItemTypeMapping<Key, Type> = {
  type: Key;
} & Type;

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

/**
 * The type of membership that this user has.
 *
 * * Admin: the user is the administrator of this group: they may add
 *   and remove members, change the group's permissions and disband the
 *   group
 * * Write: the user may create content within the group
 * * Read: the user may view content within the group, and may be
 *   notified of and may participate in group events
 */
export enum UserGroupMembershipWritableFieldsMembershipEnum {
  Admin = "admin",
  Write = "write",
  Read = "read",
}

/**
 * The enrolment status of the user for this group.
 *
 * * Enroled: the user is enroled in the group with the 'membership' permission
 * * Pending: the user has requested to join the group and is currently
 *   awaiting approval by a group admin
 * @default "enroled"
 */
export enum UserGroupMembershipWritableFieldsEnrolmentStatusEnum {
  Enroled = "enroled",
  Pending = "pending",
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
 * Whether the requested change should apply only to the event with the given 'id', or to all events in the series of which event 'id' is a member.
 * @example "self"
 */
export enum EventCommonPropsEfficacyEnum {
  Self = "self",
  Series = "series",
}

/**
 * Blank for single event.
 * @example "weekly"
 */
export enum EventCommonPropsRepeatEnum {
  Value = "",
  Daily = "daily",
  Weekly = "weekly",
  Fortnightly = "fortnightly",
  Monthly = "monthly",
  Yearly = "yearly",
}

/**
 * Event level ID.  1 for Personal, 2 for Group, 3 for Campus.
 * @example 2
 */
export enum EventCommonPropsLevelEnum {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

/**
 * Integer representing the type of attendance that is enabled. 0 means 'None', 1 means 'Invitation Only', and 2 means 'Open'.
 * @example 2
 */
export enum EventCommonPropsAttendanceEnum {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

/** @example "task" */
export enum AssessmentItemAssessmentTypeEnum {
  DueWork = "dueWork",
  Quiz = "quiz",
  Task = "task",
  Project = "project",
  LTI = "LTI",
  LessonPlan = "lessonPlan",
  DialogAgent = "dialogAgent",
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

export enum DiscussionCommentReadVisibilityEnum {
  Staff = "staff",
  Parent = "parent",
  Student = "student",
}

export enum CurriculumNodeUsageFolderItemDiscriminatorEnum {
  Folder = "folder",
}

export enum CurriculumNodeUsageCourseItemDiscriminatorEnum {
  Course = "course",
}

export enum CurriculumNodeUsageUnitItemDiscriminatorEnum {
  Unit = "unit",
}

export enum CurriculumNodeUsageAssessmentItemDiscriminatorEnum {
  Assessment = "assessment",
}

/** The type of the assessment. */
export enum CurriculumNodeUsageAssessmentItemTypeEnum {
  DueWork = "dueWork",
  Project = "project",
  Lti = "lti",
  Quiz = "quiz",
  Task = "task",
  LessonPlan = "lessonPlan",
}

/** The type of the project: always "project". */
export enum CurriculumNodeUsageAssessmentItemTypeEnum1 {
  Project = "project",
}

export enum CurriculumNodeUsageBadgeItemDiscriminatorEnum {
  Badge = "badge",
}

type BaseNull = object;

type BaseNullDiscriminatorMapping<Key, Type> = {
  discriminator: Key;
} & Type;

export enum BadgeTypeEnum {
  Badge = "badge",
}

export enum EventTypeEnum {
  Event = "event",
}

export enum NewsTypeEnum {
  News = "news",
}

/**
 * The type for this assessment. Assessments are sub-typed according to
 * their assessment type:
 *
 * - assessment.dueWork: this is a due work
 * - assessment.lessonPlan: this is a lesson plan
 * - assessment.lti: this is an LTI assessment
 * - assessment.project: this is a project
 *   (activities within the project are not fetched)
 * - assessment.task: this is a task
 * - assessment.quiz: this is a quiz
 */
export enum AssessmentTypeEnum {
  AssessmentDueWork = "assessment.dueWork",
  AssessmentLessonPlan = "assessment.lessonPlan",
  AssessmentLti = "assessment.lti",
  AssessmentProject = "assessment.project",
  AssessmentTask = "assessment.task",
  AssessmentQuiz = "assessment.quiz",
}

export enum BlogTypeEnum {
  Blog = "blog",
}

/**
 * The type for this file. Files are sub-typed according to their
 * classification:
 *
 * - file.audio: audio files
 * - file.document: text and other documents
 * - file.image: images
 * - file.video: videos
 * - file.other: any type of file which doesn't fit one of the above
 */
export enum ResultFileTypeEnum {
  FileAudio = "file.audio",
  FileDocument = "file.document",
  FileImage = "file.image",
  FileVideo = "file.video",
  FileOther = "file.other",
}

export enum ForumTypeEnum {
  Forum = "forum",
}

export enum ResultLinkTypeEnum {
  Link = "link",
}

export enum TextBoxTypeEnum {
  TextBox = "textBox",
}

export enum TileTypeEnum {
  Tile = "tile",
}

/**
 * The type for this page. Pages are sub-typed according to their class
 * or homepage status:
 *
 * - page.class: this is a page with a class attached
 * - page.course: this is a page with a course specification attached
 * - page.unit: this is a page with a unit specification attached
 * - page.homepage: this is a page with neither a class, course or unit,
 *   but which still has a homepage
 * - page.other: this is a folder which has no homepage
 */
export enum PageTypeEnum {
  PageClass = "page.class",
  PageCourse = "page.course",
  PageUnit = "page.unit",
  PageHomepage = "page.homepage",
  PageOther = "page.other",
}

/**
 * The type of this user. (Users are subtyped by role type.)
 *
 * - user.guest: this is a guest user
 * - user.parent: this is a parent user
 * - user.staff: this is a staff user
 * - user.student: this is a student user
 */
export enum UserTypeEnum {
  UserGuest = "user.guest",
  UserParent = "user.parent",
  UserStaff = "user.staff",
  UserStudent = "user.student",
}

/** @example "success" */
export enum ConfigBulkResponseStatusEnum {
  Success = "success",
}

/** @example "failed" */
export enum ConfigBulkResponseStatusEnum1 {
  Failed = "failed",
}

export enum DifferentiationStatusEnum {
  Unpopulated = "unpopulated",
  Expired = "expired",
  OutOfDate = "out-of-date",
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
