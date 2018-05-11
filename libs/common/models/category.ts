export interface Category {
  id: number;
  name: string;
  outlet: number;
  category: number;
}

export interface CategoryState {
  readonly categories: Array<Category>;
}

export enum CategoryActionTypes {
  LoadAllCategories = '[CATEGORY] Load All',
  LoadAllCategoriesDone = '[CATEGORY] Load All Done',
}
