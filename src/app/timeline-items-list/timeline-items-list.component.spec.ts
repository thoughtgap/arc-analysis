import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineItemsListComponent } from './timeline-items-list.component';

describe('TimelineItemsListComponent', () => {
  let component: TimelineItemsListComponent;
  let fixture: ComponentFixture<TimelineItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
