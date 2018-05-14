import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigEditComponent } from './components';

export const ConfigRoutes: Routes = [
  {
    path: '',
    component: ConfigEditComponent,
  },
];

/**
 * The Routing module for ConfigModule
 *
 *
 * @export
 * @class ConfigRoutingModule
 */
@NgModule({
  imports: [CommonModule, RouterModule.forChild(ConfigRoutes)],
  exports: [RouterModule],
})
export class ConfigRoutingModule {}
