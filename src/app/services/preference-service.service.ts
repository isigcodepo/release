import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferenceServiceService {
  private baseUrl = 'http://localhost:8080/test';

  constructor(private http: HttpClient) {  }

  updateDevice(preference: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/preferences`, preference);
  }

}
