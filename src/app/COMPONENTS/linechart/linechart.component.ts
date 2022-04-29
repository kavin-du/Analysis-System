import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexGrid, ApexStroke, ApexTitleSubtitle, ChartComponent, ApexLegend, ApexMarkers } from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  markers: ApexMarkers;
};

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  @ViewChild("chart") 
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Type 1",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 114, 33, 54, 78, 14, 25, 69]
        },
        {
          name: "Type 2",
          data: [45, 41, 11, 51, 85, 62, 44, 74, 79, 45, 14, 25, 69, 52, 12]
        }
      ],
      chart: {
        height: 400,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Most Correlated Brands",
        align: "center",
        style: {
          color: 'gray'
        }
      },
      grid: {
        show: true,
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        },
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
        
      },
      xaxis: {
        categories: ["Henry Segal","Trukishtowels","Cinema Etoile","Svanane","Bali","Key Industries","Gongshow","NEFF","Port & Company","Swim Systems", "Avenue", "Matrix", "Parker", "IZOD", "HUGO BOSS"]
      },
      legend: {
        show: false,
      },
      markers: {
        shape: 'circle',
        size: 5,
      }
    };
  }

  ngOnInit(): void {
  }

}
