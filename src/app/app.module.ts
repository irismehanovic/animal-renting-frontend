import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {AnimalFormContainerComponent} from './containers/animal-form-container/animal-form-container.component';
import {AnimalFormComponent} from './components/animal-form/animal-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AnimalService} from "./service/animal.service";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './common/login/login.component';
import {AuthorizedGuard} from "./guards/authorized.guard";
import {AuthService} from "./service/auth.service";
import {provideAuthorizationInterceptor} from "./interceptors/authorization.interceptor";
import {RegisterComponent} from "./common/register/register.component";
import { SearchComponent } from './search/search.component';
import { CommonModule, CurrencyPipe} from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {HomeComponent} from "./home/home.component";
import {PostAnimalComponent} from "./post-animal/post-animal.component";
import {AnimalsResolver} from "./resolvers/animals-resolver.service";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {RegisterContainerComponent} from "./containers/register-container/register-container.component";
import {UserService} from "./service/user.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimalFormContainerComponent,
    AnimalFormComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    UserProfileComponent,
    HomeComponent,
    PostAnimalComponent,
    AnimalFormContainerComponent,
    RegisterContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSlideToggleModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AnimalService,
    provideAuthorizationInterceptor(),
    AuthorizedGuard,
    AuthService,
    CurrencyPipe,
    AnimalsResolver,
    UserService,
  ],
  bootstrap: [AppComponent]
}) export class AppModule { }
