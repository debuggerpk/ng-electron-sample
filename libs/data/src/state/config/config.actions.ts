import { Action } from '@ngrx/store';
import { ConfigActionTypes, Configuration, ConfigurationErrors } from '@reaction/common/models';

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

export class ConfigValidationSuccess implements Action {
  readonly type = ConfigActionTypes.ConfigValidationSuccess;

  constructor(public payload: Configuration) {}
}

export class ConfigValidationError implements Action {
  readonly type = ConfigActionTypes.ConfigValidationError;

  constructor(public payload: ConfigurationErrors) {}
}

export class SaveConfig implements Action {
  readonly type = ConfigActionTypes.SaveConfig;

  constructor(public payload: Configuration) {}
}

export class SaveConfigToElectron implements Action {
  readonly type = ConfigActionTypes.SaveConfigToElectron;

  constructor(public payload: Configuration) {}
}

export class SaveConfigToLocalStorage implements Action {
  readonly type = ConfigActionTypes.SaveConfigToLocalStorage;

  constructor(public payload: Configuration) {}
}

export class SaveConfigDone implements Action {
  readonly type = ConfigActionTypes.SaveConfigDone;

  constructor(public payload: Configuration) {}
}

export type ConfigActions =
  | GetConfig
  | GetConfigFromElectron
  | GetConfigFromLocalStorage
  | GetConfigDone
  | ValidateConfig
  | ConfigValidationSuccess
  | ConfigValidationError
  | SaveConfig
  | SaveConfigToElectron
  | SaveConfigToLocalStorage
  | SaveConfigDone;
