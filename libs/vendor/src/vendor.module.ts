import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Browser } from 'protractor';

const NG_MODULES = [ReactiveFormsModule, HttpClientModule];
const MAT_MODULES = [MatButtonModule, MatFormFieldModule, MatInputModule];

@NgModule({
  imports: [CommonModule, NG_MODULES, MAT_MODULES],
  exports: [NG_MODULES, MAT_MODULES],
})
export class VendorModule {}
