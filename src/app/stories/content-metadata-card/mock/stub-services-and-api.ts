import { ClassDescription, MinimalNode } from '@alfresco/js-api';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { customMetadataClassDescription, exifMetadataClassDescription, mockNode1 } from './fake-node-and-classes';

export class NodesApiServiceStub {
  updateNode(_: string, nodeBody: any, _2: any = {}): Observable<MinimalNode> { 
    const updatedNode = {...mockNode1}
    updatedNode.properties = {
      ...updatedNode.properties,
      ...nodeBody.properties
    }
    
    return of(updatedNode);
  }
}

export class AlfrescoApiServiceStub {
  alfrescoApiInitialized: ReplaySubject<boolean> = new ReplaySubject(1);

  nodeUpdated = new Subject<Node>();

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
    return className === 'exif_exif' ? Promise.resolve(exifMetadataClassDescription) : Promise.resolve(customMetadataClassDescription);
  }
}
