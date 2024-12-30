import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { hotelListcomponent } from './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelDetailGuard } from './shered/guards/hotel-detail.guard';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { HotelEditGuard } from './shered/guards/hotel-edit.guard';



@NgModule({
  
  imports: [
    RouterModule.forChild([
      { path: 'hotels',component: hotelListcomponent },
      { path: 'hotels/:id',component: HotelDetailComponent ,  canActivate: [HotelDetailGuard]},
      { 
      path: 'hotels/:id/edit',
      component: HotelEditComponent,
      canDeactivate: [HotelEditGuard] 
    }
      ])
  ],
  exports: [ RouterModule ]
})
export class HotelRoutingModule { }
