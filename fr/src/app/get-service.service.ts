import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private http: HttpClient) {
  }


  getValue(): Observable<{ value: string }> {
    return this.http.get<{ value: string }>('/api/test');
  }
}
