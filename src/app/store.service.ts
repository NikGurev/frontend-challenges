import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PeriodType } from './user-panel/user-panel.component';
import { activities } from './data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  // private selectedPeriodType: Subject<PeriodType>;
  private selectedPeriodType: BehaviorSubject<PeriodType>;
  selectedPeriodType$: Observable<PeriodType>;


  private selectedActivities: BehaviorSubject<any>;
  selectedActivities$: Observable<PeriodType>;


  constructor(private http: HttpClient) {
    this.selectedPeriodType = new BehaviorSubject<PeriodType>('daily');
    this.selectedPeriodType$ = this.selectedPeriodType.asObservable();

    this.selectedActivities = new BehaviorSubject<any>([]);
    this.selectedActivities$ = this.selectedPeriodType.asObservable();
  }

  init() {
    this.getActivities();
  }

  getActivities() {
    return activities;
  }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getTodoById(id: string) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
