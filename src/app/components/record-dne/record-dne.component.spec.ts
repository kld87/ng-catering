import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDneComponent } from './record-dne.component';

describe('RecordDneComponent', () => {
  let component: RecordDneComponent;
  let fixture: ComponentFixture<RecordDneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordDneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordDneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
