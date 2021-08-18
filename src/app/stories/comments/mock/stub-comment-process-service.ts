import { CommentModel } from '@alfresco/adf-core';
import { BehaviorSubject, Observable } from 'rxjs';
import { fakeComments } from './fake-comments';

export class CommentProcessServiceStub{

  fakeCommentsSubject = new BehaviorSubject<CommentModel[]>(fakeComments);

  getTaskComments(_taskId: string): Observable<CommentModel[]>{
    return this.fakeCommentsSubject;
  }
}
