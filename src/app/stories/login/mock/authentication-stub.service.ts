import { AppConfigService, AppConfigValues, RedirectionModel } from '@alfresco/adf-core';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, throwError } from 'rxjs';

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
  redirectUrl: RedirectionModel = null;

  isEcmLoggedIn = () => false;
  isLoggedIn = () => false;

  isOauth = () => isOuathReturnValue;

  ssoImplicitLogin() {
    alert('You would be redirected to the selected host.');
  }

  setRedirect(url: RedirectionModel) {
    this.redirectUrl = url;
  }

  private hasValidRedirection(provider: string): boolean {
    return this.redirectUrl && (this.redirectUrl.provider === provider || this.hasSelectedProviderAll(provider));
  }

  private hasSelectedProviderAll(provider: string): boolean {
    return this.redirectUrl && (this.redirectUrl.provider === 'ALL' || provider === 'ALL');
  }

  getRedirect(): string {
    const provider = <string>this.appConfig.get(AppConfigValues.PROVIDERS);
    return this.hasValidRedirection(provider) ? this.redirectUrl.url : null;
  }

  login(username: string, password: string, rememberMe: boolean = false): Observable<{ type: string; ticket: any }> {
    if (username === 'hruser' && password === 'password') {
      return of({ type: 'ALL', ticket: `ticket${rememberMe}` });
    } else {
      return throwError('Wrong credentials');
    }
  }

  constructor(private appConfig: AppConfigService) {}
}
