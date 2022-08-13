import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { ActivityCardComponent } from '../activity-card/activity-card.component';
import { ActivitiesComponent } from '../activities/activities.component';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { TodoComponent } from '../todo/todo.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserPanelComponent,
    ActivityCardComponent,
    ActivitiesComponent,
    TodoCardComponent,
    TodoComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
      SharedModule
  ],
  exports: [
      TodoCardComponent
  ]
})
export class DashboardModule { }
