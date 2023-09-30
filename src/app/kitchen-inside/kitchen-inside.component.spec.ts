import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenInsideComponent } from './kitchen-inside.component';

describe('KitchenInsideComponent', () => {
  let component: KitchenInsideComponent;
  let fixture: ComponentFixture<KitchenInsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenInsideComponent]
    });
    fixture = TestBed.createComponent(KitchenInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
