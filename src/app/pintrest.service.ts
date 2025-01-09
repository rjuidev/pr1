import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PintrestService {

  constructor(private _httpclient:HttpClient) { }
      
  getpintrest():Observable<any>{
    return this._httpclient.get ("https://picsum.photos/v2/list?page=1&limit=100")
  }
        
  }

