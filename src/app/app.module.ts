import { NgModule } from '@angular/core';
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
import { OwnerListComponent } from './owner-list/owner-list.component';
import {OwnerService} from "./owner.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoutingComponents,
    OwnerListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,

    ],
  providers: [OwnerService], //this is registering the owner.service
  bootstrap: [AppComponent]
}) export class AppModule { }
