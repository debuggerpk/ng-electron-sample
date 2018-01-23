import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ConfigService } from './services/config.service';

export const configRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [ConfigService],
})
export class ConfigModule {}
