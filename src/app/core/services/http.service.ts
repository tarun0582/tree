import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIS } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {}
  getData() {
    return this.http.get( APIS.TREE.EMPLOYEE)
  }

}
