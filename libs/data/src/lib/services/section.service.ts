import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, SectionActionTypes, Section } from '@reaction/common/models';
import { ElectronService } from 'ngx-electron';
import { Event } from 'electron';
import { LoadAllSectionsDone } from '@reaction/common/actions';

@Injectable()
export class SectionService {
  constructor(private _store: Store<RootState>, private _electron: ElectronService) {
    if (this._electron.isElectronApp) {
      this._onIpcLoadAllSections();
    }
  }

  public loadAllSections() {
    window.reaction.ipc.send(SectionActionTypes.LoadAllSections);
  }

  private _onIpcLoadAllSections() {
    window.reaction.ipc.on(SectionActionTypes.LoadAllSectionsDone, (event: Event, payload: Array<Section>) => {
      this._store.dispatch(new LoadAllSectionsDone(payload));
    });
  }
}
