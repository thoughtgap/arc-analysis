import { TestBed } from '@angular/core/testing';

import { TimelineItemListService } from './timeline-item-list.service';

describe('TimelineItemListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimelineItemListService = TestBed.get(TimelineItemListService);
    expect(service).toBeTruthy();
  });
});
