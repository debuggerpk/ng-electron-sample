import { DiscountActions } from '@reaction/common/actions';
import { Discount, DiscountActionTypes } from '@reaction/common/models';

export const initialState: Array<Discount> = [];

export function discountsReducer(state = initialState, action: DiscountActions): Array<Discount> {
  switch (action.type) {
    case DiscountActionTypes.LoadAllDiscounts:
      return state;

    case DiscountActionTypes.LoadAllDiscountsDone:
      return action.payload;

    default:
      return state;
  }
}
