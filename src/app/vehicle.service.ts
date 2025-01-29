import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  
  //we take one variable and store the url to reuse and for optamization of code.

  //custom api or Dummy api

  // baseUrl:string="/assets/data.json"

   baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"

  constructor(private _httpClient:HttpClient) { }

  getVehicles():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }

  getFilteredvechiles(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term)
  }

  getsortedVechiles(column:string,order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }

  getPaginationVechiles(limit:number ,page:number):Observable<any>{
     return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+page);
    }

    deletevehicle(id:number):Observable<any>{
      return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id)
    }

    createvehicle(data:any):Observable<any>{
      return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
    }

    getvehicle(id:number):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
    }

    getupdatevehicle(id:number,data:any){
      return  this._httpClient.put ("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id,data)
    }

  }


