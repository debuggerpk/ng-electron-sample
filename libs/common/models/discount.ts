export interface Discount {
  id: number;
  name: string;
  operator: '+' | '-' | '*' | '/';
  value: number;
  outlet: number;
  discount: number;
}

export interface DiscountState {
  readonly discounts: Array<Discount>;
}

export enum DiscountActionTypes {
  LoadAllDiscounts = '[DISCOUNT] Load All Discounts',
  LoadAllDiscountsDone = '[DISCOUNT] Load All Discounts Done',
}
