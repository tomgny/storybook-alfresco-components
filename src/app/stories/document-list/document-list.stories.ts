import { ContentModule } from '@alfresco/adf-content-services';
import {  AlfrescoApiService, AuthenticationService, CoreModule, DataSorting, MaterialModule, ShowHeaderMode, ThumbnailService } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { DocumentListComponent } from './document-list.component';
import { fakeNodePaging, mockPreselectedNodes } from './mock/fake-nodes';
import {  AlfrescoApiServiceStub, AuthenticationServiceStub } from './mock/stub-services';

export default {
  component: DocumentListComponent,
  title: 'Document List component',
  decorators: [
    moduleMetadata({
      declarations: [DocumentListComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false // enable for debug only
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        ContentModule.forRoot(),
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: ThumbnailService }
      ]
    })
  ]
} as Meta;

const Template: Story<DocumentListComponent> = (args) => ({
  props: {
    ...args
  }
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  additionalSorting: new DataSorting('isFolder', 'desc'), //no effect

  allowDropFiles: false, //?
  contentActions: false,
  contentActionsPosition: 'right',
  contextMenuActions: false, //?
  currentFolderId: 'mockNode1',
  display: 'list',
  emptyFolderImageUrl: '../../../assets/images/empty_doc_lib.svg',
  filterValue: undefined, //?
  headerFilters: false, //?
  imageResolver: null, //?
  includeFields: ['isLink'], //?
  loading: false,
  locationFormat: '/files',
  maxItems: 2, //?
  multiselect: false,
  navigate: true,
  navigationMode: 'dblclick',
  node: null,
  // permissionsStyle: new PermissionStyleModel('color: gold', AllowableOperationsEnum.DELETE, true, false),
  preselectNodes: null,
  rowStyle: { 'font-style': 'italic'},
  rowStyleClass: '',
  selectionMode: 'multiple',
  showHeader: ShowHeaderMode.Always,
  sorting: [],
  sortingMode: 'client',
  stickyHeader: true,
  thumbnails: false,
  where: 'isFolder=true', //?
  rowFilter: null //?
};

export const Thumbnails = Template.bind({});
Thumbnails.args = {
  ...DefaultStory.args,
  thumbnails: true,
  display: 'gallery'
}

export const NodePaging = Template.bind({});
NodePaging.args = {
  ...DefaultStory.args,
  currentFolderId: '/',
  node: fakeNodePaging
}

export const NavigationAndNavigationMode = Template.bind({});
NavigationAndNavigationMode.args = {
  ...DefaultStory.args,
  navigate: false,
  navigationMode: 'click'
}

export const AdditionalSorting = Template.bind({});
AdditionalSorting.args = {
  ...DefaultStory.args,
  additionalSorting: new DataSorting('isFolder', 'asc'), //?
  sorting: [],
}

export const ContentActions = Template.bind({});
ContentActions.args = {
  ...DefaultStory.args,
  contentActions: true
}

export const ContentActionsOnLeft = Template.bind({});
ContentActions.args = {
  ...DefaultStory.args,
  contentActions: true,
  contentActionsPosition: 'left',
}

export const EmptyItems = Template.bind({});
EmptyItems.args = {
  ...DefaultStory.args,
  currentFolderId: null
}

export const EmptyFolderImage = Template.bind({});
EmptyFolderImage.args = {
  ...DefaultStory.args,
  emptyFolderImageUrl: '../../../assets/images/alfresco-logo-flower.svg',
  currentFolderId: null,
}

export const PreselectedNodes = Template.bind({});
PreselectedNodes.args = {
  ...DefaultStory.args,
  preselectNodes: mockPreselectedNodes,
}
