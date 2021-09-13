import {
  FormDefinitionRepresentation,
  NodeEntry,
  RelatedContentRepresentation,
  ResultListDataRepresentationAlfrescoEndpointRepresentation,
  SitePaging,
  TaskRepresentation,
  TicketEntry
} from '@alfresco/js-api';
import { taskDetailsArray } from '../form-renderer/visibility-condition-task/task-form/task-detail.models';
import { taskFormModelsArray } from '../form-renderer/visibility-condition-task/task-form/task-form.models';
import { fakeSitePaging, nodeIdToObjectTranslating } from './fake-nodes';

export const fakePngAnswer = new RelatedContentRepresentation({
  id: 1155,
  name: 'alfresco_logo.png',
  created: '2017-07-25T17:17:37.099Z',
  createdBy: { id: 1001, firstName: 'Admin', lastName: 'admin', email: 'admin' },
  relatedContent: false,
  contentAvailable: true,
  link: true,
  linkUrl: './assets/favicon-96x96.png',
  mimeType: 'image/png',
  simpleType: 'image',
  previewStatus: 'queued',
  thumbnailStatus: 'queued',
  source: './assets/favicon-96x96.png'
});

export class ModelsApiStub {}

export class GroupApiStub {}

export class NodesApiStub {
  getNode(nodeId: string, _?: any): Promise<NodeEntry> {
    return Promise.resolve(nodeIdToObjectTranslating[nodeId]);
  }

  getNodeChildren(nodeId: string, _options: any): Promise<any> {
    nodeIdToObjectTranslating[`${nodeId}_child`];
    return Promise.resolve(nodeIdToObjectTranslating[`${nodeId}_child`]);
  }
}

export class ContentApiStub {
  getContentUrl(nodeId: string, _?: boolean, _2?: string): string {
    console.log(nodeId);

    return nodeIdToObjectTranslating[nodeId].entry.contentUrl;
  }

  getContent(contentId: number): Promise<RelatedContentRepresentation> {
    console.log(contentId);

    return Promise.resolve(fakePngAnswer);
  }

  async getRawContent(_contentId: number): Promise<any> {
    return Promise.resolve(
      await fetch('./assets/favicon-96x96.png')
        .then((r) => r.blob())
        .then((blobFile) => new File([blobFile], 'favicon-96x96.png', { type: 'image/png' }))
    );
  }

  //   getRawContentUrl(_contentId: number): string {
  //     return './assets/favicon-96x96.png';
  // }

  // async getContentPreview(_contentId: number): Promise<any>{
  //   return Promise.resolve(await fetch('./assets/images/bpm-user-avatar.png').then(r => r.blob()).then(blobFile => new File([blobFile], "bpm-user-avatar.png", { type: "image/png" })));
  // }
}

export class SitesApiStub {
  listSites(_opts?: any): Promise<SitePaging> {
    return Promise.resolve(fakeSitePaging);
  }
}

export class TaskApiStub {
  getTask(taskId: string): Promise<TaskRepresentation> {
    return Promise.resolve(taskDetailsArray[taskId]);
  }

  getTaskForm(taskId: string): Promise<FormDefinitionRepresentation> {
    return Promise.resolve(new FormDefinitionRepresentation(taskFormModelsArray[taskId]));
  }
}

export class TaskFormsApiStub {
  getTaskFormVariables(_taskId: string): Promise<any> {
    return Promise.resolve({});
  }
}

export class AuthenticationApiStub {
  private ticket: {
    entry: {
      id: 'fakeId';
      userId: 'fakeUser';
    };
  };

  getTicket(): Promise<TicketEntry> {
    return Promise.resolve(this.ticket);
  }
}

export class AlfrescoApiActivitiStub {
  getRepositories(_opts?: any): Promise<ResultListDataRepresentationAlfrescoEndpointRepresentation> {
    return Promise.resolve({
      'size': 0,
      'total': 0,
      'start': 0,
      'data': []
  });
  }
}
