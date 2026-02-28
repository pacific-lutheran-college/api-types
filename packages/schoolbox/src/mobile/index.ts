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
 * The role type the user has in Schoolbox
 * @example "parent"
 */
export enum MobileRegisterRoleEnum {
  Staff = "staff",
  Student = "student",
  Parent = "parent",
  Guest = "guest",
}

export interface MobileRegisterParams {
  /**
   * The provider that will handle the sending of push notifications to the device.
   *
   * While Apple (APNS) and Google Android (GCM) are still supported, they are deprecated.
   * @example "Firebase"
   */
  provider: ProviderEnum;
}

/**
 * The provider that will handle the sending of push notifications to the device.
 *
 * While Apple (APNS) and Google Android (GCM) are still supported, they are deprecated.
 * @example "Firebase"
 */
export enum ProviderEnum {
  GCM = "GCM",
  APNS = "APNS",
  Firebase = "Firebase",
  Digistorm = "Digistorm",
}

/**
 * The provider that will handle the sending of push notifications to the device.
 *
 * While Apple (APNS) and Google Android (GCM) are still supported, they are deprecated.
 * @example "Firebase"
 */
export enum MobileRegisterParams1ProviderEnum {
  GCM = "GCM",
  APNS = "APNS",
  Firebase = "Firebase",
  Digistorm = "Digistorm",
}

export enum MobileRegisterParams1Enum {
  GCM = "GCM",
  APNS = "APNS",
  Firebase = "Firebase",
  Digistorm = "Digistorm",
}

export interface MobileDeregisterParams {
  /**
   * The type of device that is connecting to the service.
   *
   * Only "Firebase" is currently supported for deregistration.
   * @example "Firebase"
   */
  provider: ProviderEnum1;
}

/**
 * The type of device that is connecting to the service.
 *
 * Only "Firebase" is currently supported for deregistration.
 * @example "Firebase"
 */
export enum ProviderEnum1 {
  GCM = "GCM",
  APNS = "APNS",
  Firebase = "Firebase",
  Digistorm = "Digistorm",
}

/**
 * The type of device that is connecting to the service.
 *
 * Only "Firebase" is currently supported for deregistration.
 * @example "Firebase"
 */
export enum MobileDeregisterParams1ProviderEnum {
  GCM = "GCM",
  APNS = "APNS",
  Firebase = "Firebase",
  Digistorm = "Digistorm",
}

export enum MobileDeregisterParams1Enum {
  GCM = "GCM",
  APNS = "APNS",
  Firebase = "Firebase",
  Digistorm = "Digistorm",
}
