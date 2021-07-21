import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycardviewComponent } from './mycardview.component';

describe('MycardviewComponent', () => {
  let component: MycardviewComponent;
  let fixture: ComponentFixture<MycardviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycardviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycardviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
