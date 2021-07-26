import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyButtonsMenuComponent } from './my-buttons-menu.component';

describe('ButtonsMenuComponent', () => {
  let component: MyButtonsMenuComponent;
  let fixture: ComponentFixture<MyButtonsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyButtonsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyButtonsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
