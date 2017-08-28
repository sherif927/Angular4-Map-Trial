import { Injectable } from '@angular/core';
import { IActivity } from './shared/Activity.model';

export const ACTIVITES:IActivity[]=[
    {
     id:1,
     name:"Main Bike Trails",
     date:new Date('06/11/2015'),
     distance:6.2,
     comment:"Nice and sunny!",
     gpxData:"assets/gpx/1.gpx"
    },
    {
      id:2,
      name:"Industrial Park",
      date:new Date('08/21/2016'),
      distance:3.4,
      comment:"Warm and breezy",
      gpxData:"assets/gpx/2.gpx"
    },
    {
      id:3,
      name:"Midnight drive",
      date:new Date('01/01/2017'),
      distance:10.2,
      comment:"Was a bit chilly",
      gpxData:"assets/gpx/3.gpx"
    },
    {
      id:4,
      name:"Midnight walk",
      date:new Date('12/04/2017'),
      distance:2.4,
      comment:"Incredibly cold weather",
      gpxData:"assets/gpx/4.gpx"
    }

  ];
  
@Injectable()
export class ActivityService {
  private FIRST_ELEMENT:number=0;  
  constructor() { }

  getActivities(){
    return ACTIVITES.slice(0);
  }

  getActivity(id:number){
    return ACTIVITES[id-1];
  }

  getTotalDistanceCovered(activities:IActivity[]){
    var totalDistance=0,len=activities.length;
    for(var i=0;i<len;i++){
      totalDistance+=activities[i].distance;
    }return totalDistance;
  }

  getTotalActivitiesStored(activities:IActivity[]){
    return activities.length;
  }

  getFirstDate(activities:IActivity[]){
    var min=new Date('01/01/9999'),len=activities.length;
    for(var i=0;i<len;i++){
      if(min>activities[i].date){
        min=activities[i].date;
      }
    } return min;
  }

}
