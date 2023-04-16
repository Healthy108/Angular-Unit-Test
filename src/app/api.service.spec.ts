import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiStubService } from './api-stub.service';


describe('ApiService', () => {
  let apiService: ApiService;
  // let apiService: ApiStubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
      // providers: [ApiStubService]
    });
    apiService = TestBed.inject(ApiService);
    // apiService = TestBed.inject(ApiStubService);
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

  // it('should get data info from ApiServiceStub', () => {
  //   const dataa = apiService.getData('url');
  //   // Kiểm tra dữ liệu trả về từ UserService có đúng hay không
  //   expect(dataa).toEqual({ data: 'a'; });
  // });
});
