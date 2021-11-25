import { Injectable } from '@angular/core';
import { HotelClass } from './hotel-class';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  listeville=['Tunis','Hammamet','Djerba','Bizerte','Nabeul'];
  getvilles(){
    return this.listeville;
  }
  leshotelsSearched:HotelClass[]=[];

  listHotel:HotelClass [] = [ 
    new HotelClass('radisson blue','',this.listeville[2],"luxe","tres bien",9,5 ), 
    new HotelClass('Africa jade','../../assets/africajade2.jpg', this.listeville[1],"luxe","tres bien",8.7,4 ), 
    new HotelClass('El Mouradi','',this.listeville[1],"moyen"," bien",6.3,3), 
    new HotelClass('Beach Club','',this.listeville[1],"bas de gamme ","pas mal",5.3,4 )
    
   ]
   public addHotel(hotel: HotelClass){
    let h1 = Object.assign({},hotel);
    this.leshotelsSearched.push(h1);
  };
   
   gethotels(){
     return this.listHotel;
   }
  
   gethotelsSearched(){
    return this.leshotelsSearched;
  }
  initializeHotelsSearched(){
    return this.leshotelsSearched=[];
  }

  constructor() { }
}
