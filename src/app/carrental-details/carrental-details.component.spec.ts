import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrentalDetailsComponent } from './carrental-details.component';

describe('CarrentalDetailsComponent', () => {
  let component: CarrentalDetailsComponent;
  let fixture: ComponentFixture<CarrentalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrentalDetailsComponent]
    });
    fixture = TestBed.createComponent(CarrentalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
