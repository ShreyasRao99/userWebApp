import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopLoaderComponent } from './desktop-loader.component';

describe('DesktopLoaderComponent', () => {
  let component: DesktopLoaderComponent;
  let fixture: ComponentFixture<DesktopLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopLoaderComponent]
    });
    fixture = TestBed.createComponent(DesktopLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
