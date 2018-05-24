import { CategoryActions } from '@reaction/common/actions';
import { Category, CategoryActionTypes } from '@reaction/common/models';

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
