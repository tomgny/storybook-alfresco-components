import { PaginatedComponent, PaginationModel } from '@alfresco/adf-core';
import { Pagination } from '@alfresco/js-api';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { mockEntries, mockNodePaging } from '../document-list/mock/fake-nodes';

@Component({
  selector: 'aca-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit, OnDestroy {
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

  ngOnInit(): void {
    this.onChangePageSize({ count: 5, hasMoreItems: true, maxItems: 5, skipCount: 0, totalItems: mockEntries.length });
  }

  ngOnDestroy(): void {
    this.onChangePageSize({ count: 7, hasMoreItems: true, maxItems: 7, skipCount: 0, totalItems: mockEntries.length });
  }

  updatePagination(event: Pagination): void {
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

  /**
   * Called when the page size changes.
   * @param event
   */
  onChangePageSize(event: Pagination) {
    this.updatePagination(event);
  }

  /**
   * Called when the next page is requested.
   * @param event
   */
  onNextPage(event: Pagination) {
    this.updatePagination(event);
  }

  /**
   * Called when the previous page is requested.
   * @param event
   */
  onPreviousPage(event: Pagination) {
    this.updatePagination(event);
  }

  /**
   * Called when pagination changes in any way.
   * @param _
   */
  onChange(_: Pagination) {}

  /**
   * Called when the page number changes.
   * @param event
   */
  onChangePageNumber(event: Pagination) {
    this.updatePagination(event);
  }
}
