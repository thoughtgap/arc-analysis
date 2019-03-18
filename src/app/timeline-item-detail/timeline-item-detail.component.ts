import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TimelineItem } from '../TimelineItem';
import { TimelineItemListService } from '../timeline-item-list.service'

@Component({
  selector: 'app-timeline-item-detail',
  templateUrl: './timeline-item-detail.component.html',
  styleUrls: ['./timeline-item-detail.component.scss']
})

export class TimelineItemDetailComponent implements OnInit {
  @Input() timelineItem: TimelineItem;
  //timelineItem: TimelineItem;

  constructor(
    private route: ActivatedRoute,
    private timelineItemListService: TimelineItemListService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.timelineItemListService.getTimelineItem(id)
      .subscribe(item => this.timelineItem = item);
  }

  goBack(): void {
    this.location.back();
  }
}
