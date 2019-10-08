import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';
import { DishService } from '../../services/dish.service';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  menuNum: number;
  dishNum: number;
  ingredientNum: number;

  constructor(
    private menuService: MenuService,
    private dishService: DishService,
    private ingredientService: IngredientService
  ) { }

  ngOnInit() {
    this.getCounts();
  }

  getCounts() {
    this.menuService.getList().subscribe(list => this.menuNum = list.length);
    this.dishService.getList().subscribe(list => this.dishNum = list.length);
    this.ingredientService.getList().subscribe(list => this.ingredientNum = list.length);
  }

}
