import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorePipesComponent } from './core-pipes.component';

describe('CorePipesComponent', () => {
  let component: CorePipesComponent;
  let fixture: ComponentFixture<CorePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorePipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
