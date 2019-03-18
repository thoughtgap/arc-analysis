import { Component, OnInit } from '@angular/core';
import { TimelineItem } from '../TimelineItem';
import { TimelineItemListService } from '../timeline-item-list.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-timeline-items-list',
  templateUrl: './timeline-items-list.component.html',
  styleUrls: ['./timeline-items-list.component.scss']
})
export class TimelineItemsListComponent implements OnInit {
  constructor(private timelineItemListService: TimelineItemListService, private messageService: MessageService) { }

  
  test: TimelineItem = {
    id: 1,
    name: "lala"
  };

  //heroes = TLITEMS;
  heroes: TimelineItem[];
  public localData

  // tlItem: TimelineItem = {
  //   id: 1,
  //   name: "lalala"
  // }

  selectedTimelineItem: TimelineItem;
  onSelect(tlItem: TimelineItem): void {
    this.messageService.add('Selected an entry');
    this.selectedTimelineItem = tlItem;
  }

  getTimelineItems(): void {
    this.timelineItemListService.getTimelineItems()
        .subscribe(heroes => this.heroes = heroes);
  }

  getTimelineItemsNew(): void {
    this.timelineItemListService.getTimelineItemsNew()
        .subscribe(html => this.localData = html["response"]);
  }

  ngOnInit() {
    this.getTimelineItems();
    this.getTimelineItemsNew();
  }

}
