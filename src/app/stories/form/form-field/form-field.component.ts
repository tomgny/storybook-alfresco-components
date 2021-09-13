
import { FormFieldModel, FormRenderingService } from '@alfresco/adf-core';
import { AttachFileWidgetComponent, AttachFolderWidgetComponent } from '@alfresco/adf-process-services';
import { AttachFileCloudWidgetComponent, DateCloudWidgetComponent, DropdownCloudWidgetComponent, GroupCloudWidgetComponent, PeopleCloudWidgetComponent } from '@alfresco/adf-process-services-cloud';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-form-field',
  templateUrl: './form-field.component.html'
})
export class FormFieldComponent {
  /**
   * Contains all the necessary data needed to determine what UI Widget to use when rendering the field in the form. You would typically
   * not create this data manually but instead create the form in APS and export it to get to all the FormFieldModel definitions.
   */
  @Input()
  field: FormFieldModel;

  @Input()
  limitWidth: boolean = false;
  constructor(private formRenderingService: FormRenderingService){
    this.formRenderingService.register({
      'select-folder': () => AttachFolderWidgetComponent,
      'process-upload': () => AttachFileWidgetComponent,
      'process-cloud-upload': () => AttachFileCloudWidgetComponent,
      'process-cloud-dropdown': () => DropdownCloudWidgetComponent,
      'process-cloud-date': () => DateCloudWidgetComponent,
      'process-cloud-people': () => PeopleCloudWidgetComponent,
      'process-cloud-functional-group': () => GroupCloudWidgetComponent
    }, true)
  }
}
