import { CategoryActions } from '@reaction/common/actions';
import { CategoryActionTypes, CategoryState } from '@reaction/common/models';

export const initialState: CategoryState = [];

export function categoriesReducer(state = initialState, action: CategoryActions): CategoryState {
  switch (action.type) {
    case CategoryActionTypes.LoadAllCategories:
      return state;

    case CategoryActionTypes.LoadAllCategoriesDone:
      return action.payload;

    default:
      return state;
  }
}
