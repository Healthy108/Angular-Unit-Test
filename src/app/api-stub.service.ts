import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiStubService {

  constructor() { }

   getData(): Observable<any> {
    // Trả về một giá trị giả định
    return of({ id: 1, foo: 'bar' });
  }

}
