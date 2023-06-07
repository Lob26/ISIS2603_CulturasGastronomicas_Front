import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from 'src/environments/environment';
import {catchError, Observable, throwError} from 'rxjs';
import {RestaurantDetail} from "./restaurant-detail";

// noinspection JSUnusedGlobalSymbols
@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  protected apiUrl: string = `${environment.baseUrl}restaurant`;

  constructor(private http: HttpClient) {
  }

  getRestaurants(): Observable<RestaurantDetail[]> {
    return this.http
      .get<RestaurantDetail[]>(`${this.apiUrl}/all`)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio' + err)))
      );
  }

  getRestaurant(id: string): Observable<RestaurantDetail> {
    return this.http.get<RestaurantDetail>(`${this.apiUrl}?id=${id}`);
  }
}
