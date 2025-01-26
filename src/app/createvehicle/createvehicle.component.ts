import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {

  id:number=0;
constructor ( private _activatedRoute:ActivatedRoute,private _vehicleservice:VehicleService, private _router:Router){
  //capturing id with activated route

  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id=data.id;
      
     
      //integrating Api
      _vehicleservice.getvehicle(data.id).subscribe(
        (data:any)=>{
          console.log(data);

          //display the data in form

          this.vehicleForm.patchValue(data);
        }
      )
    }
  )
}

public vehicleForm= new FormGroup(
  {
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
    cost:new FormControl(),
  }
)

submit(){

  //update
  if(this.id){
    this._vehicleservice.getupdatevehicle(this.id,this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("updated successfully")
        this._router.navigateByUrl("/vehicle");
      },(err:any)=>{
        alert("internal server ")
      }
    )

    //create

  }else {
    console.log(this.vehicleForm.value);
    this._vehicleservice.createvehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("vehicle created sucesfully");
        //this._router.navigate(["/vehicle"]); another method to navigate
         this._router.navigateByUrl("/vehicle")
      },(err:any)=>{
        alert("Internal server error")
      }
    )
  }
  
    }
  }

  
