import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

const NG_MODULES = [BrowserAnimationsModule, HttpClientModule];

@NgModule({
  imports: [CommonModule, ...NG_MODULES],
  exports: [...NG_MODULES],
})
export class VendorModule {}
