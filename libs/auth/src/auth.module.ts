import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule]
})
export class AuthModule {
  constructor() {
    console.log('Auth Module is working');
  }
}
