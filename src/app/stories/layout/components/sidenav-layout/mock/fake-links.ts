export const links: Array<any> = [
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
  { href: '/filtered-search', icon: 'rowing', title: 'Quick Search' },
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
  { href: '/tag', icon: 'local_offer', title: 'Tags' },
  { href: '/social', icon: 'thumb_up', title: 'Socials' },
  { href: '/pipes', icon: 'layers', title: 'Pipes' },
  { href: '/settings-layout', icon: 'settings', title: 'Settings' },
  { href: '/config-editor', icon: 'code', title: 'Editor' },
  { href: '/extendedSearch', icon: 'search', title: 'Extended Search' },
  { href: '/trashcan', icon: 'delete', title: 'Thrash' }
];
