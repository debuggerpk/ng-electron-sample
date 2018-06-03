import { FluxStandardAction, SectionActionTypes, Section } from '@reaction/common/models';

export class LoadAllSections implements FluxStandardAction {
  readonly type = SectionActionTypes.LoadAllSections;
}

export class LoadAllSectionsDone implements FluxStandardAction {
  readonly type = SectionActionTypes.LoadAllSectionsDone;

  constructor(public payload: Array<Section>) {}
}

export type SectionActions = LoadAllSections | LoadAllSectionsDone;
