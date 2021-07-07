import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/EmployeeModel';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {


  public newUsers !: Employee[];
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.getNewUser();
  }


  public getNewUser(){
    this.adminService.newUsers().subscribe(
      (response : any)=>{
        this.newUsers = response;
      },
      (error : HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public authorizeUser(email: string){
    this.adminService.autenticateUser(email).subscribe(
      (response : any)=>{

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
