import { TaskDetailsModel } from '@alfresco/adf-process-services';

export let standaloneTaskWithForm = new TaskDetailsModel({
  id: '100',
  name: 'Standalone Task With Form',
  description: null,
  category: null,
  assignee: {
      id: 1001,
      firstName: 'Wilbur',
      lastName: 'Adams',
      email: 'wilbur@app.activiti.com'
  },
  created: '2016-11-03T15:25:42.749+0000',
  dueDate: null,
  endDate: null,
  duration: null,
  priority: 50,
  parentTaskId: null,
  parentTaskName: null,
  processInstanceId: null,
  processInstanceName: null,
  processDefinitionId: null,
  processDefinitionName: null,
  processDefinitionDescription: null,
  processDefinitionKey: null,
  processDefinitionCategory: null,
  processDefinitionVersion: null,
  processDefinitionDeploymentId: null,
  formKey: '222',
  processInstanceStartUserId: null,
  initiatorCanCompleteTask: false,
  adhocTaskCanBeReassigned: false,
  taskDefinitionKey: 'sid-DDECD9E4-0299-433F-9193-C3D905C3EEBE',
  executionId: '86',
  involvedGroups: [],
  involvedPeople: [],
  memberOfCandidateUsers: false,
  managerOfCandidateGroup: false,
  memberOfCandidateGroup: false
});

export let standaloneTaskWithoutForm = new TaskDetailsModel({
  id: '200',
  name: 'Standalone Task Without Form',
  description: null,
  category: null,
  assignee: {
      id: 1001,
      firstName: 'Wilbur',
      lastName: 'Adams',
      email: 'wilbur@app.activiti.com'
  },
  created: '2016-11-03T15:25:42.749+0000',
  dueDate: null,
  endDate: null,
  duration: null,
  priority: 50,
  parentTaskId: null,
  parentTaskName: null,
  processInstanceId: null,
  processInstanceName: null,
  processDefinitionId: null,
  processDefinitionName: null,
  processDefinitionDescription: null,
  processDefinitionKey: null,
  processDefinitionCategory: null,
  processDefinitionVersion: null,
  processDefinitionDeploymentId: null,
  formKey: null,
  processInstanceStartUserId: null,
  initiatorCanCompleteTask: false,
  adhocTaskCanBeReassigned: false,
  taskDefinitionKey: 'sid-DDECD9E4-0299-433F-9193-C3D905C3EEBE',
  executionId: '86',
  involvedGroups: [],
  involvedPeople: [],
  memberOfCandidateUsers: false,
  managerOfCandidateGroup: false,
  memberOfCandidateGroup: false
});

export const taskWithNumbers = new TaskDetailsModel({
  id: 'taskFormWithRequiredNumberWidgets',
  name: 'Request translation',
  description: null,
  category: null,
  assignee: {
      id: 'fake-id',
      firstName: 'fake-bpm-first-name',
      lastName: 'fake-bpm-last-name',
      email: 'fakeBpm@fake.com'
  },
  created: '2016-11-03T15:25:42.749+0000',
  dueDate: null,
  endDate: null,
  duration: null,
  priority: 50,
  parentTaskId: null,
  parentTaskName: null,
  processInstanceId: '86',
  processInstanceName: null,
  processDefinitionId: 'TranslationProcess:2:8',
  processDefinitionName: 'Translation Process',
  processDefinitionDescription: null,
  processDefinitionKey: 'TranslationProcess',
  processDefinitionCategory: 'http://www.activiti.org/processdef',
  processDefinitionVersion: 2,
  processDefinitionDeploymentId: '5',
  formKey: '4',
  processInstanceStartUserId: '1001',
  initiatorCanCompleteTask: true,
  adhocTaskCanBeReassigned: true,
  taskDefinitionKey: 'sid-DDECD9E4-0299-433F-9193-C3D905C3EEBE',
  executionId: '86',
  involvedGroups: [],
  involvedPeople: [],
  memberOfCandidateUsers: true,
  managerOfCandidateGroup: true,
  memberOfCandidateGroup: true
});

