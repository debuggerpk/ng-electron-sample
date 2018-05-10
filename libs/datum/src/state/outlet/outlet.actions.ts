import { Action } from '@ngrx/store';

export enum OutletActionTypes {
  OutletAction = '[Outlet] Action',
  LoadOutlet = '[Outlet] Load Data',
  OutletLoaded = '[Outlet] Data Loaded',
}

export class Outlet implements Action {
  readonly type = OutletActionTypes.OutletAction;
}
export class LoadOutlet implements Action {
  readonly type = OutletActionTypes.LoadOutlet;
  constructor(public payload: any) {}
}

export class OutletLoaded implements Action {
  readonly type = OutletActionTypes.OutletLoaded;
  constructor(public payload: any) {}
}

export type OutletActions = Outlet | LoadOutlet | OutletLoaded;
