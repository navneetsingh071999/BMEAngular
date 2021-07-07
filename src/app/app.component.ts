import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApprovedEvent } from './Model/ApprovedEvent';
import { Employee } from './Model/EmployeeModel';
import { HomeComponent } from './MyComponent/home/home.component';
import { EventComponent } from './MyComponent/registered/event/event.component';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'bookMyEvents';
  opened = true
  role = localStorage.getItem("role");
  employee !: Employee;
  updateEvent = localStorage.getItem("updateEvent");

  constructor(private loginService : LoginService, private homeComponent : HomeComponent, private eventComponent : EventComponent){
    
  }

  ngOnInit(){
    this.getUserDetails();
  }

  public getUserDetails(){
    this.loginService.getUser().subscribe(
      (response : any) => {
        this.employee = response;
        localStorage.setItem("firstName", this.employee.firstName);
        localStorage.setItem("email", this.employee.email);
        localStorage.setItem("lastName", this.employee.lastName);
        localStorage.setItem("role", this.employee.role);
      },
      (error : HttpErrorResponse) => {
        console.log("status");
      }

    );

  }

  bookEvent(bookingEvent : NgForm){
    this.homeComponent.bookEvent(bookingEvent);
  }

}
