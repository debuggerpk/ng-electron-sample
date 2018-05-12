import { Action } from '@ngrx/store';
import { ItemActionTypes, Item } from '@reaction/common/models';

export class LoadAllItems implements Action {
  readonly type = ItemActionTypes.LoadAllItems;
}

export class LoadAllItemsDone implements Action {
  readonly type = ItemActionTypes.LoadAllItemsDone;
  constructor(public payload: Array<Item>) {}
}

export type ItemActions = LoadAllItems | LoadAllItemsDone;
