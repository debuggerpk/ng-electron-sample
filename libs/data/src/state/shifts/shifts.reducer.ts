import { Action } from '@ngrx/store';
import { ShiftState, ShiftActionTypes, shiftAdapter } from '@reaction/common/models';
import { ShiftsActions } from './shifts.actions';

export const initialState: ShiftState = shiftAdapter.getInitialState({
  selectedShiftId: null,
});

export function shiftsReducer(state = initialState, action: ShiftsActions): ShiftState {
  switch (action.type) {
    case ShiftActionTypes.AddNew:
      return state;

    default:
      return state;
  }
}
