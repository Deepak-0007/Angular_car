import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarrentalComponent } from './create-carrental.component';

describe('CreateCarrentalComponent', () => {
  let component: CreateCarrentalComponent;
  let fixture: ComponentFixture<CreateCarrentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCarrentalComponent]
    });
    fixture = TestBed.createComponent(CreateCarrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
