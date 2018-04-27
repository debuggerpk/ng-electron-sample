import { Action } from '@ngrx/store';

import { Configuration } from '../models/config';

export const GET_CONFIG_START = '[CONFIG]: Get Config Start';
export const GET_CONFIG_FROM_ELECTRON = '[CONFIG] Get Electron Configuration';
export const GET_CONFIG_FROM_LOCAL_STORAGE = '[CONFIG] Get LocalStorage Configuration';
export const GET_CONFIG_DONE = '[CONFIG]: Get Config Done';
export const SET_CONFIG_START = '[CONFIG]: Save Config';
export const SET_CONFIG_DONE = '[CONFIG]: Save Config Done';

// and the error Configuration

export const CONFIG_ERROR = '[CONFIG] Error';

export enum ConfigActionTypes {
  GetConfig = '[CONFIG] Get Config Start',
  GetConfigFromElectron = '[CONFIG] Get Electron Configuration',
  GetConfigFromLocalStorage = '[CONFIG] Get LocalStorage Configuration',
  GetConfigDone = '[CONFIG] Get Config Done',
  SConfig = '[CONFIG] Save Config',
  SetConfigDone = '[CONFIG] Save Config Done',
}

export class GetConfig implements Action {
  readonly type = ConfigActionTypes.GetConfig;
}

export class GetConfigFromElectron implements Action {
  readonly type = ConfigActionTypes.GetConfigFromElectron;

  constructor(public payload: Configuration) { }
}

export class GetConfigFromLocalStorage implements Action {
  readonly type = ConfigActionTypes.GetConfigFromLocalStorage;
}

export class GetConfigDone implements Action {
  readonly type = ConfigActionTypes.GetConfigDone;

  constructor(public payload: Configuration) { }
}

export class SaveConfig implements Action {
  readonly type = SET_CONFIG_START;
}

export class SaveConfigDone implements Action {
  readonly type = SET_CONFIG_DONE;
}

export class ConfigError implements Action {
  readonly type = CONFIG_ERROR;
}

export type ConfigActions =
  | GetConfig
  | GetConfigFromElectron
  | GetConfigFromLocalStorage
  | GetConfigDone
  | SaveConfig
  | SaveConfigDone
  | ConfigError;
