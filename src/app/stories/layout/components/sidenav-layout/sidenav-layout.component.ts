import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aca-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.scss']
})
export class SidenavLayoutComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}

  setState(_) {}
}
