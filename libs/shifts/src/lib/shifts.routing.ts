import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiftHomeComponent } from './components';

export const shiftRoutes: Routes = [
  {
    path: '',
    component: ShiftHomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(shiftRoutes)],
  exports: [RouterModule],
})
export class ShiftRoutingModule {}
