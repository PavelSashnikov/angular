import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithSliderComponent } from './image-with-slider.component';

describe('ImageWithSliderComponent', () => {
  let component: ImageWithSliderComponent;
  let fixture: ComponentFixture<ImageWithSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageWithSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageWithSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
