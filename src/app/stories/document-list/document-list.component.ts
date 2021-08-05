import { PermissionStyleModel, RowFilter } from '@alfresco/adf-content-services';
import { DataSorting, ShowHeaderMode } from '@alfresco/adf-core';
import { NodeEntry, NodePaging } from '@alfresco/js-api';
import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit, AfterViewInit{

  @ViewChild('documentList')
    documentList: DocumentListComponent;

  @Input()
  additionalSorting: DataSorting;

  @Input()
  allowDropFiles: boolean = false;

  @Input()
  contentActions: boolean = false;

  @Input()
  contentActionsPosition: string = 'right';

  @Input()
  contextMenuActions: boolean = false;

  @Input()
  currentFolderId: string = null;

  @Input()
  display: 'list' | 'gallery' = 'list';

  @Input()
  emptyFolderImageUrl: string;

  @Input()
  filterValue: any;

  @Input()
  headerFilters: boolean = false;

  @Input()
  imageResolver: any | null = null;

  @Input()
  includeFields: string[];

  @Input()
  loading: boolean = false;

  @Input()
  locationFormat: string = '/';

  @Input()
  maxItems: number;

  @Input()
  multiselect: boolean = false;

  @Input()
  navigate: boolean = true;

  @Input()
  navigationMode: string;

  @Input()
  node: NodePaging;

  @Input()
  permissionsStyle: PermissionStyleModel[] = [];

  @Input()
  preselectNodes: NodeEntry[];

  @Input()
  rowStyle: { [key: string]: any };

  @Input()
  rowStyleClass: string;

  @Input()
  selectionMode: string = 'single';

  @Input()
  showHeader: ShowHeaderMode.Always | ShowHeaderMode.Data | ShowHeaderMode.Never = ShowHeaderMode.Always;

  @Input()
  sorting: string[] | DataSorting = ['name', 'asc'];

  @Input()
  sortingMode: 'server' | 'client' = 'server';

  @Input()
  stickyHeader: boolean = false;

  @Input()
  thumbnails: boolean = false;

  @Input()
  where: string;

  @Input()
  rowFilter: RowFilter;

    ngAfterViewInit() {
      console.log(this.documentList);
  }

    ngOnInit() {
    }
}
