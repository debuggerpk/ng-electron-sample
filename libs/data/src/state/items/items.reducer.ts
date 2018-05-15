import { Action } from '@ngrx/store';
import { ItemActions } from '@reaction/common/actions';
import { Item, ItemActionTypes } from '@reaction/common/models';

export const initialState: Array<Item> = [];

export function itemsReducer(state = initialState, action: ItemActions): Array<Item> {
  switch (action.type) {
    case ItemActionTypes.LoadAllItems:
      return state;

    case ItemActionTypes.LoadAllItemsDone:
      return action.payload;

    default:
      return state;
  }
}
