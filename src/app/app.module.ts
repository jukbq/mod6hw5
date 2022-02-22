import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { Mod6hw1Component } from './works/mod6hw1/mod6hw1.component';
import { Mod6hw2Component } from './works/mod6hw2/mod6hw2.component';
import { Mod6hw3Component } from './works/mod6hw3/mod6hw3.component';

import { TableComponent } from './works/mod6hw3/table/table.component';

;


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorksComponent,
    Mod6hw1Component,
    Mod6hw2Component,
    Mod6hw3Component,

    TableComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
