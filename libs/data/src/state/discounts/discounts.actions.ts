import { Action } from '@ngrx/store';

export enum DiscountsActionTypes {
  DiscountsAction = '[Discounts] Action',
  LoadDiscounts = '[Discounts] Load Data',
  DiscountsLoaded = '[Discounts] Data Loaded',
}

export class Discounts implements Action {
  readonly type = DiscountsActionTypes.DiscountsAction;
}
export class LoadDiscounts implements Action {
  readonly type = DiscountsActionTypes.LoadDiscounts;
  constructor(public payload: any) {}
}

export class DiscountsLoaded implements Action {
  readonly type = DiscountsActionTypes.DiscountsLoaded;
  constructor(public payload: any) {}
}

export type DiscountsActions = Discounts | LoadDiscounts | DiscountsLoaded;
