import { AuthenticationService, CoreModule, DiscoveryApiService } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { AuthenticationServiceStub } from '../user-info/mock/stub-authentication-service';
import { AboutProductVersionComponent } from './about-product-version.component';
import { DiscoveryApiStubService } from './mock/discovery-api-stub.service';

export default {
  component: AboutProductVersionComponent,
  title: 'Core/Components/About/Product Version',
  decorators: [
    moduleMetadata({
      declarations: [AboutProductVersionComponent],
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
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: DiscoveryApiService, useClass: DiscoveryApiStubService }
      ]
    })
  ],
  argTypes: {
    ngOnInit: { table: { disable: true } },
    provider: { table: { disable: true } }
  }
} as Meta;

const Template: Story<AboutProductVersionComponent> = (args) => ({
  props: args
});

export const ECM = Template.bind({});

ECM.args = {
  provider: 'ecm'
};

export const BPM = Template.bind({});

BPM.args = {
  provider: 'bpm'
};

export const Both = Template.bind({});

Both.args = {
  provider: 'both'
};
