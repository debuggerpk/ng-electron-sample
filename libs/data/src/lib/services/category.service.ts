import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, Category, CategoryActionTypes } from '@reaction/common/models';
import { ElectronService } from 'ngx-electron';
import { Event } from 'electron';
import { LoadAllCategoriesDone } from '@reaction/common/actions';

@Injectable()
export class CategoryService {
  constructor(private _store: Store<RootState>, private _electron: ElectronService) {
    if (this._electron.isElectronApp) {
      this._onLoadAllCategoriesDone();
    }
  }

  public loadAllCategories() {
    window.reaction.ipc.send(CategoryActionTypes.LoadAllCategories);
  }

  private _onLoadAllCategoriesDone() {
    window.reaction.ipc.on(CategoryActionTypes.LoadAllCategoriesDone, (event: Event, payload: Array<Category>) => {
      this._store.dispatch(new LoadAllCategoriesDone(payload));
    });
  }
}
