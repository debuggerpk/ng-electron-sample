import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, Item, ItemActionTypes } from '@reaction/common/models';
import { ElectronService } from 'ngx-electron';
import { Event } from 'electron';
import { LoadAllItemsDone } from '@reaction/data/src/state/items/items.actions';

@Injectable()
export class ItemService {
  constructor(private _store: Store<RootState>, private _electron: ElectronService) {
    if (this._electron.isElectronApp) {
      this._onLoadAllItemsDone();
    }
  }

  public loadAllItems() {
    window.reaction.ipc.send(ItemActionTypes.LoadAllItems);
  }

  private _onLoadAllItemsDone() {
    window.reaction.ipc.on(ItemActionTypes.LoadAllItemsDone, (event: Event, payload: Array<Item>) => {
      this._store.dispatch(new LoadAllItemsDone(payload));
    });
  }
}
