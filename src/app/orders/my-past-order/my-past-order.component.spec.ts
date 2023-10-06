import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPastOrderComponent } from './my-past-order.component';

describe('MyPastOrderComponent', () => {
  let component: MyPastOrderComponent;
  let fixture: ComponentFixture<MyPastOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPastOrderComponent]
    });
    fixture = TestBed.createComponent(MyPastOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
