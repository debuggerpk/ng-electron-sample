import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { RootState } from '@reaction/common/models';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class IpcReceiverService {
  private reciever$: Observable<Action>;

  constructor(private _store: Store<RootState>) {
    this._toObservable();
  }

  private _toObservable() {
    if (window.navigator.userAgent.indexOf('Electron') > -1) {
      this.reciever$ = fromEvent<Action>(
        window.reaction.ipc,
        'reaction',
        (event: Event, action: Action) => action,
      ).pipe(tap(action => this._dispatchToStore(action)));
    } else {
      this.reciever$ = new Observable<Action>();
    }
  }

  private _dispatchToStore(action: Action) {
    this._store.dispatch(action);
  }

  public subscribe(): Subscription {
    return this.reciever$.subscribe();
  }
}
