import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonPopupComponent } from './addon-popup.component';

describe('AddonPopupComponent', () => {
  let component: AddonPopupComponent;
  let fixture: ComponentFixture<AddonPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddonPopupComponent]
    });
    fixture = TestBed.createComponent(AddonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
