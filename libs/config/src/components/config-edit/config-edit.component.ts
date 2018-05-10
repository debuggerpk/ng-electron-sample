import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { RootState } from '@reaction/common/models';
import { configActions } from '@reaction/data';

@Component({
  selector: 'reaction-config-edit',
  templateUrl: './config-edit.component.html',
  styleUrls: ['./config-edit.component.scss'],
})
export class ConfigEditComponent implements OnInit, OnDestroy {
  public configurationForm: FormGroup;

  constructor(private _store: Store<RootState>, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.configurationForm = this._formBuilder.group({
      outlet_id: ['', Validators.required],
      api_key: ['', Validators.required],
      api_gateway: ['', Validators.required],
      local_gateway: [],
    });

    this._store.select('config').subscribe(data => this.configurationForm.patchValue(data));
  }

  public onSubmit() {
    if (this.configurationForm.valid) {
      console.log(this.configurationForm.value);
      const data = { ...this.configurationForm.value };
      this._store.dispatch(new configActions.SaveConfig(data));
      // TODO: this is a hack, ngrx resets the form after we submit. investigate
      this.configurationForm.patchValue(data);
    }
  }

  ngOnDestroy(): void {}
}
