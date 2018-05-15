import { CategoryActionTypes, Category, ReAction } from '../models';

export class LoadAllCategories implements ReAction {
  readonly type = CategoryActionTypes.LoadAllCategories;
}

export class LoadAllCategoriesDone implements ReAction {
  readonly type = CategoryActionTypes.LoadAllCategoriesDone;
  constructor(public payload: Array<Category>) {}
}

export type CategoryActions = LoadAllCategories | LoadAllCategoriesDone;
