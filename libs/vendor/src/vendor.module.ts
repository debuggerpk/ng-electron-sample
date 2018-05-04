import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

const NG_MODULES = [FlexLayoutModule, FormsModule, ReactiveFormsModule, HttpClientModule];
const MAT_MODULES = [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule];

@NgModule({
  imports: [CommonModule, NG_MODULES, MAT_MODULES],
  exports: [NG_MODULES, MAT_MODULES],
})
export class VendorModule {}
