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

export interface CalendarAjaxGetFullParams {
  /**
   * Start of the date range (inclusive) as a UNIX timestamp in seconds.
   *
   * This is used to bound the range of calendar events returned.
   * @example 1758981600
   */
  start: number;
  /**
   * End of the date range (exclusive) as a UNIX timestamp in seconds.
   *
   * This is used to bound the range of calendar events returned.
   * @example 1762606800
   */
  end: number;
  /**
   * The user ID whose calendar events should be retrieved.
   * @min 1
   * @example 1
   */
  userId: number;
  /**
   * Optional folder ID. When supplied, the endpoint will only include events
   * associated with the group identified by this folderId.
   * @min 1
   * @example 42
   */
  folderId?: number;
}

export interface CalendarEventPostModifyParams {
  id: string;
}

/**
 * Whether the event is an all day event - 1 means 'all day', 0 means 'not all day'.
 * @example 0
 */
export enum CalendarEventPostMoveAllDayEnum {
  Value0 = 0,
  Value1 = 1,
}

export interface CalendarEventPostMovePayload {
  /**
   * The new start date as a RFC3339 string. Eg. "2018-01-28T00:00:00+11:00".
   * @example "2018-01-28T00:00:00+11:00"
   */
  start?: string;
  /**
   * The new end date as a RFC3339 string. Eg. "2018-01-28T00:00:00+11:00".
   * @example "2018-01-28T00:00:00+11:00"
   */
  end?: string;
  /**
   * Whether the event is an all day event - 1 means 'all day', 0 means 'not all day'.
   * @example 0
   */
  allDay?: CalendarEventPostMoveAllDayEnum;
}

export interface CalendarEventPostMoveParams {
  id: string;
}

/**
 * Either 'self' (to delete only the one event), or 'series' (to delete all events in the series).
 * @example "self"
 */
export enum CalendarEventPostDeleteEfficacyEnum {
  Self = "self",
  Series = "series",
}

export interface CalendarEventPostDeletePayload {
  /**
   * Either 'self' (to delete only the one event), or 'series' (to delete all events in the series).
   * @example "self"
   */
  efficacy?: CalendarEventPostDeleteEfficacyEnum;
}

export interface CalendarEventPostDeleteParams {
  id: string;
}

export interface GetCalendarEventAttendanceParams {
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

export interface PostCalendarEventAttendanceCreatePayload {
  /** A comma separated list of user IDs to invite to this event. */
  guests?: string;
}

export interface PostCalendarEventAttendanceCreateParams {
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

export interface PostCalendarEventAttendanceAcceptParams {
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

export interface PostCalendarEventAttendanceDeclineParams {
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

export interface PostCalendarEventAttendanceDeletePayload {
  /** A user ID to remove attendance from. */
  userId?: number;
}

export interface PostCalendarEventAttendanceDeleteParams {
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
