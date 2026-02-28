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

/** @example "success" */
export enum ConfigBulkResponseStatusEnum {
  Success = "success",
}

/** @example "failed" */
export enum ConfigBulkResponseStatusEnum1 {
  Failed = "failed",
}

export interface ConfigGetParams {
  configName: string;
}

export interface ConfigPatchParams {
  configName: string;
}
