import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule, MaterialModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
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
  ]
} as Meta;

const Template: Story<JsonCellComponent> = (args) => ({
  props: {
    ...args
  }
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  column: null,
  copyContent: true,
  data: null,
  editable: false,
  resolverFn: null,
  row: null,
  tooltip: 'JSON cell'
};
