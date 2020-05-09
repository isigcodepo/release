import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Measure } from '../modules/map/map.component';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private baseUrl = 'http://localhost:8080/test';
  constructor(private http: HttpClient) { }

  getActualMeasuresList1() {
    return this.http.get(`${this.baseUrl}/actualmeasure`);
  }
}
