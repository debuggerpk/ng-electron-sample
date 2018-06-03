import { CategoryActionTypes, Category, FluxStandardAction } from '../models';

export class LoadAllCategories implements FluxStandardAction {
  readonly type = CategoryActionTypes.LoadAllCategories;
}

export class LoadAllCategoriesDone implements FluxStandardAction {
  readonly type = CategoryActionTypes.LoadAllCategoriesDone;
  constructor(public payload: Array<Category>) {}
}

export type CategoryActions = LoadAllCategories | LoadAllCategoriesDone;
