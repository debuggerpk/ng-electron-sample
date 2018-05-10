import { Action } from '@ngrx/store';
import { OutletActions, OutletActionTypes } from './outlet.actions';

/**
 * Interface for the 'Outlet' data used in
 *  - OutletState, and
 *  - outletReducer
 */
export interface OutletData {}

/**
 * Interface to the part of the Store containing OutletState
 * and other information related to OutletData.
 */
export interface OutletState {
  readonly outlet: OutletData;
}

export const initialState: OutletData = {};

export function outletReducer(state = initialState, action: OutletActions): OutletData {
  switch (action.type) {
    case OutletActionTypes.OutletAction:
      return state;

    case OutletActionTypes.OutletLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
