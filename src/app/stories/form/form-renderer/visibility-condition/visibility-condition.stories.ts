import { ContentModule } from '@alfresco/adf-content-services';
import { AlfrescoApiService, AuthenticationService, CoreModule, NodesApiService, SitesService } from '@alfresco/adf-core';
import { SitesApi } from '@alfresco/js-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_ROUTES } from '../../../../app.routes';
import { AppCommonModule } from '../../../../components/common/common.module';
import { SitesApiStub } from '../../mock/stub-apis';
import { AlfrescoApiServiceStub, AuthenticationServiceStub, NodesApiServiceStub, SitesServiceStub } from '../../mock/stub-services';
import { FormRendererComponent } from '.././form-renderer.component';
import { checkboxVisibilityRefersToFieldAndAnotherField, checkboxVisibilityRefersToFieldAndFormVariable, checkboxVisibilityRefersToFormVariable, checkboxVisibilityRefersToFormVariableAndAnotherFormVariable, checkboxVisibilityRefersToFormVariableAndField, fakeFormVisibility } from './visibility-condition-cases';

export default {
  component: FormRendererComponent,
  title: 'Core/Components/Form/Form renderer/Visibility condition',
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
  ],
  argTypes: {
    debugMode: { table: { disable: true } },
    parseForm: { table: { disable: true } },
    showTestDescription: { table: { disable: true } },
    testDescription: { table: { disable: true } },
    ngOnInit: { table: { disable: true } }
  }
} as Meta;

const Template: Story<FormRendererComponent> = (args) => ({
  props: args
});

const defaultValues = Template.bind({});
defaultValues.args = {
  showDebugButton: false,
  showTestDescription: true
};

export const visibleCheckBoxRefersToAnotherFieldValue = Template.bind({});
visibleCheckBoxRefersToAnotherFieldValue.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see Checkbox widget when visibility condition refers to another field with specific value (showCheckbox)',
  formDefinition: fakeFormVisibility
};

export const visibleCheckboxRefersToFormVariableAndField = Template.bind({});
visibleCheckboxRefersToFormVariableAndField.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see Checkbox widget when visibility condition refers to a form variable and a field (showCheckbox)',
  formDefinition: checkboxVisibilityRefersToFormVariableAndField
};

export const visibleCheckboxRefersToFieldAndFormVariable = Template.bind({});
visibleCheckboxRefersToFieldAndFormVariable.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see Checkbox widget when visibility condition refers to a field and a form variable (showCheckbox)',
  formDefinition: checkboxVisibilityRefersToFieldAndFormVariable
};

export const visibleCheckboxRefersToFieldAndAnotherField = Template.bind({});
visibleCheckboxRefersToFieldAndAnotherField.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see Checkbox widget when visibility condition refers to a field and another field (showCheckbox)',
  formDefinition: checkboxVisibilityRefersToFieldAndAnotherField
};

export const visibleCheckboxRefersToFormVariable = Template.bind({});
visibleCheckboxRefersToFormVariable.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see Checkbox widget when visibility condition refers to a variable with specific value (showCheckbox)',
  formDefinition: checkboxVisibilityRefersToFormVariable
};

export const visibleCheckboxRefersToFormVariableAndAnotherFormVariable = Template.bind({});
visibleCheckboxRefersToFormVariableAndAnotherFormVariable.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see Checkbox widget when visibility condition refers to form variable and another form variable (showCheckbox)',
  formDefinition: checkboxVisibilityRefersToFormVariableAndAnotherFormVariable
};
