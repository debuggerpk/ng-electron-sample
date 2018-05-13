import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, Outlet, OutletActionTypes } from '@reaction/common/models';
import { ElectronService } from 'ngx-electron';
import { LoadOutletDone } from '../state/outlet/outlet.actions';

@Injectable()
export class OutletService {
  constructor(private _store: Store<RootState>, private _electron: ElectronService) {
    this._onLoadOutletDone();
  }

  public loadOutlet() {
    window.reaction.ipc.send(OutletActionTypes.LoadOutlet);
  }

  private _onLoadOutletDone() {
    window.reaction.ipc.on(OutletActionTypes.LoadOutletDone, (event: Event, payload: Outlet) => {
      this._store.dispatch(new LoadOutletDone(payload));
    });
  }
}
