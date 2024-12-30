import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ihotel } from '../shered/models/hotel';
import { HoteListService } from '../shered/services/hotel-list.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  public hotel: Ihotel = <Ihotel>{};

  constructor(
    private route: ActivatedRoute,
    private hotelService: HoteListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id')) ;
    
    this.hotelService.getHotels().subscribe((hotels: Ihotel[]) => {
   this.hotel = hotels.find(hotel => hotel.id === id) as Ihotel;
  });

    console.log('hotel: ',this.hotel);
  }
  public backToList(): void {
    this.router.navigate(['/hotels']);
  }

}
