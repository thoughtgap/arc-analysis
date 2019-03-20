import { Component, OnInit } from '@angular/core';
import { ArcTimelineItem } from '../ArcTimelineItem';
import { ArcDataServerService } from '../arc-data-server.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-timeline-items-list',
  templateUrl: './timeline-items-list.component.html',
  styleUrls: ['./timeline-items-list.component.scss']
})
export class TimelineItemsListComponent implements OnInit {
  constructor(private timelineItemListService: ArcDataServerService, private messageService: MessageService) { }

  
  //heroes = TLITEMS;
  heroes: ArcTimelineItem[];
  public localData: ArcTimelineItem[];

  selectedTimelineItem: ArcTimelineItem;
  onSelect(tlItem: ArcTimelineItem): void {
    this.messageService.add('Selected an entry');
    this.selectedTimelineItem = tlItem;
  }

  // getTimelineItems(): void {
  //   this.timelineItemListService.getTimelineItems()
  //       .subscribe(heroes => this.heroes = heroes);
  // }

  getTimelineItemsNew(): void {
    this.timelineItemListService.getTimelineItemsNew()
        .subscribe(html => this.localData = html["response"]);
  }

  ngOnInit() {
    this.getTimelineItemsNew();
  }

}
