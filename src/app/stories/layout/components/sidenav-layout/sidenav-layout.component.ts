import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.scss']
})
export class SidenavLayoutComponent implements OnInit {
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
  position: 'start' | 'end';

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

  constructor() {}

  ngOnInit() {}

  setState(_) {
    console.log('?');
  }

  toggleMenu($event) {
    console.log('!', $event);
  }

  isMenuMinimized() {
    console.log('halo');
  }

  links: Array<any> = [
    { href: '/home', icon: 'home', title: 'Home' },
    {
      href: '/activiti',
      icon: 'device_hub',
      title: 'Content Processes',
      children: [
        { href: '/activiti', icon: 'vpn_key', title: 'App' },
        { href: '/process-list', icon: 'assignment', title: 'List' },
        { href: '/form', icon: 'poll', title: 'Form' }
      ]
    },
    { href: '/files', icon: 'folder_open', title: 'Files' },
    { href: '/filtered-search', icon: 'rowing', title: 'Search' },
    { href: '/breadcrumb', icon: 'label', title: 'Labels' },
    { href: '/notifications', icon: 'alarm', title: 'Notifications' },
    { href: '/card-view', icon: 'view_headline', title: 'Card View' },
    {
      href: '/cloud',
      icon: 'cloud',
      title: 'Cloud',
      children: [
        { href: '/cloud/', icon: 'cloud', title: 'Small Cloud' },
        { href: '/cloud/community', icon: 'cloud', title: 'Big Cloud' }
      ]
    },
    { href: '/login', icon: 'vpn_key', title: 'VPN' },
    { href: '/trashcan', icon: 'delete', title: 'Thrash' }
  ];
}
