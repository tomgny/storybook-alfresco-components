import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule, DisplayMode, MaterialModule, ObjectDataTableAdapter, ShowHeaderMode } from '@alfresco/adf-core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { DatatableComponent } from './datatable.component';
import { action } from '@storybook/addon-actions';

export default {
  component: DatatableComponent,
  title: 'Datatable component',
  decorators: [
    moduleMetadata({
      declarations: [DatatableComponent],
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
        CommonModule
      ]
    })
  ]
} as Meta;

const dataSource = new ObjectDataTableAdapter([
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
]);

const dataSourceWithoutOneIcon = new ObjectDataTableAdapter([
  {
    id: 1,
    firstName: 'Name #1',
    lastName: 'Lastname #1',
    icon: 'material-icons://folder_open'
  },
  {
    id: 2,
    firstName: 'Name #2',
    lastName: 'Lastname #2'
  }
]);

const actionsData = {
  onRowClick: action('rowClick'),
  onRowDblClick: action('rowDblClick'),
}

const Template: Story<DatatableComponent> = (args) => ({
  props: {
    ...args,
    onRowClick: actionsData.onRowClick,
    onRowDblClick: actionsData.onRowDblClick,
  }
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  actions: false,
  actionsPosition: 'right',
  actionsVisibleOnHover: false,
  allowFiltering: false,
  contextMenu: false,
  data: dataSource,
  display: DisplayMode.List,
  fallbackThumbnail: '',
  loading: false,
  multiselect: false,
  noPermission: false,
  rowMenuCacheEnabled: true,
  rowStyle: '',
  rowStyleClass: '',
  selectionMode: 'single',
  showHeader: ShowHeaderMode.Always,
  stickyHeader: false
};

export const HiddenHeader = Template.bind({});
HiddenHeader.args = {
  showHeader: ShowHeaderMode.Never,
  data: dataSource
};

export const RowStyle = Template.bind({});
RowStyle.args = {
  rowStyle: { 'font-style': 'italic', 'background-color': 'gold' },
  data: dataSource
};

export const RowStyleClass = Template.bind({});
RowStyleClass.args = {
  rowStyleClass: 'adf-container-full-width',
  data: dataSource
};

export const ShowActions = Template.bind({});
ShowActions.args = {
  actions: true,
  actionsPosition: 'right',
  data: dataSource
}

export const ShowActionsOnHover = Template.bind({});
ShowActionsOnHover.args = {
  actions: true,
  actionsVisibleOnHover: true,
  actionsPosition: 'left',
  data: dataSource
}

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  multiselect: true,
  data: dataSource
}

export const GaleryDisplay = Template.bind({});
GaleryDisplay.args = {
  display: 'gallery',
  stickyHeader: false,
  data: dataSource
};

export const FallbackThumbnail = Template.bind({});
FallbackThumbnail.args = {
  fallbackThumbnail: '../../../assets/images/alfresco-24x24.png',
  data: dataSourceWithoutOneIcon
};

export const StickyHeader = Template.bind({});
StickyHeader.args = {
  showHeader: ShowHeaderMode.Always,
  stickyHeader: true,
  data: dataSource
}

export const NoData = Template.bind({});
NoData.args = {
  data: undefined
};

export const NoPermission = Template.bind({});
NoPermission.args = {
  noPermission: true,
  data: dataSource
}

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  data: dataSource
};
