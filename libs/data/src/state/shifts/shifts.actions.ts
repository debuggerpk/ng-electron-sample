import { Action } from '@ngrx/store';

export enum ShiftsActionTypes {
  ShiftsAction = '[Shifts] Action',
  LoadShifts = '[Shifts] Load Data',
  ShiftsLoaded = '[Shifts] Data Loaded',
}

export class Shifts implements Action {
  readonly type = ShiftsActionTypes.ShiftsAction;
}
export class LoadShifts implements Action {
  readonly type = ShiftsActionTypes.LoadShifts;
  constructor(public payload: any) {}
}

export class ShiftsLoaded implements Action {
  readonly type = ShiftsActionTypes.ShiftsLoaded;
  constructor(public payload: any) {}
}

export type ShiftsActions = Shifts | LoadShifts | ShiftsLoaded;
