import { FormModel, FormRenderingService, FormService } from '@alfresco/adf-core';
import { AttachFolderWidgetComponent } from '@alfresco/adf-process-services';
import { Component, Input, OnInit } from '@angular/core';

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

  @Input()
  testDescription: string;

  @Input()
  showTestDescription: boolean = false;

  ngOnInit() {
    this.formRenderingService.register({
      'select-folder': () => AttachFolderWidgetComponent
    });
    this.formDefinition = this.parseForm(this.formDefinition);
  }

  parseForm(formRepresentationJSON: any): FormModel {
    if (formRepresentationJSON) {
      const form = new FormModel(formRepresentationJSON, undefined, false, this.formService, true);
      return form;
    }

    return null;
  }

  constructor(private formService: FormService, private formRenderingService: FormRenderingService) {}
}
