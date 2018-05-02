import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfigService, GetConfig } from '@reaction/config';
import { Router } from '@angular/router';

@Component({
  selector: 'reaction-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  constructor(private _store: Store<any>) {}

  ngOnInit() {
    this._store.dispatch(new GetConfig());
  }
}
