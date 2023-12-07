import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Directives1Component} from "./directives1/directives1.component";
import {Directives2Component} from "./directives2/directives2.component";
import {Directives3Component} from "./directives3/directives3.component";
import {Directives4Component} from "./directives4/directives4.component";
import {Directives5Component} from "./directives5/directives5.component";
import {Directives6Component} from "./directives6/directives6.component";

const routes: Routes = [
  { path: 'directives1', component: Directives1Component },
  { path: 'directives2', component: Directives2Component },
  { path: 'directives3', component: Directives3Component },
  { path: 'directives4', component: Directives4Component },
  { path: 'directives5', component: Directives5Component },
  { path: 'directives6', component: Directives6Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
