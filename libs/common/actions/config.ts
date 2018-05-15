import { ConfigActionTypes, Configuration, ConfigurationErrors, ReAction } from '@reaction/common/models';

export class GetConfig implements ReAction {
  readonly type = ConfigActionTypes.GetConfig;
}

export class GetConfigFromElectron implements ReAction {
  readonly type = ConfigActionTypes.GetConfigFromElectron;
}

export class GetConfigFromLocalStorage implements ReAction {
  readonly type = ConfigActionTypes.GetConfigFromLocalStorage;
}

export class GetConfigDone implements ReAction {
  readonly type = ConfigActionTypes.GetConfigDone;

  constructor(public payload: Configuration) {}
}

export class ValidateConfig implements ReAction {
  readonly type = ConfigActionTypes.ValidateConfig;

  constructor(public payload: Configuration) {}
}

export class ConfigValidationSuccess implements ReAction {
  readonly type = ConfigActionTypes.ConfigValidationSuccess;

  constructor(public payload: Configuration) {}
}

export class ConfigValidationError implements ReAction {
  readonly type = ConfigActionTypes.ConfigValidationError;

  constructor(public payload: ConfigurationErrors) {}
}

export class SaveConfig implements ReAction {
  readonly type = ConfigActionTypes.SaveConfig;

  constructor(public payload: Configuration) {}
}

export class SaveConfigToElectron implements ReAction {
  readonly type = ConfigActionTypes.SaveConfigToElectron;

  constructor(public payload: Configuration) {}
}

export class SaveConfigToLocalStorage implements ReAction {
  readonly type = ConfigActionTypes.SaveConfigToLocalStorage;

  constructor(public payload: Configuration) {}
}

export class SaveConfigDone implements ReAction {
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
