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
import {
  checkboxVisibilityRefersToCheckbox,
  checkboxVisibilityRefersToFieldAndAnotherField,
  checkboxVisibilityRefersToFieldAndFormVariable,
  checkboxVisibilityRefersToFieldOrAnotherField,
  checkboxVisibilityRefersToFormVariable,
  checkboxVisibilityRefersToFormVariableAndAnotherFormVariable,
  checkboxVisibilityRefersToFormVariableAndField,
  displayTextVisibilityRefersToFieldOrAnotherField,
  displayTextVisibilityRefersToFormVariableAndField,
  dropdownVisibilityRefersToFormVariableAndAnotherFormVariable,
  dropdownVisibilityRefersToMultipleFields,
  fakeFormVisibility,
  formVariableValueVisibilityRefersToNoVisibilityConditions,
  textVisibilityRefersToFieldOrNotAnotherField
} from './visibility-condition-cases';

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
    showFormVariables: { table: { disable: true } },
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
  showTestDescription: true,
  showFormVariables: true
};

export const VisibleCheckBoxRefersToAnotherFieldValue = Template.bind({});
VisibleCheckBoxRefersToAnotherFieldValue.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see Checkbox widget when visibility condition refers to another field with specific value (showCheckbox)',
  formDefinition: fakeFormVisibility
};

export const VisibleCheckboxRefersToFormVariableAndField = Template.bind({});
VisibleCheckboxRefersToFormVariableAndField.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see Checkbox widget when visibility condition refers to a form variable and a field (showCheckbox)',
  formDefinition: checkboxVisibilityRefersToFormVariableAndField
};

export const VisibleCheckboxRefersToFieldAndFormVariable = Template.bind({});
VisibleCheckboxRefersToFieldAndFormVariable.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see Checkbox widget when visibility condition refers to a field and a form variable (showCheckbox)',
  formDefinition: checkboxVisibilityRefersToFieldAndFormVariable
};

export const VisibleCheckboxRefersToFieldAndAnotherField = Template.bind({});
VisibleCheckboxRefersToFieldAndAnotherField.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see Checkbox widget when visibility condition refers to a field and another field (showCheckbox)',
  formDefinition: checkboxVisibilityRefersToFieldAndAnotherField
};

export const VisibleCheckboxRefersToFormVariable = Template.bind({});
VisibleCheckboxRefersToFormVariable.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see Checkbox widget when visibility condition refers to a variable with specific value (showCheckbox)',
  formDefinition: checkboxVisibilityRefersToFormVariable
};

export const VisibleCheckboxRefersToFormVariableAndAnotherFormVariable = Template.bind({});
VisibleCheckboxRefersToFormVariableAndAnotherFormVariable.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see Checkbox widget when visibility condition refers to form variable and another form variable (showCheckbox)',
  formDefinition: checkboxVisibilityRefersToFormVariableAndAnotherFormVariable
};

export const VisibleCheckboxRefersToCheckbox = Template.bind({});
VisibleCheckboxRefersToCheckbox.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see Checkbox widget when visibility condition refers to form variable and another form variable (showCheckbox)',
  formDefinition: checkboxVisibilityRefersToCheckbox
};

export const VisibleCheckboxRefersToFieldOrAnotherField = Template.bind({});
VisibleCheckboxRefersToFieldOrAnotherField.args = {
  ...defaultValues.args,
  testDescription:
    'Should be able to see Checkbox widget when has multiple visibility conditions and next condition operators (show [1] or checkbox [2])',
  formDefinition: checkboxVisibilityRefersToFieldOrAnotherField
};

export const VisibleTextRefersToFieldOrNotAnotherField = Template.bind({});
VisibleTextRefersToFieldOrNotAnotherField.args = {
  ...defaultValues.args,
  testDescription:
    'Should be able to see text widget when has multiple visibility conditions and OR NOT next condition operators (show [1] or (NOT)checkbox [2])',
  formDefinition: textVisibilityRefersToFieldOrNotAnotherField
};

export const VisibleFormVariableRefersToNoVisibilityConditions = Template.bind({}); //NOT WORK
VisibleFormVariableRefersToNoVisibilityConditions.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see the value of a form variable in the Display Value Widget when no visibility conditions are added',
  formDefinition: formVariableValueVisibilityRefersToNoVisibilityConditions
};

export const VisibleTextRefersToFormVariableAndField = Template.bind({});
VisibleTextRefersToFormVariableAndField.args = {
  ...defaultValues.args,
  testDescription:
    'Should be able to see Display text widget when visibility condition refers to a form variable and a field ((field)cat and (variable)dog)',
  formDefinition: displayTextVisibilityRefersToFormVariableAndField
};

export const VisibleTextRefersToFieldOrAnotherField = Template.bind({});
VisibleTextRefersToFieldOrAnotherField.args = {
  ...defaultValues.args,
  testDescription:
    'Should be able to see Display text widget when has multiple visibility conditions and next condition operators (dog[1] or cat[2])',
  formDefinition: displayTextVisibilityRefersToFieldOrAnotherField
};

export const VisibleDropdownRefersToMultipleFields = Template.bind({});
VisibleDropdownRefersToMultipleFields.args = {
  ...defaultValues.args,
  testDescription:
    'Should be able to see dropdown widget when has multiple Visibility Conditions set on Form Fields (text[1] and 999[2] or field[3] == field[2])',
  formDefinition: dropdownVisibilityRefersToMultipleFields
};

export const VisibleDropdownRefersToFormVariableAndAnotherFormVariable = Template.bind({}); //NOT WORK
VisibleDropdownRefersToFormVariableAndAnotherFormVariable.args = {
  ...defaultValues.args,
  testDescription: 'Should be able to see dropdown widget when has multiple Visibility Conditions set on Form Variables',
  formDefinition: dropdownVisibilityRefersToFormVariableAndAnotherFormVariable
};
