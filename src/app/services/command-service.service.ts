import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from './constant/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandServiceService {
  private baseUrl = Constants.baseUrl;
  constructor(private http: HttpClient) {  }

  getCommand(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCommand(device: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/commands`, device);
  }

  updateCommand(device: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/commands`, device);
  }

  deleteCommand(device: Object): Observable<any> {
      return this.http.delete(`${this.baseUrl}/commands`,);
  }

  getCommandsList() {
     return this.http.get(`${this.baseUrl}/commands`);
  }
}
