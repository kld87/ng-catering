import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import _ from 'lodash';

import { Dish } from '../classes/dish';
import { DishType } from '../classes/dish-type';
import { Ingredient } from '../classes/ingredient';
import { Menu } from '../classes/menu';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  data: Dish[] = [
    // apps
    {id: 1, name: 'Garden Salad', description: 'Nutritious and delicious!', type: DishType.Appetizer, price: 8, ingredients: [4, 5, 13]},
    {id: 2, name: 'Bruschetta', description: 'Fancy tomato bread.', type: DishType.Appetizer, price: 9, ingredients: [5, 9]},

    // entrees
    {id: 3, name: 'Chicken Dinner', description: 'Our delicious roast chicken that\'ll have you saying Winner Winner!', type: DishType.Entrée, price: 16, ingredients: [7, 1, 2]},
    {id: 4, name: 'Tuna Surprise', description: 'Feeling adventurous?', type: DishType.Entrée, price: 15, ingredients: [8, 3, 6]},
    {id: 5, name: 'Spaghetti', description: 'For when you need a "vegetarian option".', type: DishType.Entrée, price: 13, ingredients: [14, 5]},

    // desserts
    {id: 6, name: 'Fruit Salad', description: 'A melange of exotic and pedestrian fruits.', type: DishType.Dessert, price: 4, ingredients: [15]},
    {id: 7, name: 'Cake', description: 'Decadent! Don\'t count your calories tonight!', type: DishType.Dessert, price: 7, ingredients: [9, 10, 11, 12]},
  ];

  constructor(private menuService: MenuService) { }

  getList(): Observable<Dish[]> {
    return of(_.orderBy(this.data, ['type', d => d.name.toLowerCase()]));
  }

  getSingle(id: number): Observable<Dish> {
    return of(_.find(this.data, {id}));
  }

  save(dish: Dish) {
    if (!dish.id) { // add new
      dish.id = Math.max(...this.data.map(i => i.id)) + 1;
      this.data.push(dish);
    } else { // edit existing
      this.data.splice(this.data.findIndex(i => i.id === dish.id), 1, dish);
    }
  }

  // returns false if the dish is in use, otherwise true (after removing the dish)
  delete(id: number): Observable<boolean> {
    return this.menuService.getList()
      .pipe(
        switchMap(list => {
          // only allow deletion if dish isn't in use
          const allowed = !_.some(list, m => m.dishes.includes(id));
          if (allowed) {
            this.data.splice(this.data.findIndex(m => m.id === id), 1);
          }
          return of(allowed);
        })
      );
  }
}
