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
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component'; 
import {MatIconModule} from '@angular/material/icon';
import { Example4Component } from './example4/example4.component';
import { Example5Component } from './example5/example5.component';
import {MatRadioModule} from '@angular/material/radio'; 
import { Example6Component } from './example6/example6.component';
import { Example7Component } from './example7/example7.component';
import { Example8Component } from './example8/example8.component';
import { Example9Component } from './example9/example9.component';
import { Example10Component } from './example10/example10.component';
import { OpenModalComponent } from './open-modal/open-modal.component'; 
@NgModule({
  declarations: [
    AppComponent,
    SimpleChartComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    Example6Component,
    Example7Component,
    Example8Component,
    Example9Component,
    Example10Component,
    OpenModalComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    MatDialogModule,
    AppRoutingModule,
    MatIconModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    BasicPrimitivesModule,
    MatProgressBarModule,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
