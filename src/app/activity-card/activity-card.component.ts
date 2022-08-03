import {Component, Input, OnInit} from '@angular/core';
import {PeriodType} from "../user-panel/user-panel.component";

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent implements OnInit {

  @Input() activity: any;

  @Input() periodType: PeriodType = 'daily';

  constructor() { }

  ngOnInit(): void {
  }

}
