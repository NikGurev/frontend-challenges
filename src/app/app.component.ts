import { Component } from '@angular/core';
import {activities} from "./data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  activitiyList = activities;

  constructor() {

  }
}
