import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../login';
import { Employee } from '../Model/EmployeeModel';
import { EmployeeReg } from '../Model/EmployeeReg';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "http://localhost:8080";

  constructor(private http : HttpClient) {}

  //to get user
  public getUser(){
    return this.http.get(`${this.baseUrl}/user`);
  }
  //Calling Server to generate token

  public doLogin(credentials: any){
    return this.http.post(`${this.baseUrl}/token`, credentials)
  }

  //for login User
  public login(token: string){
    localStorage.setItem("token", token);
    return true;
  }
  //to check if user is loggedin
  public isLoggedIn(){
    let token = localStorage.getItem("token");

    if(token == undefined || token == null || token == '' ){
      return false
    }else{
      return true;
    }
  }

  //for logout
  public logout(){
  
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    return true;
  }

  //to get token
  public getToken(){
    return localStorage.getItem("token");
  }

  public register(register: EmployeeReg){
    return this.http.post(`${this.baseUrl}/registration/register`, register);
  }

}
