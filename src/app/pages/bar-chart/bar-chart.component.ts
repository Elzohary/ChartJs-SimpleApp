import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { BarData } from 'src/app/Models/bar-data';
import { BarDataService } from 'src/app/Services/bar-data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  public chart: any;
  @ViewChild('el') divCont!: ElementRef;

  constructor(private barDataService: BarDataService) {}

  ngOnInit(): void {
    this.createChart();
    this.barDataService.barCopy = this.chart;
  }


  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.barDataService.dataSample.data.labels,
	       datasets: this.barDataService.dataSample.data.datasets
      },
      options: this.barDataService.dataSample.options
      
    });
  }

  add(input: string) {
    this.barDataService.dataSample.data.labels.push(input);
    this.chart.update();
  }
  


}
