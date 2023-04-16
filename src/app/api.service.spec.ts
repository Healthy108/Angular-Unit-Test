import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ApiService', () => {
  let apiService: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    apiService = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should return data from API', () => {
    const testData = { 
      id: 1,
      foo: 'bar' 
    };

    apiService.getData().subscribe(data => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne('http://localhost:3000/testMockData');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });
});
