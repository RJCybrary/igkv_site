import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 private configurl = environment.rootURL;

  constructor(private http: HttpClient) {}

  getapi<T = any>(functionname: string): Observable<T> {
    return this.http.get<T>(this.configurl + functionname);
  }

  postapi<T = any>(functionname: string, data: any): Observable<T> {
    return this.http.post<T>(this.configurl + functionname, data);
  }

  putapi<T = any>(functionname: string, data: any): Observable<T> {
    return this.http.put<T>(this.configurl + functionname, data);
  }

  deleteapi<T = any>(functionname: string): Observable<T> {
    return this.http.delete<T>(this.configurl + functionname);
  }

  getLiveapi<T = any>(apiUrl: string): Observable<T> {
    return this.http.get<T>(apiUrl);
  }
}
