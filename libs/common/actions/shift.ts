import { ReAction, Shift, ShiftActionTypes } from '@reaction/common/models';

export class LoadAllShifts implements ReAction {
  readonly type = ShiftActionTypes.LoadAllShifts;
}

export class LoadAllShiftsDone implements ReAction {
  readonly type = ShiftActionTypes.LoadAllShiftsDone;
  constructor(public payload: Array<Shift>) {}
}

export class AddNewShift implements ReAction {
  readonly type = ShiftActionTypes.AddNewShift;
}

export class AddNewShiftDone implements ReAction {
  readonly type = ShiftActionTypes.AddNewShiftDone;
  constructor(public payload: Shift) {}
}

export type ShiftsActions = LoadAllShifts | LoadAllShiftsDone | AddNewShift | AddNewShiftDone;
