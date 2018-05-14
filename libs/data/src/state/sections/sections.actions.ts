import { Action } from '@ngrx/store';
import { SectionActionTypes, Section } from '@reaction/common/models';

export class LoadAllSections implements Action {
  readonly type = SectionActionTypes.LoadAllSections;
}

export class LoadAllSectionsDone implements Action {
  readonly type = SectionActionTypes.LoadAllSectionsDone;

  constructor(public payload: Array<Section>) {}
}

export type SectionActions = LoadAllSections | LoadAllSectionsDone;
