import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, ShiftActionTypes, Shift } from '@reaction/common/models';
import { MutateDataType } from '@reaction/common/utils/mutate-type';
import { LoadAllShiftsDone } from '@reaction/common/actions';
import { Event } from 'electron';
import { ElectronService } from 'ngx-electron';

/**
 * All we need to with shifts
 *
 * @export
 * @class ShiftService
 */
@Injectable()
export class ShiftService {
  constructor(private _electron: ElectronService) {}
}
