import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiStubService } from './api-stub.service';


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

  // GET DATA FROM SERVER
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

  // POST DATA TO SERVER
  it('should send data to server successfully', () => {
    const testDataPost = { 
      id: 2,
      foo: 'bar2' 
    };
    apiService.postData(testDataPost).subscribe(data => {
      expect(data).toEqual(testDataPost);
    });
    const req = httpMock.expectOne('http://localhost:3000/testMockData');
    expect(req.request.method).toBe('POST');
    req.flush(testDataPost);

  })

});

// STUBB SERVICE
describe('ApiService', () => {
  let apiService: ApiStubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiStubService]
    });
    apiService = TestBed.inject(ApiStubService);
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should get data info from ApiServiceStub', () => {
    const result = apiService.getData();
    // Kiểm tra dữ liệu trả về từ ApiServiceStub có đúng hay không
    result.subscribe(data => {
      expect(data).toEqual({ id: 1, foo: 'bar' });
    })
  });

});
