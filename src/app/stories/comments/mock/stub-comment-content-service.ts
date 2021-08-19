import { CommentModel } from '@alfresco/adf-core';
import { Observable, of } from 'rxjs';
import { fakeNodeComments } from './fake-comments';

export class CommentContentServiceStub {
  getNodeComments(_taskId: string): Observable<any> {
    return of(fakeNodeComments);
  }

  addNodeComment(_taskId: string, message: string): Observable<CommentModel> {
    return of(new CommentModel({ id: '-fake-', message: message, created: Date.now(), createdBy: { firstName: 'Current', lastName: 'Test' } }));
  }
}
