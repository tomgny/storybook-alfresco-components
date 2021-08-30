import { PaginatedComponent, PaginationModel } from '@alfresco/adf-core';
import { Pagination } from '@alfresco/js-api';
import { Component, Input, OnInit } from '@angular/core';
import { mockEntries, mockNodePaging } from '../document-list/mock/fake-nodes';

@Component({
  selector: 'aca-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
  /**
   * An array of page sizes.
   */
  @Input()
  supportedPageSizes: number[];

  /**
   * Pagination object.
   */
  @Input()
  pagination: PaginationModel;

  /**
   * Component that provides custom pagination support.
   */
  @Input()
  target: PaginatedComponent;

  constructor() {}

  ngOnInit(): void {
    this.onChangePageSize({ count: 5, hasMoreItems: true, maxItems: 5, skipCount: 0, totalItems: 15 });
  }

  ngOnDestroy(): void {
    this.onChangePageSize({ count: 7, hasMoreItems: true, maxItems: 7, skipCount: 0, totalItems: 15 });
  }

  updatePagingation(event: Pagination): void {
    let count: number;
    if (event.totalItems - event.skipCount > event.maxItems) {
      count = event.maxItems;
    } else {
      count = event.totalItems - event.skipCount;
    }
    mockNodePaging.list.pagination.count = count;

    mockNodePaging.list.pagination.skipCount = event.skipCount;
    mockNodePaging.list.pagination.maxItems = event.maxItems;

    mockNodePaging.list.entries = mockEntries.slice(event.skipCount, event.skipCount + count);
  }

  onChangePageSize(event: Pagination) {
    this.updatePagingation(event);
  }

  onNextPage(event: Pagination) {
    this.updatePagingation(event);
  }

  onPreviousPage(event: Pagination) {
    this.updatePagingation(event);
  }

  onChange(_: Pagination) {}

  onChangePageNumber(event: Pagination) {
    this.updatePagingation(event);
  }
}
