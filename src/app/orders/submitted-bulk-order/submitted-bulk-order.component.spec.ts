import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedBulkOrderComponent } from './submitted-bulk-order.component';

describe('SubmittedBulkOrderComponent', () => {
  let component: SubmittedBulkOrderComponent;
  let fixture: ComponentFixture<SubmittedBulkOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmittedBulkOrderComponent]
    });
    fixture = TestBed.createComponent(SubmittedBulkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
