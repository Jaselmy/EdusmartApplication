import { TestBed } from '@angular/core/testing';

import { QpooService } from './qpoo.service';

describe('QpooService', () => {
  let service: QpooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QpooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
