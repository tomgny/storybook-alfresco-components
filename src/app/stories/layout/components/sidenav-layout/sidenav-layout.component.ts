import { Component, Input, ViewEncapsulation } from '@angular/core';
import { links } from './mock/fake-links';

@Component({
  selector: 'aca-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavLayoutComponent {
  /**
   * Minimum size of the navigation region.
   */
  @Input()
  sidenavMin: number;

  /**
   * Maximum size of the navigation region.
   */
  @Input()
  sidenavMax: number;

  /**
   * Screen size at which display switches from small screen to large screen configuration.
   */
  @Input()
  stepOver: number;

  /**
   * The side that the drawer is attached to. Possible values are 'start' and 'end'.
   */
  @Input()
  position: 'start' | 'end' = 'start';

  /**
   * Toggles showing/hiding the navigation region.
   */
  @Input()
  hideSidenav: boolean;

  /**
   * Should the navigation region be expanded initially?
   */
  @Input()
  expandedSidenav: boolean;

  @Input()
  showSidenavLayoutHeader: boolean;

  @Input()
  showSidenavLayoutNavigation: boolean;

  @Input()
  showSidenavLayoutContent: boolean;

  links = links;

  setState(_: any) {}
}
