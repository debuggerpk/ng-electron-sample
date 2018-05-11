import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigEditComponent, ConfigRootComponent } from './components';

export const ConfigRoutes: Routes = [
  {
    path: '',
    component: ConfigEditComponent,
  },
];

/**
 * The Routing module for child.
 *
 * TODO:
 * For some reasom, Electron is not loading form animations for child module.
 * till then, it needs to be done differently
 *
 * @export
 * @class ConfigRoutingModule
 */
@NgModule({
  imports: [CommonModule, RouterModule.forChild(ConfigRoutes)],
  exports: [RouterModule],
})
export class ConfigRoutingModule {}
