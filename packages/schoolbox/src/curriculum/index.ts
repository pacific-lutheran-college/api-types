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

export interface CurriculumApiUsageGetNodeUsageParams {
  id: string;
}
