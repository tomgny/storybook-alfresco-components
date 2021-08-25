import { AppConfigService } from '@alfresco/adf-core';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlfrescoApiStubService {
  nodeUpdated = new Subject<Node>();
  alfrescoApiInitialized: ReplaySubject<boolean> = new ReplaySubject(1);
  
  async load() {
    await this.appConfig.load();
  }

  oauth2Auth = {
    implicitLogin() {
      alert('You would be redirected to the selected host.');
    }
  };

  getInstance = () => this;

  constructor(private appConfig: AppConfigService) {}
}
