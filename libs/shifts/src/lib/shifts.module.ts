import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { ShiftRoutingModule } from './shifts.routing';
import { ShiftHomeComponent } from './components';
import { DataModule } from '@reaction/data/src';

export const shiftsRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, ShiftRoutingModule, DataModule],
  declarations: [ShiftHomeComponent],
})
export class ShiftsModule {}
