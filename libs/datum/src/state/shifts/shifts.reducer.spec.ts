import { ShiftsLoaded } from './shifts.actions';
import { shiftsReducer, initialState } from './shifts.reducer';

describe('shiftsReducer', () => {
  it('should work', () => {
    const action: ShiftsLoaded = new ShiftsLoaded({});
    const actual = shiftsReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
