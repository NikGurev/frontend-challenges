import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, Todo } from '../store.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(
      private activatedRoute: ActivatedRoute,
      private store: Store
  ) { }

  ngOnInit(): void {
   this.activatedRoute.url.subscribe(value => console.log(value));

   this.todos$ = this.store.selectedActivities$

  }

}
