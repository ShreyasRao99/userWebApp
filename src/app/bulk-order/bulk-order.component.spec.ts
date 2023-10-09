import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrderComponent } from './bulk-order.component';

describe('BulkOrderComponent', () => {
  let component: BulkOrderComponent;
  let fixture: ComponentFixture<BulkOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulkOrderComponent]
    });
    fixture = TestBed.createComponent(BulkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
