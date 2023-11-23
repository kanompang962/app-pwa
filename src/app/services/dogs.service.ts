import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  private apiUrl = 'http://universities.hipolabs.com/search?country=United+States'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getDogs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
