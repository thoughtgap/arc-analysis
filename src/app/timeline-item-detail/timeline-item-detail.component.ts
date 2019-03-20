import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArcTimelineItem } from '../ArcTimelineItem';
import { ArcDataServerService } from '../arc-data-server.service'

@Component({
  selector: 'app-timeline-item-detail',
  templateUrl: './timeline-item-detail.component.html',
  styleUrls: ['./timeline-item-detail.component.scss']
})

export class TimelineItemDetailComponent implements OnInit {
  @Input() timelineItem: ArcTimelineItem;
  //timelineItem: TimelineItem;

  constructor(
    private route: ActivatedRoute,
    private timelineItemListService: ArcDataServerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTimelineItem();
  }
  
  getTimelineItem(): void {
    // Get ID from URL
    const id = +this.route.snapshot.paramMap.get('id');

    // Get Item through Service
    this.timelineItemListService.getTimelineItem(id)
      .subscribe(item => this.timelineItem = item);
  }

  goBack(): void {
    this.location.back();
  }
}
