import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  weight:number=0;
  height:number=0;
  result:any=0;
  bmi:string="";

  submit(){
    this.result = this.weight / (this.height * this.height);
    console.log(this.result);
    
    if (this.result < 18.5 && this.result > 0) {
        this.bmi = "underweight";
    } else if (this.result >= 18.5 && this.result < 25) {
        this.bmi = "Normal";
    } else if (this.result >= 25 && this.result < 30) {
        this.bmi = "overweight";
    } else if (this.result >= 30 && this.result < 35) {
        this.bmi = "Obese";
    } else if (this.result >= 35 && this.result < 40) {
        this.bmi = "severely obese";
    } else if (this.result >= 40) {
        this.bmi = "Morbidly obese";
    } else {
        alert("Error: Correct Values");
    }    

}
   
}
