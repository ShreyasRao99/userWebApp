import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundPopupComponent } from './refund-popup.component';

describe('RefundPopupComponent', () => {
  let component: RefundPopupComponent;
  let fixture: ComponentFixture<RefundPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefundPopupComponent]
    });
    fixture = TestBed.createComponent(RefundPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
