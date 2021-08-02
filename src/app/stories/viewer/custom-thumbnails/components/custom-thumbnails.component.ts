import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-custom-thumbnails',
  template: `<p style="text-align: center;"> Custom Thumbnails Component </p>`,
})
export class CustomThumbnailsComponent {
  @Input()
  pdfViewer: any;

  constructor() { }

}
