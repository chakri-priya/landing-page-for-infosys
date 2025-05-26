import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VaccineService {
  private baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getVaccineTypes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/vaccines`);
  }

  getLocations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/locations`);
  }
}
