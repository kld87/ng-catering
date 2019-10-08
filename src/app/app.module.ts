import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { IngredientDetailComponent } from './components/ingredient-detail/ingredient-detail.component';
import { NavBackDirective } from './directives/nav-back.directive';
import { DishDetailComponent } from './components/dish-detail/dish-detail.component';
import { LabelDishTypePipe } from './pipes/label-dish-type.pipe';
import { LabelIngredientCsvPipe } from './pipes/label-ingredient-csv.pipe';
import { IngredientIconsComponent } from './components/ingredient-icons/ingredient-icons.component';
import { SpicyIconComponent } from './components/spicy-icon/spicy-icon.component';
import { MeatIconComponent } from './components/meat-icon/meat-icon.component';
import { GlutenIconComponent } from './components/gluten-icon/gluten-icon.component';
import { MenuDetailComponent } from './components/menu-detail/menu-detail.component';
import { MenuRenderComponent } from './components/menu-render/menu-render.component';
import { DishRenderComponent } from './components/dish-render/dish-render.component';
import { RecordDneComponent } from './components/record-dne/record-dne.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuListComponent,
    DishListComponent,
    IngredientListComponent,
    IngredientDetailComponent,
    NavBackDirective,
    DishDetailComponent,
    LabelDishTypePipe,
    LabelIngredientCsvPipe,
    IngredientIconsComponent,
    SpicyIconComponent,
    MeatIconComponent,
    GlutenIconComponent,
    MenuDetailComponent,
    MenuRenderComponent,
    DishRenderComponent,
    RecordDneComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
