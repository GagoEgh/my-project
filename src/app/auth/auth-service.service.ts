import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  errorMessage:string='';
  constructor(private http:HttpClient) { }

  loginPost(obj:Object){
    return this.http.post('http://api.yevyev.am/login/login/',obj)
  }
}
