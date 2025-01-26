import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


public studentdata:FormGroup= new FormGroup(
  {
    name:new FormControl('',Validators.required),
    class:new FormControl('', Validators.required),
    fathername:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    address:new FormGroup({
        city:new FormControl(),
        state:new FormControl(),
        pincode:new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    type: new FormControl(),
    marks:new FormArray([])
  }
  
);

get marksFromArray(){
  return this.studentdata.get('marks') as FormArray
}

marks(){
    this.marksFromArray.push(
      new FormGroup({
         class: new FormControl(),
         year: new FormControl(),
         percentage: new FormControl(),
      })
    )
}

constructor(){
  this.studentdata.get('type')?.valueChanges.subscribe((data:any)=>{
    if (data=='dayscholar'){
      this.studentdata.addControl('busfee', new FormControl())
      this.studentdata.removeControl('hostelfee')
    } else{
      this.studentdata.addControl('hostelfee', new FormControl())
      this.studentdata.removeControl('busfee')
    }
    
  })
 

 
}


submit(){
  console.log(this.studentdata.value);
}

}
