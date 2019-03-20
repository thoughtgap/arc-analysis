import { TestBed } from '@angular/core/testing';

import { ArcDataServerService } from './arc-data-server.service';

describe('ArcDataServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArcDataServerService = TestBed.get(ArcDataServerService);
    expect(service).toBeTruthy();
  });
});
