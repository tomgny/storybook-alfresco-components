import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-about-application-modules',
  templateUrl: './about-application-modules.component.html'
})
export class AboutApplicationModulesComponent {
  /** Toggles showing/hiding of extensions block. */
  @Input()
  showExtensions: boolean;

  /** Regular expression for filtering dependencies packages. */
  @Input() regexp: string;

  /** The dependencies value defined in the package.json */
  @Input() dependencies: any;
}
