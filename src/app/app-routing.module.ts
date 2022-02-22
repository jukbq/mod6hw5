import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { Mod6hw1Component } from './works/mod6hw1/mod6hw1.component';
import { Mod6hw2Component } from './works/mod6hw2/mod6hw2.component';
import { Mod6hw3Component } from './works/mod6hw3/mod6hw3.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'works', component: WorksComponent, children: [
      { path: 'mod6hw1', component: Mod6hw1Component },
      { path: 'mod6hw2', component: Mod6hw2Component },
      { path: 'mod6hw3', component: Mod6hw3Component },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
