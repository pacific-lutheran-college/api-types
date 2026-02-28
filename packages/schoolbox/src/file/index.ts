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

/** The type of the uploaded file. */
export enum FileTypeEnum {
  Image = "image",
  Video = "video",
  Audio = "audio",
  Document = "document",
  Other = "other",
}

export interface StorageAsyncUploadPayload {
  /**
   * The file being uploaded.
   * @format binary
   */
  upload: File;
}

export interface StorageAsyncUploadParams {
  /**
   * An optional date at which the uploaded file is considered to expire: after
   * this date, the file will be subject to garbage collection.
   *
   * If not provided: the uploaded file will never expire.
   * @format date-time
   */
  expiryDate?: string;
}

export interface FilePatchPayload {
  /** @example false */
  hidden?: boolean;
}

export interface FilePatchParams {
  /** The ID of the file. */
  fileId: number;
}
