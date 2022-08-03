import { Component } from '@angular/core';
import {activities} from "./data";
import {PeriodType} from "./user-panel/user-panel.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  activitiyList = activities;

  selectedActivitiesList: any;

  periodType: PeriodType;

  constructor() {
    this.periodType = "daily";
    /*
    * Возвращает [{title: 'test', current: 0, previous: 0},...]
    * */
    this.resetData();
  }

  onPeriodChange(periodType: PeriodType) {
    this.periodType = periodType;
    this.resetData();
  }

  resetData(): void {
    this.selectedActivitiesList = this.activitiyList.map(activity => {
      return {title: activity.title, ...activity.timeframes[this.periodType]}
    });
  }
}
