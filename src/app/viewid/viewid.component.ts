import { Component } from '@angular/core';
import { IdcardComponent } from '../idcard/idcard.component';
import { IdcardService } from '../idcard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewid',
  templateUrl: './viewid.component.html',
  styleUrls: ['./viewid.component.css']
})
export class ViewidComponent {

  idview:any=[];
idcard: any;

  constructor (private _idcardservice:IdcardService,_activatedrouter:ActivatedRoute){

    _activatedrouter.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        _idcardservice.viewidcard(data.id).subscribe(
         (data:any)=>{
          this.idview=data;
          console.log(data);
         } 
        )
      }
    )
  }

}
