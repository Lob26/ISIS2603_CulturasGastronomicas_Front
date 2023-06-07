import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from 'src/environments/environment';
import {catchError, Observable, throwError} from 'rxjs';
import {RecipeDetail} from "./recipe-detail";
import {RestaurantDetail} from "../restaurant/restaurant-detail";


@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  protected apiUrl: string = `${environment.baseUrl}recipe`;

  constructor(private http: HttpClient) {
  }

  getRecipes(): Observable<RecipeDetail[]> {
    return this.http
      .get<RecipeDetail[]>(`${this.apiUrl}/all`)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio')))
      );
  }

  getRecipe(id: string): Observable<RecipeDetail> {
    return this.http.get<RecipeDetail>(`${this.apiUrl}?id=${id}`);
  }

  createRecipe(culture: RecipeDetail): Observable<RecipeDetail> {
    return this.http.post<RecipeDetail>(this.apiUrl, culture);
  }

  getRestaurants(id: number) {
    return this.http.get<RestaurantDetail[]>(`${this.apiUrl}/${id}/restaurant/all`)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio')))
      );
  }

  createRestaurant(id: number, restaurant: RestaurantDetail) {
    return this.http.post(`${this.apiUrl}/${id}/restaurant`, restaurant);
  }
}
