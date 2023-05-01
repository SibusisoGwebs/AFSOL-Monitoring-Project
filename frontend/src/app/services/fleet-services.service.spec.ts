import { TestBed } from '@angular/core/testing';

import { FleetServicesService } from './fleet-services.service';

describe('FleetServicesService', () => {
  let service: FleetServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleetServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
