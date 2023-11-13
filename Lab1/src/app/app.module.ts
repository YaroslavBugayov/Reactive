import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Task2Component } from './task2/task2.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PracticeComponent } from './practice/practice.component';
import { Practice2Component } from './practice2/practice2.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    NavbarComponent,
    Task2Component,
    PracticeComponent,
    Practice2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
