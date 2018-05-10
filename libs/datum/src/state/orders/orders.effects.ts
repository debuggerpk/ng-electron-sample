import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { OrdersActions, OrdersActionTypes, LoadOrders, OrdersLoaded } from './orders.actions';
import { OrdersState } from './orders.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class OrdersEffects {
  @Effect() effect$ = this.actions$.ofType(OrdersActionTypes.OrdersAction);

  @Effect()
  loadOrders$ = this.dataPersistence.fetch(OrdersActionTypes.LoadOrders, {
    run: (action: LoadOrders, state: OrdersState) => {
      return new OrdersLoaded(state);
    },

    onError: (action: LoadOrders, error) => {
      console.error('Error', error);
    },
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<OrdersState>) {}
}
