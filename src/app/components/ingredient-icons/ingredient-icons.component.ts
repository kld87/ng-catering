import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import _ from 'lodash';

import { Ingredient } from '../../classes/ingredient';
import { Dish } from '../../classes/dish';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredient-icons',
  templateUrl: './ingredient-icons.component.html',
  styleUrls: ['./ingredient-icons.component.css']
})
export class IngredientIconsComponent implements OnInit, OnChanges {
  @Input() food: any;
  pseudoIngredient: Ingredient;
  ingredientMap: Ingredient[];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientService.getList()
      .subscribe(list => {
        this.ingredientMap = _.keyBy(list, 'id');
        this.buildPseudoIngredient();
      });
  }

  // if we're working directly w/ an ingredient, we'll render icons against that
  // if we're working with an ingredient, ingredient array, or dish, we make a pseudoIngredient representing the dishes properties
  buildPseudoIngredient() {
    if (!this.ingredientMap || !this.food) {
      return;
    }

    if (!isNaN(this.food)) { // given ingredient id
      this.pseudoIngredient = this.ingredientMap[this.food];
    } else if (this.food.isSpicy !== undefined) { // given ingredient
      this.pseudoIngredient = this.food as Ingredient;
    } else { // given food is a dish or array of ingredients
      const ingredients = Array.isArray(this.food) ? this.food : this.food.ingredients;

      // there is a more optimized way to do all this, but we're not going to bother for our purposes here
      let isSpicy = false;
      let isGluten = false;
      let isMeat = false;

      // set flags based on ingredient list
      ingredients.map(i => {
        const ingredient: Ingredient = this.ingredientMap[i];
        if (ingredient.isSpicy) {
          isSpicy = true;
        }
        if (ingredient.isGluten) {
          isGluten = true;
        }
        if (ingredient.isMeat) {
          isMeat = true;
        }
      });

      // build pseudo ingredient
      this.pseudoIngredient = {id: null, name: '', isSpicy, isGluten, isMeat};
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.food) {
      this.buildPseudoIngredient();
    }
  }

}
