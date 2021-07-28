import { ObjectDataTableAdapter, ShowHeaderMode } from '@alfresco/adf-core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-datatable',
  templateUrl: './datatable.component.html'
})
export class DatatableComponent {
  /**
   * Toggles the data actions column.
   */
  @Input()
  actions: boolean = false;

  /**
   * Position of the actions dropdown menu. Can be "left" or "right".
   */
  @Input()
  actionsPosition: 'right' | 'left' = 'right';

  /**
   * If set to true, the actions button will only be visible on row hover.
   */
  @Input()
  actionsVisibleOnHover: boolean = false;

  /**
   * Flag that indicate if the datatable allow the use facet widget search for filtering.
   */
  @Input()
  allowFiltering: boolean = false;

  /**
   * The columns that the datatable will show.
   */
  @Input()
  columns: any[] = undefined;

  /**
   * Toggles custom context menu for the component.
   */
  @Input()
  contextMenu: boolean = false;

  /**
   * Data source for the table
   */
  @Input()
  data = new ObjectDataTableAdapter();

  /**
   * Selects the display mode of the table. Can be "list" or "gallery".
   */
  @Input()
  display: 'list' | 'gallery' = 'list';

  /**
   * Fallback image for rows where the thumbnail is missing.
   */
  @Input()
  fallbackThumbnail: string;

  /**
   * Flag that indicates if the datatable is in loading state and needs to show the loading template (see the docs to learn how to configure a loading template).
   */
  @Input()
  loading: boolean = false;

  /**
   * Toggles multiple row selection, which renders checkboxes at the beginning of each row.
   */
  @Input()
  multiselect: boolean = false;

  /**
   * Flag that indicates if the datatable should show the "no permission" template.
   */
  @Input()
  noPermission: boolean = false;

  /**
   * Custom resolver function which is used to parse dynamic column objects see the docs to learn how to configure a resolverFn.
   */
  @Input()
  resolverFn = null;

  /**
   * Should the items for the row actions menu be cached for reuse after they are loaded the first time?
   */
  @Input()
  rowMenuCacheEnabled: boolean = true;

  /**
   * The inline style to apply to every row. See NgStyle docs for more details and usage examples.
   */
  @Input()
  rowStyle: { [key: string]: any };

  /**
   * The CSS class to apply to every row.
   */
  @Input()
  rowStyleClass: string = '';

  /**
   * The rows that the datatable will show.
   */
  @Input()
  rows: any[] = undefined;

  /**
   * Row selection mode. Can be none, single or multiple. For multiple mode, you can use Cmd (macOS) or Ctrl (Win) modifier key to toggle selection for multiple rows.
   */
  @Input()
  selectionMode: 'single' | 'multiple' | 'none' = 'multiple';

  /**
   * Toggles the header.
   */
  @Input()
  showHeader: ShowHeaderMode.Always | ShowHeaderMode.Data | ShowHeaderMode.Never = ShowHeaderMode.Always;

  /**
   * Toggles the sticky header mode.
   */
  @Input()
  stickyHeader: boolean = false;
}
