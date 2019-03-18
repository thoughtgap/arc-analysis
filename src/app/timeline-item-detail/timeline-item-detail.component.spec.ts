import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineItemDetailComponent } from './timeline-item-detail.component';

describe('TimelineItemDetailComponent', () => {
  let component: TimelineItemDetailComponent;
  let fixture: ComponentFixture<TimelineItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
