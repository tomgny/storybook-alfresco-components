import { ContentModule } from '@alfresco/adf-content-services';
import { AlfrescoApiService, AuthenticationService, CoreModule } from '@alfresco/adf-core';
import { ProcessModule, TaskListModule } from '@alfresco/adf-process-services';
import { TaskFormModule } from '@alfresco/adf-process-services-cloud';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../../../app.routes';
import { AppCommonModule } from '../../../../../components/common/common.module';
import { AlfrescoApiServiceStub, AuthenticationServiceStub } from '../../../mock/stub-services';
import { FormRendererComponent } from '../../form-renderer.component';
import { TaskFormComponent } from './task-form.component';

export default {
  component: TaskFormComponent,
  title: 'Core/Components/Form/Form renderer/Task form',
  decorators: [
    moduleMetadata({
      declarations: [TaskFormComponent],
      imports: [
        RouterModule.forRoot(APP_ROUTES, {
          useHash: true,
          enableTracing: false
        }),
        CoreModule.forRoot(),
        AppCommonModule,
        BrowserAnimationsModule,
        ContentModule.forRoot(),
        TranslateModule,
        TaskFormModule,
        TaskListModule,
        ProcessModule,
        // FormModule
      ],
      providers: [
        { provide: AlfrescoApiService, useClass: AlfrescoApiServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
      //   {
      //     provide: TRANSLATION_PROVIDER,
      //     multi: true,
      //     useValue: {
      //         name: 'adf-process-services',
      //         source: 'assets/adf-process-services'
      //     }
      // }
        // { provide: TaskListService, useClass: TaskListServiceStub},
        // { provide: FormService, useClass: FormServiceStub }
      ]
    })
  ],
  argTypes: {
    debugMode: { table: { disable: true } },
    parseForm: { table: { disable: true } },
    ngOnInit: { table: { disable: true } },
    showTestDescription: { table: { disable: true } },
    showFormVariables: { table: { disable: true } },
    testDescription: { table: { disable: true } }
  }
} as Meta;

const Template: Story<FormRendererComponent> = (args) => ({
  props: args
});

export const requiredNumberWidgets = Template.bind({});
requiredNumberWidgets.args = {
  taskId: 'taskWithNumbers',
};

export const requiredCheckboxAndVisibilityConditions = Template.bind({});
requiredCheckboxAndVisibilityConditions.args = {
  taskId: 'taskWithCheckboxes',
};
