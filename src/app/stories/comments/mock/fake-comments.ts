import { CommentModel } from '@alfresco/adf-core';

export const fakeTaskComment1 = new CommentModel({
  message: 'Task comment',
  created: Date.now(),
  createdBy: { firstName: 'Task', lastName: 'Comment' }
});
export const fakeTaskComment2 = new CommentModel({ message: 'Message', created: Date.now(), createdBy: { firstName: 'HR', lastName: 'User' } });
export const fakeTaskComment3 = new CommentModel({ message: 'Storybook', created: Date.now(), createdBy: { firstName: 'Super', lastName: 'User' } });
export const fakeTaskComment4 = new CommentModel({ message: 'Angular', created: Date.now(), createdBy: { firstName: 'Guest', lastName: 'None' } });
export const fakeTaskComment5 = new CommentModel({ message: 'TypeScript', created: Date.now(), createdBy: { firstName: 'Test', lastName: 'Test' } });

export const fakeTaskComments: CommentModel[] = [fakeTaskComment1, fakeTaskComment2, fakeTaskComment3, fakeTaskComment4, fakeTaskComment5];

export const fakeNodeComment1 = new CommentModel({
  message: 'Test',
  created: new Date('2017-12-10T12:32:30.010+0000'),
  createdBy: { firstName: 'Node', lastName: 'Comment' }
});
export const fakeNodeComment2 = new CommentModel({
  message: 'Test Comment',
  created: Date.now(),
  createdBy: { firstName: 'Test', lastName: 'Storybook' }
});
export const fakeNodeComment3 = new CommentModel({
  message: 'Node comment',
  created: new Date('2016-11-10T03:37:30.010+0000'),
  createdBy: { firstName: 'Wilbur', lastName: 'Adams' }
});

export const fakeNodeComments: CommentModel[] = [fakeNodeComment1, fakeNodeComment2, fakeNodeComment3];
