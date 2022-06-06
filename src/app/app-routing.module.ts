import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostAnimalComponent} from "./post-animal/post-animal.component";
import {Route} from './constants/route.constants';
import {AnimalFormContainerComponent} from "./containers/animal-form-container/animal-form-container.component";
import {AnimalFormComponent} from "./components/animal-form/animal-form.component";
import {LoginComponent} from "./common/login/login.component";
import {RegisterComponent} from "./common/register/register.component";
import {AuthorizedGuard} from "./guards/authorized.guard";
import {UserProfileComponent} from "./user-profile/user-profile.component";

const routes: Routes = [
  {
    path: Route.EMPTY,
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: Route.USER_PROFILE,
    component: UserProfileComponent,
  },
  {
    path: 'search/:searchTerm',
    component: HomeComponent
  },
  {
    path: Route.LOGIN,
    component: LoginComponent,
  },
  {
    path: Route.REGISTER,
    component: RegisterComponent,
  },
  {
    path: 'animal-list',
    component: PostAnimalComponent,
    //canActivate: [AuthorizedGuard],
    children: [
        {
          path: 'post-animal',
          component: AnimalFormComponent,
        },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [HomeComponent, PostAnimalComponent, LoginComponent, AnimalFormContainerComponent, RegisterComponent, UserProfileComponent]
