import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsMenuComponent } from './buttons-menu.component';

describe('ButtonsMenuComponent', () => {
  let component: ButtonsMenuComponent;
  let fixture: ComponentFixture<ButtonsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
