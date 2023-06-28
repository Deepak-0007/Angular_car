import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrentalListComponent } from './carrental-list.component';

describe('CarrentalListComponent', () => {
  let component: CarrentalListComponent;
  let fixture: ComponentFixture<CarrentalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrentalListComponent]
    });
    fixture = TestBed.createComponent(CarrentalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
