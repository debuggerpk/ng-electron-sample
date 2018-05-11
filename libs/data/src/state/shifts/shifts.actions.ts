import { Action } from '@ngrx/store';
import { Shift, ShiftActionTypes } from '@reaction/common/models';

export class LoadAllShifts implements Action {
  readonly type = ShiftActionTypes.LoadAllShifts;
}

export class LoadAllShiftsDone implements Action {
  readonly type = ShiftActionTypes.LoadAllShiftsDone;
  constructor(public payload: Array<Shift>) {}
}

export class AddNewShift implements Action {
  readonly type = ShiftActionTypes.AddNewShift;
}

export class AddNewShiftDone implements Action {
  readonly type = ShiftActionTypes.AddNewShiftDone;
  constructor(public payload: Shift) {}
}

export type ShiftsActions = LoadAllShifts | LoadAllShiftsDone | AddNewShift | AddNewShiftDone;
