import { ObjectDataTableAdapter } from '@alfresco/adf-core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-datatable-custom',
  templateUrl: './datatable-custom-data.component.html'
})
export class DatatableCustomComponent {
  /**
   * The columns that the datatable will show.
   */
  @Input()
  columns: any[] = [];

  /**
   * Data source for the table
   */
  @Input()
  data = new ObjectDataTableAdapter();

  /**
   * Custom resolver function which is used to parse dynamic column objects see the docs to learn how to configure a resolverFn.
   */
  @Input()
  resolverFn = null;

  /**
   * The rows that the datatable will show.
   */
  @Input()
  rows: any[] = [];

  /**
   * Define the sort order of the datatable. Possible values are : [created, desc], [created, asc], [due, desc], [due, asc]
   */
  @Input()
  sorting = ['name', 'desc'];
}
