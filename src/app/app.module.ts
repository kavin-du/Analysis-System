import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PiechartComponent } from './COMPONENTS/piechart/piechart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColumnchartComponent } from './COMPONENTS/columnchart/columnchart.component';
import { LinechartComponent } from './COMPONENTS/linechart/linechart.component';
import { TableComponent } from './COMPONENTS/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { DonutComponent } from './COMPONENTS/donut/donut.component' ;
import {MatDividerModule} from '@angular/material/divider'; 

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    ColumnchartComponent,
    LinechartComponent,
    TableComponent,
    DonutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
