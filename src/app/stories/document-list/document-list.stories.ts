import { ContentModule, ShareDataRow, UploadModule } from '@alfresco/adf-content-services';
import {  AlfrescoApiService, AuthenticationService, CoreModule, DataSorting, MaterialModule, ShowHeaderMode, UploadService } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { DocumentListComponent } from './document-list.component';
import { fakeNodePaging, mockPreselectedNodes } from './mock/fake-nodes';
import {  AlfrescoApiServiceStub, AuthenticationServiceStub, UploadServiceStub } from './mock/stub-services';

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
        { provide: UploadService, useClass: UploadServiceStub}
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
}

const fileFilter = (row: ShareDataRow) => {
  let node = row.node.entry;

  if (node && node.isFile) {
      return true;
  }

  return false;
}

const Template: Story<DocumentListComponent> = (args) => ({
  props: {
    ...args
  }
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  additionalSorting: new DataSorting('isFolder', 'desc'), //no effect
  allowDropFiles: false,
  contentActions: false,
  contentActionsPosition: 'right',
  contextMenuActions: false, //no effect, probably deprecated?
  currentFolderId: 'mockNode1',
  display: 'list',
  emptyFolderImageUrl: '../../../assets/images/empty_doc_lib.svg',
  filterValue: undefined, //?
  headerFilters: true, //?
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
  where: 'isFolder=true', //cannot work without rest api?
  rowFilter: null
};

export const AllowDropFiles = Template.bind({});
AllowDropFiles.args = {
  ...DefaultStory.args,
  allowDropFiles: true
}

export const FolderFilter = Template.bind({});
FolderFilter.args = {
  ...DefaultStory.args,
  rowFilter: folderFilter
}

export const FilesFilter = Template.bind({});
FilesFilter.args = {
  ...DefaultStory.args,
  rowFilter: fileFilter
}

export const FilterHeader = Template.bind({});
FilterHeader.args = {
  ...DefaultStory.args,
  filterValue: {name: 'a'},
  headerFilters: true
}

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
ContentActionsOnLeft.args = {
  ...DefaultStory.args,
  contentActions: true,
  contentActionsPosition: 'left',
}

export const GalleryDisplay = Template.bind({});
GalleryDisplay.args = {
  ...DefaultStory.args,
  display: 'gallery'
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

export const Loading = Template.bind({});
Loading.args = {
  ...DefaultStory.args,
  loading: true
}

export const Multiselect = Template.bind({});
Multiselect.args = {
  ...DefaultStory.args,
  multiselect: true
}

export const RowStyle = Template.bind({});
RowStyle.args = {
  ...DefaultStory.args,
  rowStyle: { 'font-style': 'italic', 'background-color': 'gold' },
}

export const RowStyleClass = Template.bind({});
RowStyleClass.args = {
  ...DefaultStory.args,
  rowStyleClass: 'adf-sticky-document-list',
}

export const NoHeader = Template.bind({});
NoHeader.args = {
  ...DefaultStory.args,
  showHeader: ShowHeaderMode.Never
}

export const SortingAndSortingMode = Template.bind({});
SortingAndSortingMode.args = {
  ...DefaultStory.args,
  sorting: ['name', 'desc']
}

export const StickyHeaderOff = Template.bind({});
StickyHeaderOff.args = {
  ...DefaultStory.args,
  stickyHeader: false,
}
