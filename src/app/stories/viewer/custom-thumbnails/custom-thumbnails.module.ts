import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomThumbnailsComponent } from './components/custom-thumbnails.component';

@NgModule({
  declarations: [
    CustomThumbnailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomThumbnailsComponent
  ]
})
export class CustomThumbnailsModule { }
