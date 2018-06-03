import { DiscountActionTypes, Discount, FluxStandardAction } from '@reaction/common/models';

export class LoadAllDiscounts implements FluxStandardAction {
  readonly type = DiscountActionTypes.LoadAllDiscounts;
}

export class LoadAllDiscountsDone implements FluxStandardAction {
  readonly type = DiscountActionTypes.LoadAllDiscountsDone;
  constructor(public payload: Array<Discount>) {}
}

export type DiscountActions = LoadAllDiscounts | LoadAllDiscountsDone;
