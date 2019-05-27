import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleQuickViewComponent } from './motorcycle-quick-view.component';

describe('MotorcycleQuickViewComponent', () => {
  let component: MotorcycleQuickViewComponent;
  let fixture: ComponentFixture<MotorcycleQuickViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorcycleQuickViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcycleQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
