import { ThumbnailService } from '@alfresco/adf-core';
import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'aca-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input()
  iconWithLigature: string;

  @Input()
  iconThumbnailService: string;

  @Input()
  iconCustom: string;

  constructor(private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, public thumbnailService: ThumbnailService) {
    this.matIconRegistry.addSvgIconInNamespace(
      'baseline',
      'lock',
      this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/baseline-lock-24px.svg')
    );
    this.matIconRegistry.addSvgIconInNamespace(
      'adf',
      'move-file',
      this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/adf-move-file-24px.svg')
    );
    this.matIconRegistry.addSvgIconInNamespace(
      'alfresco',
      'join-library',
      this.sanitizer.bypassSecurityTrustResourceUrl('./assets/images/join-library.svg')
    );
  }
}
