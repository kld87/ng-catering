import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlutenIconComponent } from './gluten-icon.component';

describe('GlutenIconComponent', () => {
  let component: GlutenIconComponent;
  let fixture: ComponentFixture<GlutenIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlutenIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlutenIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
