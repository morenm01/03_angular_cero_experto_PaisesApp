import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/pais.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl = 'https://restcountries.com/v3.1';



  constructor(private http: HttpClient) {}

  buscar(query: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${query}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(query: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${query}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id: string): Observable<Country[]> {

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }
}
