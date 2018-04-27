import { Action } from '@ngrx/store';

export enum ConfigActionTypes {
  ConfigAction = '[Config] Action',
  LoadConfig = '[Config] Load Data',
  ConfigLoaded = '[Config] Data Loaded',
}

export class Config implements Action {
  readonly type = ConfigActionTypes.ConfigAction;
}
export class LoadConfig implements Action {
  readonly type = ConfigActionTypes.LoadConfig;
  constructor(public payload: any) {}
}

export class ConfigLoaded implements Action {
  readonly type = ConfigActionTypes.ConfigLoaded;
  constructor(public payload: any) {}
}

export type ConfigActions = Config | LoadConfig | ConfigLoaded;
