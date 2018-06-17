import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { actions } from '@reaction/common';
import { RootState } from '@reaction/common/models';

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

    this._store.select('config').subscribe(data => {
      if (data) {
        this.configurationForm.patchValue(data);
      }
    });
  }

  public onSubmit() {
    console.log('submitting');
    if (this.configurationForm.valid) {
      this._store.dispatch(new actions.SaveConfig(this.configurationForm.value));
    }
  }

  ngOnDestroy(): void {}
}
