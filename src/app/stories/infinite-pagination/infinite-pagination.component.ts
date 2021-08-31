import { PaginatedComponent, RequestPaginationModel } from '@alfresco/adf-core';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { mockEntries, mockNodePaging } from '../document-list/mock/fake-nodes';

@Component({
  selector: 'aca-infinite-pagination',
  templateUrl: './infinite-pagination.component.html'
})
export class InfinitePaginationComponent implements OnInit, OnDestroy {
  /**
   * Number of items that are added with each "load more" event.
   */
  @Input()
  pageSize: number;

  /**
   * Component that provides custom pagination support.
   */
  @Input()
  target: PaginatedComponent;

  /**
   * Is a new page loading?
   */
  @Input()
  isLoading: boolean = false;

  private destroyFlag: boolean = false;

  ngOnInit(): void {
    this.destroyFlag = false;
    this.onLoadMore({ skipCount: 0, merge: false, maxItems: this.pageSize });
  }

  ngOnDestroy(): void {
    this.destroyFlag = true;
    this.onLoadMore({ skipCount: 0, merge: false, maxItems: 7 });
  }

  /**
   * Called when the "Load More" button is clicked.
   * @param event
   */
  onLoadMore(event: RequestPaginationModel) {
    this.updatePagination(event);
  }

  updatePagination(event: RequestPaginationModel) {
    if (!this.destroyFlag) {
      mockNodePaging.list.pagination.maxItems = event.maxItems;
      mockNodePaging.list.pagination.skipCount = event.skipCount;
      mockNodePaging.list.entries = mockEntries.slice(0, event.maxItems);
    } else {
      mockNodePaging.list.pagination.count = 7;
      mockNodePaging.list.pagination.hasMoreItems = true;
      mockNodePaging.list.pagination.maxItems = 7;
      mockNodePaging.list.pagination.skipCount = 0;
      mockNodePaging.list.pagination.count = mockEntries.length;
      mockNodePaging.list.entries = mockEntries.slice(0, 7);
    }
  }
}
