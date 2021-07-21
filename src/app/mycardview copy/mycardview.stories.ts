// import { ContentModule } from '@alfresco/adf-content-services';
import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../app.routes';
import { AppCommonModule } from '../components/common/common.module';
import { MycardviewTestComponent } from './mycardview.component';

export default {
  component: MycardviewTestComponent,
  title: 'Cardview TEST component',
  decorators: [
    moduleMetadata({
      declarations: [MycardviewTestComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false // enable for debug only
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        // ContentModule.forRoot(),
        // MaterialModule,
        BrowserAnimationsModule
      ],
    }),
  ]
} as Meta;


const Template: Story<MycardviewTestComponent> = (args) => ({
  props: {
    ...args
  }
})

export const FirstStory = Template.bind({});
FirstStory.args = {
  editable: true,
}
