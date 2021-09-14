import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMaskComponent } from './text-mask.component';

describe('TextMaskComponent', () => {
  let component: TextMaskComponent;
  let fixture: ComponentFixture<TextMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
