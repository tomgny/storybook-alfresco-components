import { ContentModule } from '@alfresco/adf-content-services';
import { AlfrescoApiService, AuthenticationService, CoreModule, NodesApiService, SitesService } from '@alfresco/adf-core';
import { ProcessModule } from '@alfresco/adf-process-services';
import { SitesApi } from '@alfresco/js-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { SitesApiStub } from '../mock/stub-apis';
import { AlfrescoApiServiceStub, AuthenticationServiceStub, NodesApiServiceStub, SitesServiceStub } from '../mock/stub-services';
import { StartFormComponent } from './start-form.component';

export default {
  component: StartFormComponent,
  title: 'Core/Components/Form/Start form',
  decorators: [
    moduleMetadata({
      declarations: [StartFormComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule,
        ContentModule.forRoot(),
        ProcessModule
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: NodesApiService, useClass: NodesApiServiceStub },
        { provide: SitesApi, useClass: SitesApiStub },
        { provide: SitesService, useClass: SitesServiceStub }
      ]
    })
  ],
  argTypes: {
    onFormCompleted: { table: { disable: true } },
    processDefinitionId: { table: { disable: true } },
    processId: { table: { disable: true } },
    readOnlyForm: { table: { disable: true } }
  }
} as Meta;

const Template: Story<StartFormComponent> = (args) => ({
  props: args
});

export const StartForm = Template.bind({});
StartForm.args = {
  processDefinitionId: '999',
  processId: '999',
  showOutcomeButtons: true,
  showRefreshButton: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...StartForm.args,
  readOnlyForm: true
};

export const OutcomeButtonsHidden = Template.bind({});
OutcomeButtonsHidden.args = {
  ...StartForm.args,
  showOutcomeButtons: false
};

export const RefreshButtonHidden = Template.bind({});
RefreshButtonHidden.args = {
  ...StartForm.args,
  showRefreshButton: false
};
