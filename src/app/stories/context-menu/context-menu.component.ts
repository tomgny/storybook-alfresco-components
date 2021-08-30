import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-context-menu',
  templateUrl: './context-menu.component.html'
})
export class ContextMenuComponent implements OnInit {
  /**
   * Items for the menu.
   */
  @Input()
  links: any[];

  /**
   * Is the menu enabled?
   */
  @Input()
  enabled: boolean;

  @Input()
  showIcons: boolean;

  constructor() {}

  ngOnInit() {
    if (this.showIcons) {
      this.links[0].model.icon = 'home';
      this.links[1].model.icon = 'done';
      this.links[2].model.icon = 'delete';
    }

    this.links.forEach((l) => l.subject.subscribe((item: { model: { title: any } }) => this.commandCallback(item)));
  }

  commandCallback(item: { model: { title: any } }) {
    alert(`Executing ${item.model.title}.`);
  }
}
