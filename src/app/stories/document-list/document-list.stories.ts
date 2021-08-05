import { ContentModule } from '@alfresco/adf-content-services';
import { AlfrescoApiService, AuthenticationService, CoreModule, DataSorting, MaterialModule, ShowHeaderMode } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { DocumentListComponent } from './document-list.component';
import { fakeNodePaging, mockPreselectedNodes } from './mock/fake-nodes';
import { AlfrescoApiServiceStub, AuthenticationServiceStub } from './mock/stub-services';

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
        { provide: AuthenticationService, useClass: AuthenticationServiceStub }
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
  additionalSorting: new DataSorting('name', 'desc'),
  allowDropFiler: false,
  contentActions: false,
  contentActionsPosition: 'right',
  contextMenuActions: false, //?
  currentFolderId: 'mockNode1',
  display: 'list',
  emptyFolderImageUrl: '',
  filterValue: undefined,
  headerFilters: false,
  imageResolver: null,
  includeFields: undefined,
  loading: false,
  locationFormat: '/',
  maxItems: 5,
  multiselect: false,
  navigate: true,
  navigationMode: 'dblclick',
  node: fakeNodePaging,
  // permissionsStyle: new PermissionStyleModel('color: gold', AllowableOperationsEnum.DELETE, true, false),
  preselectNodes: mockPreselectedNodes,
  rowStyle: '',
  rowStyleClass: '',
  selectionMode: 'single',
  showHeader: ShowHeaderMode.Always,
  sorting: ['name', 'desc'],
  sortingMode: 'server',
  stickyHeader: false,
  thumbnails: false,
  where: '',
  rowFilter: null
};
