import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigEditComponent } from './components/config-edit/config-edit.component';
import { ConfigRootComponent } from './components/config-root/config-root.component';

export const ConfigRoutes: Routes = [
  {
    path: '',
    component: ConfigRootComponent,
  },
  {
    path: 'edit',
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
