import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackOpenOrderComponent } from './track-open-order.component';

describe('TrackOpenOrderComponent', () => {
  let component: TrackOpenOrderComponent;
  let fixture: ComponentFixture<TrackOpenOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackOpenOrderComponent]
    });
    fixture = TestBed.createComponent(TrackOpenOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
