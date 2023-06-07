import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from 'src/environments/environment';
import {catchError, Observable, throwError} from 'rxjs';
import {GastronomicCultureDetail} from "./gastronomic-culture-detail";
import {GastronomicCategoryDetail} from "../category/gastronomic-category-detail";
import {CountryDetail} from "./country-detail";
import {RecipeDetail} from "../recipe/recipe-detail";

// noinspection JSUnusedGlobalSymbols
@Injectable({
  providedIn: 'root',
})
export class CultureService {
  protected apiUrl: string = `${environment.baseUrl}culture`;

  constructor(private http: HttpClient) {
  }

  getCultures(): Observable<GastronomicCultureDetail[]> {
    return this.http
      .get<GastronomicCultureDetail[]>(`${this.apiUrl}/all`)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio' + err)))
      );
  }

  getCulture(id: string): Observable<GastronomicCultureDetail> {
    return this.http.get<GastronomicCultureDetail>(`${this.apiUrl}?id=${id}`);
  }

  getCategories(id: string) {
    return this.http.get<GastronomicCategoryDetail[]>(`${this.apiUrl}/${id}/category/all`)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio' + err)))
      );

  }

  getCountries(id: string) {
    return this.http.get<CountryDetail[]>(`${this.apiUrl}/${id}/country/all`)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio' + err)))
      );
  }

  getRecipes(id: string) {
    return this.http.get<RecipeDetail[]>(`${this.apiUrl}/${id}/recipe/all`)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio' + err)))
      );
  }

}
