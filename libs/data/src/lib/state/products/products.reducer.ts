import { ItemActions } from '@reaction/common/actions';
import { Product, ProductActionTypes } from '@reaction/common/models';

export const initialState: Array<Product> = [];

export function productsReducer(state = initialState, action: ItemActions): Array<Product> {
  switch (action.type) {
    case ProductActionTypes.LoadAllProducts:
      return state;

    case ProductActionTypes.LoadAllProductsDone:
      return action.payload;

    default:
      return state;
  }
}
