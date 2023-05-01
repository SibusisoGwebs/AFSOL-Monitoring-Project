import { TestBed } from '@angular/core/testing';

import { HistoryMaintainainceService } from './history-maintainaince.service';

describe('HistoryMaintainainceService', () => {
  let service: HistoryMaintainainceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryMaintainainceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
