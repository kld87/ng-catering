import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import _ from 'lodash';

import { Menu } from '../classes/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  data: Menu[] = [
    {id: 1, name: 'Fixed Menu', description: 'Choice is an illusion.', dishes: [2, 5, 6]},
    {id: 2, name: 'Standard Menu', description: 'A little from column A, a little from column B.', dishes: [1, 2, 3, 4, 5, 6]},
    {id: 3, name: 'Deluxe Menu', description: 'This menu has all the things.', dishes: [1, 2, 3, 4, 5, 6, 7]},
    {id: 4, name: 'Dessert Menu', description: 'Would you like to see it?', dishes: [6, 7]},
  ];

  constructor() { }

  getList(): Observable<Menu[]> {
    return of(_.orderBy(this.data, ['type', m => m.name.toLowerCase()]));
  }

  getSingle(id: number): Observable<Menu> {
    return of(_.find(this.data, {id}));
  }

  save(menu: Menu) {
    if (!menu.id) { // add new
      menu.id = Math.max(...this.data.map(i => i.id)) + 1;
      this.data.push(menu);
    } else { // edit existing
      this.data.splice(this.data.findIndex(i => i.id === menu.id), 1, menu);
    }
  }

  delete(id: number) {
    this.data.splice(this.data.findIndex(m => m.id === id), 1);
  }
}
