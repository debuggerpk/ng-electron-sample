import { ReAction, SectionActionTypes, Section } from '@reaction/common/models';

export class LoadAllSections implements ReAction {
  readonly type = SectionActionTypes.LoadAllSections;
}

export class LoadAllSectionsDone implements ReAction {
  readonly type = SectionActionTypes.LoadAllSectionsDone;

  constructor(public payload: Array<Section>) {}
}

export type SectionActions = LoadAllSections | LoadAllSectionsDone;
