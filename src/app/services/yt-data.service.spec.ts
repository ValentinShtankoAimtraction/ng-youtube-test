import { TestBed } from '@angular/core/testing';

import { YtDataService } from './yt-data.service';

describe('YtDataService', () => {
  let service: YtDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
