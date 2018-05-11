import { Action } from '@ngrx/store';
import { Shift, ShiftActionTypes } from '@reaction/common/models';

export class AddNewShift implements Action {
  readonly type = ShiftActionTypes.AddNew;
}
export class AddNewShiftDone implements Action {
  readonly type = ShiftActionTypes.AddNewDone;
  constructor(public payload: Shift) {}
}

export type ShiftsActions = AddNewShift | AddNewShiftDone;
