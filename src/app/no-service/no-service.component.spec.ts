import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoServiceComponent } from './no-service.component';

describe('NoServiceComponent', () => {
  let component: NoServiceComponent;
  let fixture: ComponentFixture<NoServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoServiceComponent]
    });
    fixture = TestBed.createComponent(NoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
