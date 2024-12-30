import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Ihotel } from '../models/hotel';

export class HotelData implements InMemoryDbService {

    createDb(): Record<string,Ihotel[]>{
        
        const hotels: Ihotel[] = [
            {
                id: 1,
                nom:'Rissani',
                description: 'sjchhbudniojalk uihniijl',
                prix:300,
                Image: 'assets/image/maroc.jpg/',
                rating:  3 ,
                tags: ['Nouveau']
            },
          
            
            {
             id: 2,
             nom:'marzoga',
             description: 'sjchhbudniojalk uihniijlk',
             prix:150,
             Image: "assets/image/GettyImages-889367018.jpg/",
             rating:2.5,
             tags: ['Nouveau']
            },
            {
             id: 3,
             nom:'sijilmassa',
             description: 'sjchhbudniojalk uihniijlk',
             prix:600,
             Image: 'assets/image/palamoroc.jpg/',
             rating:4,
             tags: ['Nouveau']
            },
            {
             id: 4,
             nom:'taffilalt',
             description: 'sjchhbudniojalk uihniijlk',
             prix:400,
             Image: 'assets/image/palastin.jpg/',
             rating:3.5,
             tags: ['Nouveau']
            },
            {
                id: 5,
                nom:"ansa",
                description: "sjchhbudniojalk uihniijlk",
                prix:200,
                Image: "assets/image/kodsse.jpg/",
                rating: 2
            }
           
        ];

        return { hotels }
    }
     genId(hotels: Ihotel[]): number {
    
         return hotels.length > 0 ? Math.max( ...hotels.map(hotel => hotel.id)) + 1 : 1 ;
     }

}