import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapService } from '../map.service';
import { IActivity } from '../shared/Activity.model';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})

export class ActivityDetailComponent implements OnInit {
  activity:IActivity;  
  activityName: string;
  activityComments: string;
  activityDate: Date;
  activityDistance: number;
  gpx: any;

  constructor(private serviceInstance:MapService,private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.activity = this.serviceInstance.getActivity(
      +this.route.snapshot.params['id'])
  }
  
     ngAfterViewInit(){
    this.serviceInstance.plotActivity(+this.route.snapshot.params['id']);
    this.activityName = this.activity.name;
    this.activityComments = this.activity.comment;
    this.activityDistance = this.activity.distance;
    this.activityDate = this.activity.date;
    this.gpx = this.activity.gpxData;
  }

}
