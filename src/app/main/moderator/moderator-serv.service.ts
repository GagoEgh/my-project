import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModeratorServService {
  pageSize=10;
  pageIndex = 1;
  total=100;
  erroreMesage: string = '';
  tellCode = ['091', '099', '077', '093', '094', '098', '055', '095'];

  constructor(public http: HttpClient) { }
  creitHeaders() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', 'Token ' + document.cookie.split(';')[1].split('=')[1]);
    return headers;
  }

  dataPost(obj: Object) {
    let headers = this.creitHeaders();
    return this.http.post('http://api.yevyev.am/userdetails/add-moderator/', obj, { headers })
  }

  getDatas() {
    let headers = this.creitHeaders();
    return this.http.get(`http://api.yevyev.am/userdetails/user/?search=&user_role__code=MDR&page=${this.pageIndex}&limit=${this.pageSize}&offset=${(this.pageIndex-1)*10}`, { headers });
  }

}
