import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Configuration } from '../models/config';
import { Store } from '@ngrx/store';
import { ConfigState } from '@reaction/config/src/+state/config.reducer';
import { GetConfig } from '@reaction/config/src/+state/config.actions';

@Injectable()
export class ConfigService {
  private _config: Configuration;
  private _reaction = window.reaction;

  constructor(private _store: Store<ConfigState>) {}

  public getConfig(): void {
    this._store.dispatch(new GetConfig());
  }

  private _onGetConfig(): void {
    this._reaction.ipc.on('get-config-reply', (event, payload) => {
      console.log(payload);
      this._config = payload;
    });
  }

  private _onSaveConfig(): void {
    this._reaction.ipc.on('save-config-reply', (event, response) => {
      console.log(response);
    });
  }
}
