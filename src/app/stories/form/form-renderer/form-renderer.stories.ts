import { ContentModule } from '@alfresco/adf-content-services';
import { AlfrescoApiService, AuthenticationService, CoreModule, NodesApiService, SitesService } from '@alfresco/adf-core';
import { SitesApi } from '@alfresco/js-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../app.routes';
import { AppCommonModule } from '../../../components/common/common.module';
import { SitesApiStub } from '../mock/stub-apis';
import { AlfrescoApiServiceStub, AuthenticationServiceStub, NodesApiServiceStub, SitesServiceStub } from '../mock/stub-services';
import { FormRendererComponent } from './form-renderer.component';
import { processServiceCloudForm, processServiceForm } from './form-renderer.models';

export default {
  component: FormRendererComponent,
  title: 'Core/Components/Form/Form renderer',
  decorators: [
    moduleMetadata({
      declarations: [FormRendererComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule,
        ContentModule.forRoot()
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: NodesApiService, useClass: NodesApiServiceStub },
        { provide: SitesApi, useClass: SitesApiStub },
        { provide: SitesService, useClass: SitesServiceStub }
      ]
    })
  ]
} as Meta;

const Template: Story<FormRendererComponent> = (args) => ({
  props: args
});

export const ProcessServices = Template.bind({});
ProcessServices.args = {
  showDebugButton: true,
  formDefinition: processServiceForm.formRepresentation
};

export const ProcessServicesCloud = Template.bind({});
ProcessServicesCloud.args = {
  showDebugButton: true,
  formDefinition: processServiceCloudForm.formRepresentation
};
