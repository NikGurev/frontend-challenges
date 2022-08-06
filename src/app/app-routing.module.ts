import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivitiesComponent } from './activities/activities.component';
import { TodoComponent } from './todo/todo.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', component: DashboardComponent,
      children: [
        { path: 'activities', component: ActivitiesComponent },
        { path: 'todo', component: TodoComponent },
      ]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
