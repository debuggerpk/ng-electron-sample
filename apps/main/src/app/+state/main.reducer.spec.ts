import { MainLoaded } from './main.actions';
import { mainReducer, initialState } from './main.reducer';

describe('mainReducer', () => {
  it('should work', () => {
    const action: MainLoaded = new MainLoaded({});
    const actual = mainReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
