import { ClassDescription, MinimalNode } from '@alfresco/js-api';
import { Observable, of, ReplaySubject } from 'rxjs';
import { contentResponse, exifResponse } from './fake-node-and-classes';

export class NodesApiServiceStub {
  updateNode(_: string, nodeBody: any, _2: any = {}): Observable<MinimalNode> {
    return of(nodeBody);
  }
}

export class AlfrescoApiServiceStub {
  alfrescoApiInitialized: ReplaySubject<boolean> = new ReplaySubject(1);

  load() {}

  getInstance = () => this;

  isOauthConfiguration = () => true;

  isLoggedIn = () => true;

  isEcmConfiguration = () => true;

  isEcmLoggedIn = () => true;

  classesApi = new ClassesApiStub();
}

class ClassesApiStub {
  getClass(className: string, _2?: any): Promise<ClassDescription> {
    return className === 'exif_exif' ? Promise.resolve(exifResponse) : Promise.resolve(contentResponse);
  }
}
