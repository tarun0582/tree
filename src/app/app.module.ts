import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicPrimitivesModule } from 'ngx-basic-primitives';
import { SimpleChartComponent } from './simple-chart/simple-chart.component';
import { Example1Component } from './example1/example1.component';
import {MatSliderModule} from '@angular/material/slider'; 
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component'; 
import {MatIconModule} from '@angular/material/icon';
import { Example4Component } from './example4/example4.component';
import { Example5Component } from './example5/example5.component';
import { Example6Component } from './example6/example6.component'; 
@NgModule({
  declarations: [
    AppComponent,
    SimpleChartComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    Example6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    BasicPrimitivesModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
