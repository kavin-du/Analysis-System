import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ChartComponent } from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexNonAxisChartSeries,
  chart: ApexChart,
  responsive: ApexResponsive[],
  labels: any,
  plotOptions: ApexPlotOptions,
}

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  @ViewChild('chart')
  chart!: ChartComponent;

  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ["Chrome", "Safari", "Firefox", "IE", "Other"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            }
          }
        }
      ],
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      }
    };
   }

  ngOnInit(): void {
  }

}
