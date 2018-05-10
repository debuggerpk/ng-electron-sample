import { Action } from '@ngrx/store';

export enum SectionsActionTypes {
  SectionsAction = '[Sections] Action',
  LoadSections = '[Sections] Load Data',
  SectionsLoaded = '[Sections] Data Loaded',
}

export class Sections implements Action {
  readonly type = SectionsActionTypes.SectionsAction;
}
export class LoadSections implements Action {
  readonly type = SectionsActionTypes.LoadSections;
  constructor(public payload: any) {}
}

export class SectionsLoaded implements Action {
  readonly type = SectionsActionTypes.SectionsLoaded;
  constructor(public payload: any) {}
}

export type SectionsActions = Sections | LoadSections | SectionsLoaded;
