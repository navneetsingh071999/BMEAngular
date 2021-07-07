import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public loggedIn: boolean = false;
  public load = 0;
  user = localStorage.getItem("firstName");

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
    
  }

  refresh(){
    if(this.load === 0){
      window.location.href="/";
      this.load = 1;
    }
  }

  logout(){
    this.loginService.logout();
    window.location.href="/login"
  }

}
