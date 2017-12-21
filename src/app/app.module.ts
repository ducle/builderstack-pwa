import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BoostrapModule } from './shared/boostrap.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, BoostrapModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
