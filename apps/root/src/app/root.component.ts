import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState, RootState } from './+state/states';
import { ConfigService, GetConfig } from '@reaction/config';

@Component({
  selector: 'reaction-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  constructor(private _config: ConfigService, private _store: Store<RootState>) {
    this._store.dispatch(new GetConfig());
  }

  ngOnInit() {}
}
