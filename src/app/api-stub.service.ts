import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiStubService {

  constructor() { }

   // Phương thức giả định của HttpService
   getData(url: string): Observable<any> {
    // Trả về một giá trị giả định
    return of({ data: 'Mocked data' });
  }

}
