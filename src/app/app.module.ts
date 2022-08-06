import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ActivityCardComponent } from './activity-card/activity-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { ActivitiesComponent } from './activities/activities.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    ActivityCardComponent,
    DashboardComponent,
    TodoComponent,
    ActivitiesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
