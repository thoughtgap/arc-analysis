import { Component, OnInit } from '@angular/core';
import { TimelineItem } from '../TimelineItem';
import { TimelineItemListService } from '../timeline-item-list.service'
import { MessageService } from '../message.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: TimelineItem[] = [];
 
  constructor(private heroService: TimelineItemListService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.heroService.getTimelineItems()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}