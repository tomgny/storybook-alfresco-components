import { CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { FormComponent } from './form.component';

export default {
  component: FormComponent,
  title: 'Core/Components/Form',
  decorators: [
    moduleMetadata({
      declarations: [FormComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule
      ],
    })
  ],
} as Meta;

const Template: Story<FormComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});
Default.args = {

}
