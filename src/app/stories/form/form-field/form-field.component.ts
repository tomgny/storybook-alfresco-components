
import { FormFieldModel, FormRenderingService } from '@alfresco/adf-core';
import { AttachFolderWidgetComponent } from '@alfresco/adf-process-services';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aca-form-field',
  templateUrl: './form-field.component.html'
})
export class FormFieldComponent implements OnInit{
  /**
   * Contains all the necessary data needed to determine what UI Widget to use when rendering the field in the form. You would typically
   * not create this data manually but instead create the form in APS and export it to get to all the FormFieldModel definitions.
   */
  @Input()
  field: FormFieldModel;

  ngOnInit(){
    this.formRenderingService.register({
      'select-folder': () => AttachFolderWidgetComponent
    })
    // DocumentLoaderNode
  }
  constructor(private formRenderingService: FormRenderingService){}
}
