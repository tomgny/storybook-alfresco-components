import { RedirectionModel } from '@alfresco/adf-core';
import { ReplaySubject } from 'rxjs';

export let loginProvider = 'ecm';

export const setProvider = (userLoggedInWith: string) => {
  loginProvider = userLoggedInWith;
};

export class AuthenticationServiceStub {
  onLogin: ReplaySubject<any> = new ReplaySubject<any>(1);

  isOauth = () => {
    if (loginProvider === 'sso' || loginProvider === 'ssoAndEcm') return true;

    return false;
  };

  isBpmLoggedIn = () => {
    if (loginProvider === 'bpm' || loginProvider === 'both') return true;

    return false;
  };

  isEcmLoggedIn = () => {
    if (loginProvider === 'ecm' || loginProvider === 'both' || loginProvider === 'ssoAndEcm') return true;

    return false;
  };

  isLoggedIn = () => true;
  setRedirect(_: RedirectionModel) {}
}
