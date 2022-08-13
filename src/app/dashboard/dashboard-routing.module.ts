import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { ActivitiesComponent } from '../activities/activities.component';
import { TodoComponent } from '../todo/todo.component';
import { TodoCardComponent } from '../todo-card/todo-card.component';

const routes: Routes = [
        { path: '', redirectTo: 'activities', pathMatch: 'full' },
        { path: 'activities', component: ActivitiesComponent },
        { path: 'todo', component: TodoComponent },
        { path: 'todo/:id', component: TodoCardComponent },
      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
