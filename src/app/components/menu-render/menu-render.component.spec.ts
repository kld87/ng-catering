import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRenderComponent } from './menu-render.component';

describe('MenuRenderComponent', () => {
  let component: MenuRenderComponent;
  let fixture: ComponentFixture<MenuRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
