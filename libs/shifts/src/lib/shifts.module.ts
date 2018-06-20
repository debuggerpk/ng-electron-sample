import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DataModule } from '@reaction/data';
import { ShiftHomeComponent, ShiftListComponent } from './components';
import { ShiftRoutingModule } from './shifts.routing';

export const shiftsRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, ShiftRoutingModule, DataModule],
  declarations: [ShiftHomeComponent, ShiftListComponent],
})
export class ShiftsModule {}
