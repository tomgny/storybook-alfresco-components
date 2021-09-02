import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-empty-content',
  templateUrl: './empty-content.component.html'
})
export class EmptyContentComponent {
  /**
   * Material Icon to use.
   */
  @Input()
  icon: string;

  /**
   * String or Resource Key for the subtitle.
   */
  @Input()
  subtitle: string;

  /**
   * String or Resource Key for the title.
   */
  @Input()
  title: string;

  @Input()
  lines: string[];
}
