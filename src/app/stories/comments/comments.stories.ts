import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule, MaterialModule } from '@alfresco/adf-core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { CommentsComponent } from './comments.component';

export default {
  component: CommentsComponent,
  title: 'Comments component',
  decorators: [
    moduleMetadata({
      declarations: [],
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

const Template: Story<CommentsComponent> = (args) => ({
  props: {
    ...args
  }
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  nodeId: undefined,
  readOnly: false,
  taskId: undefined
};
