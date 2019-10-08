import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuDetailComponent } from './components/menu-detail/menu-detail.component';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishDetailComponent } from './components/dish-detail/dish-detail.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { IngredientDetailComponent } from './components/ingredient-detail/ingredient-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'menus', component: MenuListComponent },
  { path: 'menus/:id', component: MenuDetailComponent },
  { path: 'dishes', component: DishListComponent },
  { path: 'dishes/:id', component: DishDetailComponent },
  { path: 'ingredients', component: IngredientListComponent },
  { path: 'ingredients/:id', component: IngredientDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**',   redirectTo: '/dashboard', pathMatch: 'full' }, // 404s, default route to dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }