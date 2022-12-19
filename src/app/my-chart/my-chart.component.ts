import { Component, ViewChild, OnInit } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

// optional - if you want to use the types
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  colors: any
};

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  chartOptions: ChartOptions | any;
  // chartOptions!: Partial<ChartOptions>; // With partial -> objecttypes are optional

  // Backlog items:
  // - Create a fetch method to get the data from the backend
  // - Allocate data to the chartOptions (this)
  // - map data to the keys in the chartOptions
  // - Execute the method in the constructor


  constructor() { 
  }

  fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(
      res => res.json()
    ).then(
      data => {
        this.chartOptions = {
      series: [
        {
          name: "My X-mas presents",
          data: data.map((user:any) => user.address.geo.lat)
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
        categories: data.map((user:any) => user.name)
      }
    };
      }
    ).catch()
  }

  ngOnInit(): void {
    this.fetchUsers();
    }

}
