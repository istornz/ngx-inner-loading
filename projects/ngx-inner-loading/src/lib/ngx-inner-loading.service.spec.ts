import { TestBed } from '@angular/core/testing';

import { NgxInnerLoadingService } from './ngx-inner-loading.service';

describe('NgxInnerLoadingService', () => {
  let service: NgxInnerLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxInnerLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
