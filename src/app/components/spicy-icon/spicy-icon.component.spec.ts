import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpicyIconComponent } from './spicy-icon.component';

describe('SpicyIconComponent', () => {
  let component: SpicyIconComponent;
  let fixture: ComponentFixture<SpicyIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpicyIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpicyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
