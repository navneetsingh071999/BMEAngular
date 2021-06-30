import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  credentials = {
    userName: '',
    password: ''
  }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log("Submit");
    if((this.credentials.userName != '' && this.credentials.password != '')
     && (this.credentials.password != null && this.credentials.userName != null)){

      this.loginService.doLogin(this.credentials).subscribe(
        (response: any) => {
          console.log(response.token);
          this.loginService.login(response.token);
          window.location.href="/";
        },
        (error: HttpErrorResponse)=>{
          console.log(error);
        }
      );
       
     }
     else{
       console.log("Empty");
     }
  }


}
