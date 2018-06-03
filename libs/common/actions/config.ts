import { ConfigActionTypes, Configuration, ConfigurationErrors, FluxStandardAction } from '@reaction/common/models';

export class GetConfig implements FluxStandardAction {
  readonly type = ConfigActionTypes.GetConfig;
}

export class GetConfigFromElectron implements FluxStandardAction {
  readonly type = ConfigActionTypes.GetConfigFromElectron;
}

export class GetConfigFromLocalStorage implements FluxStandardAction {
  readonly type = ConfigActionTypes.GetConfigFromLocalStorage;
}

export class GetConfigDone implements FluxStandardAction {
  readonly type = ConfigActionTypes.GetConfigDone;

  constructor(public payload: Configuration) {}
}

export class ValidateConfig implements FluxStandardAction {
  readonly type = ConfigActionTypes.ValidateConfig;

  constructor(public payload: Configuration) {}
}

export class ConfigValidationSuccess implements FluxStandardAction {
  readonly type = ConfigActionTypes.ConfigValidationSuccess;

  constructor(public payload: Configuration) {}
}

export class ConfigValidationError implements FluxStandardAction {
  readonly type = ConfigActionTypes.ConfigValidationError;

  constructor(public payload: ConfigurationErrors) {}
}

export class SaveConfig implements FluxStandardAction {
  readonly type = ConfigActionTypes.SaveConfig;

  constructor(public payload: Configuration) {}
}

export class SaveConfigToElectron implements FluxStandardAction {
  readonly type = ConfigActionTypes.SaveConfigToElectron;

  constructor(public payload: Configuration) {}
}

export class SaveConfigToLocalStorage implements FluxStandardAction {
  readonly type = ConfigActionTypes.SaveConfigToLocalStorage;

  constructor(public payload: Configuration) {}
}

export class SaveConfigDone implements FluxStandardAction {
  readonly type = ConfigActionTypes.SaveConfigDone;

  constructor(public payload: Configuration) {}
}

export class LoadAllData implements FluxStandardAction {
  readonly type = ConfigActionTypes.LoadAllData;
}

export class LoadAllDataDone implements FluxStandardAction {
  readonly type = ConfigActionTypes.LoadAllDataDone;
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
  | SaveConfigDone
  | LoadAllDataDone;
