import { RedirectionModel } from '@alfresco/adf-core';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

export let isOuathReturnValue: boolean = false;

export const setIsOuathReturnValue = (value: boolean) => {
  isOuathReturnValue = value;
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStubService {
  onLogin: ReplaySubject<any> = new ReplaySubject<any>(1);
  onLogout: ReplaySubject<any> = new ReplaySubject<any>(1);
  private redirectUrl: RedirectionModel = null;

  isEcmLoggedIn = () => false;
  isLoggedIn = () => false;

  isOauth = () => isOuathReturnValue;

  ssoImplicitLogin() {
    alert('You would be redirected to the selected host.');
  }

  setRedirect(url: RedirectionModel) {
    this.redirectUrl = url;
    console.log(this.redirectUrl);
  }

  constructor() {}
}
