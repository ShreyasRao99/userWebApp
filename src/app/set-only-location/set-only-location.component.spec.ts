import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOnlyLocationComponent } from './set-only-location.component';

describe('SetOnlyLocationComponent', () => {
  let component: SetOnlyLocationComponent;
  let fixture: ComponentFixture<SetOnlyLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetOnlyLocationComponent]
    });
    fixture = TestBed.createComponent(SetOnlyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
