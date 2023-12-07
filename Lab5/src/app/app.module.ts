import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import { Directives1Component } from './directives1/directives1.component';
import { Directives2Component } from './directives2/directives2.component';
import { Directives3Component } from './directives3/directives3.component';
import { Directives4Component } from './directives4/directives4.component';
import { Directives5Component } from './directives5/directives5.component';
import { Directives6Component } from './directives6/directives6.component';
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Directives1Component,
    Directives2Component,
    Directives3Component,
    Directives4Component,
    Directives5Component,
    Directives6Component
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
