import { FormDefinitionRepresentation, NodeChildAssociationPaging, NodeEntry, SitePaging, TaskRepresentation } from '@alfresco/js-api';
import { taskDetailsArray } from '../form-renderer/visibility-condition-task/task-form/task-detail.models';
import { taskFormModelsArray } from '../form-renderer/visibility-condition-task/task-form/task-form.models';
import { fakeNodeEntry, folderNodeChildrenWithPaginationInfo } from './fake-nodes';

export class ModelsApiStub {}

export class GroupApiStub {}

const fakeSitePaging: SitePaging = {
  'list': {
      'pagination': {
          'count': 2,
          'hasMoreItems': true,
          'totalItems': 2,
          'skipCount': 0,
          'maxItems': 100
      },
      'entries': [
          {
              'entry': {
                  'role': 'SiteManager',
                  'visibility': 'PUBLIC',
                  'guid': 'fake_node_with_create_permission',
                  'description': 'fake-test-site',
                  'id': 'fake-test-site',
                  'preset': 'site-dashboard',
                  'title': 'fake-test-site'
              }
          },
          {
              'entry': {
                  'role': 'SiteManager',
                  'visibility': 'PUBLIC',
                  'guid': 'mock_node_1',
                  'description': 'This is a Sample Alfresco Team site.',
                  'id': 'swsdp',
                  'preset': 'site-dashboard',
                  'title': 'fake-test-2'
              }
          }
      ]
  }
};

export class NodesApiStub {
  getNode(nodeId: string, _?: any): Promise<NodeEntry> {
    //console.log(mockPreselectedNodes);
    console.log('getNode id: ', nodeId);
    //console.log(nodeIdToObjectTranslating[nodeId]);
    return Promise.resolve(fakeNodeEntry);
  }

  getNodeChildren(nodeId: string, _options: any): Promise<NodeChildAssociationPaging> {
    console.log('(getNodeChildren)folderNodeChilren: ');
    console.log(folderNodeChildrenWithPaginationInfo);
    console.log('getNodeChildren id: ', nodeId);
    //console.log(nodeIdToObjectTranslating[nodeId]);
    return Promise.resolve(folderNodeChildrenWithPaginationInfo);
  }
}

export class SitesApiStub {
  listSites(_opts?: any): Promise<SitePaging>{
    console.log(fakeSitePaging);
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
