import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostAnimalComponent} from "./post-animal/post-animal.component";
import {Route} from './constants/route.constants';
import {AnimalFormContainerComponent} from "./containers/animal-form-container/animal-form-container.component";
import {LoginComponent} from "./common/login/login.component";
import {RegisterComponent} from "./common/register/register.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {AnimalsResolver} from "./resolvers/animals-resolver.service";

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
    path: Route.USER_PROFILE + '/:id',
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
    resolve: {
      'animals': AnimalsResolver,
    },
    //canActivate: [AuthorizedGuard],
    children: [
        {
          path: 'post-animal',
          component: AnimalFormContainerComponent,
        },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

