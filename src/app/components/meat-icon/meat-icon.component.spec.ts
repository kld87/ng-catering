import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatIconComponent } from './meat-icon.component';

describe('MeatIconComponent', () => {
  let component: MeatIconComponent;
  let fixture: ComponentFixture<MeatIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeatIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
