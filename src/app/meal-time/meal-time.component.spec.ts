import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTimeComponent } from './meal-time.component';

describe('MealTimeComponent', () => {
  let component: MealTimeComponent;
  let fixture: ComponentFixture<MealTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealTimeComponent]
    });
    fixture = TestBed.createComponent(MealTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
