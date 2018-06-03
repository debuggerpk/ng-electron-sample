import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadAllSections } from '@reaction/common/actions';
import { SectionActionTypes } from '@reaction/common/models';
import { tap } from 'rxjs/operators';
import { SectionService, IpcService } from '../../services';

@Injectable()
export class SectionsEffects {
  @Effect({ dispatch: false })
  loadAllSections$ = this._actions.pipe(
    ofType<LoadAllSections>(SectionActionTypes.LoadAllSections),
    tap(action => this._ipc.send(action)),
  );

  constructor(private _actions: Actions, private _ipc: IpcService) {}
}
