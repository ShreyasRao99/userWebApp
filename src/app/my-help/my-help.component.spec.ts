import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHelpComponent } from './my-help.component';

describe('FavouritesComponent', () => {
  let component: MyHelpComponent;
  let fixture: ComponentFixture<MyHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyHelpComponent]
    });
    fixture = TestBed.createComponent(MyHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
