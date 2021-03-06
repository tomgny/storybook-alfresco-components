import { Component, Input } from '@angular/core';
import { ButtonMatMenuItem } from '../../models/button-mat-menu-item.model';

@Component({
  selector: 'aca-sidebar-action-menu',
  templateUrl: './sidebar-action-menu.component.html',
  styleUrls: ['./sidebar-action-menu.component.scss']
})
export class SidebarActionMenuComponent {
  /** Toggle the sidebar action menu on expand. */
  @Input()
  expanded: boolean;

  /** The title of the sidebar action. */
  @Input()
  title: string;

  /** Width in pixels for sidebar action menu options. */
  @Input()
  width: number;

  @Input()
  narrowExpandButtonIcon: string;

  @Input()
  wideExpandButtonIcon: string;

  menuItems: ButtonMatMenuItem[] = [
    { itemIcon: 'add_task', label: 'Add Task' },
    { itemIcon: 'done', label: 'Mark as Done' },
    { itemIcon: 'delete', label: 'Delete Task' }
  ];
}
