import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetConfig } from '@reaction/config';

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
