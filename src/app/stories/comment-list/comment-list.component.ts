import { CommentModel } from '@alfresco/adf-core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-comment-list',
  templateUrl: './comment-list.component.html',
})
export class CommentListComponent {
  /**
   * The comments data used to populate the list.
   */
  @Input()
  comments: CommentModel[];

  /**
   * Called when the user clicks on one of the comment rows.
   * @param _
   */
  onClickRow(_: any) {}
}
