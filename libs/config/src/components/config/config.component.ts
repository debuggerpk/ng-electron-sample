import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ConfigState, Configuration } from '@reaction/config';
import { Observable } from 'rxjs/Observable';
import { Subscription, ISubscription } from 'rxjs/Subscription';

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
    this._store.select('config').subscribe(data => console.log(data));

    this.configurationForm = this._formBuilder.group({
      outlet_id: [],
      api_key: [],
      api_gateway: [],
      local_gateway: [],
    });

    // this._subscription$ = this.configuration$.subscribe(data => {
    //   console.log(data);
    // });
  }

  ngOnDestroy(): void {
    // this._subscription$.unsubscribe();
  }
}
