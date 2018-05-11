import { EntityState } from '@ngrx/entity';

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

export enum ShiftActionTypes {
  LoadAllShifts = '[SHIFTS] Load All Shifts',
  LoadAllShiftsDone = '[SHIFTS] Load All Shifts Done',
  AddNewShift = '[SHIFTS] Add New Shift',
  AddNewShiftDone = '[SHIFTS] Add New Shift Done',
  EndShift = '[SHIFT] End Shift',
  UpdateSelectedShift = '[SHIFTS] Update Selected Shifts',
  UpdateSelectedShiftDone = '[SHIFTS] Update Selected Shift Done',
}
