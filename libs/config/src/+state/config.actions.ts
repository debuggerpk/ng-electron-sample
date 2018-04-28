import { Action } from '@ngrx/store';

import { Configuration } from '../models/config';

export enum ConfigActionTypes {
  GetConfig = '[CONFIG] Get Config Start',
  GetConfigFromElectron = '[CONFIG] Get Electron Configuration',
  GetConfigFromLocalStorage = '[CONFIG] Get LocalStorage Configuration',
  GetConfigDone = '[CONFIG] Get Config Done',
  ValidateConfig = '[CONFIG] Validate',
  ConfigValidationError = '[CONFIG] Validation Error',
  SaveConfig = '[CONFIG] Save Config',
  SaveConfigDone = '[CONFIG] Save Config Done',
}

export class GetConfig implements Action {
  readonly type = ConfigActionTypes.GetConfig;
}

export class GetConfigFromElectron implements Action {
  readonly type = ConfigActionTypes.GetConfigFromElectron;
}

export class GetConfigFromLocalStorage implements Action {
  readonly type = ConfigActionTypes.GetConfigFromLocalStorage;
}

export class GetConfigDone implements Action {
  readonly type = ConfigActionTypes.GetConfigDone;

  constructor(public payload: Configuration) {}
}

export class ValidateConfig implements Action {
  readonly type = ConfigActionTypes.ValidateConfig;

  constructor(public payload: Configuration) {}
}

export class ConfigValidationError implements Action {
  readonly type = ConfigActionTypes.ValidateConfig;
}

export class SaveConfig implements Action {
  readonly type = ConfigActionTypes.SaveConfig;

  constructor(public payload: Configuration) {}
}

export class SaveConfigDone implements Action {
  readonly type = ConfigActionTypes.SaveConfigDone;
}

export type ConfigActions =
  | GetConfig
  | GetConfigFromElectron
  | GetConfigFromLocalStorage
  | GetConfigDone
  | ValidateConfig
  | ConfigValidationError
  | SaveConfig
  | SaveConfigDone;
