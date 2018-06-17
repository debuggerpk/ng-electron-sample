import { DiscountActions } from '@reaction/common/actions';
import { Discount, DiscountActionTypes, DiscountState } from '@reaction/common/models';

export const initialState: DiscountState = [];

export function discountsReducer(state = initialState, action: DiscountActions): DiscountState {
  switch (action.type) {
    case DiscountActionTypes.LoadAllDiscounts:
      return state;

    case DiscountActionTypes.LoadAllDiscountsDone:
      return action.payload;

    default:
      return state;
  }
}
