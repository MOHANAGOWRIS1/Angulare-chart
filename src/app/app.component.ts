import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ChartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'echarts-visualization';
}

