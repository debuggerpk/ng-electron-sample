import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { LoadOrders, OrdersActionTypes, OrdersLoaded } from '@reaction/common/actions';
import { OrdersState } from './orders.reducer';

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
