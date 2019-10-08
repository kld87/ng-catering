import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientIconsComponent } from './ingredient-icons.component';

describe('IngredientIconsComponent', () => {
  let component: IngredientIconsComponent;
  let fixture: ComponentFixture<IngredientIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
