import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartKitchenCartComponent } from './cart-kitchen-cart.component';

describe('CartKitchenCartComponent', () => {
  let component: CartKitchenCartComponent;
  let fixture: ComponentFixture<CartKitchenCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartKitchenCartComponent]
    });
    fixture = TestBed.createComponent(CartKitchenCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
