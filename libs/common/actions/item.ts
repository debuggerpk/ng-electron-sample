import { ItemActionTypes, Item, ReAction } from '@reaction/common/models';

export class LoadAllItems implements ReAction {
  readonly type = ItemActionTypes.LoadAllItems;
}

export class LoadAllItemsDone implements ReAction {
  readonly type = ItemActionTypes.LoadAllItemsDone;
  constructor(public payload: Array<Item>) {}
}

export type ItemActions = LoadAllItems | LoadAllItemsDone;
