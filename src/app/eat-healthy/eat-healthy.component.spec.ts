import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatHealthyComponent } from './eat-healthy.component';

describe('EatHealthyComponent', () => {
  let component: EatHealthyComponent;
  let fixture: ComponentFixture<EatHealthyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EatHealthyComponent]
    });
    fixture = TestBed.createComponent(EatHealthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
