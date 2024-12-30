export interface Ihotel {
    id: number ;
    nom: string;
    description: string;
    prix: number;
    Image: string;
    rating: number;
    tags?: string[];
}

export class Hotel implements Ihotel {
  constructor(
     public id: number,
     public nom: string,
     public description: string,
     public prix: number,
     public Image: string,
     public tags: string[]
   ){}
  rating: number = 2;

   

  getNewPrice(prix :number):number{
      return prix - 5;
  }
}