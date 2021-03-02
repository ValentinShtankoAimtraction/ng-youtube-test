import { TestBed } from '@angular/core/testing';

import { DtGridService } from './dt-grid.service';

describe('DtGridService', () => {
  let service: DtGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DtGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
