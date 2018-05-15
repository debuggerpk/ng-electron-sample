import { ShiftsActions } from '@reaction/common/actions';
import { ShiftActionTypes, ShiftState } from '@reaction/common/models';
import { shiftAdapter } from './shift.adapter';

export const initialState: ShiftState = shiftAdapter.getInitialState({
  selectedShiftId: null,
});

export function shiftsReducer(state = initialState, action: ShiftsActions): ShiftState {
  switch (action.type) {
    case ShiftActionTypes.LoadAllShifts:
      return state;

    case ShiftActionTypes.LoadAllShiftsDone:
      return shiftAdapter.addAll(action.payload, state);

    case ShiftActionTypes.AddNewShift:
      return state;

    default:
      return state;
  }
}
