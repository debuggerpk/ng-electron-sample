import { Action } from '@ngrx/store';
import { SectionsActions, SectionsActionTypes } from './sections.actions';

/**
 * Interface for the 'Sections' data used in
 *  - SectionsState, and
 *  - sectionsReducer
 */
export interface SectionsData {}

/**
 * Interface to the part of the Store containing SectionsState
 * and other information related to SectionsData.
 */
export interface SectionsState {
  readonly sections: SectionsData;
}

export const initialState: SectionsData = {};

export function sectionsReducer(state = initialState, action: SectionsActions): SectionsData {
  switch (action.type) {
    case SectionsActionTypes.SectionsAction:
      return state;

    case SectionsActionTypes.SectionsLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
