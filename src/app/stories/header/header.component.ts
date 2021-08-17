import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  /**
   * Background color for the header. It can be any hex color code or one of the Material theme colors: 'primary', 'accent' or 'warn'.
   */
  @Input()
  color: 'primary' | 'accent' | 'warn' = 'primary';

  /**
   * expandedSidenav: Toggles the expanded state of the component.
   */
  @Input()
  expandedSidenav: boolean = true;

  /**
   * Path to an image file for the application logo.
   */
  @Input()
  logo: string = undefined;

  /**
   * The side of the page that the drawer is attached to (can be 'start' or 'end')
   */
  @Input()
  position: string = 'start';

  /**
   * The router link for the application logo, when clicked.
   */
  @Input()
  redirectUrl: string | any[] = '/';

  /**
   * Toggles whether the sidenav button will be displayed in the header or not.
   */
  @Input()
  showSidenavToggle: boolean = true;

  /**
   * Title of the application.
   */
  @Input()
  title: string = undefined;

  /**
   * The tooltip text for the application logo.
   */
  @Input()
  tooltip: string = undefined;

}
