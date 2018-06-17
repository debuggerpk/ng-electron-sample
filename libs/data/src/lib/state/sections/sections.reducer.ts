import { SectionActions } from '@reaction/common/actions';
import { SectionActionTypes, SectionState } from '@reaction/common/models';

export const initialState: SectionState = [];

export function sectionsReducer(state = initialState, action: SectionActions): SectionState {
  switch (action.type) {
    case SectionActionTypes.LoadAllSections:
      return state;

    case SectionActionTypes.LoadAllSectionsDone:
      return action.payload;

    default:
      return state;
  }
}
