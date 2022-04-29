import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexResponsive, ApexPlotOptions, ChartComponent, ApexDataLabels, ApexTitleSubtitle, ApexLegend } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries,
  chart: ApexChart,
  labels: any,
  responsive: ApexResponsive[],
  plotOptions: ApexPlotOptions,
  title: ApexTitleSubtitle,
  legend: ApexLegend,
}

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {

  @Input() showLegend = true;
  @Input() title!: string;

  @ViewChild('chart')
  chart!: ChartComponent;

  public chartOptions!: Partial<ChartOptions>;

  // constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      
      series: [44, 55, 13, 43, 22],
      chart: {
        width: this.showLegend ? 372 : 300,
        type: 'donut',
      },
      labels: ["Display", "Email", "Facebook", "Organic", "Search"],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '52%',
          }
        },
      },
      responsive: [
        {
          breakpoint: 1000,
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
      title: {
        text: this.title,
        align: 'center',
        offsetX: 0,
        offsetY: 125,
      },
      legend: {
        show: this.showLegend,
        position: 'bottom'
      }
    };
   }

}
