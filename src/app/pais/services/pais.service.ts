import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/pais.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl = 'https://restcountries.com/v3.1/name';



  constructor(private http: HttpClient) {}

  buscar(query: string): Observable<Country[]> {

    const url = `${this.apiUrl}/${query}`;
    return this.http.get<Country[]>(url);
  }
}
