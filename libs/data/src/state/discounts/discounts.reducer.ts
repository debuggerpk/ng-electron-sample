import { Action } from '@ngrx/store';
import { DiscountsActions, DiscountsActionTypes } from './discounts.actions';

/**
 * Interface for the 'Discounts' data used in
 *  - DiscountsState, and
 *  - discountsReducer
 */
export interface DiscountsData {}

/**
 * Interface to the part of the Store containing DiscountsState
 * and other information related to DiscountsData.
 */
export interface DiscountsState {
  readonly discounts: DiscountsData;
}

export const initialState: DiscountsData = {};

export function discountsReducer(state = initialState, action: DiscountsActions): DiscountsData {
  switch (action.type) {
    case DiscountsActionTypes.DiscountsAction:
      return state;

    case DiscountsActionTypes.DiscountsLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
