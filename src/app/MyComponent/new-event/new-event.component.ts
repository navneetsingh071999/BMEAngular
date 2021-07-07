import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApprovedEvent } from 'src/app/Model/ApprovedEvent';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  newEvents !: ApprovedEvent[];
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.getNewEvents();
  }

  public getNewEvents(){
    this.adminService.getNewEvents().subscribe(
      (response : any)=>{
        this.newEvents = response;
      },
      (error : HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }


  public approveEvent(id : number){
    this.adminService.approveEvent(id).subscribe(
      (response: any)=>{

      },
      (error : HttpErrorResponse)=>{
        if(error.status === 200){
          this.ngOnInit();
        }
        else{
          console.log(error);
        }
      }
    );
  }

}
