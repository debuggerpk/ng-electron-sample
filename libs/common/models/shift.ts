import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface ShiftProperties {
  password: string;
}

export interface Shift {
  id?: number;
  created_at: Date;
  updated_at: Date;
  started_at: Date;
  ended_at: Date;
  properties: ShiftProperties;
  uuid: string;
  user: number;
  outlet: number;
}

export interface ShiftState extends EntityState<Shift> {
  selectedShiftId: string;
}

const shiftIdSelector = (shift: Shift) => shift.uuid;
const shiftSorter = (a: Shift, b: Shift) => a.started_at > b.started_at;

export const shiftAdapter: EntityAdapter<Shift> = createEntityAdapter<Shift>({ selectId: shiftIdSelector, sortComparer: shiftSorter });

export enum ShiftActionTypes {
  LoadAll = '[SHIFTS] Load All',
  LoadAllDone = '[SHIFTS] Load All Done',
  AddNew = '[SHIFTS] Add New',
  AddNewDone = '[SHIFTS] Add New Done',
  End = '[SHIFT] End',
  Update = '[SHIFTS] Update',
  UpdateDone = '[SHIFTS] Update Done',
}
