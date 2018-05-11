import { Shift } from '@reaction/common/models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

const shiftIdSelector = (shift: Shift) => shift.uuid;
const shiftSorter = (a: Shift, b: Shift) => a.started_at > b.started_at;

export const shiftAdapter: EntityAdapter<Shift> = createEntityAdapter<Shift>({
  selectId: shiftIdSelector,
});
