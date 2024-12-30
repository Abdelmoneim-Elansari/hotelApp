import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  Observable, throwError,of, pipe } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Hotel, Ihotel } from "../models/hotel";


@Injectable({
    providedIn:'root'
})

export class HoteListService {

    public readonly HOTEL_API_URL = 'api/hotels';

  constructor(private http: HttpClient) {

  }

    public getHotels(): Observable<Ihotel[]>{
        
        return  this.http.get<Ihotel[]>(this.HOTEL_API_URL).pipe(
            tap(hotels => console.log('hotels: ' , hotels)),
            catchError(this.handleError)
        );
    }


    public geth(){
        console.log(this.getHotels)
    }

    /* public getHotelById(id: number): Observable<Ihotel> sa marche pas {*/
    public getHotelById(id: number): Observable<Ihotel> {
       const url = ` ${this.HOTEL_API_URL}/${id} `;
        if (id === 0) {
            return of(this.getDefaultHotel())
        }
       /*  return this.getHotels().pipe(
            map(hotels => hotels.find(hotel => hotel.id === id) as Ihotel)
        );*/
        return this.http.get<Ihotel>(url).pipe(
            catchError(this.handleError)
        );

    }
    
    public createHotel(hotel: Ihotel): Observable<Ihotel>{
        hotel = {
            ...hotel,
            Image: 'assets/image/kodsse.jpg/',
            id: 100
        };
        return this.http.post<Ihotel>(this.HOTEL_API_URL,hotel).pipe(
            catchError(this.handleError)
        )
    }

    public UpdateHotel(hotel: Ihotel): Observable<Ihotel> {
        const Url =`${this.HOTEL_API_URL}/${hotel.id} `;
         return this.http.put<Ihotel>(Url , hotel).pipe(
             catchError(this.handleError)
         );
    }

    public deleteHotel(id: number): Observable<{}>{
        const Url =`${this.HOTEL_API_URL}/${id}`;
       return this.http.delete<Ihotel>(Url).pipe(
           catchError(this.handleError)
       );
    }

    private getDefaultHotel(): Ihotel {
       return {
        id: 0,
        nom: '',
        description: '' ,
        prix:0,
        Image: '',
        rating: 0
       };
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage: string ;
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred, error.error.message');
            errorMessage ='An error occurred: ${error.error.message}';
        } else {
            console.error(
                `Backend returned code ${error.status},` +
                `body was: ${error.error}`
            );
             errorMessage =  `Backend returned code ${error.status},` +
             `body was: ${error.error}`;
        }
       
        return throwError(
            'something bad happened ; please try again later.\n' + 
            errorMessage
        );
    }
}