import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import forms module to use ngModel
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ViewchildexampleComponent } from './viewchildexample/viewchildexample.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MyChartComponent } from './my-chart/my-chart.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './shared/services/client.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewchildexampleComponent,
    MyChartComponent,
    ClientComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgApexchartsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
