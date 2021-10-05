import { TaskFilterCloudModel } from '@alfresco/adf-process-services-cloud';

export const fakeTaskCloudPreferenceList = {
  list: {
    entries: [
      {
        entry: {
          key: 'task-filters-fakeAppName-mock-username',
          value: JSON.stringify([
            {
              name: 'FAKE_TASK_1',
              id: '1',
              key: 'all-fake-task',
              icon: 'adjust',
              appName: 'fakeAppName',
              sort: 'startDate',
              status: 'ALL',
              order: 'DESC'
            },
            {
              name: 'FAKE_TASK_2',
              id: '2',
              key: 'run-fake-task',
              icon: 'adjust',
              appName: 'fakeAppName',
              sort: 'startDate',
              status: 'RUNNING',
              order: 'DESC'
            },
            {
              name: 'FAKE_TASK_3',
              id: '3',
              key: 'complete-fake-task',
              icon: 'adjust',
              appName: 'fakeAppName',
              sort: 'startDate',
              status: 'COMPLETED',
              order: 'DESC'
            }
          ])
        }
      },
      {
        entry: {
          key: 'mock-key-2',
          value: {
            name: 'FAKE_TASK_2',
            id: '2',
            key: 'run-fake-task',
            icon: 'adjust',
            appName: 'fakeAppName',
            sort: 'startDate',
            status: 'RUNNING',
            order: 'DESC'
          }
        }
      },
      {
        entry: {
          key: 'mock-key-3',
          value: {
            name: 'FAKE_TASK_3',
            id: '3',
            key: 'complete-fake-task',
            icon: 'adjust',
            appName: 'fakeAppName',
            sort: 'startDate',
            status: 'COMPLETED`',
            order: 'DESC'
          }
        }
      }
    ],
    pagination: {
      skipCount: 0,
      maxItems: 100,
      count: 3,
      hasMoreItems: false,
      totalItems: 3
    }
  }
};

export const defaultTaskFilters = [
  new TaskFilterCloudModel({
    name: 'ADF_CLOUD_TASK_FILTERS.MY_TASKS',
    key: 'my-tasks',
    icon: 'inbox',
    appName: 'app',
    status: 'ASSIGNED',
    assignee: '',
    sort: 'createdDate',
    order: 'DESC',
    showCounter: true
  }),
  new TaskFilterCloudModel({
    name: 'ADF_CLOUD_TASK_FILTERS.QUEUED_TASKS',
    key: 'queued-tasks',
    icon: 'queue',
    appName: 'app',
    status: 'CREATED',
    assignee: '',
    sort: 'createdDate',
    order: 'DESC',
    showCounter: true
  }),
  new TaskFilterCloudModel({
    name: 'ADF_CLOUD_TASK_FILTERS.COMPLETED_TASKS',
    key: 'completed-tasks',
    icon: 'done',
    appName: 'app',
    status: 'COMPLETED',
    assignee: '',
    sort: 'createdDate',
    order: 'DESC'
  })
];
