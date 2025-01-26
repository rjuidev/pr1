import { Component } from '@angular/core';
import { IdcardService } from '../idcard.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createidcard',
  templateUrl: './createidcard.component.html',
  styleUrls: ['./createidcard.component.css']
})
export class CreateidcardComponent {
  
    id:any=[]
  constructor(private _idcardservice:IdcardService , private _router:Router,_activatedroute:ActivatedRoute){

    //capturing id with activated route

    _activatedroute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        
       
        //integrating Api
        _idcardservice.viewidcard(data.id).subscribe(
          (data:any)=>{
            console.log(data);
  
            //display the data in form
  
            this.idcardForm.patchValue(data);
          }
        )
      }
    )

  }



  public  idcardForm:FormGroup= new FormGroup(
    {
      name:new FormControl(),
      city:new FormControl(),
      dob:new FormControl(),
      profile_picture:new FormControl(),
      phone:new FormControl(),
      email:new FormControl(),
      
    }
  )
  
  create(){

    //update idcard

    if(this.id){
      this._idcardservice.updateidcard(this.id,this.idcardForm.value).subscribe(
        (data:any)=>{
          alert("updated successfully")
          this._router.navigateByUrl("/idcard")
        },(err:any)=>{
          alert("code sakkaga rayu malli")
        }
      )

      //create id card
    }else{
      console.log(this.idcardForm.value);
      this._idcardservice.createidcard(this.idcardForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("Idcard created sucesfully");
          //this._router.navigate(["/vehicle"]); another method to navigate
            this._router.navigateByUrl("/idcard")
        },(err:any)=>{
          alert("Internal server error")
        }
      )
    }
    
    }
    }

   
  


function create() {
  throw new Error('Function not implemented.');
}

