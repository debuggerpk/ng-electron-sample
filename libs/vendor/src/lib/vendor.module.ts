import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

const NG_MODULES = [FlexLayoutModule, ReactiveFormsModule, HttpClientModule];
const MAT_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
];
const THIRD_PARTY = [];

@NgModule({
  imports: [CommonModule, NG_MODULES, MAT_MODULES, THIRD_PARTY],
  exports: [NG_MODULES, MAT_MODULES, THIRD_PARTY],
})
export class VendorModule {}
