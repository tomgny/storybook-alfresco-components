import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule, DisplayMode, MaterialModule, ObjectDataTableAdapter, ShowHeaderMode } from '@alfresco/adf-core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { DatatableComponent, DatatableModule } from './datatable.component';
import { action } from '@storybook/addon-actions';

export default {
  component: DatatableComponent,
  title: 'Datatable component',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        DatatableModule,
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false // enable for debug only
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        ContentModule.forRoot(),
        MaterialModule,
        BrowserAnimationsModule,
        CommonModule
      ]
    })
  ]
} as Meta;

const schema = [
  {
    type: 'image',
    key: 'icon',
    sortable: false
  },
  {
    type: 'text',
    key: 'id',
    title: 'Id',
    sortable: true
  },
  {
    type: 'text',
    key: 'firstName',
    title: 'First Name',
    sortable: true
  },
  {
    type: 'text',
    key: 'lastName',
    title: 'Last Name',
    sortable: true
  }
];

const rows = [
  {
    id: 1,
    firstName: 'Name #1',
    lastName: 'Lastname #1',
    icon: 'material-icons://folder_open'
  },
  {
    id: 2,
    firstName: 'Name #2',
    lastName: 'Lastname #2',
    icon: 'material-icons://accessibility'
  },
  {
    id: 3,
    firstName: 'Name #3',
    lastName: 'Lastname #3',
    icon: 'material-icons://alarm'
  },
  {
    id: 4,
    firstName: 'Name #4',
    lastName: 'Lastname #4',
    icon: 'material-icons://accessibility'
  },
  {
    id: 5,
    firstName: 'Name #5',
    lastName: 'Lastname #5',
    icon: 'material-icons://alarm'
  }
];

const dataSourceWithoutOneIcon = [
  {
    id: 1,
    firstName: 'Name #1',
    lastName: 'Lastname #1',
    icon: 'material-icons://folder_open'
  },
  {
    id: 2,
    firstName: 'Name #2',
    lastName: 'Lastname #2',
    icon: undefined
  }
];

const actionsData = {
  onRowClick: action('rowClick'),
  onRowDblClick: action('rowDblClick')
};

const Template: Story<DatatableComponent> = (args) => ({
  props: {
    ...args,
    onRowClick: actionsData.onRowClick,
    onRowDblClick: actionsData.onRowDblClick
  }
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  actions: false,
  actionsPosition: 'right',
  actionsVisibleOnHover: false,
  allowFiltering: false,
  columns: schema,
  contextMenu: false,
  display: DisplayMode.List,
  fallbackThumbnail: '',
  loading: false,
  multiselect: false,
  noPermission: false,
  rowMenuCacheEnabled: true,
  rows: rows,
  rowStyle: '',
  rowStyleClass: '',
  selectionMode: 'single',
  showHeader: ShowHeaderMode.Always,
  stickyHeader: false
};

export const HiddenHeader = Template.bind({});
HiddenHeader.args = {
  showHeader: ShowHeaderMode.Never,
  columns: schema,
  rows: rows
};

export const RowStyle = Template.bind({});
RowStyle.args = {
  rowStyle: { 'font-style': 'italic', 'background-color': 'gold' },
  columns: schema,
  rows: rows
};

export const RowStyleClass = Template.bind({});
RowStyleClass.args = {
  rowStyleClass: 'adf-container-full-width',
  columns: schema,
  rows: rows
};

export const ShowActions = Template.bind({});
ShowActions.args = {
  actions: true,
  actionsPosition: 'right',
  columns: schema,
  rows: rows
};

export const ShowActionsOnHover = Template.bind({});
ShowActionsOnHover.args = {
  actions: true,
  actionsVisibleOnHover: true,
  actionsPosition: 'left',
  columns: schema,
  rows: rows
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  multiselect: true,
  columns: schema,
  rows: rows
};

export const GaleryDisplay = Template.bind({});
GaleryDisplay.args = {
  display: 'gallery',
  stickyHeader: false,
  columns: schema,
  rows: rows
};

export const FallbackThumbnail = Template.bind({});
FallbackThumbnail.args = {
  fallbackThumbnail: '../../../assets/images/alfresco-24x24.png',
  columns: schema,
  selectionMode: 'none',
  rows: dataSourceWithoutOneIcon
};

export const StickyHeader = Template.bind({});
StickyHeader.args = {
  showHeader: ShowHeaderMode.Always,
  stickyHeader: true,
  columns: schema,
  rows: rows
};

export const NoData = Template.bind({});
NoData.args = {
  data: new ObjectDataTableAdapter()
};

export const NoPermission = Template.bind({});
NoPermission.args = {
  noPermission: true,
  showHeader: ShowHeaderMode.Always,
  columns: schema,
  rows: rows
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  columns: schema,
  rows: rows
};
