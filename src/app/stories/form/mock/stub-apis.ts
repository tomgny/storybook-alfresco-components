import { FormDefinitionRepresentation, NodeEntry, SitePaging, TaskRepresentation } from '@alfresco/js-api';
import { taskDetailsArray } from '../form-renderer/visibility-condition-task/task-form/task-detail.models';
import { taskFormModelsArray } from '../form-renderer/visibility-condition-task/task-form/task-form.models';
import { fakeSitePaging, nodeIdToObjectTranslating } from './fake-nodes';

export class ModelsApiStub {}

export class GroupApiStub {}

export class NodesApiStub {
  getNode(nodeId: string, _?: any): Promise<NodeEntry> {
    return Promise.resolve(nodeIdToObjectTranslating[nodeId]);
  }

  getNodeChildren(nodeId: string, _options: any): Promise<any> {
    nodeIdToObjectTranslating[`${nodeId}_child`]
    return Promise.resolve(nodeIdToObjectTranslating[`${nodeId}_child`]);
  }
}

export class ContentApiStub {
  getContentUrl(nodeId: string, _?: boolean, _2?: string): string {
      console.log(nodeId);

      return nodeIdToObjectTranslating[nodeId].entry.contentUrl;
  };
}

export class SitesApiStub {
  listSites(_opts?: any): Promise<SitePaging>{
    return Promise.resolve(fakeSitePaging);
  }
}

export class TaskApiStub {
  getTask(taskId: string): Promise<TaskRepresentation>{
    return Promise.resolve(taskDetailsArray[taskId]);
  }

  getTaskForm(taskId: string): Promise<FormDefinitionRepresentation>{
    return Promise.resolve(new FormDefinitionRepresentation(taskFormModelsArray[taskId]))
  }
}

export class TaskFormsApiStub {
  getTaskFormVariables(_taskId: string): Promise<any>{
    return Promise.resolve({});
  }
}
