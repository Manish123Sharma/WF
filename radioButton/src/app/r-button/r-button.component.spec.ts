import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RButtonComponent } from './r-button.component';

describe('RButtonComponent', () => {
  let component: RButtonComponent;
  let fixture: ComponentFixture<RButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
