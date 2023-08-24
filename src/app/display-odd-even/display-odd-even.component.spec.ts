import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOddEvenComponent } from './display-odd-even.component';

describe('DisplayOddEvenComponent', () => {
  let component: DisplayOddEvenComponent;
  let fixture: ComponentFixture<DisplayOddEvenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayOddEvenComponent]
    });
    fixture = TestBed.createComponent(DisplayOddEvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
