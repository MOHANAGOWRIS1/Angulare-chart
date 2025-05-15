import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { DataService } from '../services/data.service';
import { ChartData } from '../models/data.model';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chartData: ChartData[] = [];
  chartOptions: EChartsOption = {};
  selectedChartType = 'bar';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.chartData = this.dataService.getData();
    this.initChartOptions();
  }

  onChartTypeChange(event: Event): void {
    this.selectedChartType = (event.target as HTMLSelectElement).value;
    this.initChartOptions();
  }

  private initChartOptions(): void {
    if (this.selectedChartType === 'pie') {
      this.initPieChartOptions();
    } else {
      this.initAxisChartOptions();
    }
  }

  private initAxisChartOptions(): void {
    this.chartOptions = {
      title: {
        text: 'Sample Data Visualization',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: this.chartData.map(item => item.category),
        axisLabel: {
          rotate: 45
        }
      },
      yAxis: {
        type: 'value',
        name: 'Value'
      },
      series: [
        {
          name: 'Value',
          type: this.selectedChartType as 'bar' | 'line',
          data: this.chartData.map(item => item.value),
          itemStyle: {
            color: '#3f51b5'
          }
        }
      ],
      grid: {
        bottom: '15%'
      }
    };
  }

  private initPieChartOptions(): void {
    this.chartOptions = {
      title: {
        text: 'Sample Data Visualization',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'Categories',
          type: 'pie',
          radius: '50%',
          data: this.chartData.map(item => ({
            name: item.category,
            value: item.value
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}