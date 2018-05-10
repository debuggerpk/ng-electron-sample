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

export enum ShiftActionTypes {
  GetAllShifts = '[SHIFTS] Get All',
  CreateNewShift = '[SHIFTS] Create New',
  EndShift = '[SHIFTS] End Shift',
  SaveShift = '[SHIFTS] Save Shift',
  SaveShiftDone = '[SHIFTS] Shift Saved',
}
