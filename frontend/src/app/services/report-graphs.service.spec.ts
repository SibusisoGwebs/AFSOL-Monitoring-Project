import { TestBed } from '@angular/core/testing';

import { ReportGraphsService } from './report-graphs.service';

describe('ReportGraphsService', () => {
  let service: ReportGraphsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportGraphsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
