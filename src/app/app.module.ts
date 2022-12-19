import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import forms module to use ngModel
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ViewchildexampleComponent } from './viewchildexample/viewchildexample.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MyChartComponent } from './my-chart/my-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewchildexampleComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
