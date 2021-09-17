import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule, MaterialModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { FilteredDataAdapter } from '../datatable/datatable-custom-data/filtered-data-adapter';
import { JsonCellComponent } from './json-cell.component';

export default {
  component: JsonCellComponent,
  title: 'Core/Components/JSON cell',
  decorators: [
    moduleMetadata({
      declarations: [JsonCellComponent],
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
      ]
    })
  ],
  argTypes: {
    column: { table: { disable: true } },
    data: { table: { disable: true } },
    copyContent: { table: { disable: true } },
    tooltip: { table: { disable: true } },
    resolverFn: { table: { disable: true } }
  }
} as Meta;

const Template: Story<JsonCellComponent> = (args) => ({
  props: {
    ...args
  }
});

const resolverData = new FilteredDataAdapter();

const rows = [
  { id: 1, name: '1 Name 1' },
  { id: 2, name: '2 Name 2' },
  { id: 3, name: '3 Name 3' },
  { id: 4, name: '4 Name 4' }
];

const columnsSchema = [];

export const EditableJSON = Template.bind({});
EditableJSON.args = {
  column: columnsSchema,
  copyContent: true,
  data: resolverData,
  editable: true,
  row: rows,
  resolverFn: null,
  tooltip: 'JSON cell'
};
