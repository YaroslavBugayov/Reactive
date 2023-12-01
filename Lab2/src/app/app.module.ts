import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Component1Component } from './component1/component1.component';
import {ChildComponent} from "./component1/child.component";
import { Component2Component } from './component2/component2.component';
import {Child2Component} from "./component2/child2.component";
import { Component3Component } from './component3/component3.component';
import {Child3Component} from "./component3/child3.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Component1Component,
    ChildComponent,
    Component2Component,
    Child2Component,
    Component3Component,
    Child3Component
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
