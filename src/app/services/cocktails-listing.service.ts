import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from '../types/cocktail.types';


@Injectable({
  providedIn: 'root'
})
export class CocktailsListingService {
  private apiUrl = '/cocktails';

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.apiUrl);
  }

  getCocktail(cocktailId: string): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.apiUrl}/${cocktailId}`);
  }
}
