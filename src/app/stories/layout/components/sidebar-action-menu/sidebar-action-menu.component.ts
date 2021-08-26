import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-sidebar-action-menu',
  templateUrl: './sidebar-action-menu.component.html',
  styleUrls: ['./sidebar-action-menu.component.scss']
})
export class SidebarActionMenuComponent implements OnInit {
  /** Toggle the sidebar action menu on expand. */
  @Input()
  expanded: boolean;

  /** The title of the sidebar action. */
  @Input()
  title: string;

  /** Width in pixels for sidebar action menu options. */
  @Input()
  width: number;

  constructor() { }

  ngOnInit(): void {
  }

}
