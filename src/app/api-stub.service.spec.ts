import { TestBed } from '@angular/core/testing';

import { ApiStubService } from './api-stub.service';

describe('ApiStubService', () => {
  let service: ApiStubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
