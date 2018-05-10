import { CategoriesLoaded } from './categories.actions';
import { categoriesReducer, initialState } from './categories.reducer';

describe('categoriesReducer', () => {
  it('should work', () => {
    const action: CategoriesLoaded = new CategoriesLoaded({});
    const actual = categoriesReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
