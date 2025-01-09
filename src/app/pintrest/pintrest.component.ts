import { Component } from '@angular/core';
import { PintrestService } from '../pintrest.service';

@Component({
  selector: 'app-pintrest',
  templateUrl: './pintrest.component.html',
  styleUrls: ['./pintrest.component.css']
})
export class PintrestComponent {
  pintrest:any=[]
      constructor(private _pintrestService:PintrestService){
          _pintrestService.getpintrest().subscribe(
            (data:any)=>{this.pintrest=data;
              console.log(this.pintrest);

            }
          )
      }  }

