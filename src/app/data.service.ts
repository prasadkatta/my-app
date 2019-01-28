import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }  
  getProducts(){   
     return this.http.get('http://localhost:50718/api/menu')
     .map(
       (response : Response)=>{        
         const data=response;
         return data;
       }
     )             
  }
 
  
  
}





