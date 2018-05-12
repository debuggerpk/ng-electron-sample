import { Action } from '@ngrx/store';
import { DiscountActionTypes, Discount } from '@reaction/common/models';

export class LoadAllDiscounts implements Action {
  readonly type = DiscountActionTypes.LoadAllDiscounts;
}

export class LoadAllDiscountsDone implements Action {
  readonly type = DiscountActionTypes.LoadAllDiscountsDone;
  constructor(public payload: Array<Discount>) {}
}

export type DiscountActions = LoadAllDiscounts | LoadAllDiscountsDone;
