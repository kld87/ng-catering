import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClrForm } from '@clr/angular';

import { Menu } from '../../classes/menu';
import { MenuService } from '../../services/menu.service';
import { Dish } from '../../classes/dish';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  @ViewChildren(ClrForm) clrForms !: QueryList<ClrForm>; // see comment in ingredient-list
  menus: Menu[];
  dishes: Dish[];
  modalOpen = false;
  modalAction: string;

  // forms
  modalForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    dishes: new FormControl([], Validators.required),
  });

  constructor(
    private menuService: MenuService,
    private dishService: DishService
  ) { }

  ngOnInit() {
    this.getMenus();
    this.getDishes();
  }

  getMenus() {
    this.menuService.getList().subscribe(list => this.menus = list);
  }

  getDishes() {
    this.dishService.getList().subscribe(list => this.dishes = list);
  }

  openModal(menu: Menu | null) {
    if (menu) { // editing existing menu
      this.modalAction = 'Edit';
      for (const [key, control] of Object.entries(this.modalForm.controls)) {
        control.setValue(menu[key]);
      }
    } else { // adding new
      this.modalAction = 'Add';
    }
    this.modalOpen = true;
  }
  submitModal() {
    if (this.modalForm.invalid) {
      this.clrForms.toArray()[0].markAsTouched(); // see comment in ingredient-list
    } else {
      this.menuService.save(this.modalForm.value as Menu);
      this.getMenus();
      this.closeModal();
    }
  }
  closeModal() {
    this.modalForm.reset();
    this.modalOpen = false;
  }

  deleteMenu(menu: Menu) {
    this.menuService.delete(menu.id);
    this.getMenus();
  }

}
