export interface OrderSection {
  section: string;
  table: number;
}

export interface OrderProperties {
  invoice: number;
  bank: string;
  people: number;
  card_recp: string | null;
  section: OrderSection;
  tip: number;
  table?: string;
}

export interface Order {
  id?: number;
  uuid: string;
  shift_id?: number;
  shift_uuid: string;
  outlet_id: number;
  properties: OrderProperties;
  discount_id: number;
  discount_value: number;
  user_id: number;
  transaction_type: 'card' | 'cash' | 'card/cash';
  items_total: number;
  tax: number;
  cash: number;
  balance: number;
  grand_total: number;
  void_total: number;
  rims_id: string;
}

export enum OrderActionTypes {
  NewOrder = '[Order] New Order',
  UpdateOrder = '[Order] Update Order',
  CalculateLineItemTotal = '[Order] Calculate Total',
  CalculateDiscount = '[Order] Calculate Discount',
  CalculateTax = '[Order] Calculate Tax',
  CalcualteSale = '[Order] Sale',
  HoldOrder = '[Order] Hold Order',
  ActivateOrder = '[Order] Activate',
  PayViaCash = '[Order] Pay Via Cash',
  PayCreditCard = '[Order] Pay via Card',
  PayCardPlusCash = '[Order] Pay Cash+Cash',
  Print = '[Order] Print Invoice',
  PrintDuplicate = '[Order] PrintDuplicate',
  FinalizeOrder = '[Order] Finalize',
}
