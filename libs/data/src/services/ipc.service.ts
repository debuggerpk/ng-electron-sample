import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { IpcReceiverService } from './ipc-receiver.service';
import { IpcSenderService } from './ipc-sender.service';
import { Action } from '@ngrx/store';

@Injectable()
export class IpcService implements OnDestroy {
  private subscription$: Subscription;

  constructor(private _receiver: IpcReceiverService, private _sender: IpcSenderService) {
    this.subscription$ = this._receiver.subscribe();
  }

  next(action: Action) {
    this._sender.next(action);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
