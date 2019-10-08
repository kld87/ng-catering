import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishRenderComponent } from './dish-render.component';

describe('DishRenderComponent', () => {
  let component: DishRenderComponent;
  let fixture: ComponentFixture<DishRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
