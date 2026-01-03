import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselButtonComponent } from './carousel-button.component';

describe('CarouselButtonComponent', () => {
  let component: CarouselButtonComponent;
  let fixture: ComponentFixture<CarouselButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
