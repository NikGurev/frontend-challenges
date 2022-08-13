import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  constructor(
      private store: StoreService,
      private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.url
        .subscribe(value => {
          const id = value.pop()?.path || '';
          return this.store.getTodoById(id).subscribe();
        });
  }

}
