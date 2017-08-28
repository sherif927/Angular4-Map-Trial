import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing,module';

import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

import { ActivityService } from './activity.service';
import { MapService } from './map.service';
@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    ActivityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ActivityService,MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
