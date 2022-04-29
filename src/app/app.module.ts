import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PiechartComponent } from './COMPONENTS/piechart/piechart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColumnchartComponent } from './COMPONENTS/columnchart/columnchart.component';

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    ColumnchartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
