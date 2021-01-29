import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri:string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  //Create
  createDetail(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  //Get all Details
  getDetails() {
    return this.http.get(`${this.baseUri}`);
  }

  // Get Detail
  getDetail(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // update Detail
  updateDetail(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, {headers: this.headers}).pipe(
      catchError(this.errorMgmt)
    )
  }

  //delete Detail
  deleteDetail(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, {headers: this.headers}).pipe(
      catchError(this.errorMgmt)
    )
  }

  // error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //get client-side error
      errorMessage = error.error.message;
    } else {
      // get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: "{error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

