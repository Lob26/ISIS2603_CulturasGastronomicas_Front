import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from 'src/environments/environment';
import {catchError, Observable, throwError} from 'rxjs';
import {RepresentativeProduct} from './representative-product';


@Injectable({
  providedIn: 'root'
})
export class RepresentativeProductService {
  private apiUrl: string = environment.baseUrl + 'products';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<RepresentativeProduct[]> {
    return this.http
      .get<RepresentativeProduct[]>(this.apiUrl)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio')))
      );
  }

  getProduct(name: string): Observable<RepresentativeProduct> {
    return this.http.get<RepresentativeProduct>(this.apiUrl + '/' + name);
  }

  createProduct(product: RepresentativeProduct): Observable<RepresentativeProduct> {
    return this.http.post<RepresentativeProduct>(this.apiUrl, product);
  }


}
