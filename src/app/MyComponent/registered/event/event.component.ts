import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { ApprovedEvent } from 'src/app/Model/ApprovedEvent';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  approvedEvents !: ApprovedEvent[];
  public pendingEvents !: ApprovedEvent[];
  public updateEvent !: ApprovedEvent;
  showForm : boolean = false;
  showRegForm : boolean = false;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getUserApprovedEvent();
    this.getPendingEvents();
  }

  public getUserApprovedEvent(){
    this.eventService.getUserRegisteredEvents().subscribe(
      (response: any)=>{
        this.approvedEvents = response;
        console.log("User Approved Events", this.approvedEvents);
        
      },
      (error : HttpErrorResponse)=>{
          console.log(error);
      }
    );
  }

  public toggleEventRefForm(){
    this.showRegForm = !this.showRegForm;
  }

  public getPendingEvents(){
    this.eventService.getUserPendingEvents().subscribe(

      (response: any) =>{
        this.pendingEvents = response;
        console.log(this.pendingEvents);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }


  public deleteRegisteredEvent(id : number){
    this.eventService.deleteRegisteredEvent(id).subscribe(
      (response : any)=>{

      },
      (error : HttpErrorResponse)=>{
        if(error.status == 200){
          window.alert("Event Deleted");
          this.ngOnInit();
        }else{
          console.log(error);
        }
      }
    );
  }


  openModal(approveevent : any, type: string){
    if(type === 'update'){
      console.log("update = ",approveevent);
      this.updateEvent = approveevent;
      this.showForm = true;
    }  
  }

  closeForm(){
    this.showForm = false;
  }

  public RegisterEvent(event : NgForm){
      this.eventService.organizeEvent(event.value).subscribe(
        (response: any)=>{},
        (error: HttpErrorResponse)=>{
          if(error.status === 200){
            this.toggleEventRefForm();
            this.ngOnInit();
          }
          else{
            console.log(error);
          }
        }
      );
  }



  public updateRegisteredEvent(event : NgForm){

    this.eventService.updateUserRegisteredEvent(event.value).subscribe(
      (response : any)=>{},
      (error : HttpErrorResponse)=>{
        if(error.status === 200){
          this.showForm = false;
          console.log("updated");
          this.ngOnInit();
        }else{
          this.showForm = false;
          console.log("Update Error : ", event.value);
        }
      }
    );

  }

}
