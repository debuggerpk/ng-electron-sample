/**
 * Defines Configuration Error format
 *
 * @export
 * @interface ConfigurationErrors
 */
export interface ConfigurationErrors {
  [key: string]: boolean;
}

/**
 * Defines Configuration Format
 *
 * @export
 * @interface Configuration
 */
export interface Configuration {
  outlet_id: string;
  api_key: string;
  api_gateway: string;
  local_gateway: string;
  errors?: ConfigurationErrors | null;
}

/**
 * State Definition for ConfigState
 *
 * @export
 * @interface ConfigState
 */
export interface ConfigState {
  readonly config: Configuration;
}
