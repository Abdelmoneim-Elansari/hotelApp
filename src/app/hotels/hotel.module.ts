import { NgModule } from '@angular/core';

import { InMemoryDbService, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { hotelListcomponent } from './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelDetailGuard } from './shered/guards/hotel-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { StartRatingComponent } from '../shared/components/start-rating/start-rating.component';
import { ReplaceComma } from '../shared/pipe/replace-comma.pipe';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { HotelData } from './shered/api/hotel.data';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
   
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    HotelRoutingModule,
    InMemoryWebApiModule.forFeature(HotelData),
    ReactiveFormsModule,
    FormsModule,
    RouterModule


  ],
  
  exports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]

  
})
export class HotelModule {}
