import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, ShiftActionTypes, Shift } from '@reaction/common/models';
import { LoadAllShiftsDone } from '../state/shifts/shifts.actions';
import { Event } from 'electron';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class ShiftService {
  constructor(private _electron: ElectronService, private _store: Store<RootState>) {
    if (this._electron.isElectronApp) {
      this._onLoadAllShifts();
    }
  }

  /**
   * Load all Shifts from Electron
   *
   *
   * @memberOf ShiftService
   */
  public loadAllShifts(): void {
    window.reaction.ipc.send(ShiftActionTypes.LoadAllShifts);
  }

  private _onLoadAllShifts(): void {
    window.reaction.ipc.on(ShiftActionTypes.LoadAllShiftsDone, (event: Event, payload: Array<Shift>) => {
      this._store.dispatch(new LoadAllShiftsDone(payload));
    });
  }
}
