import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient:HttpClient) { }

  createUser(url:any,request:any){
    return this.httpClient.post(url,request);
  }

  getAllUsers(url:any){
    return this.httpClient.get(url);
  }
}
