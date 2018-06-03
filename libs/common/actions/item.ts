import { ItemActionTypes, Item, FluxStandardAction } from '@reaction/common/models';

export class LoadAllItems implements FluxStandardAction {
  readonly type = ItemActionTypes.LoadAllItems;
}

export class LoadAllItemsDone implements FluxStandardAction {
  readonly type = ItemActionTypes.LoadAllItemsDone;
  constructor(public payload: Array<Item>) {}
}

export type ItemActions = LoadAllItems | LoadAllItemsDone;
