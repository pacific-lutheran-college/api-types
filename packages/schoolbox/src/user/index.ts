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

export interface UserSearchParams {
  /** Will search `username`, `firstname`, `lastname` and `preferred_name` for non exact matches. */
  search?: string;
  /**
   * Json encoded object of fields and values to filter users on. \
   * For example, to get user with username `jcoles`: \
   * `filter=%7b%22username%22%3a%22jcoles%22%7d`
   */
  filter?: {
    /** @example 501 */
    externalId?: string;
    /** @example "jreed" */
    username?: string;
    /** @example "jreed@schoolbox.com.au" */
    email?: string;
    /** A Year level to filter users with. */
    year?:
      | {
          /**
           * The DB identifier of the Year Level.
           * @example 6
           */
          id?: number;
        }
      | {
          /**
           * The name of the Year Level, may not be unique.
           * @example "Year 6"
           */
          name?: string;
        };
    /** A role to filter users with. */
    role?:
      | {
          /**
           * The DB identifier of the Role.
           * @example 1
           */
          id?: number;
        }
      | {
          /**
           * The name of the Role, may not be unique.
           * @example "Staff"
           */
          name?: string;
        };
    roleType?: FilterRoleTypeEnum;
    /** A campus to filter users with. */
    campus?:
      | {
          /**
           * The DB identifier of the Campus.
           * @example 6
           */
          id?: number;
        }
      | {
          /**
           * The name of the Campus, may not be unique.
           * @example "Senior"
           */
          name?: string;
        };
  };
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

export enum FilterRoleTypeEnum {
  Student = "student",
  Staff = "staff",
  Parent = "parent",
  Guest = "guest",
}

export enum UserSearchParams1RoleTypeEnum {
  Student = "student",
  Staff = "staff",
  Parent = "parent",
  Guest = "guest",
}

export interface UserGetTokenForUserParams {
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

export interface UserGetParams {
  id: string;
}

export interface UserPutParams {
  id: string;
}

export interface UserPatchParams {
  id: string;
}

export interface UserDeleteParams {
  id: string;
}

/**
 * The level of access that users have to this group.
 *
 * * `private`: membership is by invitation only
 * * `moderated`: users may apply for membership, but must be approved
 * * `free`: users may join and leave at any time
 */
export enum UserGroupMembershipSearchTypeEnum {
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
export enum UserGroupMembershipSearchEnrolmentStatusEnum {
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
export enum UserGroupMembershipSearchMembershipEnum {
  Admin = "admin",
  Write = "write",
  Read = "read",
  None = "none",
}

export interface UserGroupMembershipSearchParams {
  id: string;
}

/**
 * The level of access that users have to this group.
 *
 * * `private`: membership is by invitation only
 * * `moderated`: users may apply for membership, but must be approved
 * * `free`: users may join and leave at any time
 */
export enum UserGroupMembershipGetTypeEnum {
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
export enum UserGroupMembershipGetEnrolmentStatusEnum {
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
export enum UserGroupMembershipGetMembershipEnum {
  Admin = "admin",
  Write = "write",
  Read = "read",
  None = "none",
}

export interface UserGroupMembershipGetParams {
  id: string;
  groupId: string;
}

export interface UserGroupMembershipPostParams {
  id: string;
  groupId: string;
}

export interface UserGroupMembershipPutParams {
  id: string;
  groupId: string;
}

export interface UserGroupMembershipPatchParams {
  id: string;
  groupId: string;
}

export interface UserGroupMembershipDeleteParams {
  id: string;
  groupId: string;
}

export interface ApiusernotifyApiUserNotifyParams {
  id: string;
}

/**
 * The level of access that users have to this group.
 *
 * * `private`: membership is by invitation only
 * * `moderated`: users may apply for membership, but must be approved
 * * `free`: users may join and leave at any time
 * @example "private"
 */
export enum GroupGetUsersInGroupAccessEnum {
  Private = "private",
  Moderated = "moderated",
  Free = "free",
}

/**
 * The type of this role. Different role types have different levels of
 * access to different parts of Schoolbox.
 */
export enum GroupGetUsersInGroupRoleTypeEnum {
  Staff = "staff",
  Student = "student",
  Parent = "parent",
  Guest = "guest",
}

/**
 * The type of access the user has to the group - read, write, or admin.
 * @example "read"
 */
export enum GroupGetUsersInGroupAccessTypeEnum {
  Read = "read",
  Write = "write",
  Admin = "admin",
}

export interface GroupGetUsersInGroupParams {
  id: string;
}
