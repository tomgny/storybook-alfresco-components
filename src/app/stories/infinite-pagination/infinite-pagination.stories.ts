import { ContentModule } from '@alfresco/adf-content-services';
import { AlfrescoApiService, AuthenticationService, CoreModule } from '@alfresco/adf-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../app.routes';
import { AppCommonModule } from '../../components/common/common.module';
import { AlfrescoApiServiceStub, AuthenticationServiceStub } from '../document-list/mock/stub-services';
import { InfinitePaginationComponent } from './infinite-pagination.component';

export default {
  component: InfinitePaginationComponent,
  title: 'Core/Components/Infinite Pagination',
  decorators: [
    moduleMetadata({
      declarations: [InfinitePaginationComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false // enable for debug only
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        ContentModule.forRoot(),
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
      ]
    })
  ],
  argTypes: {
    ngOnInit: { table: { disable: true } },
    ngOnDestroy: { table: { disable: true } },
    updatePagingation: { table: { disable: true } },
    target: { control: { type: null } },
  }
} as Meta;

const Template: Story<InfinitePaginationComponent> = (args) => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});

Default.args = {
  pageSize: 5,
  target: null,
};


