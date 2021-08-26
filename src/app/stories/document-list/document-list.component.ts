import { PermissionStyleModel, RowFilter } from '@alfresco/adf-content-services';
import { DataSorting, PaginationComponent, ShowHeaderMode } from '@alfresco/adf-core';
import { NodeEntry, NodePaging } from '@alfresco/js-api';
import { ViewChild } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent {
  @ViewChild('pagination')
  pagination: PaginationComponent;

  @ViewChild('documentList')
  documentList: DocumentListComponent;

  /** Defines default sorting. The format is an array of strings `[key direction, otherKey otherDirection]`
   * i.e. `['name desc', 'nodeType asc']` or `['name asc']`. Set this value if you want a base
   * rule to be added to the sorting apart from the one driven by the header.
   */
  @Input()
  additionalSorting: DataSorting;

  /**
   * When true, this enables you to drop files directly into subfolders shown
   * as items in the list or into another file to trigger updating it's version.
   * When false, the dropped file will be added to the
   * current folder (ie, the one containing all the items shown in the list).
   * See the Upload directive for further details about how the file drop is
   * handled.
   */
  @Input()
  allowDropFiles: boolean = false;

  /** Toggles content actions for each row */
  @Input()
  contentActions: boolean = false;

  /** Position of the content actions dropdown menu. Can be set to "left" or "right". */
  @Input()
  contentActionsPosition: string = 'right';

  /** Toggles context menus for each row */
  @Input()
  contextMenuActions: boolean = false;

  /** The ID of the folder node to display or a reserved string alias for special sources */
  @Input()
  currentFolderId: string = null;

  /** Change the display mode of the table. Can be "list" or "gallery". */
  @Input()
  display: 'list' | 'gallery' = 'list';

  /** Custom image for empty folder. Default value: './assets/images/empty_doc_lib.svg' */
  @Input()
  emptyFolderImageUrl: string;

  /** Initial value for filter. */
  @Input()
  filterValue: Map<any, any> = null;

  /** Toggles the header filters mode. */
  @Input()
  headerFilters: boolean = false;

  /**
   * Custom function to choose image file paths to show. See the
   * [Image Resolver Model](image-resolver.model.md) page for
   * more information.
   */
  @Input()
  imageResolver: any | null = null;

  /** Include additional information about the node in the server request. For example: association, isLink, isLocked and others. */
  @Input()
  includeFields: string[];

  /** Toggles the loading state and animated spinners for the component. Used in
   * combination with `navigate=false` to perform custom navigation and loading
   * state indication.
   */
  @Input()
  loading: boolean = false;

  /** The default route for all the location-based columns (if declared). */
  @Input()
  locationFormat: string = '/';

  /** Default value is stored in the user preference settings. Use this only if you are not using pagination. */
  @Input()
  maxItems: number;

  /** Toggles multiselect mode */
  @Input()
  multiselect: boolean = false;

  /** Toggles navigation to folder content or file preview */
  @Input()
  navigate: boolean = true;

  /** User interaction for folder navigation or file preview.
   * Valid values are "click" and "dblclick". Default value: "dblclick"
   */
  @Input()
  navigationMode: 'click' | 'dblclick' = 'dblclick';

  /** The Document list will show all the nodes contained in the NodePaging entity */
  @Input()
  node: NodePaging;

  /** Define a set of CSS styles to apply depending on the permission
   * of the user on that node. See the Permission Style model
   * page for further details and examples.
   */
  @Input()
  permissionsStyle: PermissionStyleModel[] = [];

  /** Array of nodes to be pre-selected. All nodes in the
   * array are pre-selected in multi selection mode, but only the first node
   * is pre-selected in single selection mode.
   */
  @Input()
  preselectNodes: NodeEntry[];

  /** The inline style to apply to every row. See
   * the Angular NgStyle
   * docs for more details and usage examples.
   */
  @Input()
  rowStyle: { [key: string]: any };

  /** The CSS class to apply to every row */
  @Input()
  rowStyleClass: string;

  /** Row selection mode. Can be null, `single` or `multiple`. For `multiple` mode,
   * you can use Cmd (macOS) or Ctrl (Win) modifier key to toggle selection for multiple rows.
   */
  @Input()
  selectionMode: 'single' | 'multiple' | 'none' = 'multiple';

  /** Toggles the header */
  @Input()
  showHeader: ShowHeaderMode.Always | ShowHeaderMode.Data | ShowHeaderMode.Never = ShowHeaderMode.Always;

  /** Defines default sorting. The format is an array of 2 strings `[key, direction]`
   * i.e. `['name', 'desc']` or `['name', 'asc']`. Set this value only if you want to
   * override the default sorting detected by the component based on columns.
   */
  @Input()
  sorting: string[] | DataSorting = ['name', 'asc'];

  /** Defines sorting mode. Can be either `client` (items in the list
   * are sorted client-side) or `server` (the ordering supplied by the
   * server is used without further client-side sorting).
   * Note that the `server` option *does not* request the server to sort the data
   * before delivering it.
   */
  @Input()
  sortingMode: 'server' | 'client' = 'server';

  /** Toggles the sticky header mode. */
  @Input()
  stickyHeader: boolean = false;

  /** Show document thumbnails rather than icons */
  @Input()
  thumbnails: boolean = false;

  /**
   * Filters the Node list using the *where* condition of the REST API
   * (for example, isFolder=true). See the REST API documentation for more information.
   */
  @Input()
  where: string;

  /**
   * Custom function to choose whether to show or hide rows.
   * See the [Row Filter Model](row-filter.model.md) page for
   * more information.
   */
  @Input()
  rowFilter: RowFilter;

  fakeDownload() {
    window.alert('Download started!');
  }

  fakeUpload() {
    this.allowDropFiles ? window.alert('Upload started!') : window.alert('Upload not allowed!');
  }
}
