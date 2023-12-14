import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pipes1Component } from './components/pipes1/pipes1.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {FormatPipe} from "./pipes/format.pipe";
import {JoinPipe} from "./pipes/join.pipe";
import {RootPipe} from "./pipes/root.pipe";
import { Pipes2Component } from './components/pipes2/pipes2.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Pipes1Component,
    FormatPipe,
    JoinPipe,
    RootPipe,
    Pipes2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
