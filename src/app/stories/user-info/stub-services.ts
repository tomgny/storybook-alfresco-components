import { EcmUserModel } from '@alfresco/adf-core';
import { ReplaySubject, of } from 'rxjs';

export class AuthenticationServiceStub {

    onLogin: ReplaySubject<any> = new ReplaySubject<any>(1);

    isOauth = () => false;

    isLoggedIn = () => true;

    isBpmLoggedIn = () => false;

    isEcmLoggedIn = () => true;

}

export class EcmUserServiceStub {

    private fakeEcmUser = new EcmUserModel({
        firstName: 'John',
        lastName: 'Smith',
        avatarId: 'fake-avatar-id',
        email: 'john.smith@gmail.com',
        jobTitle: 'Product Manager',
    });

    getCurrentUserInfo = () => of(this.fakeEcmUser);

    getUserProfileImage = () => './assets/images/user-avatar.png';
    
}