import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.development'
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authDirectory="auth"
  constructor(private _http:HttpClient, private _router:Router) { }

  login(body:any){
    return this._http.post(`${environment.base_url}${this.authDirectory}/signin`,body,{responseType:'json'}).pipe(catchError(this.handleError))
  }
  register(body:any){
    return this._http.post(`${environment.base_url}${this.authDirectory}/signup`,body,{responseType:'json'}).pipe(catchError(this.handleError))
  }
  setToken(token: string) {
    if (token != null && token != '') {
      localStorage.setItem('Token', token);
      console.log("<---Set Token---->",token)
    }
  }
  isLogin() {
    var token =
      localStorage.getItem('Token') == null
        ? null
        : localStorage.getItem('Token');
    return token == null ? false : true;
  }
  getToken(){
    var token =
    localStorage.getItem('Token') == null
      ? ''
      : localStorage.getItem('Token');
  return token == null ? null : token;
  }
  logOut() {
    localStorage.removeItem('Token');
    localStorage.clear();
    this._router.navigateByUrl("/login");
    return;
  }
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error);
    return throwError('Something bad happened; please try again later.');
  }
}
