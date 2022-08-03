import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from "./app-routing.module";
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ActivityCardComponent } from './activity-card/activity-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    UserPanelComponent,
    ActivityCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
