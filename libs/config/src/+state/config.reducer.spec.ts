import { ConfigLoaded } from './config.actions';
import { configReducer, initialState } from './config.reducer';

describe('configReducer', () => {
  it('should work', () => {
    const action: ConfigLoaded = new ConfigLoaded({});
    const actual = configReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
