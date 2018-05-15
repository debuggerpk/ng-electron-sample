import { Action } from '@ngrx/store';
import { OrdersActions, OrdersActionTypes } from '@reaction/common/actions';

/**
 * Interface for the 'Orders' data used in
 *  - OrdersState, and
 *  - ordersReducer
 */
export interface OrdersData {}

/**
 * Interface to the part of the Store containing OrdersState
 * and other information related to OrdersData.
 */
export interface OrdersState {
  readonly orders: OrdersData;
}

export const initialState: OrdersData = {};

export function ordersReducer(state = initialState, action: OrdersActions): OrdersData {
  switch (action.type) {
    case OrdersActionTypes.OrdersAction:
      return state;

    case OrdersActionTypes.OrdersLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
