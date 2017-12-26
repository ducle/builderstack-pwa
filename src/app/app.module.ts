import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { BoostrapModule } from './shared/boostrap.module';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from './services/card.service';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HomePhotoComponent } from './home-photo/home-photo.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { HomeMapComponent } from './home-map/home-map.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePhotoComponent,
    HomeCardComponent,
    HomeFeaturesComponent,
    HomeMapComponent,
    HomeContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BoostrapModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDc_PsV4e99mtgskG8Da3dSW3P_faz7pu8'
    }),
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
