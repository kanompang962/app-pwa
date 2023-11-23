import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private apiUrl = 'https://api.thecatapi.com/v1/images/search'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getCats(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
