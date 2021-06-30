import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponent/home/home.component';
import { LoginComponent } from './MyComponent/login/login.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
