import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Component1Component } from './component1/component1.component';
import {ChildComponent} from "./component1/child.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Component1Component,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
