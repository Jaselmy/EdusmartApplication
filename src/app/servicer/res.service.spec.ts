import { TestBed } from '@angular/core/testing';

import { ResService } from './res.service';

describe('ResService', () => {
  let service: ResService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
