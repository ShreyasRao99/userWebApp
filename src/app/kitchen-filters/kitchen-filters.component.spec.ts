import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenFiltersComponent } from './kitchen-filters.component';

describe('KitchenFiltersComponent', () => {
  let component: KitchenFiltersComponent;
  let fixture: ComponentFixture<KitchenFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenFiltersComponent]
    });
    fixture = TestBed.createComponent(KitchenFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
