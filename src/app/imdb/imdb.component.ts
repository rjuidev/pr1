import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent {
       imbd:any=[]
  constructor (private _imdbService:ImdbService){
      _imdbService.getimdb().subscribe(
        (data:any)=>{this.imbd=data;
          console.log(this.imbd);
         }
      )
  }

  getstar(rating:number){
    return Math.floor(rating)
  }

}
