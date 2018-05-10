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
  AddToOrder = '[Line Item] Add to Order',
  RemoveFromOrder = '[Line Item] Remove from Order',
  CalculateItemsTotal = '[Line Item] Calculate Total',
  CalcualteDiscount = '[Line Item] Calculate Discount',
  CalculateTax = '[Line Item] Calculate Tax',
  CaluclateLineItemSale = '[Line Item] Calculate Sale',
}
