import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn:'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }

  getData(page: number, size: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('size', size.toString());

    return this._http.get<any>(`${environment.base_url}admin/userspage?`, { params });
  }
  handleError(httpError:HttpErrorResponse){
    return throwError(httpError)
  }
}
