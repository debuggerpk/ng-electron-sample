import { SectionsLoaded } from './sections.actions';
import { sectionsReducer, initialState } from './sections.reducer';

describe('sectionsReducer', () => {
  it('should work', () => {
    const action: SectionsLoaded = new SectionsLoaded({});
    const actual = sectionsReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
