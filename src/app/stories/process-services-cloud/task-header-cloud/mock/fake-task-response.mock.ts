import { TaskDetailsCloudModel } from '@alfresco/adf-process-services-cloud';

const taskAssignedDetails: TaskDetailsCloudModel = {
  appName: 'simple-app',
  assignee: 'admin.adf',
  completedDate: null,
  createdDate: new Date(1555419255340),
  dueDate: new Date(1558419255340),
  description: null,
  formKey: null,
  priority: 1,
  parentTaskId: 'bd6b1741-6046-11e9-80f0-0a586460040d',
  id: 'bd6b1741-6046-11e9-80f0-0a586460040d',
  name: 'Task1',
  owner: 'admin.adf',
  standalone: true,
  status: 'ASSIGNED'
};

const taskCompletedDetails: TaskDetailsCloudModel = {
  ...taskAssignedDetails,
  status: 'COMPLETED'
};

export const tasksDetailsContainer = {
  taskAssigned: taskAssignedDetails,
  taskCompleted: taskCompletedDetails
};