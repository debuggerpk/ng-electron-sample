import { DiscountActionTypes, Discount, ReAction } from '@reaction/common/models';

export class LoadAllDiscounts implements ReAction {
  readonly type = DiscountActionTypes.LoadAllDiscounts;
}

export class LoadAllDiscountsDone implements ReAction {
  readonly type = DiscountActionTypes.LoadAllDiscountsDone;
  constructor(public payload: Array<Discount>) {}
}

export type DiscountActions = LoadAllDiscounts | LoadAllDiscountsDone;
