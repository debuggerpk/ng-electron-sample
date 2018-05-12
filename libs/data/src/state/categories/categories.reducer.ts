import { Action } from '@ngrx/store';
import { Category, CategoryActionTypes } from '@reaction/common/models';
import { CategoryActions } from './categories.actions';

export const initialState = [];

export function categoriesReducer(state = initialState, action: CategoryActions): Array<Category> {
  switch (action.type) {
    case CategoryActionTypes.LoadAllCategories:
      return state;

    case CategoryActionTypes.LoadAllCategoriesDone:
      return action.payload;

    default:
      return state;
  }
}
