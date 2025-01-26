import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdcardService {

  baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/student"

  constructor(private _httpclient:HttpClient) { }

  getidcard():Observable<any>{
    return this._httpclient.get(this.baseUrl)
  }

  getidcardfilter(term:any):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term)
  }
  getidcardsort(column:any,order:any):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order)
  }

  getidcardpagination(limit:any,page:any):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page)
  }
  deleteidcard(id:number):Observable<any>{
    return this._httpclient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
  }

  createidcard(data:any):Observable<any>{
    return this._httpclient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);
  }

  viewidcard(id:number){
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
  }

  updateidcard(id:number,data:any){
    return this._httpclient.put(this.baseUrl+"/"+id,data)
  }


}
