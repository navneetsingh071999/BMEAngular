import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeReg } from 'src/app/Model/EmployeeReg';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public register(registerForm: NgForm): void{

    //ToDo: Check for error
    console.log(registerForm.value["firstName"]  )

    if(((registerForm.value["firstName"] != null) && (registerForm.value["firstName"] != ''))
    && ((registerForm.value["lastName"] != null) && (registerForm.value["lastName"] != ''))
    && ((registerForm.value["email"] != null) && (registerForm.value["eamil"] != ''))
    && ((registerForm.value["password"] != null) && (registerForm.value["password"] != ''))
    && ((registerForm.value["mobileNo"] != null) && (registerForm.value["mobileNo"] != ''))
    && ((registerForm.value["gender"] != null) && (registerForm.value["gender"] != ''))
    )
    {

      this.loginService.register(registerForm.value).subscribe(

        (response: any) => {
          
        },
        (error : HttpErrorResponse) => {
          if(error.status === 200){
            this.router.navigate(["/success"]);
          }
        }
        
        );
      }
      else{
        console.log("Deatils Error")
      }
  }



}
