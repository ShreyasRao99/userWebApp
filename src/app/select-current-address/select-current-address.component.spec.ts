import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCurrentAddressComponent } from './select-current-address.component';

describe('SelectCurrentAddressComponent', () => {
  let component: SelectCurrentAddressComponent;
  let fixture: ComponentFixture<SelectCurrentAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectCurrentAddressComponent]
    });
    fixture = TestBed.createComponent(SelectCurrentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
