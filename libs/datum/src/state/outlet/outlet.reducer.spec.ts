import { OutletLoaded } from './outlet.actions';
import { outletReducer, initialState } from './outlet.reducer';

describe('outletReducer', () => {
  it('should work', () => {
    const action: OutletLoaded = new OutletLoaded({});
    const actual = outletReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
