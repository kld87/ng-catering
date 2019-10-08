import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dish } from '../../classes/dish';
import { DishService } from '../../services/dish.service';
import { Menu } from '../../classes/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  id: number;
  dish: Dish;
  menus: Menu[];

  constructor(
    private dishService: DishService,
    private menuService: MenuService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getDish();
    this.getMenus();
  }

  getDish() {
    this.dishService.getSingle(this.id)
      .subscribe(dish => this.dish = dish);
  }

  getMenus() {
    this.menuService.getList()
      .subscribe(menus => {
        this.menus = menus.filter(m => m.dishes.includes(this.id));
      });
  }

}
