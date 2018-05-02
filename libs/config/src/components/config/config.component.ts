import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ConfigState, Configuration } from '@reaction/config';
import { Observable } from 'rxjs/Observable';

const x: Configuration = {
  outlet_id: '',
  api_key: '',
  api_gateway: '',
  local_gateway: '',
};

@Component({
  selector: 'reaction-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {
  public configuration$: Observable<Configuration>;
  public configurationForm: FormGroup;

  constructor(private _store: Store<ConfigState>, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.configuration$ = this._store.select('config');

    this.configurationForm = this._formBuilder.group({
      outlet_id: [],
      api_key: [],
      api_gateway: [],
      local_gateway: [],
    });
  }
}
