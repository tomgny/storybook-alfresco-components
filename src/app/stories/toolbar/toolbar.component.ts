import { Component, Input } from '@angular/core';
// import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'aca-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  /** Toolbar title. */
  @Input()
  title = 'Toolbar';

  /** Toolbar color. Can be changed to empty value (default), `primary`, `accent` or `warn`. */
  @Input()
  color: 'primary' | 'accent' | 'warn' = 'primary';
}
