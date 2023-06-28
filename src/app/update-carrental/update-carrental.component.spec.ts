import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarrentalComponent } from './update-carrental.component';

describe('UpdateCarrentalComponent', () => {
  let component: UpdateCarrentalComponent;
  let fixture: ComponentFixture<UpdateCarrentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCarrentalComponent]
    });
    fixture = TestBed.createComponent(UpdateCarrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
