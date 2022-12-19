import { Component, ViewChild } from '@angular/core';
import { myUsers } from './models/myUsers';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

// export interface myUsers {
//   
// ;
//   email: string;
//   phone?: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild("chart") chart!: ChartComponent;

constructor() {
  // used to initialize the the attributes
  this.myUsers = {
    name: '',
    email: '',
    age: ''
  };
  this.name = '';
  this.email = '';
  this.age = '';
  this.updateChart();
 }

addUsers() {
    // add the user to the list
    this.myUsers = {
      name: this.name,
      email: this.email,
      age: this.age
      
    }
    this.users.push(this.myUsers);
    // clear the form
    this.name = '';
    this.email = '';
    this.age = '';
    this.updateChart();
}

  // intention is a nice clean way to show the used attributes
  showDataUsers: any = [];
  showDataEmails: any  = [];
  name:string;
  email:string;
  age:string;
  myUsers: myUsers;
  chartOptions: any;

  // create a list of users
  users = [
    {name: 'John', email: 'john@johnny.com', age: '20'},
    {name: 'Jane', email: 'jane@jannie.com', age: '30'},
    {name: 'Jack', email: 'jack@jacky.com', age: '40'}
  ]

  // transform the name to uppercase and lowercase instantly
  // because the name is a two-way binding
  transformToUpperCase() {
    this.name = this.name.toUpperCase();
    this.email = this.email.toUpperCase();
  }

  transformToLowerCase() {
    this.name = this.name.toLowerCase();
    this.email = this.email.toLowerCase();
  }

  showUsers() {
    this.showDataUsers = this.users.map(user => user.name);
    
  }

  showEmails() {
    this.showDataEmails = this.users.map(user => user.email);
  }

updateChart = () => {
  this.chartOptions = {
    series: [
      {
        name: "My X-mas presents",
        data: this.users.map(user => user.age)
      }
    ],
    colors: ['#CC0000'],
    chart: {
      height: 350,
      type: "bar"
    },
    
    title: {
      text: "Have a nice X-mas - and don't be a naught boy/girl"
    },
    xaxis: {
      categories: this.users.map(user => user.name)
    }
  }};
}