export interface Discount {
  id: number;
  name: string;
  operator: '+' | '-' | '*' | '/';
  value: number;
  outlet: number;
  discount: number;
}
