import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HotelDetailComponent } from './hotels/hotel-detail/hotel-detail.component';
import { HotelEditComponent } from './hotels/hotel-edit/hotel-edit.component';
import { hotelListcomponent } from './hotels/hotel-list/hotel-list.component';
import { HotelDetailGuard } from './hotels/shered/guards/hotel-detail.guard';
import { HotelEditGuard } from './hotels/shered/guards/hotel-edit.guard';

const routes : Routes =  [
    { path: 'home',component: HomeComponent },
    { path: '',redirectTo: 'home', pathMatch: 'full' },     
   
    
  ]

@NgModule({
  imports: [ RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
   