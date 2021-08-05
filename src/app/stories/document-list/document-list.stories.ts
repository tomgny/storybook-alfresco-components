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
  additionalSorting: new DataSorting('size', 'desc'), //?
  allowDropFiles: false, //?
  contentActions: false,
  contentActionsPosition: 'right',
  contextMenuActions: false, //?
  currentFolderId: 'mockNode1',
  display: 'list',
  emptyFolderImageUrl: '../../../assets/images/alfresco-24x24.png', //?
  filterValue: undefined, //?
  headerFilters: false, //?
  imageResolver: null, //?
  includeFields: ['isLink'], //?
  loading: false,
  locationFormat: '/files',
  maxItems: 5, //?
  multiselect: false,
  navigate: true, //?
  navigationMode: 'click', //?
  node: fakeNodePaging, //????
  // permissionsStyle: new PermissionStyleModel('color: gold', AllowableOperationsEnum.DELETE, true, false),
  preselectNodes: mockPreselectedNodes,
  rowStyle: { 'font-style': 'italic'},
  rowStyleClass: '',
  selectionMode: 'multiple',
  showHeader: ShowHeaderMode.Always,
  sorting: ['name', 'desc'],
  sortingMode: 'client',
  stickyHeader: false,
  thumbnails: false, //?
  where: 'isFolder=true', //?
  rowFilter: null //?
};
