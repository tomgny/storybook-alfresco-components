import { CommentModel } from '@alfresco/adf-core';
import { Observable, of } from 'rxjs';
import { fakeNodeComments } from './fake-comments';

export class CommentContentServiceStub {
  getNodeComments(_taskId: string): Observable<CommentModel[]> {
    return of(fakeNodeComments);
  }

  addNodeComment(_taskId: string, message: string): Observable<CommentModel> {
    return of(new CommentModel({ message: message, created: Date.now(), createdBy: { firstName: 'Node', lastName: 'Comment' } }));
  }
}
