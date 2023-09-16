import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalItemsComponent } from './regional-items.component';

describe('RegionalItemsComponent', () => {
  let component: RegionalItemsComponent;
  let fixture: ComponentFixture<RegionalItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionalItemsComponent]
    });
    fixture = TestBed.createComponent(RegionalItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
