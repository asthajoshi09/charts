import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ChartComponent,
  ApexFill,
  ApexTheme,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexGrid,
  ApexLegend


} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  theme: ApexTheme;
  labels: any;
  fill: any;

};

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent {

  @ViewChild("chart")
  chart: ChartComponent = new ChartComponent;
  public chartOptions: any;
  public donutChartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "1-info",
          data: [250, 310, 1200, 320, 250],


        }
      ],
      theme: { mode: "dark" },

      colors: ['#70A7B4', '#D8C14A', '#2CAED6', '#CD1D33', '#D9882E'],

      chart: {
        height: 350,
        type: "bar",
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          color: '#fff',

        }


      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      title: {
        enabled: true,
        text: "Vulnerabilities By Severity",

      },
      xaxis: {
        categories: ["1-info", "2-low", "3-medium", "4-critical", "5-high"],


      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          distributed: true
        }
      },


    };
    this.donutChartOptions = {
      series: [22.2, 15, 4, 4, 19.5, 22.2, 13.1, 0, 0, 0],

      chart: {
        height: 350,
        type: "donut",

      },
      theme: { mode: "dark" },
      title: {
        text: "Vulnerabilities By CVSS Score"
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,


              total: {
                showAlways: true,
                show: true
              }
            }
          }
        }
      },
      labels:

        ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10"]
    };

  }
}
