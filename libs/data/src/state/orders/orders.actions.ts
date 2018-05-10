import { Action } from '@ngrx/store';

export enum OrdersActionTypes {
  OrdersAction = '[Orders] Action',
  LoadOrders = '[Orders] Load Data',
  OrdersLoaded = '[Orders] Data Loaded',
}

export class Orders implements Action {
  readonly type = OrdersActionTypes.OrdersAction;
}
export class LoadOrders implements Action {
  readonly type = OrdersActionTypes.LoadOrders;
  constructor(public payload: any) {}
}

export class OrdersLoaded implements Action {
  readonly type = OrdersActionTypes.OrdersLoaded;
  constructor(public payload: any) {}
}

export type OrdersActions = Orders | LoadOrders | OrdersLoaded;
