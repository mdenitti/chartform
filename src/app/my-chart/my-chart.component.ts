import { Component, ViewChild } from "@angular/core";
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
  chartOptions: ChartOptions;
  // chartOptions!: Partial<ChartOptions>; // With partial -> objecttypes are optional

  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "My X-mas presents",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
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
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  
  }

 

}
