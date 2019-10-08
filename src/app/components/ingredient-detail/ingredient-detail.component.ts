import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IngredientService } from '../../services/ingredient.service';
import { DishService } from '../../services/dish.service';
import { Ingredient } from '../../classes/ingredient';
import { Dish } from '../../classes/dish';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.css']
})
export class IngredientDetailComponent implements OnInit {
  id: number;
  ingredient: Ingredient;
  dishes: Dish[];

  constructor(
    private ingredientService: IngredientService,
    private dishService: DishService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getIngredient();
    this.getDishes();
  }

  getIngredient() {
    this.ingredientService.getSingle(this.id)
      .subscribe(ingredient => this.ingredient = ingredient);
  }

  getDishes() {
    this.dishService.getList()
      .subscribe(dishes => {
        this.dishes = dishes.filter(d => d.ingredients.includes(this.id));
      });
  }

}
