import { FluxStandardAction, Shift, ShiftActionTypes } from '@reaction/common/models';
import { ShiftProperties } from '@reaction/common/models/shift';

export class LoadAllShifts implements FluxStandardAction {
  readonly type = ShiftActionTypes.LoadAllShifts;
}

export class LoadAllShiftsDone implements FluxStandardAction {
  readonly type = ShiftActionTypes.LoadAllShiftsDone;
  constructor(public payload: Array<Shift>) {}
}

export class AddNewShift implements FluxStandardAction {
  readonly type = ShiftActionTypes.AddNewShift;
  constructor(public payload: ShiftProperties) {}
}

export class AddNewShiftDone implements FluxStandardAction {
  readonly type = ShiftActionTypes.AddNewShiftDone;
  constructor(public payload: Shift) {}
}

export type ShiftsActions = LoadAllShifts | LoadAllShiftsDone | AddNewShift | AddNewShiftDone;
