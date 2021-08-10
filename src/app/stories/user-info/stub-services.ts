import { BpmUserModel, EcmUserModel, RedirectionModel } from '@alfresco/adf-core';
import { ReplaySubject, of } from 'rxjs';

export let isEcmUserLoggedIn = false;

export const setIsEcmUserLoggedIn = (user: boolean) => {
  isEcmUserLoggedIn = user;
};

export class AuthenticationServiceStub {
  onLogin: ReplaySubject<any> = new ReplaySubject<any>(1);

  isOauth = () => false;

  isLoggedIn = () => true;

  isBpmLoggedIn = () => {
    return isEcmUserLoggedIn ? false : true;
  };

  isEcmLoggedIn = () => {
    return isEcmUserLoggedIn ? true : false;
  };

  setRedirect(_: RedirectionModel) {}
}

export class EcmUserServiceStub {
  private fakeEcmUser = new EcmUserModel({
    firstName: 'John',
    lastName: 'Ecm',
    avatarId: 'fake-avatar-id',
    email: 'john.ecm@gmail.com',
    jobTitle: 'Product Manager'
  });

  getCurrentUserInfo = () => {
    return of(this.fakeEcmUser);
  };

  getUserProfileImage = () => './assets/images/ecm-user-avatar.png';
}

export class BpmUserServiceStub {
  private fakeBpmUser = new BpmUserModel({
    email: 'john.bpm@gmail.com',
    firstName: 'John',
    lastName: 'Bpm',
    pictureId: 12,
    tenantName: 'Name of Tenant'
  });

  getCurrentUserInfo = () => {
    return of(this.fakeBpmUser);
  };

  getCurrentUserProfileImage = () => './assets/images/bpm-user-avatar.png';
}
