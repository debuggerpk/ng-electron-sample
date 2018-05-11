export interface Category {
  id: number;
  name: string;
  outlet: number;
  category: number;
}

export interface CategoryState {
  readonly categories: Array<Category>;
}
