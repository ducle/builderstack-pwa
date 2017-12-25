import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BoostrapModule } from './shared/boostrap.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HomePhotoComponent } from './home-photo/home-photo.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { HomeMapComponent } from './home-map/home-map.component';
import { HomeContactComponent } from './home-contact/home-contact.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HomePhotoComponent, HomeCardComponent, HomeFeaturesComponent, HomeMapComponent, HomeContactComponent],
  imports: [BrowserModule, AppRoutingModule, BoostrapModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
