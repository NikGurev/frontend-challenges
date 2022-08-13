import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PeriodType } from './user-panel/user-panel.component';
import { activities } from './data';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class Store {


  // private selectedPeriodType: Subject<PeriodType>;
  private selectedPeriodType: BehaviorSubject<PeriodType>;
  selectedPeriodType$: Observable<PeriodType>;


  private selectedActivities: BehaviorSubject<Todo[]>;
  selectedActivities$: Observable<Todo[]>;


  constructor(private http: HttpClient) {
    this.selectedPeriodType = new BehaviorSubject<PeriodType>('daily');
    this.selectedPeriodType$ = this.selectedPeriodType.asObservable();

    this.selectedActivities = new BehaviorSubject<any>([]);
    this.selectedActivities$ = this.selectedActivities.asObservable();
  }

  init() {
    this.getTodos().pipe(
        tap((todos: Todo[]) => this.selectedActivities.next(todos))
    ).subscribe();
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTodoById(id: string) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  selectActiveTodo() {
  }

  selectTodoById(id: string) {
  }
}
