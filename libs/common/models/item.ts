export interface Item {
  id: number;
  name: string;
  category: string;
  family: string;
  outlet_category: number;
  price: number;
  is_active: true;
  outlet: number;
  item: number;
}

export interface ItemState {
  readonly items: Array<Item>;
}

export enum ItemActionTypes {
  LoadAllItems = '[ITEM] Load All Items',
  LoadAllItemsDone = '[ITEM] Load All Items Done',
}
