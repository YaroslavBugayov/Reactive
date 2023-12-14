import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Pipes1Component} from "./components/pipes1/pipes1.component";
import {Pipes2Component} from "./components/pipes2/pipes2.component";

const routes: Routes = [
  { path: 'pipes1', component: Pipes1Component },
  { path: 'pipes2', component: Pipes2Component },
  { path: 'pipes3', component: Pipes1Component },
  { path: '**', component: Pipes1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
