import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Task1Component} from "./task1/task1.component";
import {Task2Component} from "./task2/task2.component";
import {PracticeComponent} from "./practice/practice.component";
import {Practice2Component} from "./practice2/practice2.component";

const routes: Routes = [
  { path: 'task1', component: Task1Component },
  { path: 'task2', component: Task2Component },
  { path: 'practice', component: PracticeComponent },
  { path: 'practice2', component: Practice2Component },
  { path: '**', component: Task1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
