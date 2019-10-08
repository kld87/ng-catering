import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import _ from 'lodash';

import { Ingredient } from '../classes/ingredient';
import { Dish } from '../classes/dish';
import { DishService } from './dish.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  data: Ingredient[] = [
    {id: 1, name: 'Carrots', isSpicy: false, isMeat: false, isGluten: false},
    {id: 2, name: 'Potatoes', isSpicy: false, isMeat: false, isGluten: false},
    {id: 3, name: 'Rice', isSpicy: false, isMeat: false, isGluten: false},
    {id: 4, name: 'Lettuce', isSpicy: false, isMeat: false, isGluten: false},
    {id: 5, name: 'Tomatoes', isSpicy: false, isMeat: false, isGluten: false},
    {id: 6, name: 'Chili Pepper', isSpicy: true, isMeat: false, isGluten: false},
    {id: 7, name: 'Chicken', isSpicy: false, isMeat: true, isGluten: false},
    {id: 8, name: 'Tuna', isSpicy: false, isMeat: true, isGluten: false},
    {id: 9, name: 'Flour', isSpicy: false, isMeat: false, isGluten: true},
    {id: 10, name: 'Sugar', isSpicy: false, isMeat: false, isGluten: false},
    {id: 11, name: 'Milk', isSpicy: false, isMeat: false, isGluten: false},
    {id: 12, name: 'Eggs', isSpicy: false, isMeat: false, isGluten: false},
    {id: 13, name: 'Salad Dressing', isSpicy: false, isMeat: false, isGluten: false},
    {id: 14, name: 'Noodles', isSpicy: false, isMeat: false, isGluten: true},
    {id: 15, name: 'Fruit', isSpicy: false, isMeat: false, isGluten: false},
    {id: 16, name: 'Mystery Meat', isSpicy: false, isMeat: true, isGluten: false},
  ];

  constructor(private dishService: DishService) { }

  getList(): Observable<Ingredient[]> {
    return of(_.orderBy(this.data, i => i.name.toLowerCase()));
  }

  getSingle(id: number): Observable<Ingredient> {
    return of(_.find(this.data, {id}));
  }

  save(ingredient: Ingredient) {
    if (!ingredient.id) { // add new
      ingredient.id = Math.max(...this.data.map(i => i.id)) + 1;
      this.data.push(ingredient);
    } else { // edit existing
      this.data.splice(this.data.findIndex(i => i.id === ingredient.id), 1, ingredient);
    }
  }

  // returns false if the ingredient is in use, otherwise true (after removing the ingredient)
  delete(id: number): Observable<boolean> {
    return this.dishService.getList()
      .pipe(
        switchMap(list => {
          // only allow deletion if ingredient isn't in use
          const allowed = !_.some(list, d => d.ingredients.includes(id));
          if (allowed) {
            this.data.splice(this.data.findIndex(i => i.id === id), 1);
          }
          return of(allowed);
        })
      );
  }
}
