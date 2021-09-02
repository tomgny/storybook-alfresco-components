import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-info-drawer-layout',
  templateUrl: './info-drawer-layout.component.html',
  styleUrls: ['./info-drawer-layout.component.scss']
})
export class InfoDrawerLayoutComponent {
  @Input()
  title: string;

  @Input()
  icons: string[];

  @Input()
  content: string;

  @Input()
  showContent: boolean;

  /**
   * The visibility of the header.
   */
  @Input()
  showHeader: boolean;

  onClick(iconName: string) {
    alert(`'${iconName}' action performed.`);
  }
}
