import { Node } from '@alfresco/js-api';
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

  @Input()
  showToolbarForDivider: boolean;

  @Input()
  showToolbarDivider: boolean;

  @Input()
  showToolbarForTitle: boolean;

  folderNode = new Node({
    path: {
      name: '/Company Home/Data Dictionary',
      isComplete: true,
      elements: [
        {
          id: '94acfc73-7014-4475-9bd9-93a2162f0f8c',
          name: 'Company Home'
        },
        { id: 'd124de26-6ba0-4f40-8d98-4907da2d337a', name: 'Data Dictionary' }
      ]
    },
    name: 'Email Templates'
  });
}
