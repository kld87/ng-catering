import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClrForm } from '@clr/angular';

import { Ingredient } from '../../classes/ingredient';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  // seems like the only way to force a ClrForm to validate is via its own api (not vai FormGroup/FormControl)
  // seems they have to be retrieved via ViewChild(ren) based on quantity in the component
  // when using ViewChildren, seems like we can *only* access them via array index (not by id or some prop)
  // I could revert this code to ViewChild... but I want to keep this eg. since it was hard to get going
  @ViewChildren(ClrForm) clrForms !: QueryList<ClrForm>;
  ingredients: Ingredient[];
  modalOpen = false;
  modalAction: string;
  closeDeleteAlert = true;

  // forms
  modalForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    isSpicy: new FormControl(false),
    isGluten: new FormControl(false),
    isMeat: new FormControl(false),
  });

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientService.getList().subscribe(list => this.ingredients = list);
  }

  openModal(ingredient: Ingredient | null) {
    if (ingredient) { // editing existing ingredient
      this.modalAction = 'Edit';
      for (const [key, control] of Object.entries(this.modalForm.controls)) {
        control.setValue(ingredient[key]);
      }
    } else { // adding new
      this.modalAction = 'Add';
    }
    this.modalOpen = true;
  }
  submitModal() {
    if (this.modalForm.invalid) {
      this.clrForms.toArray()[0].markAsTouched(); // see comment at top of class
    } else {
      this.ingredientService.save(this.modalForm.value as Ingredient);
      this.getIngredients();
      this.closeModal();
    }
  }
  closeModal() {
    this.modalForm.reset();
    this.modalOpen = false;
  }

  deleteIngredient(ingredient: Ingredient) {
    this.closeDeleteAlert = true;
    this.ingredientService.delete(ingredient.id)
      .subscribe(b => b ? this.getIngredients() : this.closeDeleteAlert = false);
  }

}
