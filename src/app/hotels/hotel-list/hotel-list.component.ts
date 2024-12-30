import { Component, OnInit } from "@angular/core";
import { Ihotel } from "../shered/models/hotel";
import { HoteListService } from "../shered/services/hotel-list.service";


@Component({
    selector: 'app-hotelList',
    templateUrl:'./hotel-list.component.html',
    styleUrls: ['./hotel-list.Component.css']
})

export class hotelListcomponent implements OnInit {
    public title = 'liste hotel' ;

    public hotels: Ihotel[] = [] ;
    public showBadge: boolean = true;
    public recievedRating: string = '';
    public _hotelFilter='mot';
    public filteredHotels: Ihotel[] = [] ;
    public errMsg: string = '';

    constructor(private HotelListService: HoteListService) {

    }

    ngOnInit(): void {
        this.HotelListService.getHotels().subscribe({
            next: hotels => {
                this.hotels = hotels;
                this.filteredHotels = this.hotels;
            },
            error: err => this.errMsg = err
            
            
            
            
        });
        this.hotelFiler = '';
   //     console.log(this.filteredHotels);
    }
    
public togleIshowBadge(): void {
    this.showBadge = !this.showBadge;
}

/*? public get hotelFiler(): string {

    return this._hotelFilter;
}*/
public set hotelFiler(filter: string){
    
    
    this._hotelFilter = filter ;

    this.filteredHotels = this.hotelFiler ? this.filterHotels(this.hotelFiler) : this.hotels ;
} 

/*public receiveRatingClicked(message: string): void{
     this.recievedRating = message;
}*/

private filterHotels(criteria: string): Ihotel[] {
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
        (hotel : Ihotel) => hotel.nom.toLocaleLowerCase().indexOf(criteria) !== -1
    );
    return res;
}

  public filterChanged(event: any){
   
    this.hotelFiler=event;
    
}

}