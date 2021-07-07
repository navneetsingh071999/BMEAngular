import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookedEvents } from 'src/app/Model/BookedEvent';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-bookedevents',
  templateUrl: './bookedevents.component.html',
  styleUrls: ['./bookedevents.component.css']
})
export class BookedeventsComponent implements OnInit {


  public bookedEvents !: BookedEvents[];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getBookedEvents();
  }

  public getBookedEvents(){
    this.eventService.getUserBookedEvents().subscribe(

      (response: any) =>{
        this.bookedEvents = response;
        console.log(this.bookedEvents);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public cancleBooking(id : number){
    this.eventService.deleteBookedEvent(id).subscribe(
      (response : any) => {
      },
      (error : HttpErrorResponse) => {
        if(error.status == 200){
          window.alert("Booking Cancled");
          this.getBookedEvents();
        }else{
          console.log(error);
        }
      }
    );
  }

}
