import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApprovedEvent } from 'src/app/Model/ApprovedEvent';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private eventService : EventService) { }

  public approvedEvents !: ApprovedEvent[];
  public bookingEvent !: any;

  
  ngOnInit(): void {

      this.getEvents();
  }

  public getEvents(){

    this.eventService.getEvents().subscribe(
      (response : any) => {
        this.approvedEvents = response;
        console.log(this.approvedEvents)
      },
      (error : HttpErrorResponse) => {
        console.log(error);
      }

    )

  }



  openModal(approveevent : any, type: string){
    const container = document.getElementById('mainCont');
    const button = document.createElement('button');
    button.type = "button";
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    
    if(type === 'booking'){
      button.setAttribute('data-bs-target', '#bookEvent');
      this.bookingEvent = approveevent;
      localStorage.setItem("bookingId", this.bookingEvent.id)
      console.log("booking = ",this.bookingEvent.id);
    }

    container?.appendChild(button);
    button.click();   
  }

  bookEvent(event : NgForm){
    console.log("idhr aaya?")
    document.getElementById('bookClose')?.click();
      this.eventService.bookEvent(event.value, localStorage.getItem("bookingId")).subscribe(
        (response : any) => {
          localStorage.removeItem("bookingId");
        },
        (error : HttpErrorResponse) => {
          if(error.status == 200){
            localStorage.removeItem("bookingId");
            this.getEvents();
          }else{
            localStorage.removeItem("bookingId");
            console.log(error);
            this.getEvents();
          }
          
        }
      );
  }



}
