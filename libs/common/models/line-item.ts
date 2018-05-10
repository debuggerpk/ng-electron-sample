export interface LineItem {
  uuid: string;
  transaction_uuid: string;
  quantity: number;
  discount_value: number;
  tax_value: number;
  line_item_total: number;
  voids: number;
  void_value: number;
}

export enum LineItemActionTypes {
  AddToOrder = '[LINE ITEM] Add to Order',
  RemoveFromOrder = '[LINE ITEM] Remove from Order',
  CalculateItemsTotal = '[LINE ITEM] Calculate Total',
  CalcualteDiscount = '[LINE ITEM] Calculate Discount',
  CalculateTax = '[LINE ITEM] Calculate Tax',
  CaluclateLineItemSale = '[LINE ITEM] Calculate Sale',
}
