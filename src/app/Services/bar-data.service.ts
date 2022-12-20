import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';
import { BarData } from '../Models/bar-data';

@Injectable({
  providedIn: 'root'
})
export class BarDataService {

  barCopy! : Chart;

  // 3shan a3redhom f Table mfrood yb2a shaklo kda:
  /* 
    => in case of one bar
    on x-axis -- bar value -- color
  */

  dataSample: BarData = {
    data: {
      labels: ['Alexandria', 'Cairo', 'Giza', 'Sohag', 'Aswan', 'Luxor', 'Siwa', 'Dahab'],
      datasets: [
        {
          label: "Sample data",
          data: ['467','576', '572', '120', '320', '190', '300', '500'],
          backgroundColor: '#f472b6'
        },
        /* {
          label: "Profit",
          data: ['542', '542', '536', '327', '17', '100', '538', '541', '800'],
          backgroundColor: '#0ea5e9'
        } */

      ]
    },
    options: {
      aspectRatio:2.5
    }
  }

  onXaxis: string = '';
  barValue: string = '';
  barsColor: string = this.dataSample.data.datasets[0].backgroundColor;

  constructor() { }

  // Add on x-axis
  addOnXaxis(input: string) {
    this.dataSample.data.labels.push(input);
    this.barCopy.update();
  }

  // Add bar value
  addBarValue(val: string) {
    this.dataSample.data.datasets[0].data.push(val);
    this.barCopy.update();
  }

  // Change dataset bar color
  changeDatasetBarColor(newColor: string) {
    this.dataSample.data.datasets[0].backgroundColor = newColor;
    this.barCopy.update();
  }

  // Delete Value
  deleteValue(index: number) {
    if( index == 0 ) {
      this.dataSample.data.datasets[0].data.shift();
      this.dataSample.data.labels.shift();
    }
    else {
      this.dataSample.data.datasets[0].data.splice(index, 1);
      this.dataSample.data.labels.splice(index,1);
    }
    this.barCopy.update();
  }


}
