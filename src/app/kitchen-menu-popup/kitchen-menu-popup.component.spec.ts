import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenMenuPopupComponent } from './kitchen-menu-popup.component';

describe('KitchenMenuPopupComponent', () => {
  let component: KitchenMenuPopupComponent;
  let fixture: ComponentFixture<KitchenMenuPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenMenuPopupComponent]
    });
    fixture = TestBed.createComponent(KitchenMenuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
