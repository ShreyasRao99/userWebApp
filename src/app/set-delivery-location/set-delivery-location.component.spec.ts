import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDeliveryLocationComponent } from './set-delivery-location.component';

describe('SetDeliveryLocationComponent', () => {
  let component: SetDeliveryLocationComponent;
  let fixture: ComponentFixture<SetDeliveryLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetDeliveryLocationComponent]
    });
    fixture = TestBed.createComponent(SetDeliveryLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
