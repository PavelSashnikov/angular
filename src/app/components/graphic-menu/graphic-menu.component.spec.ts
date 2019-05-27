import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicMenuComponent } from './graphic-menu.component';

describe('GraphicMenuComponent', () => {
  let component: GraphicMenuComponent;
  let fixture: ComponentFixture<GraphicMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
