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

const formsArray = [
  { name: 'Form List', lastUpdatedByFullName: 'Form List Component', lastUpdated: Date.now()},
  { name: 'My Name', lastUpdatedByFullName: 'My User Name', lastUpdated: '2020-02-14'},
  { name: 'Admin', lastUpdatedByFullName: 'Super Admin', lastUpdated: '2017-06-01'},
]

const Template: Story<FormComponent> = (args) => ({
  props: args
});

export const Default = Template.bind({});
Default.args = {
  forms: formsArray
}
