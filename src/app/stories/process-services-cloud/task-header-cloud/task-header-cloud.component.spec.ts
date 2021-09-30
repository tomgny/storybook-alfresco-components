import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHeaderCloudComponent } from './task-header-cloud.component';

describe('TaskHeaderCloudComponent', () => {
  let component: TaskHeaderCloudComponent;
  let fixture: ComponentFixture<TaskHeaderCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskHeaderCloudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskHeaderCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
