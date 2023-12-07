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
import {BoldDirective} from "./directives2/bold.directive";
import {ItalicDirective} from "./directives2/italic.derective";
import {MouseboldDirective} from "./directives2/mousebold.directive";
import {MouseitalicDirective} from "./directives2/mouseitalic.directive";
import {HostmouseboldDirective} from "./directives2/hostmousebold.directive";
import {ValueDirective} from "./directives3/value.directive";
import {FormsModule} from "@angular/forms";
import {SizeDirective} from "./directives3/size.directive";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Directives1Component,
    Directives2Component,
    Directives3Component,
    Directives4Component,
    Directives5Component,
    Directives6Component,
    BoldDirective,
    ItalicDirective,
    MouseboldDirective,
    MouseitalicDirective,
    HostmouseboldDirective,
    ValueDirective,
    SizeDirective
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
