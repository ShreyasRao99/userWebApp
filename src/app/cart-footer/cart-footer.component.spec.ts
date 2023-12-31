import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFooterComponent } from './cart-footer.component';

describe('CartFooterComponent', () => {
  let component: CardFooterComponent;
  let fixture: ComponentFixture<CardFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFooterComponent]
    });
    fixture = TestBed.createComponent(CardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
