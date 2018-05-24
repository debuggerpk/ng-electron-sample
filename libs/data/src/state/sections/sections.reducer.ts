import { SectionActions } from '@reaction/common/actions';
import { Section, SectionActionTypes } from '@reaction/common/models';

export const initialState: Array<Section> = [];

export function sectionsReducer(state = initialState, action: SectionActions): Array<Section> {
  switch (action.type) {
    case SectionActionTypes.LoadAllSections:
      return state;

    case SectionActionTypes.LoadAllSectionsDone:
      return action.payload;

    default:
      return state;
  }
}
