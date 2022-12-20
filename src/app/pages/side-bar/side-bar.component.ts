import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { BarData } from 'src/app/Models/bar-data';
import { BarDataService } from 'src/app/Services/bar-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent  {

  constructor(private barDataService: BarDataService) {}

  barColor: string = this.barDataService.barsColor;
  data = this.barDataService.dataSample;

  // Add on x-axis
  addOnXaxis(input: string) {
    this.barDataService.addOnXaxis(input);
  }

  // Add bar Value
  addBarValue(val: string) {
    this.barDataService.addBarValue(val);
  }

  // Change bar color
  ChangeBarColor(newColor: string) {
    this.barDataService.changeDatasetBarColor(newColor);
  }

  // Delete Value
  deleteValue(index : number) {
    this.barDataService.deleteValue(index);
  }

}
