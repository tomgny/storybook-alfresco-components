import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-custom-thumbnails',
  template: `<p> Custom Thumbnails Component </p>`,
})
export class CustomThumbnailsComponent {
  @Input()
  pdfViewer: any;

  constructor() { }

}
