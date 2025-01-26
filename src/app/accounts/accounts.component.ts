import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
     accounts:any=[]
 constructor(private _accounts:AccountsService) {
  _accounts.getaccounts().subscribe(
    (data:any)=>{
      this.accounts=data;
      console.log(this.accounts);
       
    }
  )

 }

  term:string="";

  filter(){
    this._accounts.getfilteraccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert("Internal server Error")
      }
    )
   }

  column:string="";
  order:string="";

  sort(){

    this._accounts.getsortedaccounts(this.column,this.order).subscribe(

      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert("Internal server Error")}
    )


  
  }

  limit:number=0;
  page:number=0;

  pagination(){
      this._accounts.getpaginations(this.limit,this.page).subscribe(
        (data:any)=>{
          this.accounts=data;
          console.log(this.accounts);
        }
      )
  }

  delete(id:number){
    if(confirm("Are you sure to delete?")===true){
     this._accounts.deleteaccount(id).subscribe(
       (data:any)=>{
         alert("Deleted sucessfully");
         location.reload()
         

       },(err:any)=>{
         alert("Internal server error")
       }
     )
    }
  }
}




