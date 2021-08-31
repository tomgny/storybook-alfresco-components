import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { EmptyListComponent } from './empty-list.component';

export default {
  component: EmptyListComponent,
  title: 'Core/Components/Empty List',
  decorators: [
    moduleMetadata({
      declarations: [EmptyListComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule,
        ContentModule.forRoot()
      ]
    })
  ],
  parameters: {
    layout: 'centered'
  }
} as Meta;

const Template: Story<EmptyListComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});

Default.args = {};
