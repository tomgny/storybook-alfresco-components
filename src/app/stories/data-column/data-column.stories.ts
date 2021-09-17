import { CoreModule, ObjectDataTableAdapter } from '@alfresco/adf-core';
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

const data = new ObjectDataTableAdapter(
  [
      {id: '1 first'},
      {id: '2 second'},
      {id: '3 third'},
  ],
  []
);

export const Default = Template.bind({});
Default.args = {
  key: 'id',
  title: 'Data column',
  data: data,
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
