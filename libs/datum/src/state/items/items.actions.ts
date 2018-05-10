import { Action } from '@ngrx/store';

export enum ItemsActionTypes {
  ItemsAction = '[Items] Action',
  LoadItems = '[Items] Load Data',
  ItemsLoaded = '[Items] Data Loaded',
}

export class Items implements Action {
  readonly type = ItemsActionTypes.ItemsAction;
}
export class LoadItems implements Action {
  readonly type = ItemsActionTypes.LoadItems;
  constructor(public payload: any) {}
}

export class ItemsLoaded implements Action {
  readonly type = ItemsActionTypes.ItemsLoaded;
  constructor(public payload: any) {}
}

export type ItemsActions = Items | LoadItems | ItemsLoaded;
