import { Component, OnInit } from '@angular/core';
import { IActivity } from '../shared/Activity.model';
import { ActivityService } from '../activity.service';
@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  
  activityList:IActivity[];
  totalDistance:number;
  totalActivities:number;
  firstDate:Date;

  constructor(private serviceInstance:ActivityService) { }

  ngOnInit() {
    //TODO get activity list from injected service
    this.activityList=this.serviceInstance.getActivities();
    this.totalDistance=this.serviceInstance.getTotalDistanceCovered(this.activityList);
    this.totalActivities=this.serviceInstance.getTotalActivitiesStored(this.activityList);
    this.firstDate=this.serviceInstance.getFirstDate(this.activityList);
  }

}
