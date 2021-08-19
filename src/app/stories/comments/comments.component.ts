import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input()
  nodeId: string = null;

  @Input()
  readOnly: boolean = false;

  @Input()
  taskId: string = null;
}
