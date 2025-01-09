import { Component } from '@angular/core';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
      profiles:any=[]
  constructor(private _profiles:ProfilesService){

    _profiles.getprofiles().subscribe(
      (data:any)=>{
          this.profiles=data;
          console.log(this.profiles);
      }
    )
  }

 

}
