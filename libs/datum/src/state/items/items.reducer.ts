import { Action } from '@ngrx/store';
import { ItemsActions, ItemsActionTypes } from './items.actions';

/**
 * Interface for the 'Items' data used in
 *  - ItemsState, and
 *  - itemsReducer
 */
export interface ItemsData {}

/**
 * Interface to the part of the Store containing ItemsState
 * and other information related to ItemsData.
 */
export interface ItemsState {
  readonly items: ItemsData;
}

export const initialState: ItemsData = {};

export function itemsReducer(state = initialState, action: ItemsActions): ItemsData {
  switch (action.type) {
    case ItemsActionTypes.ItemsAction:
      return state;

    case ItemsActionTypes.ItemsLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
