import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMetadataCardComponent } from './content-metadata-card.component';

describe('ContentMetadataCardComponent', () => {
  let component: ContentMetadataCardComponent;
  let fixture: ComponentFixture<ContentMetadataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentMetadataCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMetadataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
