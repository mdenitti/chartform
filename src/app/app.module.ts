import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import forms module to use ngModel
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ViewchildexampleComponent } from './viewchildexample/viewchildexample.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewchildexampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
