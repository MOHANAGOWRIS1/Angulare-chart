import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Data Visualization with Angular and ECharts';
  description = 'This application demonstrates the integration of ECharts in an Angular application to visualize sample data.';
}