import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { ConfigState } from '@reaction/common/models';
import { configActions } from '@reaction/data';

@Component({
  selector: 'reaction-config-edit',
  templateUrl: './config-edit.component.html',
  styleUrls: ['./config-edit.component.scss'],
})
export class ConfigEditComponent implements OnInit, OnDestroy {
  public configurationForm: FormGroup;

  constructor(private _store: Store<ConfigState>, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.configurationForm = this._formBuilder.group({
      outlet_id: ['', Validators.required],
      api_key: ['', Validators.required],
      api_gateway: ['', Validators.required],
      local_gateway: [],
    });

    this._store.select('config').subscribe(data => {
      if (data) {
        this.configurationForm.patchValue(data);
      }
    });
  }

  public onSubmit() {
    if (this.configurationForm.valid) {
      this._store.dispatch(new configActions.SaveConfig(this.configurationForm.value));
    }
  }

  ngOnDestroy(): void {}
}
