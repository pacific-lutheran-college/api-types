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

/**
 * The role type the user has in Schoolbox
 * @example "parent"
 */
export enum ApiSessionGetRoleEnum {
  Staff = "staff",
  Student = "student",
  Parent = "parent",
  Guest = "guest",
}

export interface ApiSessionGetParams {
  /**
   * If provided, a relative path to redirect to upon successful authentication.
   *
   * If not provided: will fall back to redirecting to an empty relative path (/).
   */
  redirect?: string;
  /** A JWT generated via an oAuth request. */
  jwt: string;
}

export interface ApiSessionPostParams {
  /**
   * If provided, a relative path to redirect to upon successful authentication.
   *
   * If not provided: will fall back to redirecting to an empty relative path (/).
   */
  redirect?: string;
}
