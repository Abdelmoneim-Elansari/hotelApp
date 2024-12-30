import { Component, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
selector: 'app-star-rating',
templateUrl: './start-rating.component.html',
styleUrls: ['./start-rating.component.css']
})

export class StartRatingComponent implements OnChanges {

    public starwidh: number = 1;

    @Input() public rating: number = 3;

    @Output() public starRatingClicked = new EventEmitter< string >(); 

  ngOnChanges(): void {
      this.starwidh = this.rating * 125 / 5;
  }

  public sendRating(): void {
     this.starRatingClicked.emit('La note est de ${this.rating}')
  } 
 
}