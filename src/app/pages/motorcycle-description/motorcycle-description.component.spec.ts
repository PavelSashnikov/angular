import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleDescriptionComponent } from './motorcycle-description.component';

describe('MotorcycleDescriptionComponent', () => {
  let component: MotorcycleDescriptionComponent;
  let fixture: ComponentFixture<MotorcycleDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorcycleDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcycleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
