import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(protected http: HttpClient) { }

  getRecipes(): Observable <Recipe[]> {
    return this.http.get<Recipe[]>('assets/recipes.json')
    .pipe(
      map(response => response as Recipe[]),
      catchError(() => throwError(new Error('SOMETHING BAD HAPPENED')))
    )
  }
}
