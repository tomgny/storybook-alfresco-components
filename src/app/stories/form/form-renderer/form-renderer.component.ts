import { FormModel } from '@alfresco/adf-core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss']
})
export class FormRendererComponent {

  /** Toggle debug options. */
  @Input()
  showDebugButton: boolean = false;

  @Input()
  formDefinition: FormModel;

  debugMode: boolean;

}
