import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries,
  chart: ApexChart,
  dataLabels: ApexDataLabels,
  plotOptions: ApexPlotOptions,
  responsive: ApexResponsive[],
  xaxis: ApexXAxis,
  yaxis: ApexYAxis,
  legend: ApexLegend,
  fill: ApexFill,
  title: ApexTitleSubtitle,
}

@Component({
  selector: 'app-columnchart',
  templateUrl: './columnchart.component.html',
  styleUrls: ['./columnchart.component.scss']
})
export class ColumnchartComponent implements OnInit {

  @ViewChild('chart')
  chart!: ChartComponent;

  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "1 Lifetime Purchase",
          data: [44, 55, 41, 67, 22, 43,13, 23, 20, 8, 13, 27]
        },
        {
          name: "2",
          data: [13, 23, 20, 8, 13, 27,11, 17, 15, 15, 21, 14]
        },
        {
          name: "3 to 4",
          data: [11, 17, 15, 15, 21, 14,21, 7, 25, 13, 22, 8]
        },
        {
          name: "5 to 9",
          data: [21, 7, 25, 13, 22, 8,44, 55, 41, 67, 22, 43]
        }
      ],
      chart: {
        type: "bar",
        height: 400,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "center",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: ["0","1","2","3","4","5","6","7","8","9","10","11"]
      },
      legend: {
        position: "bottom",
        offsetY: 0
      },
      fill: {
        opacity: 1
      },
      title: {
        text: 'Website Sessions by Hour of Day and User Lifetime Order Tier',
        align: 'center',
        style: {
          color: 'gray'
        }
      },
      yaxis: {
        title: {
          text: 'Sessions Count'
        }
      },
      dataLabels: {
        enabled: false,
      }
    };
  }

  ngOnInit(): void {
  }

}
