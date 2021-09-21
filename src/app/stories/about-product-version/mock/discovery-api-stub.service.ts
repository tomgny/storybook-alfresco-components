import { BpmProductVersionModel, EcmProductVersionModel } from '@alfresco/adf-core';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscoveryApiStubService {
  ecmProductInfo$ = new Subject<EcmProductVersionModel>();

  private fakeEcmProductVersionModel: EcmProductVersionModel = {
    edition: 'Enterprise',
    version: {
      major: '6',
      minor: '2',
      patch: '0',
      hotfix: '0',
      schema: 13001,
      label: 'ra498a911-b5',
      display: '6.2.0.0'
    },
    license: {
      issuedAt: '2018-12-20T12:07:31.276+0000',
      expiresAt: '2019-05-31T23:00:00.000+0000',
      remainingDays: 100,
      holder: 'CompanyQA',
      mode: 'ENTERPRISE',
      isClusterEnabled: true,
      isCryptodocEnabled: true
    },
    status: {
      isReadOnly: false,
      isAuditEnabled: true,
      isQuickShareEnabled: true,
      isThumbnailGenerationEnabled: true
    },
    modules: [
      {
        id: 'mock-id',
        title: 'ABC Repo',
        description: 'ABC Repository Extension',
        version: '3.2.0',
        installDate: '',
        installState: 'UNKNOWN',
        versionMin: '6.1',
        versionMax: '999'
      },
      {
        id: 'aos-module-id',
        title: 'AOFS Module',
        description: 'Allows applications that can talk to a SharePoint server to talk to your Alfresco installation',
        version: '1.3.0',
        installDate: '2019-02-07T12:26:13.271+0000',
        installState: 'INSTALLED',
        versionMin: '6.0',
        versionMax: '999'
      },
      {
        id: 'mock-saml-repo',
        title: 'SAML Repository Module',
        description: 'The Repository piece of the Alfresco SAML Module',
        version: '1.1.1',
        installDate: '2019-02-07T12:26:12.565+0000',
        installState: 'INSTALLED',
        versionMin: '6.0',
        versionMax: '6.99'
      }
    ]
  };

  private fakeBpmProductVersionModel = {
    revisionVersion: '0',
    edition: 'APS',
    type: 'bpmSuite',
    majorVersion: '1',
    minorVersion: '10'
  };

  public getEcmProductInfo(): Observable<EcmProductVersionModel> {
    return of(this.fakeEcmProductVersionModel);
  }

  public getBpmProductInfo(): Observable<BpmProductVersionModel> {
    return of(this.fakeBpmProductVersionModel);
  }
}
