import {
  ContentModule,
  ImageResolver,
  PermissionStyleModel,
  SearchHeaderQueryBuilderService,
  ShareDataRow,
  UploadModule
} from '@alfresco/adf-content-services';
import {
  AlfrescoApiService,
  AllowableOperationsEnum,
  AuthenticationService,
  CoreModule,
  DataColumn,
  DataRow,
  DataSorting,
  MaterialModule,
  ShowHeaderMode,
  UploadService
} from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { DocumentListComponent } from './document-list.component';
import { fakeNodePaging, mockPreselectedNodes } from './mock/fake-nodes';
import { AlfrescoApiServiceStub, AuthenticationServiceStub, UploadServiceStub } from './mock/stub-services';

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
        BrowserAnimationsModule,
        UploadModule
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: UploadService, useClass: UploadServiceStub },
        { provide: SearchHeaderQueryBuilderService}
      ]
    })
  ]
} as Meta;

const folderFilter = (row: ShareDataRow) => {
  let node = row.node.entry;

  if (node && node.isFolder) {
    return true;
  }

  return false;
};

const fileFilter = (row: ShareDataRow) => {
  let node = row.node.entry;

  if (node && node.isFile) {
    return true;
  }

  return false;
};

const folderImageResolver: ImageResolver = (row: DataRow, _col: DataColumn) => {
  let isFolder = <boolean>row.getValue('isFolder');
  if (isFolder) {
    // Format image url
    return '../../../assets/images/alfresco-24x24.png';
  }

  // For the rest of the cases just fallback to default behaviour.
  return null;
};

const iconResolver: ImageResolver = (row: DataRow, _col: DataColumn) => {
  if (row.obj.entry.icon) {
    // Format image url
    return row.obj.entry.icon;
  }

  // For the rest of the cases just fallback to default behaviour.
  return null;
};

const Template: Story<DocumentListComponent> = (args) => ({
  props: {
    ...args
  }
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  additionalSorting: new DataSorting('isFolder', 'asc'),
  allowDropFiles: false,
  contentActions: false,
  contentActionsPosition: 'right',
  contextMenuActions: false, //probably deprecated? https://github.com/Alfresco/alfresco-ng2-components/blob/develop/docs/core/directives/context-menu.directive.md
  currentFolderId: '-root-',
  display: 'list',
  emptyFolderImageUrl: '../../../assets/images/empty_doc_lib.svg',
  filterValue: undefined,
  headerFilters: false,
  imageResolver: null,
  includeFields: ['isFavorite', 'isLocked', 'aspectNames', 'definition'],
  loading: false,
  locationFormat: '/',
  maxItems: undefined,
  multiselect: false,
  navigate: false,
  navigationMode: 'dblclick',
  node: null,
  permissionsStyle: null,
  preselectNodes: null,
  rowStyle: {},
  rowStyleClass: '',
  selectionMode: 'single',
  showHeader: ShowHeaderMode.Always,
  sorting: [],
  sortingMode: 'server',
  stickyHeader: false,
  thumbnails: false,
  where: undefined,
  rowFilter: null
};

export const AdditionalSorting = Template.bind({});
AdditionalSorting.args = {
  ...DefaultStory.args,
  sortingMode: 'client',
  sorting: ['name', 'desc'],
  additionalSorting: new DataSorting('isFolder', 'asc')
};

export const AllowDropFiles = Template.bind({});
AllowDropFiles.args = {
  ...DefaultStory.args,
  allowDropFiles: true
};

export const FolderImageResolver = Template.bind({});
FolderImageResolver.args = {
  ...DefaultStory.args,
  imageResolver: folderImageResolver
};

export const FolderFilter = Template.bind({});
FolderFilter.args = {
  ...DefaultStory.args,
  rowFilter: folderFilter
};

export const FilesFilter = Template.bind({});
FilesFilter.args = {
  ...DefaultStory.args,
  rowFilter: fileFilter
};

export const BiggerThumbnails = Template.bind({});
BiggerThumbnails.args = {
  ...DefaultStory.args,
  thumbnails: true,
  display: 'gallery'
};

export const NavigationAndNavigationMode = Template.bind({});
NavigationAndNavigationMode.args = {
  ...DefaultStory.args,
  node: fakeNodePaging,
  navigate: true,
  navigationMode: 'click'
};

export const ContentActions = Template.bind({});
ContentActions.args = {
  ...DefaultStory.args,
  contentActions: true
};

export const ContentActionsOnLeft = Template.bind({});
ContentActionsOnLeft.args = {
  ...DefaultStory.args,
  contentActions: true,
  contentActionsPosition: 'left'
};

export const GalleryDisplay = Template.bind({});
GalleryDisplay.args = {
  ...DefaultStory.args,
  display: 'gallery'
};

export const EmptyItems = Template.bind({});
EmptyItems.args = {
  ...DefaultStory.args,
  currentFolderId: null
};

export const EmptyFolderImage = Template.bind({});
EmptyFolderImage.args = {
  ...DefaultStory.args,
  emptyFolderImageUrl: '../../../assets/images/alfresco-logo-flower.svg',
  currentFolderId: null
};

export const PreselectedNodes = Template.bind({});
PreselectedNodes.args = {
  ...DefaultStory.args,
  selectionMode: 'multiple',
  preselectNodes: mockPreselectedNodes
};

export const Loading = Template.bind({});
Loading.args = {
  ...DefaultStory.args,
  navigate: true,
  loading: true
};

export const Multiselect = Template.bind({});
Multiselect.args = {
  ...DefaultStory.args,
  multiselect: true
};

export const RowStyle = Template.bind({});
RowStyle.args = {
  ...DefaultStory.args,
  rowStyle: { 'font-style': 'italic', 'background-color': 'gold' }
};

export const RowStyleClass = Template.bind({});
RowStyleClass.args = {
  ...DefaultStory.args,
  rowStyleClass: 'adf-sticky-document-list'
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  ...DefaultStory.args,
  showHeader: ShowHeaderMode.Never
};

export const SortingAndSortingMode = Template.bind({});
SortingAndSortingMode.args = {
  ...DefaultStory.args,
  sortingMode: 'client',
  sorting: ['name', 'desc']
};

export const StickyHeaderOff = Template.bind({});
StickyHeaderOff.args = {
  ...DefaultStory.args,
  stickyHeader: false
};

export const WhereCondition = Template.bind({});
WhereCondition.args = {
  ...DefaultStory.args,
  where: 'id=mock_node_4'
};

export const NodeIcons = Template.bind({});
NodeIcons.args = {
  ...DefaultStory.args,
  imageResolver: iconResolver
};

export const FilterHeader = Template.bind({}); //doesn't work
FilterHeader.args = {
  ...DefaultStory.args,
  filterValue: { name: '' },
  headerFilters: true
};

export const PermissionsStyle = Template.bind({}); //doesn't work - BUG
PermissionsStyle.args = {
  ...DefaultStory.args,
  rowStyle: null,
  rowStyleClass: null,
  permissionsStyle: [new PermissionStyleModel('document-list__create', AllowableOperationsEnum.CREATE, true, true)]
};

export const MaxItems = Template.bind({}); //doesn't work
MaxItems.args = {
  ...DefaultStory.args,
  maxItems: 2
};
