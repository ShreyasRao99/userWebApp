import { TestBed } from '@angular/core/testing';

import { OrderBookingService } from './order-booking.service';

describe('OrderBookingService', () => {
  let service: OrderBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
