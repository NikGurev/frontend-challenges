import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.activatedRoute.url.subscribe(value => console.log(value));
  }

}
