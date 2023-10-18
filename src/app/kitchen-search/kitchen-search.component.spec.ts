import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenSearchComponent } from './kitchen-search.component';

describe('KitchenSearchComponent', () => {
  let component: KitchenSearchComponent;
  let fixture: ComponentFixture<KitchenSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenSearchComponent]
    });
    fixture = TestBed.createComponent(KitchenSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
