import { ObjectDataTableAdapter } from '@alfresco/adf-core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-empty-list',
  templateUrl: './empty-list.component.html'
})
export class EmptyListComponent implements OnInit {
  @Input()
  data: ObjectDataTableAdapter = new ObjectDataTableAdapter();

  @Input()
  showHeader: boolean;

  @Input()
  showBody: boolean;

  @Input()
  showFooter: boolean;

  @Input()
  showContent: boolean;

  @Input()
  headerText: string;

  @Input()
  bodyText: string;

  @Input()
  footerText: string;

  constructor() {}

  ngOnInit(): void {}
}
