import { Action } from '@ngrx/store';
import { CategoryActionTypes, Category } from '@reaction/common/models';

export class LoadAllCategories implements Action {
  readonly type = CategoryActionTypes.LoadAllCategories;
}

export class LoadAllCategoriesDone implements Action {
  readonly type = CategoryActionTypes.LoadAllCategoriesDone;
  constructor(public payload: Array<Category>) {}
}

export type CategoryActions = LoadAllCategories | LoadAllCategoriesDone;
