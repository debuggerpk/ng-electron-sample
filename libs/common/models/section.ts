export interface Section {
  id: number;
  name: string;
  tables: number;
  short_name: string;
  outlet: number;
}

export interface SectionState extends Array<Section> {}

export enum SectionActionTypes {
  LoadAllSections = '[SECTION] Load All Sections',
  LoadAllSectionsDone = '[SECTION] Load All Sections Done',
}
