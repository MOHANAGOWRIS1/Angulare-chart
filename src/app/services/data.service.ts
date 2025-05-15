import { Injectable } from '@angular/core';
import { ChartData } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sampleData: ChartData[] = [
    { category: 'Category A', value: 45 },
    { category: 'Category B', value: 72 },
    { category: 'Category C', value: 28 },
    { category: 'Category D', value: 60 },
    { category: 'Category E', value: 35 }
  ];

  constructor() { }

  getData(): ChartData[] {
    return this.sampleData;
  }
}