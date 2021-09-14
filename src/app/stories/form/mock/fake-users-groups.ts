import { BpmUserModel, IdentityGroupModel, IdentityUserModel } from '@alfresco/adf-core';

export const mockIdentityGroup1 = <IdentityGroupModel>{
  id: 'mock-group-id-1',
  name: 'Mock Group 1',
  path: '/mock',
  subGroups: []
};

export const mockIdentityGroup2 = <IdentityGroupModel>{
  id: 'mock-group-id-2',
  name: 'Mock Group 2',
  path: '',
  subGroups: []
};

export const mockIdentityGroup3 = <IdentityGroupModel>{
  id: 'mock-group-id-3',
  name: 'Mock Group 3',
  path: '',
  subGroups: []
};

export const mockIdentityGroup4 = <IdentityGroupModel>{
  id: 'mock-group-id-4',
  name: 'Mock Group 4',
  path: '',
  subGroups: []
};

export const mockIdentityGroup5 = <IdentityGroupModel>{
  id: 'mock-group-id-5',
  name: 'Mock Group 5',
  path: '',
  subGroups: []
};

export const mockIdentityUser1: IdentityUserModel = {
  id: 'mock-user-id-1',
  username: 'userName1',
  firstName: 'first-name-1',
  lastName: 'last-name-1',
  email: 'abc@xyz.com'
};
export const mockIdentityUser2: IdentityUserModel = {
  id: 'mock-user-id-2',
  username: 'userName2',
  firstName: 'first-name-2',
  lastName: 'last-name-2',
  email: 'abcd@xyz.com'
};
export const mockIdentityUser3: IdentityUserModel = {
  id: 'mock-user-id-3',
  username: 'userName3',
  firstName: 'first-name-3',
  lastName: 'last-name-3',
  email: 'abcde@xyz.com'
};
export const mockIdentityUser4: IdentityUserModel = {
  id: 'mock-user-id-4',
  username: 'userName4',
  firstName: 'first-name-4',
  lastName: 'last-name-4',
  email: 'abcde@xyz.com'
};
export const mockIdentityUser5: IdentityUserModel = {
  id: 'mock-user-id-5',
  username: 'userName5',
  firstName: 'first-name-5',
  lastName: 'last-name-5',
  email: 'abcde@xyz.com'
};

export const mockIdentityGroups = [mockIdentityGroup1, mockIdentityGroup2, mockIdentityGroup3, mockIdentityGroup4, mockIdentityGroup5];

export const mockIdentityUsers: IdentityUserModel[] = [mockIdentityUser1, mockIdentityUser2, mockIdentityUser3, mockIdentityUser4, mockIdentityUser5];


export const fakeBpmUser = new BpmUserModel({
  apps: [],
  capabilities: null,
  company: 'fake-company',
  created: 'fake-create-date',
  email: 'fakeBpm@fake.com',
  externalId: 'fake-external-id',
  firstName: 'fake-bpm-first-name',
  lastName: 'fake-bpm-last-name',
  groups: [],
  id: 'fake-id',
  lastUpdate: 'fake-update-date',
  latestSyncTimeStamp: 'fake-timestamp',
  password: 'fake-password',
  pictureId: 12,
  status: 'fake-status',
  tenantId: 'fake-tenant-id',
  tenantName: 'fake-tenant-name',
  tenantPictureId: 'fake-tenant-picture-id',
  type: 'fake-type'
});

