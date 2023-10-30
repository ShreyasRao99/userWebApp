import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFeedbackComponent } from './my-feedback.component';

describe('MyFeedbackComponent', () => {
  let component: MyFeedbackComponent;
  let fixture: ComponentFixture<MyFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFeedbackComponent]
    });
    fixture = TestBed.createComponent(MyFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
