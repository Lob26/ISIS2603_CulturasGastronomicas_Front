import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from 'src/environments/environment';
import {catchError, Observable, throwError} from 'rxjs';
import {GastronomicCategory} from './gastronomic-category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl: string = environment.baseUrl + 'categories';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<GastronomicCategory[]> {
    return this.http
      .get<GastronomicCategory[]>(this.apiUrl)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio')))
      );
  }

  getCategory(name: string): Observable<GastronomicCategory> {
    return this.http.get<GastronomicCategory>(this.apiUrl + '/' + name);
  }

  createCategory(category: GastronomicCategory): Observable<GastronomicCategory> {
    return this.http.post<GastronomicCategory>(this.apiUrl, category);
  }


}
