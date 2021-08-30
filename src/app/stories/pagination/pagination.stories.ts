import { ContentModule, UploadModule } from '@alfresco/adf-content-services';
import { AlfrescoApiService, AuthenticationService, CoreModule, MaterialModule, UploadService } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { AlfrescoApiServiceStub, AuthenticationServiceStub, UploadServiceStub } from '../document-list/mock/stub-services';
import { PaginationComponent } from './pagination.component';

export default {
  component: PaginationComponent,
  title: 'Core/Components/Pagination',
  decorators: [
    moduleMetadata({
      declarations: [PaginationComponent],
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
        UploadModule
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: UploadService, useClass: UploadServiceStub }
      ]
    })
  ],
  argTypes: {
    ngOnInit: { table: { disable: true } },
    ngOnDestroy: { table: { disable: true } },
    updatePagingation: { table: { disable: true } },
    onChange: { action: 'Pagination changed' },
    target: { control: { type: null } },
    pagination: { control: { type: null } }
  }
} as Meta;

const Template: Story<PaginationComponent> = (args) => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});

Default.args = {
  supportedPageSizes: [5, 10, 15, 20],
  pagination: null,
  target: null
};
