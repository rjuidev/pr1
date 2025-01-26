import { Component } from '@angular/core';
import { IdcardService } from '../idcard.service';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent {
data: any;
idview: any;
create() {
throw new Error('Method not implemented.');
}
     idcard:any=[]
  constructor (private _idcardservice:IdcardService ){

   this.pageload();
    
  }

  pageload(){
    this._idcardservice.getidcard().subscribe(

      (data:any)=>{
        this.idcard=data;
        console.log(this.idcard);
      },(err:any)=>{
           alert("Error occured")
      }
    )
  }

  

  term:string="";

  filter(){
    this._idcardservice.getidcardfilter(this.term).subscribe(
      (data:any)=>{
      this.idcard=data;
      console.log(this.idcard);  
      }, (err:any)=>{
        alert("Error occured")
      }
    )
  }

  column:string="";
  order:string="";

  sort(){
    this._idcardservice.getidcardsort(this.column,this.order).subscribe(
      (data:any)=>{
        this.idcard=data;
        console.log(this.idcard);  
        }, (err:any)=>{
          alert("Error occured")
        }
    )
  }


  limit:number=0;
  page:number=0;

  pagination(){
    this._idcardservice.getidcardpagination(this.limit,this.page).subscribe(
      (data:any)=>{
        this.idcard=data;
        console.log(this.idcard);  
        }, (err:any)=>{
          alert("Error occured")
        }
    )
  }

  delete(id:number){
    if(confirm("Are you sure to delete?")===true){
      this._idcardservice.deleteidcard(id).subscribe(
        (data:any)=>{
          alert("Deleted Sucessfully");
          this.pageload();
           
          }, (err:any)=>{
            alert("Error occured")
          }
      )

    }

  }



}
