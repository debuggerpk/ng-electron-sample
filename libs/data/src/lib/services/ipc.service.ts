import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IpcReceiverService } from './ipc-io/ipc-receiver.service';
import { IpcSenderService } from './ipc-io/ipc-sender.service';
import { Action } from '@ngrx/store';

@Injectable()
export class IpcService implements OnDestroy {
  private subscription$: Subscription;

  constructor(private _receiver: IpcReceiverService, private _sender: IpcSenderService) {
    this.subscription$ = this._receiver.subscribe();
  }

  send(action: Action) {
    this._sender.next(action);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
