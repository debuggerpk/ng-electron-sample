export interface Product {
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

export interface ProductState extends Array<Product> {}

export enum ProductActionTypes {
  LoadAllProducts = '[PRODUCT] Load All Products',
  LoadAllProductsDone = '[PRODUCT] Load All Products Done',
}
