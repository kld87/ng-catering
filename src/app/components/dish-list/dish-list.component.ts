import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClrForm } from '@clr/angular';
import _ from 'lodash';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Dish } from '../../classes/dish';
import { Ingredient } from '../../classes/ingredient';
import { DishService } from '../../services/dish.service';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  @ViewChildren(ClrForm) clrForms !: QueryList<ClrForm>; // see comment in ingredient-list
  dishes: Dish[];
  ingredients: Ingredient[];
  filteredIngredients: Ingredient[];
  dishIngredients = Array<number>();
  selectedIngredient: number = null;
  modalOpen = false;
  modalAction: string;
  closeDeleteAlert = true;
  icons = {
    plus: faPlus,
    times: faTimes
  };

  // forms
  modalForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    type: new FormControl(null, Validators.required),
    price: new FormControl(0, Validators.pattern(/^[1-9][0-9]*(\.[0-9]{1,2})?$/))
  });

  constructor(
    private dishService: DishService,
    private ingredientService: IngredientService
  ) { }

  ngOnInit() {
    this.getDishes();
    this.getIngredients();
  }

  getDishes() {
    this.dishService.getList().subscribe(list => this.dishes = list);
  }

  getIngredients() {
    this.ingredientService.getList()
      .subscribe(list => {
        this.ingredients = list;
        this.filterIngredients();
      });
  }

  // don't display ingredients that are already in use
  filterIngredients() {
    const keyed = _.keyBy(this.dishIngredients);
    this.filteredIngredients = _.filter(this.ingredients, i => !keyed[i.id]);
  }

   openModal(dish: Dish | null) {
    if (dish) { // editing existing ingredient
      this.modalAction = 'Edit';
      for (const [key, control] of Object.entries(this.modalForm.controls)) {
        control.setValue(dish[key]);
      }
      this.dishIngredients = dish.ingredients.concat();
      this.filterIngredients();
    } else { // adding new
      this.modalAction = 'Add';
      this.dishIngredients = [];
    }
    this.modalOpen = true;
  }
  closeModal() {
    this.selectedIngredient = null;
    this.modalForm.reset();
    this.modalOpen = false;
  }
  submitModal() {
    if (this.modalForm.invalid) {
      this.clrForms.toArray()[0].markAsTouched(); // see comment in ingredient-list
    } else {
      this.modalForm.value.ingredients = this.dishIngredients;
      this.dishService.save(this.modalForm.value as Dish);
      this.getDishes();
      this.closeModal();
    }
  }

  addIngredient(id: number) {
    this.dishIngredients = [...this.dishIngredients, id]; // we do this to trigger ngChanges in the icon directive. see: https://stackoverflow.com/questions/43223582/why-angular-2-ngonchanges-not-responding-to-input-array-push
    this.selectedIngredient = null;
    this.filterIngredients();
  }
  removeIngredient(i: number) {
    this.dishIngredients.splice(i, 1);
    this.dishIngredients = [...this.dishIngredients]; // see comment in addIngredient
    this.filterIngredients();
  }

  deleteDish(dish: Dish) {
    this.closeDeleteAlert = true;
    this.dishService.delete(dish.id)
      .subscribe(b => b ? this.getDishes() : this.closeDeleteAlert = false);
  }

}
