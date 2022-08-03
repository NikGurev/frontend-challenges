import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppService} from "../app.service";

export type PeriodType = 'daily' | 'weekly' | 'monthly';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  userName = 'Jeremy Robson';

  // @Output() periodChanged = new EventEmitter<PeriodType>();

  constructor(private service: AppService) { }

  ngOnInit(): void {
  }

  onClick(periodType: PeriodType): void {
    this.service.changePeriodType(periodType);
    // this.periodChanged.emit(periodType);
  }
}
