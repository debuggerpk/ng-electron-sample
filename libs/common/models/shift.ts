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
  GetAllShifts = '[Shifts] Get All',
  CreateNewShift = '[Shifts] Create New',
  EndShift = '[Shifts] End Shift',
  SaveShift = '[Shifts] Save Shift',
  SaveShiftDone = '[Shifts] Shift Saved',
  SyncShifts = '[Shifts] Sync',
  DataUpdated = '[Shifts] Data Updated',
}
