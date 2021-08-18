import { CommentModel } from '@alfresco/adf-core';

export const fakeComment1 = new CommentModel({message: 'Test1', created: Date.now(), createdBy: {firstName: 'Admin', lastName: 'User'}})
export const fakeComment2 = new CommentModel({message: 'Test2', created: Date.now(), createdBy: {firstName: 'Admin', lastName: 'User'}})
export const fakeComment3 = new CommentModel({message: 'Test3', created: Date.now(), createdBy: {firstName: 'Admin', lastName: 'User'}})
export const fakeComment4 = new CommentModel({message: 'Test4', created: Date.now(), createdBy: {firstName: 'Admin', lastName: 'User'}})
export const fakeComment5 = new CommentModel({message: 'Test5', created: Date.now(), createdBy: {firstName: 'Admin', lastName: 'User'}})

export const fakeComments: CommentModel[] = [fakeComment1, fakeComment2, fakeComment3, fakeComment4, fakeComment5];
