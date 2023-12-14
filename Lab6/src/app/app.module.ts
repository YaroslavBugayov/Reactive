import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pipes1Component } from './pipes1/pipes1.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {FormatPipe} from "./pipes1/format.pipe";
import {JoinPipe} from "./pipes1/join.pipe";
import {RootPipe} from "./pipes1/root.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Pipes1Component,
    FormatPipe,
    JoinPipe,
    RootPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
