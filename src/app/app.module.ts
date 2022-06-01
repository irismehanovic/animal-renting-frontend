import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
// the name userdashboard should have been PostAnimalDashboard but I have renamed the file afterwards so it stayed like this
import {MatButtonModule} from "@angular/material/button";
import {OwnerService} from "./owner.service";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AnimalFormContainerComponent } from './containers/animal-form-container/animal-form-container.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AnimalService} from "./service/animal.service";
import {HttpClientModule} from "@angular/common/http";
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoutingComponents,
    UserProfileComponent,
    AnimalFormContainerComponent,
    AnimalFormComponent,
    SignInComponent,
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AnimalService], //this is registering the owner.service
  bootstrap: [AppComponent]
}) export class AppModule { }
