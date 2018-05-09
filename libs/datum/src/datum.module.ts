import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { VendorModule } from '@reaction/vendor';

export const datumRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(datumRoutes), VendorModule],
  exports: [RouterModule, VendorModule],
})
export class DatumModule {}
