import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@reaction/auth';

@NgModule({
  imports: [
    // @npm vendor modules
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    // @reaction modules
    AuthModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class RootModule {}
