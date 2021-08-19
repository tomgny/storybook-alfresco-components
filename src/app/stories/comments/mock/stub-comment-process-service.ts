import { CommentModel } from '@alfresco/adf-core';
import { Observable, of } from 'rxjs';
import { fakeTaskComments } from './fake-comments';

export class CommentProcessServiceStub {
  getTaskComments(_taskId: string): Observable<CommentModel[]> {
    return of(fakeTaskComments);
  }

  addTaskComment(_taskId: string, message: string): Observable<CommentModel> {
    return of(new CommentModel({ message: message, created: Date.now(), createdBy: { firstName: 'Task', lastName: 'Comment' } }));
  }
}
