import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ConfigState, Configuration } from '@reaction/shared';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from 'rxjs/Subscription';

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
export class ConfigComponent implements OnInit, OnDestroy {
  public configuration$: Observable<Configuration>;
  public configurationForm: FormGroup;

  public test: string;

  private _subscription$: ISubscription;

  constructor(private _store: Store<ConfigState>, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.configurationForm = this._formBuilder.group({
      outlet_id: ['', Validators.required],
      api_key: ['', Validators.required],
      api_gateway: ['', Validators.required],
      local_gateway: [],
    });

    this._store.select('config').subscribe(data => this.configurationForm.patchValue(data));
  }

  ngOnDestroy(): void {
    // this._subscription$.unsubscribe();
  }
}
