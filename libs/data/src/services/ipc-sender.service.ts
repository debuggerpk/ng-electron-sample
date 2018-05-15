import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Action } from '@ngrx/store';

export class ReactionInitAction implements Action {
  type = '[REACTION] Init';
}

@Injectable()
export class IpcSenderService extends BehaviorSubject<Action> implements OnDestroy {
  constructor() {
    super(new ReactionInitAction());
  }

  next(action: Action) {
    if (window.navigator.userAgent.indexOf('Electron') > -1) {
      window.reaction.ipc.send('reaction', action);
    }
    super.next(action);
  }

  complete() {
    // Do nothing, we destroy if the service gets destroyed.
  }

  ngOnDestroy() {
    super.complete();
  }
}
