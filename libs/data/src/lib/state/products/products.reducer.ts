import { ItemActions } from '@reaction/common/actions';
import { ProductActionTypes, ProductState } from '@reaction/common/models';

export const initialState: ProductState = [];

export function productsReducer(state = initialState, action: ItemActions): ProductState {
  switch (action.type) {
    case ProductActionTypes.LoadAllProducts:
      return state;

    case ProductActionTypes.LoadAllProductsDone:
      return action.payload;

    default:
      return state;
  }
}
