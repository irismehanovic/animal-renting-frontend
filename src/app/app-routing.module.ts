import { NgModule } from '@angular/core';
// @ts-ignore
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostAnimalComponent} from "./post-animal/post-animal.component";
import {OwnerListComponent} from "./owner-list/owner-list.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {Route} from './constants/route.constants';
import {AnimalFormContainerComponent} from "./containers/animal-form-container/animal-form-container.component";
import {AnimalFormComponent} from "./components/animal-form/animal-form.component";

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
    path: 'animal-list',
   component: PostAnimalComponent,
    children: [
        {
          path: 'post-animal',
          component: AnimalFormComponent,
        },
      ]
  },
  {
    path: 'owners',
    component: OwnerListComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path:'user-profile',
    component: UserProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [HomeComponent, PostAnimalComponent, OwnerListComponent, SignUpComponent, UserProfileComponent, AnimalFormContainerComponent, SignInComponent]
