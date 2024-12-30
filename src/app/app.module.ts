import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localefr from '@angular/common/locales/fr';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HotelModule } from './hotels/hotel.module';
import { hotelListcomponent } from './hotels/hotel-list/hotel-list.component';
import { HotelRoutingModule } from './hotels/hotel-routing.module';
import { HotelEditComponent } from './hotels/hotel-edit/hotel-edit.component';
import { HotelDetailComponent } from './hotels/hotel-detail/hotel-detail.component';
import { StartRatingComponent } from './shared/components/start-rating/start-rating.component';
import { SharedModule } from './shared/shared.module';



registerLocaleData(localefr, 'fr');

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    hotelListcomponent,
    HotelDetailComponent,
    HotelEditComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
    HotelModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
