import { Action } from '@ngrx/store';
import { ShiftsActions, ShiftsActionTypes } from './shifts.actions';

/**
 * Interface for the 'Shifts' data used in
 *  - ShiftsState, and
 *  - shiftsReducer
 */
export interface ShiftsData {}

/**
 * Interface to the part of the Store containing ShiftsState
 * and other information related to ShiftsData.
 */
export interface ShiftsState {
  readonly shifts: ShiftsData;
}

export const initialState: ShiftsData = {};

export function shiftsReducer(state = initialState, action: ShiftsActions): ShiftsData {
  switch (action.type) {
    case ShiftsActionTypes.ShiftsAction:
      return state;

    case ShiftsActionTypes.ShiftsLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
