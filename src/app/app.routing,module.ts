import { NgModule,Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

const routes:Routes=[ 
  { path: '', redirectTo: '/activities', pathMatch: 'full'},
  { path: 'details/:id', component: ActivityDetailComponent },
  { path: 'activities',     component: ActivityListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}