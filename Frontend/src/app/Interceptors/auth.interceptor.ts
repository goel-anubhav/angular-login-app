import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Router} from '@angular/router'
import { catchError, Observable, tap, throwError } from "rxjs";
import {AuthService} from '../services/auth.service'
import { Injectable } from "@angular/core";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(
        private _router:Router,
        private _auth:AuthService
    ){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let req = request;
        let res: any;
        let newToken: any;
        let token = this._auth.getToken();
        if (token != null) {
          if(req.url.includes("/signin")){
            // req = req.clone({ setHeaders: { "Access-Control-Allow-Origin":"*" } });
          }else{
          req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
          }
        }
        return next.handle(req).pipe(
          tap((evt) => {
            if (evt instanceof HttpResponse) {
            //   this._spinner.show();
              if (evt.status==200) {
                res = evt;
                if (res.headers.has("NewToken")) {
                  newToken = res.headers.get("NewToken");
                  this._auth.setToken(newToken);
                }
              }
              if (evt.status == 500) {
                // this._toastr.error("Something Went Wrong", "Error");
                // this._spinner.hide();
              }
              if (evt.status == 401) {
                this._router.navigate([""]);
                // this._spinner.hide();
              }
            }
            if (evt instanceof HttpErrorResponse) {
            //   this._spinner.hide();
              alert(evt.error);
            }
          }),
          catchError((err) => this.handleError(err))
        );
      }
      private handleError(error: HttpErrorResponse): Observable<any> {
        // this.spinner.stop();
        if (error.status === 401) {
        //   this._toastr.error("Session Expired");
          this._auth.logOut();
        //   this._spinner.hide();
          return throwError(()=>error);
        }
        if (error.status === 500) {
          // this.swalService.error("Internal Server Error");
          return throwError(()=>error);
        }
        if (error.status == 404) {
          return throwError(()=>error);
        }
        if (error.status == 400) {
          return throwError(()=>error);
        }
        if (error.status == 504) {
          return throwError(()=>error);
        }
        return throwError(()=>error);
      }
    }