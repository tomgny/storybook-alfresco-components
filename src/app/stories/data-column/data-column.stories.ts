import { CoreModule, DataColumn, DataRow, ObjectDataTableAdapter } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { DataColumnComponent } from './data-column.component';

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
        BrowserAnimationsModule
      ]
    })
  ]
} as Meta;

const Template: Story<DataColumnComponent> = (args) => ({
  props: args
});

const dataText = new ObjectDataTableAdapter(
  [
      {id: '1 first'},
      {id: '2 second'},
      {id: '3 third'},
  ],
  []
);

const dataDate = new ObjectDataTableAdapter(
  [
      {date: new Date(2222222222222)},
      {date: new Date(233123323121)},
      {date: new Date(1234567892322)},
  ],
  []
);

const formatCustomTooltip = (row: DataRow, _col: DataColumn): string => {
  if(row){
    return row.getValue('id') + ' by formatCustomTooltip';
  }
  return null;
}

export const Default = Template.bind({});
Default.args = {
  key: 'id',
  title: 'Data column',
  data: dataText,
  copyContent: false,
  class: null,
  editable: false,
  focus: true,
  format: null,
  formatTooltip: null,
  sortable: true,
  sortingKey: null,
  type: 'text'
}

export const copyContent = Template.bind({});
copyContent.args = {
  ...Default.args,
  copyContent: true
}

export const CustomCssClass = Template.bind({});
CustomCssClass.args = {
  ...Default.args,
  class: 'adf-sticky-document-list'
}

export const EditableJson = Template.bind({});
EditableJson.args = {
  ...Default.args,
  editable: true,
  type: 'json'
}

export const Format = Template.bind({});
Format.args = {
  ...Default.args,
  key: 'date',
  format: 'short',
  data: dataDate
}

export const FormatTooltip = Template.bind({});
FormatTooltip.args = {
  ...Default.args,
  formatTooltip: formatCustomTooltip
}

export const Focus = Template.bind({});
Focus.args = {
  ...Default.args,
  focus: false
}
