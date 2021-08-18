import { CommentModel } from '@alfresco/adf-core';
import { BehaviorSubject, Observable } from 'rxjs';
import { fakeComments } from './fake-comments';

export class CommentContentServiceStub{

  fakeCommentsSubject = new BehaviorSubject<CommentModel[]>(fakeComments);

  getNodeComments(_taskId: string): Observable<CommentModel[]>{
    return this.fakeCommentsSubject;
  }
}
