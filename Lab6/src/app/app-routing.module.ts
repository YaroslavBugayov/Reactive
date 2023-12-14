import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Pipes1Component} from "./pipes1/pipes1.component";

const routes: Routes = [
  { path: 'pipes1', component: Pipes1Component },
  { path: 'pipes2', component: Pipes1Component },
  { path: 'pipes3', component: Pipes1Component },
  { path: '**', component: Pipes1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
