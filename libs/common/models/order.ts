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
  NewOrder = '[ORDER] New Order',
  UpdateOrder = '[ORDER] Update Order',
  CalculateLineItemTotal = '[ORDER] Calculate Total',
  CalculateDiscount = '[ORDER] Calculate Discount',
  CalculateTax = '[ORDER] Calculate Tax',
  CalcualteSale = '[ORDER] Sale',
  HoldOrder = '[ORDER] Hold Order',
  ActivateOrder = '[ORDER] Activate',
  PayViaCash = '[ORDER] Pay Via Cash',
  PayCreditCard = '[ORDER] Pay via Card',
  PayCardPlusCash = '[ORDER] Pay Cash+Cash',
  Print = '[ORDER] Print Invoice',
  PrintDuplicate = '[ORDER] PrintDuplicate',
  FinalizeOrder = '[ORDER] Finalize',
}
