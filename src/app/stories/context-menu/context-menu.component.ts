import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'aca-context-menu',
  templateUrl: './context-menu.component.html'
})
export class ContextMenuComponent implements OnInit {
  menuItems: any[] = [
    {
      model: {
        visible: true,
        disabled: false,
        title: 'Action 1'
      },
      subject: new Subject()
    },
    {
      model: {
        visible: true,
        disabled: true,
        title: 'Action 2'
      },
      subject: new Subject()
    },
    {
      model: {
        visible: true,
        disabled: false,
        title: 'Action 3'
      },
      subject: new Subject()
    }
  ];

  @Input()
  showIcons: boolean;

  constructor() {}

  ngOnInit() {
    if (this.showIcons) {
      this.menuItems[0].model.icon = 'home';
      this.menuItems[1].model.icon = 'done';
      this.menuItems[2].model.icon = 'delete';
    }

    this.menuItems.forEach((l) => l.subject.subscribe((item: { model: { title: any; }; }) => this.commandCallback(item)));
  }

  commandCallback(item: { model: { title: any } }) {
    alert(`Executing ${item.model.title}.`);
  }
}
