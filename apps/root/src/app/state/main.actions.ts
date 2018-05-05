import { Action } from '@ngrx/store';

export enum MainActionTypes {
  MainAction = '[Main] Action',
  LoadMain = '[Main] Load Data',
  MainLoaded = '[Main] Data Loaded',
}

export class Main implements Action {
  readonly type = MainActionTypes.MainAction;
}
export class LoadMain implements Action {
  readonly type = MainActionTypes.LoadMain;
  constructor(public payload: any) {}
}

export class MainLoaded implements Action {
  readonly type = MainActionTypes.MainLoaded;
  constructor(public payload: any) {}
}

export type MainActions = Main | LoadMain | MainLoaded;
