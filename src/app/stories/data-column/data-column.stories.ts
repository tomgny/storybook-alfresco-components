import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule, DataColumn, DataRow, MaterialModule } from '@alfresco/adf-core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { DatatableModule } from '../datatable/datatable.component';
import { DataColumnComponent } from './data-column.component';
import { dataIcon, dataSizeInBytes, dataText, dateColumn, dateRows, locationColumn, locationRows } from './data-column.models';

export default {
  component: DataColumnComponent,
  title: 'Core/Components/Data column',
  decorators: [
    moduleMetadata({
      declarations: [DataColumnComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        ContentModule.forRoot(),
        MaterialModule,
        BrowserAnimationsModule,
        CommonModule,
        DatatableModule,
        TranslateModule
      ]
    })
  ],
  argTypes: {
    ngOnChanges: { table: { diable: true } },
    showDate: { table: { diable: true } },
    columns: { table: { diable: true } },
    rows: { table: { diable: true } },
    data: { table: { diable: true } },
    key: { table: { diable: true } },
    sortingKey: { table: { diable: true } },
    type: { table: { diable: true } },
    formatTooltip: { table: { diable: true } }
  }
} as Meta;

const Template: Story<DataColumnComponent> = (args) => ({
  props: args
});

const formatCustomTooltip = (row: DataRow, _col: DataColumn): string => {
  if (row) {
    return row.getValue('id') + ' by formatCustomTooltip';
  }

  return null;
};

export const Default = Template.bind({});
Default.args = {
  key: 'id',
  title: 'Data column',
  data: dataText,
  copyContent: false,
  class: undefined,
  editable: false,
  focus: true,
  format: undefined,
  formatTooltip: undefined,
  sortable: true,
  sortingKey: undefined,
  columns: undefined,
  rows: undefined,
  type: 'text'
};

export const copyContent = Template.bind({});
copyContent.args = {
  ...Default.args,
  copyContent: true
};

export const CustomCssClass = Template.bind({});
CustomCssClass.args = {
  ...Default.args,
  class: 'adf-sticky-document-list'
};

export const FormatTooltip = Template.bind({});
FormatTooltip.args = {
  ...Default.args,
  formatTooltip: formatCustomTooltip
};

export const NotSortable = Template.bind({});
NotSortable.args = {
  ...Default.args,
  sortable: false
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  ...Default.args,
  title: 'Custom column title'
};

export const EditableJson = Template.bind({});
EditableJson.args = {
  ...Default.args,
  editable: true,
  type: 'json'
};

export const Icons = Template.bind({});
Icons.args = {
  ...Default.args,
  key: 'icon',
  type: 'icon',
  title: 'Icons',
  data: dataIcon
};

export const SizeInBytes = Template.bind({});
SizeInBytes.args = {
  ...Default.args,
  data: dataSizeInBytes,
  key: 'size',
  type: 'fileSize',
  title: 'Size in bytes'
};

export const DateWithFormat = Template.bind({});
DateWithFormat.args = {
  ...Default.args,
  columns: dateColumn,
  rows: dateRows,
  showDate: true,
  data: undefined,
  title: undefined,
  format: 'medium'
};

export const Location = Template.bind({});
Location.args = {
  ...Default.args,
  columns: locationColumn,
  rows: locationRows,
  data: undefined,
  title: 'Location'
};

export const ScreenReaderTitle = Template.bind({});
ScreenReaderTitle.args = {
  ...Default.args,
  title: 'Data column',
  'sr-title': 'Title for screen reader'
};

export const Focus = Template.bind({});
Focus.args = {
  ...Default.args,
  focus: false
};

export const SortingKey = Template.bind({});
SortingKey.args = {
  ...Default.args,
  sortingKey: 'id'
};