export const taskWithCheckboxes = new TaskDetailsModel({
  id: 'taskFormWithRequiredCheckboxAndVisibilityConditions',
  name: 'Request translation',
  description: null,
  category: null,
  assignee: {
      id: 'fake-id',
      firstName: 'fake-bpm-first-name',
      lastName: 'fake-bpm-last-name',
      email: 'fakeBpm@fake.com'
  },
  created: '2016-11-03T15:25:42.749+0000',
  dueDate: null,
  endDate: null,
  duration: null,
  priority: 50,
  parentTaskId: null,
  parentTaskName: null,
  processInstanceId: '86',
  processInstanceName: null,
  processDefinitionId: 'TranslationProcess:2:8',
  processDefinitionName: 'Translation Process',
  processDefinitionDescription: null,
  processDefinitionKey: 'TranslationProcess',
  processDefinitionCategory: 'http://www.activiti.org/processdef',
  processDefinitionVersion: 2,
  processDefinitionDeploymentId: '5',
  formKey: '4',
  processInstanceStartUserId: '1001',
  initiatorCanCompleteTask: true,
  adhocTaskCanBeReassigned: true,
  taskDefinitionKey: 'sid-DDECD9E4-0299-433F-9193-C3D905C3EEBE',
  executionId: '86',
  involvedGroups: [],
  involvedPeople: [],
  memberOfCandidateUsers: true,
  managerOfCandidateGroup: true,
  memberOfCandidateGroup: true
});

export const processWithNumbers = new TaskDetailsModel({
  id: 'processWithRequiredSpecificNumbers',
  name: 'Request translation',
  description: null,
  category: null,
  assignee: {
    id: 'fake-id',
    firstName: 'fake-bpm-first-name',
    lastName: 'fake-bpm-last-name',
    email: 'fakeBpm@fake.com'
},
  created: '2016-11-03T15:25:42.749+0000',
  dueDate: null,
  endDate: null,
  duration: null,
  priority: 50,
  parentTaskId: null,
  parentTaskName: null,
  processInstanceId: '86',
  processInstanceName: null,
  processDefinitionId: 'TranslationProcess:2:8',
  processDefinitionName: 'Translation Process',
  processDefinitionDescription: null,
  processDefinitionKey: 'TranslationProcess',
  processDefinitionCategory: 'http://www.activiti.org/processdef',
  processDefinitionVersion: 2,
  processDefinitionDeploymentId: '5',
  formKey: '4',
  processInstanceStartUserId: '1001',
  initiatorCanCompleteTask: true,
  adhocTaskCanBeReassigned: true,
  taskDefinitionKey: 'sid-DDECD9E4-0299-433F-9193-C3D905C3EEBE',
  executionId: '86',
  involvedGroups: [],
  involvedPeople: [],
  memberOfCandidateUsers: true,
  managerOfCandidateGroup: true,
  memberOfCandidateGroup: true
});

export const processWithCheckboxes = new TaskDetailsModel({
  id: 'processWithRequiredCheckboxes',
  name: 'Request translation',
  description: null,
  category: null,
  assignee: {
    id: 'fake-id',
    firstName: 'fake-bpm-first-name',
    lastName: 'fake-bpm-last-name',
    email: 'fakeBpm@fake.com'
},
  created: '2016-11-03T15:25:42.749+0000',
  dueDate: null,
  endDate: null,
  duration: null,
  priority: 50,
  parentTaskId: null,
  parentTaskName: null,
  processInstanceId: '86',
  processInstanceName: null,
  processDefinitionId: 'TranslationProcess:2:8',
  processDefinitionName: 'Translation Process',
  processDefinitionDescription: null,
  processDefinitionKey: 'TranslationProcess',
  processDefinitionCategory: 'http://www.activiti.org/processdef',
  processDefinitionVersion: 2,
  processDefinitionDeploymentId: '5',
  formKey: '4',
  processInstanceStartUserId: '1001',
  initiatorCanCompleteTask: true,
  adhocTaskCanBeReassigned: true,
  taskDefinitionKey: 'sid-DDECD9E4-0299-433F-9193-C3D905C3EEBE',
  executionId: '86',
  involvedGroups: [],
  involvedPeople: [],
  memberOfCandidateUsers: true,
  managerOfCandidateGroup: true,
  memberOfCandidateGroup: true
});

export const taskDetailsArray = {
  'taskWithNumbers': taskWithNumbers,
  'taskWithCheckboxes': taskWithCheckboxes,
  'processWithNumbers': processWithNumbers,
  'processWithCheckboxes': processWithCheckboxes
}
