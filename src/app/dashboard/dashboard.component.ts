import { Component, OnInit } from '@angular/core';
import { ArcTimelineItem } from '../ArcTimelineItem';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: ArcTimelineItem[] = [];
  baseUrl: string;
 
  constructor() { }
 
  ngOnInit() {

  }
 

}