import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchCountriesResponse } from '../interfaces/search-countries-response';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl = 'https://restcountries.com/v3.1/name';

  private _paises: SearchCountriesResponse[] = [];

  get paises() {
    return [...this._paises];
  }

  constructor(private http: HttpClient) {}

  buscar(query: string): Observable<any> {
    const url = `${this.apiUrl}/${query}`;
    return this.http.get(url);
  }
}
