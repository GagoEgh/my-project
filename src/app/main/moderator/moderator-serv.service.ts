import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModeratorServService {

  erroreMesage: string = '';
  tellCode = ['091', '099', '077', '093', '094', '098', '055', '095'];
  // http://api.yevyev.am/userdetails/user/?search=&user_role__code=MDR&page=1&limit=10&offset=0  get
  constructor(public http: HttpClient) { }

  dataPost(obj: Object) {
    return this.http.post('http://api.yevyev.am/userdetails/add-moderator/', obj)
  }
 
}
