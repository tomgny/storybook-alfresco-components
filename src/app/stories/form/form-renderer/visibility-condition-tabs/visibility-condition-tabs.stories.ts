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
import { FormRendererComponent } from '../form-renderer.component';
import {
  tabVisibilityRefersToMultipleFieldValues,
  tabVisibilityRefersToSpecificFieldValue,
  tabVisibilityRefersToSpecificFieldValueAndAnotherFieldValue,
  tabVisibilityRefersToSpecificFieldValueAndFormVariable,
  tabVisibilityRefersToSpecificFormVariable,
  tabVisibilityRefersToSpecificFormVariableAndAnotherFormVariable,
  tabVisibilityRefersToSpecificFormVariableAndFieldValue
} from './visibility-condition-tabs-cases';

export default {
  component: FormRendererComponent,
  title: 'Core/Components/Form/Form renderer/Visibility condition tabs',
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

export const visibleTabRefersToSpecificFieldValue = Template.bind({});
visibleTabRefersToSpecificFieldValue.args = {
  ...defaultValues.args,
  testDescription: "Should be able to see 'Second tab' when visibility condition refers to a field with specific value (showTab)",
  formDefinition: tabVisibilityRefersToSpecificFieldValue
};

export const visibleTabRefersToSpecificFormVariable = Template.bind({});
visibleTabRefersToSpecificFormVariable.args = {
  ...defaultValues.args,
  testDescription: "Should be able to see 'Second tab' when visibility condition refers to a variable with specific value (showTab)",
  formDefinition: tabVisibilityRefersToSpecificFormVariable
};

export const visibleTabRefersToSpecificFormVariableAndFieldValue = Template.bind({});
visibleTabRefersToSpecificFormVariableAndFieldValue.args = {
  ...defaultValues.args,
  testDescription:
    "Should be able to see 'Second tab' when visibility condition refers to a form variable and a field ((variable)showTab and (field)showTab)",
  formDefinition: tabVisibilityRefersToSpecificFormVariableAndFieldValue
};

export const visibleTabRefersToSpecificFieldValueAndAnotherFieldValue = Template.bind({});
visibleTabRefersToSpecificFieldValueAndAnotherFieldValue.args = {
  ...defaultValues.args,
  testDescription: "Should be able to see 'Second tab' when visibility condition refers to a field and another field (showTab and showTab)",
  formDefinition: tabVisibilityRefersToSpecificFieldValueAndAnotherFieldValue
};

export const visibleTabRefersToSpecificFieldValueAndFormVariable = Template.bind({});
visibleTabRefersToSpecificFieldValueAndFormVariable.args = {
  ...defaultValues.args,
  testDescription:
    "Should be able to see 'Second tab' when visibility condition refers to a field and form variable ((field)showTab and (variable)showTab)",
  formDefinition: tabVisibilityRefersToSpecificFieldValueAndFormVariable
};

export const visibleTabRefersToSpecificFormVariableAndAnotherFormVariable = Template.bind({});
visibleTabRefersToSpecificFormVariableAndAnotherFormVariable.args = {
  ...defaultValues.args,
  testDescription:
    "Should be able to see 'Second tab' when visibility condition refers to form variable and another form variable (showTab and showTab2)",
  formDefinition: tabVisibilityRefersToSpecificFormVariableAndAnotherFormVariable
};

export const visibleTabRefersToMultipleFieldValues = Template.bind({});
visibleTabRefersToMultipleFieldValues.args = {
  ...defaultValues.args,
  testDescription:
    "Should be able to see 'Second tab' when has multiple visibility conditions and next condition operators (showTab[1] and showTab2[2] and showTab3[3])",
  formDefinition: tabVisibilityRefersToMultipleFieldValues
};
