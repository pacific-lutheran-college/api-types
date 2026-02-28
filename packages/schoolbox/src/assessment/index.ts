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

/** The type of the uploaded file. */
export enum FileTypeEnum {
  Image = "image",
  Video = "video",
  Audio = "audio",
  Document = "document",
  Other = "other",
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

export interface AssessmentGetParams {
  id: string;
}

/**
 * Whether to publish the feedback (1) or keep as draft (0)
 * @example 1
 */
export enum AssessmentPostFeedbackPublishEnum {
  Value0 = 0,
  Value1 = 1,
}

export interface AssessmentPostFeedbackPayload {
  /**
   * The ID of the student submission this feedback relates to (optional)
   * @example 12345
   */
  responseId?: number;
  /**
   * The mark/grade to assign (can be numeric or string format).
   * Valid formats include:
   * - Letter grades: "A+", "B-", "C"
   * - Status indicators: "Absent", "Incomplete"
   * - Numeric values: 95, 87.5
   * - Percentage strings: "67 %", "85%"
   * - Fraction strings: "5/10", "18/20"
   * @example "A+"
   */
  mark?: number | string;
  /**
   * Feedback comment
   * @example "Excellent work! Your analysis was thorough and well-structured."
   */
  comment?: string;
  /**
   * Whether to publish the feedback (1) or keep as draft (0)
   * @example 1
   */
  publish?: AssessmentPostFeedbackPublishEnum;
}

export interface AssessmentPostFeedbackParams {
  /**
   * The ID of the assessment
   * @example 123
   */
  assessmentId: number;
  /**
   * The ID of the student
   * @example 456
   */
  studentId: number;
}

export interface AssessmentPostSubmissionPayload {
  /**
   * HTML content of the submission
   * @example "<p>This is my submission for the assessment.</p>"
   */
  body?: string;
  /** Array of file references that were previously uploaded */
  attachment?: string[];
}

export interface AssessmentPostSubmissionParams {
  /**
   * The ID of the assessment
   * @example 123
   */
  assessmentId: number;
  /**
   * The ID of the student
   * @example 456
   */
  studentId: number;
}
