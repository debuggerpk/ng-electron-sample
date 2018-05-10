import { Action } from '@ngrx/store';
import { CategoriesActions, CategoriesActionTypes } from './categories.actions';

/**
 * Interface for the 'Categories' data used in
 *  - CategoriesState, and
 *  - categoriesReducer
 */
export interface CategoriesData {}

/**
 * Interface to the part of the Store containing CategoriesState
 * and other information related to CategoriesData.
 */
export interface CategoriesState {
  readonly categories: CategoriesData;
}

export const initialState: CategoriesData = {};

export function categoriesReducer(state = initialState, action: CategoriesActions): CategoriesData {
  switch (action.type) {
    case CategoriesActionTypes.CategoriesAction:
      return state;

    case CategoriesActionTypes.CategoriesLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
