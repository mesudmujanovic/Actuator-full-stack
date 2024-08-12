import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActutatorService {

  private baseUrl = 'http://localhost:8081/actuator';

  constructor(private http: HttpClient) { }

  getHealth(): Observable<any> {
    return this.http.get(`${this.baseUrl}/health`).pipe(
      tap(data => console.log('Health Data:', data)),
      catchError(this.handleError<any>('getHealth', {}))
    );
  }

  getMetrics(): Observable<any> {
    return this.http.get(`${this.baseUrl}/metrics`).pipe(
      tap(data => console.log('Metrics Data:', data)),
      catchError(this.handleError<any>('getMetrics', {}))
    );
  }

  getInfo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/info`).pipe(
      tap(data => console.log('Info Data:', data)),
      catchError(this.handleError<any>('getInfo', {}))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
