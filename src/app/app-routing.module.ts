import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookedeventsComponent } from './MyComponent/bookedevents/bookedevents.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { NewEventComponent } from './MyComponent/new-event/new-event.component';
import { NewUserComponent } from './MyComponent/new-user/new-user.component';
import { EventComponent } from './MyComponent/registered/event/event.component';
import { RegistrationComponent } from './MyComponent/registration/registration.component';
import { SuccessComponent } from './MyComponent/success/success.component';
import { UserComponent } from './MyComponent/user/user.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/register',
    component: RegistrationComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'newUsers',
    component: NewUserComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'booked',
    component: BookedeventsComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'registered',
    component: EventComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'newevents',
    component: NewEventComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'userDetails',
    component: UserComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
