import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_KEY = '258d6bffb21b34eae12a3af9d556be24';

@Injectable()
export class HeaderFootbalApiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const reqFootbal = req.clone({
      headers: req.headers
        .set('x-rapidapi-host', 'v3.football.api-sports.io')
        .set('x-rapidapi-key', API_KEY),
    });

    // send cloned request with header to the next handler.
    return next.handle(reqFootbal);
  }
}
