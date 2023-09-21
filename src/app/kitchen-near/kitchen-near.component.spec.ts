import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenNearComponent } from './kitchen-near.component';

describe('KitchenNearComponent', () => {
  let component: KitchenNearComponent;
  let fixture: ComponentFixture<KitchenNearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenNearComponent]
    });
    fixture = TestBed.createComponent(KitchenNearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
