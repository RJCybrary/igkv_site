import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GeoService {

// Note: ip-api.com free tier uses HTTP. 
  // If your site is HTTPS, this may be blocked by "Mixed Content" rules.
  private apiUrl = 'https://ipapi.co/json/';

  constructor(private http: HttpClient) {}

  getCountryDetails(): Observable<any> {
    // When calling ip-api without an IP at the end, 
    // it automatically detects the IP of the requester.
    return this.http.get(this.apiUrl).pipe(
      map((res: any) => {
        if (res.status === 'fail') throw new Error(res.message);
        
        return {
          country: res.country || 'Unknown',
          ip: res.ip,
          city:res.city
        };
      }),
      catchError(error => {
        console.error('Geo API Error:', error);
        return of({ country: 'Unknown', ip: '0.0.0.0' });
      })
    );
  }
}