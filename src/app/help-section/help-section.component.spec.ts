import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpSectionComponent } from './help-section.component';

describe('HelpSectionComponent', () => {
  let component: HelpSectionComponent;
  let fixture: ComponentFixture<HelpSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpSectionComponent]
    });
    fixture = TestBed.createComponent(HelpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
