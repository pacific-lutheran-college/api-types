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

export interface ApiSearchGetParams {
  /** A keyword to search for. */
  keyword: string;
  /** A JSON-encoded object representing a list of values to search for. */
  filter?: {
    /** If provided, filter the response to these types of object. */
    types?: FilterTypesEnum[];
    /**
     * If provided, filter the response to results relevant within this date
     * span.
     *
     * (This has different meanings for different types of object.)
     */
    date?: {
      /**
       * A date in YYYY-MM-DD format.
       * @format date-time
       * @example "2023-01-01"
       */
      from?: string;
      /**
       * A date in YYYY-MM-DD format.
       * @format date-time
       * @example "2023-12-31"
       */
      to?: string;
    };
    /**
     * If provided, filter the response to results created by this user.
     *
     * (Currently only allows filtering by user's ID, but may allow more
     * properties later?)
     */
    creator?: {
      /** The ID of the creator. */
      id?: number;
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

export enum FilterTypesEnum {
  Assessment = "assessment",
  AssessmentDueWork = "assessment.dueWork",
  AssessmentLessonPlan = "assessment.lessonPlan",
  AssessmentProject = "assessment.project",
  AssessmentTask = "assessment.task",
  AssessmentQuiz = "assessment.quiz",
  Badge = "badge",
  Blog = "blog",
  Event = "event",
  File = "file",
  FileAudio = "file.audio",
  FileDocument = "file.document",
  FileImage = "file.image",
  FileVideo = "file.video",
  FileOther = "file.other",
  Forum = "forum",
  Link = "link",
  News = "news",
  Page = "page",
  PageClass = "page.class",
  PageCourse = "page.course",
  PageUnit = "page.unit",
  PageHomepage = "page.homepage",
  PageOther = "page.other",
  TextBox = "textBox",
  Tile = "tile",
  User = "user",
  UserGuest = "user.guest",
  UserParent = "user.parent",
  UserStaff = "user.staff",
  UserStudent = "user.student",
}

export enum ApiSearchGetParams1TypesEnum {
  Assessment = "assessment",
  AssessmentDueWork = "assessment.dueWork",
  AssessmentLessonPlan = "assessment.lessonPlan",
  AssessmentProject = "assessment.project",
  AssessmentTask = "assessment.task",
  AssessmentQuiz = "assessment.quiz",
  Badge = "badge",
  Blog = "blog",
  Event = "event",
  File = "file",
  FileAudio = "file.audio",
  FileDocument = "file.document",
  FileImage = "file.image",
  FileVideo = "file.video",
  FileOther = "file.other",
  Forum = "forum",
  Link = "link",
  News = "news",
  Page = "page",
  PageClass = "page.class",
  PageCourse = "page.course",
  PageUnit = "page.unit",
  PageHomepage = "page.homepage",
  PageOther = "page.other",
  TextBox = "textBox",
  Tile = "tile",
  User = "user",
  UserGuest = "user.guest",
  UserParent = "user.parent",
  UserStaff = "user.staff",
  UserStudent = "user.student",
}

export interface ApiSearchFolderGetParams {
  /** A keyword to search for. */
  keyword: string;
  /** A JSON-encoded object representing a list of values to search for. */
  filter?: {
    /** If provided, filter the response to these types of object. */
    types?: ApiSearchGetParams1TypesEnum[];
    /**
     * If provided, filter the response to results relevant within this date
     * span.
     *
     * (This has different meanings for different types of object.)
     */
    date?: {
      /**
       * A date in YYYY-MM-DD format.
       * @format date-time
       * @example "2023-01-01"
       */
      from?: string;
      /**
       * A date in YYYY-MM-DD format.
       * @format date-time
       * @example "2023-12-31"
       */
      to?: string;
    };
    /**
     * If provided, filter the response to results created by this user.
     *
     * (Currently only allows filtering by user's ID, but may allow more
     * properties later?)
     */
    creator?: {
      /** The ID of the creator. */
      id?: number;
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
