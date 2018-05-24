import { InvoicesActionTypes, InvoicesActions } from '@reaction/common/actions';

/**
 * Interface for the 'Invoices' data used in
 *  - InvoicesState, and
 *  - invoicesReducer
 */
export interface InvoicesData {}

/**
 * Interface to the part of the Store containing InvoicesState
 * and other information related to InvoicesData.
 */
export interface InvoicesState {
  readonly invoices: InvoicesData;
}

export const initialState: InvoicesData = {};

export function invoicesReducer(state = initialState, action: InvoicesActions): InvoicesData {
  switch (action.type) {
    case InvoicesActionTypes.InvoicesAction:
      return state;

    case InvoicesActionTypes.InvoicesLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
