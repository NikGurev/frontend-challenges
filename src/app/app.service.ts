import { Injectable } from '@angular/core';
import {activities} from "./data";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {PeriodType} from "./user-panel/user-panel.component";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // private selectedPeriodType: Subject<PeriodType>;
  private selectedPeriodType: BehaviorSubject<PeriodType>;
  selectedPeriodType$: Observable<PeriodType>;

  constructor() {
    // this.selectedPeriodType = new Subject<PeriodType>();
    this.selectedPeriodType = new BehaviorSubject<PeriodType>('daily');
    this.selectedPeriodType$ = this.selectedPeriodType.asObservable();
  }

  getActivities() {
    return activities;
  }

  changePeriodType(periodType: PeriodType): void {
    this.selectedPeriodType.next(periodType);
  }
}
