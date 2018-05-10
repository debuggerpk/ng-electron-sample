import { DiscountsLoaded } from './discounts.actions';
import { discountsReducer, initialState } from './discounts.reducer';

describe('discountsReducer', () => {
  it('should work', () => {
    const action: DiscountsLoaded = new DiscountsLoaded({});
    const actual = discountsReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
