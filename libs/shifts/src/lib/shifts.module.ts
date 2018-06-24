import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataModule } from '@reaction/data';
import { ShiftHomeComponent, ShiftListComponent, ShiftListItemComponent } from './components';
import { ShiftRoutingModule } from './shifts.routing';

@NgModule({
  imports: [CommonModule, RouterModule, ShiftRoutingModule, DataModule],
  declarations: [ShiftHomeComponent, ShiftListComponent, ShiftListItemComponent],
})
export class ShiftsModule {}
