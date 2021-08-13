import { AspectPaging, ClassDescription, MinimalNode, TypeEntry, TypePaging } from '@alfresco/js-api';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { customMetadataClassDescription, exifMetadataClassDescription, fakeTypeEntry, fakeTypePaging, listAspectResp, mockNode1, mockNode2 } from './fake-node-and-classes';

export class NodesApiServiceStub {
  updateNode(_: string, nodeBody: any, _2: any = {}): Observable<MinimalNode> {
    const updatedNode = { ...mockNode1 };
    updatedNode.properties = {
      ...updatedNode.properties,
      ...nodeBody.properties
    };

    return of(updatedNode);
  }

  getNode(_: string, _2: any = {}): Observable<MinimalNode> {
    return of(mockNode2);
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
  typesApi = new TypesApiStub();
  aspectsApi = new AspectsApiStub();
}

class ClassesApiStub {
  getClass(className: string, _2?: any): Promise<ClassDescription> {
    return className === 'exif_exif' ? Promise.resolve(exifMetadataClassDescription) : Promise.resolve(customMetadataClassDescription);
  }
}

export class VersionCompatibilityServiceStub {
  isVersionSupported = (_: string): boolean => true;
}

class TypesApiStub {
  getType(_: string): Promise<TypeEntry> {
    return Promise.resolve(fakeTypeEntry);
  }

  listTypes(_?: any): Promise<TypePaging> {
    return Promise.resolve(fakeTypePaging);
  }
}

class AspectsApiStub {
  listAspects(_?: any): Promise<AspectPaging> {
    return Promise.resolve(listAspectResp)
  }
}