import { AlfrescoApiService, AuthenticationService, CoreModule, FormService } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { FormListComponent } from './form-list.component';
import { AlfrescoApiServiceStub, AuthenticationServiceStub, FormServiceStub } from '../mock/stub-services';

export default {
  component: FormListComponent,
  title: 'Core/Components/Form/Form list',
  decorators: [
    moduleMetadata({
      declarations: [FormListComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: FormService, useClass: FormServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub }
      ]
    })
  ]
} as Meta;

const formsArray = [
  { name: 'Form List', lastUpdatedByFullName: 'Form List Component', lastUpdated: Date.now() },
  { name: 'My Name', lastUpdatedByFullName: 'My User Name', lastUpdated: '2020-02-14' },
  { name: 'Admin', lastUpdatedByFullName: 'Super Admin', lastUpdated: '2017-06-01' }
];

const Template: Story<FormListComponent> = (args) => ({
  props: args
});

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  forms: formsArray
};

export const Empty = Template.bind({});
Empty.args = {
  forms: []
};
