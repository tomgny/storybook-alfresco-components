import { Component, Input, OnInit } from '@angular/core';
// import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'aca-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  /** Toolbar title. */
  @Input()
  title = 'Toolbar';

  /** Toolbar color. Can be changed to empty value (default), `primary`, `accent` or `warn`. */
  @Input()
  color: 'primary' | 'accent' | 'warn' = 'primary';

  constructor() {}

  ngOnInit(): void {}
}
