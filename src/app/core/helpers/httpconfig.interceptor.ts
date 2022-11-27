import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if(request.url.indexOf("apicredentials") === -1){
      request = request.clone({
        headers: request.headers.set('Authorization', ""+sessionStorage.getItem("authorization") )
        .set('Accept','*/*')
        .set('Access-Control-Allow-Origin', '*')
        .set('Content-Type', 'application/json'),
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          //
        }
        return event;
      })
    );
  }
}
