import { Action } from '@ngrx/store';

export enum MainActionTypes {
  LoadData = '[Main] Load Data',
  DataLoaded = '[Main] Data Loaded',
}

export class LoadData implements Action {
  readonly type = MainActionTypes.LoadData;

  constructor(public payload: any) {}
}

export class DataLoaded implements Action {
  readonly type = MainActionTypes.DataLoaded;

  constructor(public payload: any) {}
}

export type MainActions = LoadData | DataLoaded;
