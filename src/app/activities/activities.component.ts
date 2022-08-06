import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeriodType } from '../user-panel/user-panel.component';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit, OnDestroy {

  activitiyList: any;

  selectedActivitiesList: any;

  periodType: PeriodType;

  subscription?: Subscription;

  constructor(private service: AppService) {
    this.activitiyList = [];
    this.periodType = 'daily';
  }

  ngOnInit() {
    this.activitiyList = this.service.getActivities();
    /*
    * Возвращает [{title: 'test', current: 0, previous: 0},...]
    * */
    // this.resetData();

    const subscription = this.service.selectedPeriodType$.subscribe(periodType => {
      this.periodType = periodType;
      this.resetData();
    });

    this.subscription?.add(subscription);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  // onPeriodChange(periodType: PeriodType) {
  //   this.periodType = periodType;
  //   this.resetData();
  // }

  resetData(): void {
    this.selectedActivitiesList = this.activitiyList.map((activity: any) => {
      return {title: activity.title, ...activity.timeframes[this.periodType]}
    });
  }

}
