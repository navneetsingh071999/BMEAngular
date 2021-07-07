import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = "http://localhost:8080/admin";
  constructor(private http : HttpClient) { }

  public newUsers(){
    return this.http.get(`${this.baseUrl}/newUsers`);
  }

  public autenticateUser(email: string){
    return this.http.put(`${this.baseUrl}/authenticate/${email}`,null);
  }

  public getNewEvents(){
    return this.http.get(`${this.baseUrl}/newEvents`);
  }

  public approveEvent(id : number){
    return this.http.put(`${this.baseUrl}/approve/event/${id}`,null);
  }
}
