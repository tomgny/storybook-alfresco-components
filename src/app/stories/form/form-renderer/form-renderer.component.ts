import { FormFieldModel, FormModel, FormRenderingService, FormService } from '@alfresco/adf-core';
import { AttachFolderWidgetComponent } from '@alfresco/adf-process-services';
import { Component, Input, OnInit } from '@angular/core';
import {  selectFolderField } from '../form-field/form-field.models';
import { easyForm } from './form-renderer.models';



@Component({
  selector: 'aca-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss']
})
export class FormRendererComponent implements OnInit {
  /** Toggle debug options. */
  @Input()
  showDebugButton: boolean = false;

  @Input()
  formDefinition: FormModel;
  debugMode: boolean;

  tmpFormDefinition: FormModel;

  ngOnInit(){
    this.formRendererSerivce.register({
      'select-folder': () => AttachFolderWidgetComponent,
    })
    this.tmpFormDefinition = this.formService.parseForm(easyForm);
    const booleanField = new FormFieldModel(this.tmpFormDefinition, { id: 'Label5', name: 'Checkbox', type: 'boolean' });
    booleanField;

    this.tmpFormDefinition.fields = this.formService.parseForm(easyForm).getFormFields();
    this.tmpFormDefinition.fields = [{fieldType: 'text', id: 'test', name: 'test', type: 'text', tab: 'text', form: undefined, json: undefined, field: selectFolderField}]
    console.log(this.tmpFormDefinition.fields);

  }

  constructor(private formService: FormService, private formRendererSerivce: FormRenderingService){}
}
