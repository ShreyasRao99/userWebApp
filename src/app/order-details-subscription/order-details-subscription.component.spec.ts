import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsSubscriptionComponent } from './order-details-subscription.component';

describe('OrderDetailsSubscriptionComponent', () => {
  let component: OrderDetailsSubscriptionComponent;
  let fixture: ComponentFixture<OrderDetailsSubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailsSubscriptionComponent]
    });
    fixture = TestBed.createComponent(OrderDetailsSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
