import { shiftAdapter } from '@reaction/common/adapters';
import { ShiftState } from '@reaction/common/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const { selectIds, selectEntities, selectAll, selectTotal } = shiftAdapter.getSelectors();

export const selectShiftState = createFeatureSelector<ShiftState>('shifts');

export const selectShiftIds = createSelector(selectShiftState, selectIds);
export const selectShiftEntities = createSelector(selectShiftState, selectEntities);
export const selectAllShifts = createSelector(selectShiftState, selectAll);
export const selectShiftsTotal = createSelector(selectShiftState, selectTotal);
