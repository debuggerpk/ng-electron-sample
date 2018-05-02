import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigRoutes } from '@reaction/config';

export const RootRoutes: Routes = [
  // { path: 'config', loadChildren: '@reaction/config#ConfigModule' },
  { path: '', children: ConfigRoutes },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(RootRoutes, { initialNavigation: 'disabled' })],
  exports: [RouterModule],
})
export class RootRoutingModule {}
