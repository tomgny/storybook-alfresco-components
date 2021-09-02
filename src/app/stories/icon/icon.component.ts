import { ThumbnailService } from '@alfresco/adf-core';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'aca-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  constructor(private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, public thumbnailService: ThumbnailService) {
    this.matIconRegistry.addSvgIconInNamespace(
      'alfresco',
      'lock',
      this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-lock-24px.svg')
    );
  }
}
