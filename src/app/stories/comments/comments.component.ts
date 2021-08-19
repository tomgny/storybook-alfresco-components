import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  /**
   * The numeric ID of the node.
   */
  @Input()
  nodeId: string = null;

  /**
   * Are the comments read only?
   */
  @Input()
  readOnly: boolean = false;

  /**
   * The numeric ID of the task.
   */
  @Input()
  taskId: string = null;
}
