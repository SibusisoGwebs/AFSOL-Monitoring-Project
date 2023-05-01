import { TestBed } from '@angular/core/testing';

import { VideoFootageService } from './video-footage.service';

describe('VideoFootageService', () => {
  let service: VideoFootageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoFootageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
