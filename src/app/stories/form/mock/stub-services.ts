import { ReplaySubject } from 'rxjs';
import { ModelsApiStub } from './stub-apis';

export class AuthenticationServiceStub {
  onLogin: ReplaySubject<any> = new ReplaySubject<any>(1);

  isLoggedIn = () => true;

  isOauth = () => true;

  isEcmLoggedIn = () => true;
}

export class AlfrescoApiServiceStub {
  //nodesApi = new NodesApiStub();

  //nodes = this.nodesApi;

  //contentApi = new ContentApiStub();

  //nodeUpdated = new Subject<Node>();
  // modelsApi = new ModelsApiStub();

  alfrescoApiInitialized: ReplaySubject<boolean> = new ReplaySubject(1);

  load() {}

  getInstance = () => this;
}

export class FormServiceStub {

  getForms(){}

  modelsApi = new ModelsApiStub();
}
