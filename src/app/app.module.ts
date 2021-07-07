import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { LoginComponent } from './MyComponent/login/login.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptor } from './services/auth.interceptor';
import { EventService } from './services/event.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BookedeventsComponent } from './MyComponent/bookedevents/bookedevents.component';
import { EventComponent } from './MyComponent/registered/event/event.component';
import { RegistrationComponent } from './MyComponent/registration/registration.component';
import {MatRadioModule} from '@angular/material/radio';
import { SuccessComponent } from './MyComponent/success/success.component';
import { NewUserComponent } from './MyComponent/new-user/new-user.component';
import { AdminService } from './services/admin.service';
import { NewEventComponent } from './MyComponent/new-event/new-event.component';
import { UserComponent } from './MyComponent/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    BookedeventsComponent,
    EventComponent,
    RegistrationComponent,
    SuccessComponent,
    NewUserComponent,
    NewEventComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatRadioModule
  
  ],
  providers: [LoginService , AuthGuard, EventService, HomeComponent, EventComponent, AdminService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
