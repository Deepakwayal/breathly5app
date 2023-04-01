import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  
  Signupuser(data:any){
   return  this.http.post(' http://localhost:3000/Signup/',data)
  }
 
  getSong(){
    return this.http.get('http://localhost:3000/song')
  }

  getMelodies(){
    return this.http.get('http://localhost:3000/melodies')
  }
  
}
