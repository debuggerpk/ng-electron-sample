import { mainReducer } from './main.reducer';
import { mainInitialState } from './main.init';
import { Main } from './main.interfaces';
import { DataLoaded } from './main.actions';

describe('mainReducer', () => {
  it('should work', () => {
    const state: Main = {};
    const action: DataLoaded = {type: 'DATA_LOADED', payload: {}};
    const actual = mainReducer(state, action);
    expect(actual).toEqual({});
  });
});
