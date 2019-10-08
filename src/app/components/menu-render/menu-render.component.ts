import { Component, OnInit, Input } from '@angular/core';
import _ from 'lodash';

import { Menu } from '../../classes/menu';
import { Dish } from '../../classes/dish';
import { DishType } from '../../classes/dish-type';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-menu-render',
  templateUrl: './menu-render.component.html',
  styleUrls: ['./menu-render.component.css']
})
export class MenuRenderComponent implements OnInit {
  @Input() menu: Menu;
  appetizers = Array<Dish>();
  entrees = Array<Dish>();
  desserts = Array<Dish>();

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.getDishes();
  }

  getDishes() {
    this.dishService.getList()
      .subscribe(list => {
        const dishMap: Dish[] = _.keyBy(list, 'id');

        // pigeon-hole dishes by type
        this.menu.dishes.map(id => {
          const dish = dishMap[id];
          switch (dish.type) {
            case DishType.Appetizer:
              this.appetizers.push(dish);
              break;
            case DishType.Entrée:
              this.entrees.push(dish);
              break;
            case DishType.Dessert:
              this.desserts.push(dish);
              break;
          }
        });
      });
  }

}
