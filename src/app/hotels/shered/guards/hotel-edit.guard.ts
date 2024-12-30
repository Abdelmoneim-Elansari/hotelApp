
import { Injectable } from '@angular/core';
import {  CanDeactivate } from '@angular/router';

import { HotelEditComponent } from '../../hotel-edit/hotel-edit.component';

@Injectable({
  providedIn: 'root'
})
export class HotelEditGuard implements CanDeactivate<HotelEditComponent> {
   canDeactivate(
    component: HotelEditComponent): boolean  {
      if (component.hotelForm.dirty || component.hotelForm.get('nom')?.value === '') {
        const hotelName = component.hotelForm.get('nom')?.value || 'Nouveau hotel';
        return confirm('voulez-vous annuler les changements effectués sur '+ hotelName )
      }
    return true;
  } 
  
}
