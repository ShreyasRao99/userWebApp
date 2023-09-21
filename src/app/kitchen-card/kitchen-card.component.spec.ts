import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenCardComponent } from './kitchen-card.component';

describe('KitchenCardComponent', () => {
  let component: KitchenCardComponent;
  let fixture: ComponentFixture<KitchenCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenCardComponent]
    });
    fixture = TestBed.createComponent(KitchenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
