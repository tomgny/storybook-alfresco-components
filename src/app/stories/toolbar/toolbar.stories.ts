import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule, MaterialModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { DatatableComponent } from '../datatable/datatable.component';
import { ToolbarComponent } from './toolbar.component';

export default {
  component: ToolbarComponent,
  title: 'Toolbar component',
  decorators: [
    moduleMetadata({
      declarations: [ToolbarComponent],
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

const Template: Story<DatatableComponent> = (args) => ({
  props: {
    ...args
  }
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  title: 'Toolbar title',
  color: 'primary'
};

export const DifferentTitleAndColor = Template.bind({});
DifferentTitleAndColor.args = {
  title: 'ADF Toolbar title',
  color: 'accent'
};
