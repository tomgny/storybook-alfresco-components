import { AspectPaging, ClassDescription, MinimalNode, TypeEntry, TypePaging } from '@alfresco/js-api';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import {
  customMetadataClassDescription,
  emptyAspectPaging,
  emptyClassDescription,
  exifMetadataClassDescription,
  fakeTypeEntry,
  fakeTypePaging,
  listAspectResp,
  listAspectRespA,
  listAspectRespB,
  mockNode2
} from './fake-node-and-classes';

export class NodesApiServiceStub {
  updateNode(_: string, nodeBody: any, _2: any = {}): Observable<MinimalNode> {
    const updatedNode = { ...mockNode2 };

    if (nodeBody?.properties) {
      updatedNode.properties = {
        ...updatedNode.properties,
        ...nodeBody.properties
      };
    }

    if (nodeBody?.aspectNames) {
      updatedNode.aspectNames = nodeBody.aspectNames.slice();
      mockNode2.aspectNames = nodeBody.aspectNames.slice();
    }

    console.log(updatedNode);

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
    if (className === 'exif_exif') {
      return Promise.resolve(exifMetadataClassDescription);
    }

    if (className === 'custom_custom') {
      return Promise.resolve(customMetadataClassDescription);
    }

    return Promise.resolve(emptyClassDescription);
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
  listAspects(opts?: any): Promise<AspectPaging> {
    if (opts.where === `(not namespaceUri matches('http://www.alfresco.*'))`) {
      if (mockNode2.aspectNames.length === 2) {
        return Promise.resolve(listAspectResp);
      } else if (mockNode2.aspectNames[0] === 'exif:exif') {
        return Promise.resolve(listAspectRespA);
      } else if (mockNode2.aspectNames[0] === 'custom:custom') {
        return Promise.resolve(listAspectRespB);
      }
    }

    if (opts.where === `(modelId in ('cm:contentmodel', 'emailserver:emailserverModel', 'smf:smartFolder', 'app:applicationmodel' ))`) {
      if (mockNode2.aspectNames.length === 2) {
        return Promise.resolve(emptyAspectPaging);
      } else if (mockNode2.aspectNames.length === 0) {
        return Promise.resolve(listAspectResp);
      } else if (mockNode2.aspectNames[0] === 'exif:exif') {
        return Promise.resolve(listAspectRespB);
      } else if (mockNode2.aspectNames[0] === 'custom:custom') {
        return Promise.resolve(listAspectRespA);
      }
    }

    return Promise.resolve(emptyAspectPaging);
  }
}
