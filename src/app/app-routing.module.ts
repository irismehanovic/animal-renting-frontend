import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserDashboardComponent} from "./post-animal/post-animal.component";
import {OwnerListComponent} from "./owner-list/owner-list.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
// the name userdashboard should have been PostAnimalDashboard but I have renamed the file afterwards so it stayed like this


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'post-animal',
   component: UserDashboardComponent
  },
  {
    path: 'owners',
    component: OwnerListComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [HomeComponent, UserDashboardComponent, OwnerListComponent, SignUpComponent]
