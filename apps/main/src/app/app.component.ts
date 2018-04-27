import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from './+state/main.interfaces';
import { LoadData } from './+state/main.actions';

@Component({
  selector: 'reaction-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _store: Store<MainState>) {}

  ngOnInit() {
    this._store.dispatch(new LoadData({}));
  }
}
