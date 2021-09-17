import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule, MaterialModule } from '@alfresco/adf-core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { columnsSchema, resolver, resolverData, rows } from './custom-data';
import { DatatableCustomComponent } from './datatable-custom-data.component';

export default {
  component: DatatableCustomComponent,
  title: 'Core/Components/Datatable/Custom data and resolver',
  decorators: [
    moduleMetadata({
      declarations: [DatatableCustomComponent],
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
  ],
  argTypes: {
    data: { table: { disable: true } },
    resolverFn: { table: { disable: true } }
  }
} as Meta;

const Template: Story<DatatableCustomComponent> = (args) => ({
  props: {
    ...args
  }
});

export const CustomRowsAndColumns = Template.bind({});
CustomRowsAndColumns.args = {
  rows: rows,
  columns: columnsSchema
};

export const CustomRowsAndColumnsSortedDesc = Template.bind({});
CustomRowsAndColumnsSortedDesc.args = {
  rows: rows,
  columns: columnsSchema,
  sorting: ['name', 'desc']
};

export const Resolver = Template.bind({});
Resolver.args = {
  data: resolverData,
  resolverFn: resolver
};
