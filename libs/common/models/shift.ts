import { EntityState } from '@ngrx/entity';

export interface BaseSaleSummary {
  order_count: number;
  sale: number;
}

export interface PaymentModeSummary {
  card: BaseSaleSummary;
  cash: BaseSaleSummary;
  cod: BaseSaleSummary;
}

export interface ItemizedSummary {
  quantity: number;
  sale: number;
  discount: number;
  returns: {
    quantity: number;
    value: number;
  };
}

export interface ShiftPropertySummary extends BaseSaleSummary {
  payment_modes: PaymentModeSummary;
  category: {
    [name: string]: ItemizedSummary;
  };
  family: {
    [name: string]: ItemizedSummary;
  };
  products: {
    [name: string]: ItemizedSummary;
  };
}

export interface ShiftProperties {
  password: string;
  summary: ShiftPropertySummary;
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
