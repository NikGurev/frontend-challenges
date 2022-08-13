import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivitiesComponent } from './activities/activities.component';
import { TodoComponent } from './todo/todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoCardComponent } from './todo-card/todo-card.component';

const routes: Routes = [
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
