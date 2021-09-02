import { ObjectDataTableAdapter } from '@alfresco/adf-core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-empty-list',
  templateUrl: './empty-list.component.html',
  styleUrls: ['./empty-list.theme.scss']
})
export class EmptyListComponent {
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
}
