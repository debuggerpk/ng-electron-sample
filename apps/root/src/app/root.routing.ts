import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const RootRoutes: Routes = [
  { path: 'config', loadChildren: '@reaction/config#ConfigModule' },
  { path: 'shifts', loadChildren: '@reaction/shifts#ShiftsModule' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(RootRoutes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
