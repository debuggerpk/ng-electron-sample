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

export enum ConfigActionTypes {
  GetConfig = '[CONFIG] Get Config Start',
  GetConfigFromElectron = '[CONFIG] Get Electron Configuration',
  GetConfigFromLocalStorage = '[CONFIG] Get LocalStorage Configuration',
  GetConfigDone = '[CONFIG] Get Config Done',
  ValidateConfig = '[CONFIG] Validate Configuration',
  ConfigValidationSuccess = '[CONFIG] Validation Success',
  ConfigValidationError = '[CONFIG] Validation Error',
  SaveConfig = '[CONFIG] Save Config',
  SaveConfigDone = '[CONFIG] Save Config Done',
}
