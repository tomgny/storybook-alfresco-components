import { DataColumn, DataRow, DataTableAdapter } from '@alfresco/adf-core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-json-cell',
  templateUrl: './json-cell.component.html'
})
export class JsonCellComponent {
  /**
   * Editable JSON.
   */
  @Input()
  editable: boolean = false;

  /**
   * Data table adapter instance.
   */
  @Input()
  data: DataTableAdapter;

  /**
   * Data that defines the column.
   */
  @Input()
  column: DataColumn;

  /**
   * Data that defines the row.
   */
  @Input()
  row: DataRow;

  /**
   * Enables/disables a Clipboard directive to allow copying of the cell's content.
   */
  @Input()
  copyContent: boolean;

  /**
   * Text for the cell's tooltip.
   */
  @Input()
  tooltip: string;

  /**
   * Custom resolver function which is used to parse dynamic column objects
   */
  @Input()
  resolverFn: (row: DataRow, col: DataColumn) => any = null;
}
